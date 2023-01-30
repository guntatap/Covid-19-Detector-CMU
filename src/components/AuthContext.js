import React, { useEffect, useState } from 'react'
import { auth } from "../components/config/FirebaseAPI";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';

const AuthDetails = () => {

    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        }); return listen();
    }, [])

    let navigate = useNavigate();
    const userSignOut = () => {
        signOut(auth).then(() => {
            alert('ออกจากระบบของคุณแล้ว');
            navigate('/login');
        })
            .catch(error => console.log(error))
    }

    return (<div>
        <button className='Button_Style' type={'button'}
            style={{
                width: 'auto',
                margin: 'auto',
                fontSize: '1.25rem',
            }} onClick={userSignOut} >
            <h2> ออกจากระบบ </h2>
        </button>
    </div>)
}



export default AuthDetails;