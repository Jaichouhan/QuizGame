import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Register from './Register';

const Login = ({onCloseModal,open}) => {
    const [opened,setOpened] = useState(false);
    const onOpenModal1 = () => setOpened(true);
    const onCloseModal1 = () => setOpened(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    

    const dataSubmit = (e) =>{
        const ema = localStorage.getItem("email").replace(/"/g,"");
        const pass = localStorage.getItem("password").replace(/"/g,"");
       if(!email || !password){
           alert("Please Fill the Data");
           
       }else if (password !==pass || email !== ema ){
           alert("Not Correct information");
       }
       else{
        alert("Login Succesfully Enjoy the  Game");
        localStorage.setItem('true',email)
        window.location.reload();
       }
    }
    
  return (
    <>
       <Modal open={open} onClose={onCloseModal} center>
           <form onSubmit={dataSubmit}>
                            <div className='Login'>
                                <h2 className='Login_h2'>Login</h2>
                                <div className='Login_data'>
                                    <label>Email:</label>
                                    <input type="email" name='email' value={email} placeholder='Enter Email' 
                                    onChange={(e)=>setEmail(e.target.value)} required/>
                                </div>
                                
                                <div className='Login_data'>
                                    <label>Password</label>
                                    <input type="text" placeholder='Enter Password' value={password} name='password' onChange={(e)=>setPassword(e.target.value)} required/>
                                </div>
                                <button type='submit' class="btn btn-outline-success me-2">Submit</button>
                                <button type='button' class="btn btn-outline-danger" onClick={onOpenModal1}>Register</button>
                                <Register onCloseModal1={onCloseModal1} opened={opened}/>
                            </div>
                            </form>
                        </Modal>
    </>
  )
}

export default Login