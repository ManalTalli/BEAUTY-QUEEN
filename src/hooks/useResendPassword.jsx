import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function useResendPassword() {
   const Location = useLocation();
    const navigate = useNavigate();
    const email = Location.state?.email;

    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleResendPassword = async () => {
        setLoading(true);
        try {
            const response = await axios.patch(`https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword`, { email: email, code: code,newPassword:newPassword });
            if (response.status === 200) {
                navigate('/');
            }
        }
        catch {
            setServerErrors([error.response.data.message]);
        }
        finally {
            setLoading(false);
        }
    }
    return {handleResendPassword,email,code,setCode,isLoading,newPassword, setNewPassword}

}
