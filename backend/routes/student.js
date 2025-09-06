const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcrypt');

const supabaseUrl = process.env.SUPABASE_URL || 'https://casfjxqzswrffrkidkqj.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ 
                error: "Email and password are required" 
            });
        }
        const { data: users, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email.toLowerCase().trim())
            .eq('role', 'student')
            .single();

        if (error || !users) {
            return res.status(404).json({ 
                error: "No users found with this email" 
            });
        }
        // Compare hashed password
        const isPasswordValid = password === users.password;
        if (!isPasswordValid) {
            return res.status(401).json({ 
                error: "Invalid credentials" 
            });
        }
    
        const { password: _, ...userWithoutPassword } = users;
        res.status(201).json({ 
            message: "Login successful", 
            user: userWithoutPassword,
            userId: users.id
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { 
            email, 
            password, 
            firstName, 
            lastName,
            middleName,
            rollNumber,
            mobileNumber,
            category,
            maritalStatus,
            year,
            state,
            city,
            address,
            branch
        } = req.body;
        
        // Validate required fields
        if (!email || !password || !firstName || !lastName || !rollNumber) {
            return res.status(400).json({ 
                error: "Email, password, firstName, lastName, and rollNumber are required" 
            });
        }

        // Check if user already exists
        const { data: existingUser } = await supabase
            .from('users')
            .select('email, roll_number')
            .or(`email.eq.${email.toLowerCase().trim()},roll_number.eq.${rollNumber.trim()}`)
            .single();

        if (existingUser) {
            return res.status(400).json({ 
                error: "User with this email or roll number already exists" 
            });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert new user
        const { data: newUser, error } = await supabase
            .from('users')
            .insert([
                {
                    email: email.toLowerCase().trim(),
                    password: hashedPassword,
                    role: 'student',
                    first_name: firstName.trim(),
                    last_name: lastName.trim(),
                    middle_name: middleName ? middleName.trim() : null,
                    roll_number: rollNumber.trim(),
                    mobile_number: mobileNumber ? mobileNumber.trim() : null,
                    category: category ? category.trim() : null,
                    marital_status: maritalStatus ? maritalStatus.trim() : null,
                    year: year ? year.trim() : null,
                    state: state ? state.trim() : null,
                    city: city ? city.trim() : null,
                    address: address ? address.trim() : null,
                    branch: branch ? branch.trim() : null
                }
            ])
            .select('*')
            .single();

        if (error) {
            console.error('Signup error:', error);
            return res.status(500).json({ 
                error: 'Failed to create user account' 
            });
        }

        // Return success response without password
        const { password_hash, ...userWithoutPassword } = newUser;
        
        res.status(201).json({ 
            message: "Signup successful", 
            user: userWithoutPassword
        });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ 
            error: 'Internal server error during signup' 
        });
    }
});

router.get('/faqs', async (req, res) => {
    try {
        const { data: faqs, error } = await supabase
            .from('faqs')
            .select('*')
            .order('created_at', { ascending: true });

        if (error) {
            console.error('Supabase error:', error);
            return res.status(500).json({ 
                error: 'Failed to fetch FAQs from database' 
            });
        }

        // Transform data to match your existing structure if needed
        const transformedFaqs = faqs.map(faq => ({
            id: faq.id,
            question: faq.question,
            answer: faq.answer,
            createdAt: faq.created_at,
            updatedAt: faq.updated_at
        }));

        res.json(transformedFaqs);
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ 
            error: 'Database connection failed' 
        });
    }
});

router.get('/food-mess', async (req, res) => {
    try {
        const { data: messHalls, error } = await supabase
            .from('mess_halls')
            .select('*')
            .order('created_at', { ascending: true });

        if (error) {
            console.error('Supabase error:', error);
            return res.status(500).json({ 
                error: 'Failed to fetch mess halls from database' 
            });
        }

        // Transform data to match your existing structure
        const transformedMessData = messHalls.map(mess => ({
            id: mess.id,
            messName: mess.mess_name,
            messWarden: mess.mess_warden,
            food: mess.food_items,
            contactInfo: mess.contact_info,
            createdAt: mess.created_at,
            updatedAt: mess.updated_at
        }));

        res.json(transformedMessData);
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ 
            error: 'Database connection failed' 
        });
    }
});

