import React,{createContext,useEffect,useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Services/firebase';
export const AuthContext = createContext();




const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);



    useEffect(() => {
      onAuthStateChanged(auth,user=>{
          setUser(user);
      });
    
     
    }, [])

 



    return(
        <AuthContext.Provider value={{user}} >
        {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;