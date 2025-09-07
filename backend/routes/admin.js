const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcrypt');

const supabaseUrl = process.env.SUPABASE_URL || 'https://casfjxqzswrffrkidkqj.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// FAQ Management APIs
router.post('/add-faq', async (req, res) => {
    try {
        const { question, answer } = req.body;
        
        if (!question || !answer) {
            return res.status(400).json({ 
                error: "Question and answer are required" 
            });
        }

        const { data: newFaq, error } = await supabase
            .from('faqs')
            .insert([{
                question: question.trim(),
                answer: answer.trim()
            }])
            .select('*')
            .single();

        if (error) {
            console.error('Add FAQ error:', error);
            return res.status(500).json({ 
                error: 'Failed to add FAQ' 
            });
        }

        res.status(201).json({ 
            message: "FAQ added successfully", 
            faq: newFaq 
        });
    } catch (error) {
        console.error('Add FAQ error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

router.put('/edit-faq/:id', async (req, res) => {
    try {
        const faqId = req.params.id;
        const { question, answer } = req.body;
        
        if (!question || !answer) {
            return res.status(400).json({ 
                error: "Question and answer are required" 
            });
        }

        const { data: updatedFaq, error } = await supabase
            .from('faqs')
            .update({
                question: question.trim(),
                answer: answer.trim(),
                updated_at: new Date().toISOString()
            })
            .eq('id', faqId)
            .select('*')
            .single();

        if (error) {
            return res.status(404).json({ 
                error: "FAQ not found" 
            });
        }

        res.json({ 
            message: "FAQ updated successfully", 
            faq: updatedFaq 
        });
    } catch (error) {
        console.error('Edit FAQ error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

router.delete('/delete-faq/:id', async (req, res) => {
    try {
        const faqId = req.params.id;
        
        const { data: deletedFaq, error } = await supabase
            .from('faqs')
            .delete()
            .eq('id', faqId)
            .select('*')
            .single();

        if (error) {
            return res.status(404).json({ 
                error: "FAQ not found" 
            });
        }

        res.json({ 
            message: "FAQ deleted successfully", 
            deletedFaq: deletedFaq 
        });
    } catch (error) {
        console.error('Delete FAQ error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
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
            console.error('Fetch FAQs error:', error);
            return res.status(500).json({ 
                error: 'Failed to fetch FAQs' 
            });
        }

        res.json(faqs);
    } catch (error) {
        console.error('Get FAQs error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

// Mess Management APIs
router.post('/add-mess', async (req, res) => {
    try {
        const { messName, messWarden, food, contactInfo } = req.body;
        
        if (!messName || !messWarden || !food || !contactInfo) {
            return res.status(400).json({ 
                error: "All fields (messName, messWarden, food, contactInfo) are required" 
            });
        }

        const { data: newMess, error } = await supabase
            .from('mess_halls')
            .insert([{
                mess_name: messName.trim(),
                mess_warden: messWarden.trim(),
                food_items: food.trim(),
                contact_info: contactInfo.trim()
            }])
            .select('*')
            .single();

        if (error) {
            console.error('Add mess error:', error);
            return res.status(500).json({ 
                error: 'Failed to add mess' 
            });
        }

        res.status(201).json({ 
            message: "Mess added successfully", 
            mess: newMess 
        });
    } catch (error) {
        console.error('Add mess error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

router.put('/edit-mess/:id', async (req, res) => {
    try {
        const messId = req.params.id;
        const { messName, messWarden, food, contactInfo } = req.body;
        
        if (!messName || !messWarden || !food || !contactInfo) {
            return res.status(400).json({ 
                error: "All fields are required" 
            });
        }

        const { data: updatedMess, error } = await supabase
            .from('mess_halls')
            .update({
                mess_name: messName.trim(),
                mess_warden: messWarden.trim(),
                food_items: food.trim(),
                contact_info: contactInfo.trim(),
                updated_at: new Date().toISOString()
            })
            .eq('id', messId)
            .select('*')
            .single();

        if (error) {
            return res.status(404).json({ 
                error: "Mess not found" 
            });
        }

        res.json({ 
            message: "Mess updated successfully", 
            mess: updatedMess 
        });
    } catch (error) {
        console.error('Edit mess error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

router.delete('/delete-mess/:id', async (req, res) => {
    try {
        const messId = req.params.id;
        
        const { data: deletedMess, error } = await supabase
            .from('mess_halls')
            .delete()
            .eq('id', messId)
            .select('*')
            .single();

        if (error) {
            return res.status(404).json({ 
                error: "Mess not found" 
            });
        }

        res.json({ 
            message: "Mess deleted successfully", 
            deletedMess: deletedMess 
        });
    } catch (error) {
        console.error('Delete mess error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
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
            console.error('Fetch mess halls error:', error);
            return res.status(500).json({ 
                error: 'Failed to fetch mess halls' 
            });
        }

        res.json(messHalls);
    } catch (error) {
        console.error('Get mess halls error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

// Hostel Forms Management APIs
router.post('/add-hostel-form', async (req, res) => {
    try {
        const { userId, rollNumber, branch, year, pdfLink } = req.body;
        
        if (!userId || !rollNumber || !branch || !year) {
            return res.status(400).json({ 
                error: "User ID, roll number, branch, and year are required" 
            });
        }

        const { data: newForm, error } = await supabase
            .from('hostel_forms')
            .insert([{
                user_id: userId,
                roll_number: rollNumber.trim(),
                branch: branch.trim(),
                year: year.trim(),
                pdf_link: pdfLink ? pdfLink.trim() : null,
                status: 'pending'
            }])
            .select('*')
            .single();

        if (error) {
            console.error('Add hostel form error:', error);
            return res.status(500).json({ 
                error: 'Failed to add hostel form' 
            });
        }

        res.status(201).json({ 
            message: "Hostel form added successfully", 
            form: newForm 
        });
    } catch (error) {
        console.error('Add hostel form error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

router.put('/edit-hostel-form/:id', async (req, res) => {
    try {
        const formId = req.params.id;
        const { rollNumber, branch, year, pdfLink, status } = req.body;
        
        const { data: updatedForm, error } = await supabase
            .from('hostel_forms')
            .update({
                roll_number: rollNumber?.trim(),
                branch: branch?.trim(),
                year: year?.trim(),
                pdf_link: pdfLink?.trim(),
                status: status?.trim(),
                updated_at: new Date().toISOString()
            })
            .eq('id', formId)
            .select('*')
            .single();

        if (error) {
            return res.status(404).json({ 
                error: "Hostel form not found" 
            });
        }

        res.json({ 
            message: "Hostel form updated successfully", 
            form: updatedForm 
        });
    } catch (error) {
        console.error('Edit hostel form error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

router.delete('/delete-hostel-form/:id', async (req, res) => {
    try {
        const formId = req.params.id;
        
        const { data: deletedForm, error } = await supabase
            .from('hostel_forms')
            .delete()
            .eq('id', formId)
            .select('*')
            .single();

        if (error) {
            return res.status(404).json({ 
                error: "Hostel form not found" 
            });
        }

        res.json({ 
            message: "Hostel form deleted successfully", 
            deletedForm: deletedForm 
        });
    } catch (error) {
        console.error('Delete hostel form error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

router.get('/hostel-forms', async (req, res) => {
    try {
        const { data: forms, error } = await supabase
            .from('hostel_forms')
            .select(`
                *,
                users!hostel_forms_user_id_fkey(first_name, last_name, email)
            `)
            .order('submitted_at', { ascending: false });

        if (error) {
            console.error('Fetch hostel forms error:', error);
            return res.status(500).json({ 
                error: 'Failed to fetch hostel forms' 
            });
        }

        res.json(forms);
    } catch (error) {
        console.error('Get hostel forms error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

// Student Queries Management APIs
router.get('/previous-queries', async (req, res) => {
    try {
        const { data: queries, error } = await supabase
        .from('student_queries')
        .select('*')

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

router.post('/answer-query/:userId', async (req, res) => {
    try {
        const { id, answer, answeredBy } = req.body;
        const userId = req.params.userId;

        if (!id || !answer) {
            return res.status(400).json({ 
                error: "Query ID and answer are required" 
            });
        }
        console.log("Answered by:", answeredBy);
        const { data: updatedQuery, error } = await supabase
            .from('student_queries')
            .update({
                answer: answer.trim(),
                status: 'answered',
                date_answered: new Date().toISOString(),
                answered_by: userId || null,
                updated_at: new Date().toISOString()
            })
            .eq('id', id)
            .select('*')
            .single();

        if (error) {
            console.log(error)
            return res.status(404).json({ 
                error: "Query not found" 
            });
        }

        res.json({ 
            message: "Query answered successfully", 
            query: updatedQuery 
        });
    } catch (error) {
        console.error('Answer query error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

router.delete('/delete-query/:id', async (req, res) => {
    try {
        const queryId = req.params.id;
        
        const { data: deletedQuery, error } = await supabase
            .from('student_queries')
            .delete()
            .eq('id', queryId)
            .select('*')
            .single();

        if (error) {
            return res.status(404).json({ 
                error: "Query not found" 
            });
        }

        res.json({ 
            message: "Query deleted successfully", 
            deletedQuery: deletedQuery 
        });
    } catch (error) {
        console.error('Delete query error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
});

// Admin Authentication APIs
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
            .eq('role', 'admin')
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
        const { email, password, firstName, lastName, department } = req.body;
        
        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ 
                error: "Email, password, firstName, and lastName are required" 
            });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const { data: newUser, error } = await supabase
            .from('users')
            .insert([{
                email: email.toLowerCase().trim(),
                password_hash: hashedPassword,
                role: 'admin',
                first_name: firstName.trim(),
                last_name: lastName.trim(),
                department: department?.trim()
            }])
            .select('*')
            .single();

        if (error) {
            console.error('Admin signup error:', error);
            return res.status(500).json({ 
                error: 'Failed to create admin account' 
            });
        }

        const { password_hash, ...userWithoutPassword } = newUser;
        
        res.status(201).json({ 
            message: "Admin signup successful", 
            user: userWithoutPassword
        });
    } catch (error) {
        console.error('Admin signup error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
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
            .eq('role', 'admin')
            .single();

        if (error || !user) {
            return res.status(404).json({ 
                error: "Admin account not found" 
            });
        }

        // Transform data to match your existing structure
        const adminAccount = {
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

        res.json(adminAccount);
    } catch (error) {
        console.error('Account fetch error:', error);
        res.status(500).json({ 
            error: 'Failed to fetch account information' 
        });
    }
});

router.put('/updatePassword/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const {
            currentPassword,
            newPassword
        } = req.body;

        const { data: user, error: userError } = await supabase
            .from('users')
            .select('password')
            .eq('id', userId)
            .eq('role', 'admin')
            .single();
            
        if (userError || !user) {
            return res.status(404).json({ 
                error: "Admin not found" 
            });
        }

        // Verify current password
        const isPasswordValid = currentPassword === user.password;
        if (!isPasswordValid) {
            return res.status(401).json({ 
                error: "Current password is incorrect" 
            });
        }

        // Update password
        const { error: updateError } = await supabase
            .from('users')
            .update({ password: newPassword })
            .eq('id', userId)
            .eq('role', 'admin');

        if (updateError) {
            console.error('Update password error:', updateError);
            return res.status(500).json({ 
                error: 'Failed to update password' 
            });
        }

        res.json({ 
            message: "Password updated successfully" 
        });

    } catch (error) {
        console.error('Password update error:', error);
        res.status(500).json({ 
            error: 'Failed to update password' 
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
            .eq('role', 'admin')
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

module.exports = router;