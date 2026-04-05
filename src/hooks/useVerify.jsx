import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import authAxiosInstance from '../api/authAxiosInstance';
import { useQueryClient } from '@tanstack/react-query';

export default function useVerify() {
    const Location = useLocation();
    const navigate = useNavigate();
    const email = Location.state?.email;
      const queryClient = useQueryClient();


    const [code, setCode] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleVerify = async () => {
        setLoading(true);
        try {
            const response = await authAxiosInstance.post(`/auth/Account/SendCode`, { email: email, code: code });
            if (response.status === 200) {
                await queryClient.resetQueries();
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
    return {handleVerify,email,code,setCode,isLoading}
}
