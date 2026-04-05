import React from 'react'
import { useLocation } from 'react-router-dom'
import useVerify from '../../hooks/useVerify'
import Loader from '../../ui/Loader';

export default function Verify() {
    const {handleVerify,code,setCode,email,isLoading} =useVerify();
  return (
    <div>
      <h2>أدخل الكود المرسل إلى:</h2>
            <p><strong>{email}</strong></p>
            
            <input 
                type="text" 
                placeholder="Enter Code" 
                value={code}
                onChange={(e) => setCode(e.target.value)} // تحديث الكود عند الكتابة
            />
            
            <button onClick={handleVerify} disabled={isLoading}>{isLoading ? 'جاري التحقق...' : 'تأكيد'}</button>
    </div>
  )
}
