import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const Register = ({onCloseModal1,opened}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");

    const submitData = (e) => {
        e.preventDefault();
        
        localStorage.setItem('email',JSON.stringify(email));
        localStorage.setItem('password',JSON.stringify(password));

        if(email){
            alert("Succesfull Register");
            window.location.reload();
        }

    }
  return (
    <>
       <Modal open={opened} onClose={onCloseModal1} center>
                 <form onSubmit={submitData}>
                            <div className='Login'>
                                <h2 className='Login_h2'>Register</h2>

                                <div className='Login_data'>
                                    <label>Name</label>
                                    <input type="text" name='name' placeholder='Enter Full Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
                                </div>

                                <div className='Login_data'>
                                    <label>Phone</label>
                                    <input type="number" name='phone' placeholder='Enter Full Name' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                                </div>

                                <div className='Login_data'>
                                    <label>Email:</label>
                                    <input type="email" name='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                                </div>
                                
                                <div className='Login_data'>
                                    <label>Password</label>
                                    <input type="text" name='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                                </div>
                                <button type='submit' class="btn btn-outline-success me-2">Submit</button>
                            </div>
                            </form>
                        </Modal>
    </>
  )
}

export default Register