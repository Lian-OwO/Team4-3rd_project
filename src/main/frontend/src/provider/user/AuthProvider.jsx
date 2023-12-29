import React, {useState} from 'react';
import AuthContext from "../../context/user/AuthContext";


const AuthProvider = ({children}) => {
    const [token, setToken] = useState('');

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;