router.get('/account/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        
        if (!userId) {
            return res.status(400).json({ 
                error: "User ID is required" 
            });
        }

        const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .eq('role', 'student')
            .single();

        if (error || !user) {
            return res.status(404).json({ 
                error: "Student account not found" 
            });
        }

        // Transform data to match your existing structure
        const studentAccount = {
            id: user.id,
            rollNo: user.roll_number,
            firstName: user.first_name,
            middleName: user.middle_name,
            lastName: user.last_name,
            mobileNumber: user.mobile_number,
            category: user.category,
            maritalStatus: user.marital_status,
            year: user.year,
            emailId: user.email,
            state: user.state,
            city: user.city,
            address: user.address,
            branch: user.branch,
            createdAt: user.created_at,
            updatedAt: user.updated_at
        };

        res.json(studentAccount);
    } catch (error) {
        console.error('Account fetch error:', error);
        res.status(500).json({ 
            error: 'Failed to fetch account information' 
        });
    }
});

router.put('/account/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const {
            firstName,
            lastName,
            middleName,
            mobileNumber,
            category,
            maritalStatus,
            state,
            city,
            address
        } = req.body;

        const { data: updatedUser, error } = await supabase
            .from('users')
            .update({
                first_name: firstName?.trim(),
                last_name: lastName?.trim(),
                middle_name: middleName?.trim(),
                mobile_number: mobileNumber?.trim(),
                category: category?.trim(),
                marital_status: maritalStatus?.trim(),
                state: state?.trim(),
                city: city?.trim(),
                address: address?.trim(),
                updated_at: new Date().toISOString()
            })
            .eq('id', userId)
            .eq('role', 'student')
            .select('*')
            .single();

        if (error) {
            console.error('Update error:', error);
            return res.status(500).json({ 
                error: 'Failed to update account' 
            });
        }

        const { password_hash, ...userWithoutPassword } = updatedUser;
        
        res.json({ 
            message: "Account updated successfully", 
            user: userWithoutPassword
        });

    } catch (error) {
        console.error('Account update error:', error);
        res.status(500).json({ 
            error: 'Failed to update account information' 
        });
    }
});

router.post('/add-query', async (req, res) => {
    try {
        const { userId, intendedFor, question, status } = req.body;
        if (!intendedFor || !question) {
            return res.status(400).json({ 
                error: "User ID and question are required" 
            });
        }
       
        // Verify the user exists and is a student
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('id, role')
            .eq('id', userId)
            .eq('role', 'student')
            .single();

        if (userError || !user) {
            return res.status(404).json({ 
                error: "Student not found" 
            });
        }

        // Insert new query
        const { data: newQuery, error } = await supabase
            .from('student_queries')
            .insert([
                {
                    student_id: userId,
                    question: question.trim(),
                    intended_for: intendedFor ? intendedFor.trim() : null,
                    status: status || 'pending',
                    answer: 'NOT YET ANSWERED'
                }
            ])
            .select('*')
            .single();

        if (error) {
            console.error('Query submission error:', error);
            return res.status(500).json({ 
                error: 'Failed to submit query' 
            });
        }

        // Transform response to match expected format
        const transformedQuery = {
            id: newQuery.id,
            userId: newQuery.user_id,
            question: newQuery.question,
            answer: newQuery.answer,
            intendedFor: newQuery.intended_for,
            status: newQuery.status,
            dateSubmitted: newQuery.date_submitted,
            createdAt: newQuery.created_at
        };

        res.status(201).json({ 
            message: "Query submitted successfully", 
            query: transformedQuery
        });

    } catch (error) {
        console.error('Add query error:', error);
        res.status(500).json({ 
            error: 'Internal server error while submitting query' 
        });
    }
});

