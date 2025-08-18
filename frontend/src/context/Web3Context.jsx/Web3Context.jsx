import { createContext, useEffect, useState } from "react";

export const Web3Context = createContext()
const { ethereum } = window

export const ContextProvider = ({children}) => {
  const [isWallet, setIsWallet] = useState(false)
  const [connectedAccount, setConnectedAccount] = useState('')

  const checkIfWalletIsConnected = async () => {
    try {
        
        // if(!ethereum) return alert("Please install metamask")
        
        const accounts = await ethereum.request({method: 'eth_accounts'})
        //   console.log(accounts)
        if(accounts.length){
            setConnectedAccount(accounts[0])
        }
    } catch (error) {
        console.error(error)
    }
  }


  const connectWallet = async () => {
    try{
        if(!ethereum) return alert("Please install Metamask")
        
        setIsWallet(true)
    } catch (error) {
        console.error(error)
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected()
  })

  return(
  <Web3Context.Provider value={{connectWallet, isWallet, connectedAccount}}>
      {children}
  </Web3Context.Provider>
  )
}