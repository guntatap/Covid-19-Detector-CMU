import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set, get, } from 'firebase/database';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../components/config/FirebaseAPI";
import '../style/Login.css';
import '../style/Register.css';
import '../style/Align.css';

function Register() {
    // .:. Variable
    // declare var
    const [firstname, setFirstname] = useState('')
    const [surname, setSurname] = useState('')
    const [agent, setAgent] = useState('')
    const [role, setRole] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [usernameAllow, setUsernameAllow] = useState('กรุณาเชื่อมต่อกับฐานข้อมูล');

    // .:. Change the page
    // goto 'Login'
    let navigate = useNavigate()
    const navigateToLogin = () => { navigate('/login') }

    // .:. Database Reference
    // refer the realtime database
    const db = getDatabase();

    // .:.
    // push data into the Authen database
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if (firstname && surname && agent && role && username && password && confirmPassword) {
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(auth, username, password).then((userCredential) => {
                    console.log(userCredential);
                }).catch((error) => {
                    console.log(error);
                });
                SignUp(agent, firstname, surname);
                alert('บันทึกข้อมูลการสมัครของคุณและสามารถเข้าสู่ระบบได้แล้ว')
            }
            else {
                alert('คุณกรอกรหัสผ่านไม่ตรงกัน กรุณาตรวจสอบความถูกต้อง')
            }
        } alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    }
    // push data into realtime database
    function SignUp(agentKey, firstnameKey, surnameKey) {
        const push_db = ref(db, 'agents/' + (agentKey + '/') + (firstnameKey + ' ' + surnameKey + '/'));
        set(push_db, {
            db_role: role,
            db_username: username,
            db_password: password,
        })
    }

    return (
        <div className='Flex'
            style={{
                height: '100%',
            }}>
            <form className='Flex'
                style={{
                    width: '100%',
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '10rem',
                }}
                onSubmit={handleSubmitRegister}>
                <div className='Flex'
                    style={{
                        width: '1fr',
                        border: '1px solid white',
                        flexWrap: 'wrap',
                    }}>
                    รูปภาพ
                </div>
                <div className='Flex'
                    style={{
                        width: '70%',
                    }}>
                    <div className='Grid'
                        style={{
                            width: '100%',
                        }}>
                        <span>
                            <h1 style={{
                                textAlign: 'center'
                            }}> แบบฟอร์มสำหรับการกรอกข้อมูลลงทะเบียนสำหรับเจ้าหน้าที่ </h1>
                        </span>
                        <span>
                            <h2 className='NormalFont'
                                style={{
                                    textAlign: 'center'
                                }}> กรุณากรอกข้อมูลด้วยความเป็นจริง </h2>
                        </span>
                        <br />
                        {/* {ช่องกรอก "๊Username" เจ้าหน้าที่} */}
                        <span className='Grid'>
                            <span className='Flex'
                                style={{
                                    padding: 'auto',
                                }}>
                                <span style={{
                                    padding: '0.1rem 1.5rem',
                                    background: 'white',
                                    width: '25%'
                                }}>
                                    <h2 style={{
                                        margin: 'auto',
                                        color: '#262AAF',
                                        textAlign: 'center'
                                    }}>
                                        อีเมล
                                    </h2>
                                </span>
                                <input
                                    style={{
                                        padding: '0.1rem 1.5rem',
                                        background: 'white',
                                        color: 'black',
                                        opacity: '0.9',
                                        fontSize: '1.25rem',
                                    }}
                                    type="email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </span>
                            <q style={{
                                textAlign: 'end',
                                color: 'yellow',
                                fontSize: '1.25rem',
                                margin: '0.5rem',
                            }}> {usernameAllow} </q><br />
                        </span>
                        {/* {ช่องกรอก "Password" เจ้าหน้าที่} */}
                        <span className='Grid'>
                            <span className='Flex'
                                style={{
                                    padding: 'auto',
                                }}>
                                <span style={{
                                    padding: '0.1rem 1.5rem',
                                    background: 'white',
                                    width: '25%'
                                }}>
                                    <h2 style={{
                                        margin: 'auto',
                                        color: '#262AAF',
                                        textAlign: 'center'
                                    }}>
                                        รหัสผ่าน
                                    </h2>
                                </span>
                                <input
                                    style={{
                                        padding: '0.1rem 1.5rem',
                                        background: 'white',
                                        color: 'black',
                                        opacity: '0.9',
                                        fontSize: '1.25rem',
                                    }}
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </span>
                        </span>
                        <br />
                        {/* {ช่องกรอก "Re-Password" เจ้าหน้าที่} */}
                        <span className='Grid'>
                            <span className='Flex'
                                style={{
                                    padding: 'auto',
                                }}>
                                <span style={{
                                    padding: '0.1rem 1.5rem',
                                    background: 'white',
                                    width: '25%'
                                }}>
                                    <h2 style={{
                                        margin: 'auto',
                                        color: '#262AAF',
                                        textAlign: 'center'
                                    }}>
                                        ยืนยันรหัสผ่าน
                                    </h2>
                                </span>
                                <input
                                    style={{
                                        padding: '0.1rem 1.5rem',
                                        background: 'white',
                                        color: 'black',
                                        opacity: '0.9',
                                        fontSize: '1.25rem',
                                    }}
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </span>
                        </span>
                        <br />
                        {/* {ช่องกรอก "ชื่อ" เจ้าหน้าที่} */}
                        <span className='Grid'>
                            <span className='Flex'
                                style={{
                                    padding: 'auto',
                                }}>
                                <span style={{
                                    padding: '0.1rem 1.5rem',
                                    background: 'white',
                                    width: '25%'
                                }}>
                                    <h2 style={{
                                        margin: 'auto',
                                        color: '#262AAF',
                                        textAlign: 'center'
                                    }}>
                                        ชื่อ
                                    </h2>
                                </span>
                                <input
                                    style={{
                                        padding: '0.1rem 1.5rem',
                                        background: 'white',
                                        color: 'black',
                                        opacity: '0.9',
                                        fontSize: '1.25rem',
                                    }}
                                    type="text"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </span>
                        </span>
                        <br />
                        {/* {ช่องกรอก "นามสกุล" เจ้าหน้าที่} */}
                        <span className='Grid'>
                            <span className='Flex'
                                style={{
                                    padding: 'auto',
                                }}>
                                <span style={{
                                    padding: '0.1rem 1.5rem',
                                    background: 'white',
                                    width: '25%'
                                }}>
                                    <h2 style={{
                                        margin: 'auto',
                                        color: '#262AAF',
                                        textAlign: 'center'
                                    }}>
                                        สกุล
                                    </h2>
                                </span>
                                <input
                                    style={{
                                        padding: '0.1rem 1.5rem',
                                        background: 'white',
                                        color: 'black',
                                        opacity: '0.9',
                                        fontSize: '1.25rem',
                                    }}
                                    type="text"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                            </span>
                        </span>
                        <br />
                        {/* {ช่องกรอก "ชื่อหน่วยงาน" เจ้าหน้าที่} */}
                        <span className='Grid'>
                            <span className='Flex'
                                style={{
                                    padding: 'auto',
                                }}>
                                <span style={{
                                    padding: '0.1rem 1.5rem',
                                    background: 'white',
                                    width: '25%'
                                }}>
                                    <h2 style={{
                                        margin: 'auto',
                                        color: '#262AAF',
                                        textAlign: 'center'
                                    }}>
                                        ชื่อหน่วยงาน
                                    </h2>
                                </span>
                                <input
                                    style={{
                                        padding: '0.1rem 1.5rem',
                                        background: 'white',
                                        color: 'black',
                                        opacity: '0.9',
                                        fontSize: '1.25rem',
                                    }}
                                    type="text"
                                    value={agent}
                                    onChange={(e) => setAgent(e.target.value)}
                                />
                            </span>
                        </span>
                        <br />
                        {/* {ช่องกรอก "ตำแหน่งงาน" เจ้าหน้าที่} */}
                        <span className='Grid'>
                            <span className='Flex'
                                style={{
                                    padding: 'auto',
                                }}>
                                <span style={{
                                    padding: '0.1rem 1.5rem',
                                    background: 'white',
                                    width: '25%'
                                }}>
                                    <h2 style={{
                                        margin: 'auto',
                                        color: '#262AAF',
                                        textAlign: 'center'
                                    }}>
                                        ตำแหน่งงาน
                                    </h2>
                                </span>
                                <input
                                    style={{
                                        padding: '0.1rem 1.5rem',
                                        background: 'white',
                                        color: 'black',
                                        opacity: '0.9',
                                        fontSize: '1.25rem',
                                    }}
                                    type="text"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                            </span>
                        </span>
                        <br />
                        <br />
                        <button className='Button_Style' type={'submit'}
                            style={{
                                width: 'auto',
                                margin: 'auto'
                            }}>
                            <h2> ยืนยันข้อมูลการลงทะเบียน </h2>
                        </button>
                    </div>
                </div>
            </form >
        </div >
    );
}

export default Register