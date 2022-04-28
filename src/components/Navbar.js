import React, { useState } from 'react'
import Login from './Login';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const yes = localStorage.getItem('true');
    const clearData = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
            <nav class="container navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Quiz Game</a>
                    <form class="d-flex">
                   { yes ? ( <button class="btn btn-outline-success" type='button' onClick={clearData}>Log Out</button>) : ( <button class="btn btn-outline-success" type='button' onClick={onOpenModal}>Login</button>)   
                        }
                         <Login onCloseModal={onCloseModal}
                         open={open}
                         />
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar