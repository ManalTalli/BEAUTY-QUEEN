import React from 'react'
import useVerify from '../../hooks/useVerify';
import useResendPassword from '../../hooks/useResendPassword';

export default function ResendPassword() {
    const {handleResendPassword,email,code,setCode,isLoading,newPassword, setNewPassword}= useResendPassword();
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
            <input 
                type="text" 
                placeholder="Enter New Password" 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)} // تحديث الكود عند الكتابة
            />
            
            <button onClick={handleResendPassword} disabled={isLoading}>{isLoading ? 'جاري التحقق...' : 'تأكيد'}</button>
    </div>
    
  )
}
