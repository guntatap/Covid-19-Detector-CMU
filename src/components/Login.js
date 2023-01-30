import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/config/FirebaseAPI";
import '../style/Login.css';
import '../style/Align.css';

function Login() {
    // .:. Variable
    // declare var
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // .:. Clock & Timestamp
    // create variable 'time'
    const [dateTime, setDateTime] = useState(new Date());
    // add '1' every second 
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    // make the form of timestamp
    const date = dateTime.toLocaleDateString('th-TH');
    const time = dateTime.toLocaleTimeString('th-TH');

    // .:. Change the page
    // goto 'Dashboard' & 'Register'  
    let navigate = useNavigate()
    const NavigateToDashboard = () => { navigate('/dashboard') }
    const NavigateToRegister = () => { navigate('/register') }

    // .:. Database Reference
    // refer the realtime database
    const db = getDatabase();

    // .:. Login
    // login function
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, username, password).then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='Flex' style={{ height: '100%' }}>
            <form className='Grid' style={{ width: '100%', gridTemplateColumns: '100%' }} onSubmit={handleSubmitLogin}>
                <div className='Grid' style={{ width: '100%', gridTemplateColumns: '100%' }}>
                    <div style={{ margin: '1rem auto' }}>
                        <div style={{ margin: '0 auto auto' }}>
                            <div className='Flex' style={{ gap: '0 0.5rem' }} >
                                {/* <button className='Button_Style' style={{ padding: '5px 14px' }}> TH </button>
                            <button className='Button_Style' style={{ padding: '5px 8px' }}> ENG </button> */}
                            </div>
                        </div>
                    </div>
                    <div className='Flex'>
                        <div className='Login_Form L2R Center' style={{}}>
                            <div>
                                <div className='Grid' style={{ gridTemplateColumns: '40% 1fr', margin: '-5% 5% 0', alignItems: 'center' }}>
                                    <div className='Grid' style={{ gridTemplateColumns: '1fr', padding: '0 5%' }}>
                                        <img src='RCQT.png' width='200' height='200' className='Block' style={{ margin: '0 auto' }} />
                                        <div className='Grid' style={{ gridTemplateColumns: '1fr 1fr' }}>
                                            <img src='ตรา มช.png' width='150' height='150' className='Block' style={{ margin: 'auto' }} />
                                            <img src='กระทรวงเศรษฐกิจ.png' width='150' height='150' className='Block' style={{ margin: 'auto' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='Flex'>
                                            <h1> การเข้าสู่ระบบการใช้งาน </h1>
                                        </div>
                                        <div className='Grid Center' style={{ gridTemplateColumns: '6rem 1fr', margin: '1rem 0' }}>
                                            <h2> อีเมล </h2>
                                            <span style={{ margin: '0 2px 0 2px' }}>
                                                <div className='Flex'>
                                                    <span className='Symbol_Textbox_Header'>  </span>
                                                    <span style={{ background: '#262AAF', opacity: '90%', width: '100%', padding: '5px 0' }}>
                                                        <input style={{ fontSize: '18px' }} type='email' value={username} onChange={(e) => setUsername(e.target.value)} />
                                                    </span>
                                                </div>
                                            </span>
                                        </div>
                                        <div className='Grid Center' style={{ gridTemplateColumns: "6rem 1fr" }}>
                                            <h2> รหัสผ่าน </h2>
                                            <span style={{ margin: '0 2px 0 2px' }}>
                                                <div className='Flex'>
                                                    <span className='Symbol_Textbox_Header'> </span>
                                                    <span style={{ background: '#262AAF', opacity: '90%', width: '100%', padding: '5px 0' }}>
                                                        <input style={{ fontSize: '18px' }} type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                                    </span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ margin: '-5px auto auto' }}>
                        <div className='Flex' style={{ gap: '0 15px' }} >
                            <button className='Button_Style' type={'submit'}>  <h2> เข้าสู่ระบบ </h2> </button>
                            <button className='Button_Style' onClick={NavigateToRegister}> <h2> ลงทะเบียน </h2> </button>
                            <button className='Button_Style'> <h2> ลืมรหัสผ่าน </h2> </button>
                        </div>
                    </div>
                    <div style={{ margin: 'auto auto 1rem' }}>
                        <span style={{ textAlign: 'center', color: 'white' }}>
                            {date} {time}
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