router.get('/queries/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        
        const { data: queries, error } = await supabase
            .from('student_queries')
            .select('*')
            .eq('user_id', userId)
            .order('date_submitted', { ascending: false });

        if (error) {
            console.error('Fetch queries error:', error);
            return res.status(500).json({ 
                error: 'Failed to fetch queries' 
            });
        }

        const transformedQueries = queries.map(query => ({
            id: query.id,
            question: query.question,
            answer: query.answer,
            intendedFor: query.intended_for,
            status: query.status,
            dateSubmitted: query.date_submitted,
            dateAnswered: query.date_answered
        }));

        res.json(transformedQueries);

    } catch (error) {
        console.error('Get queries error:', error);
        res.status(500).json({ 
            error: 'Internal server error while fetching queries' 
        });
    }
});

router.get('/previous-queries/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const { data: queries, error } = await supabase
        .from('student_queries')
        .select('*')
        .eq('student_id', userId)

        if (error) {
            console.error('Fetch previous queries error:', error);
            return res.status(500).json({ 
                error: 'Failed to fetch previous queries' 
            });
        }

        const transformedQueries = queries.map(query => ({
            id: query.id,
            question: query.question,
            answer: query.answer,
            intendedFor: query.intended_for,
            status: query.status,
            dateSubmitted: query.date_submitted,
            dateAnswered: query.date_answered,
            student: query.users ? {
                rollNumber: query.users.roll_number,
                name: `${query.users.first_name} ${query.users.last_name}`
            } : null
        }));

        res.json(transformedQueries);

    } catch (error) {
        console.error('Get previous queries error:', error);
        res.status(500).json({ 
            error: 'Internal server error while fetching previous queries' 
        });
    }
});

//PENDING TO IMPL
router.post('/add-form', async (req, res) => {
    try {
        const { userId, rollNumber, branch, year, pdfLink } = req.body;
        
        if (!userId || !rollNumber || !branch || !year) {
            return res.status(400).json({ 
                error: "User ID, roll number, branch, and year are required" 
            });
        }

        // Verify the user exists and is a student
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('id, role, roll_number, branch, year')
            .eq('id', userId)
            .eq('role', 'student')
            .single();

        if (userError || !user) {
            return res.status(404).json({ 
                error: "Student not found" 
            });
        }

        // Check if roll number matches the user's roll number
        if (user.roll_number !== rollNumber) {
            return res.status(400).json({ 
                error: "Roll number does not match user's roll number" 
            });
        }

        // Check if hostel form already exists for this user
        const { data: existingForm } = await supabase
            .from('hostel_forms')
            .select('id')
            .eq('user_id', userId)
            .single();

        if (existingForm) {
            return res.status(400).json({ 
                error: "Hostel form already submitted for this student" 
            });
        }

        // Insert new hostel form
        const { data: newForm, error } = await supabase
            .from('hostel_forms')
            .insert([
                {
                    user_id: userId,
                    roll_number: rollNumber.trim(),
                    branch: branch.trim(),
                    year: year.trim(),
                    pdf_link: pdfLink ? pdfLink.trim() : null,
                    status: 'pending'
                }
            ])
            .select('*')
            .single();

        if (error) {
            console.error('Form submission error:', error);
            return res.status(500).json({ 
                error: 'Failed to submit hostel form' 
            });
        }

        // Transform response to match expected format
        const transformedForm = {
            id: newForm.id,
            userId: newForm.user_id,
            rollNumber: newForm.roll_number,
            branch: newForm.branch,
            year: newForm.year,
            pdfLink: newForm.pdf_link,
            status: newForm.status,
            submittedAt: newForm.submitted_at,
            updatedAt: newForm.updated_at
        };

        res.status(201).json({ 
            message: "Hostel form submitted successfully", 
            form: transformedForm
        });

    } catch (error) {
        console.error('Add form error:', error);
        res.status(500).json({ 
            error: 'Internal server error while submitting form' 
        });
    }
});

module.exports = router;