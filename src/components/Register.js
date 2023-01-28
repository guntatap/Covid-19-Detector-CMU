import React, { useState } from 'react';
import firebaseConfig from './config/FirebaseAPI';
import { getDatabase, ref, push, set, onChildAdded } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import '../style/Register.css';
import '../style/Align.css';
import { v4 as uuidv4 } from 'uuid';

function Register() {

    const db = getDatabase();

    const [firstname, setFirstname] = useState('')
    const [surname, setSurname] = useState('')
    const [agent, setAgent] = useState('')
    const [role, setRole] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // ทำให้แสดงผลหน้า Login  
    let navigate = useNavigate()
    const navigateToLogin = () => { navigate('/login') }

    // ทำให้บันทึกค่าขึ้นไปในฐานข้อมูล
    function handleSubmit(agentKey, firstnameKey, surnameKey) {
        if (firstname && surname && agent && role && username && password && confirmPassword) {
            if (password === confirmPassword) {
                const push_db = ref(db, 'agents/' + (agentKey + '/') + (firstnameKey + ' ' + surnameKey + '/'));
                set(push_db, {
                    db_role: role,
                    db_username: username,
                    db_password: password,
                })
                alert('บันทึกข้อมูลการสมัครของคุณและสามารถเข้าสู่ระบบได้แล้ว')
                navigateToLogin();
            } else { alert('คุณกรอกรหัสผ่านไม่ตรงกัน กรุณ่ตรวจสอบความถูกต้อง') }
        } else { alert('กรุณากรอกข้อมูลให้ครบถ้วน') }
    }

    const [usernameAllow, setUsernameAllow] = useState('กรุณาเชื่อมต่อกับฐานข้อมูล');

    return (
        <div className='Flex' style={{ height: '100%', color: 'white' }}>
            <div className='Grid' style={{ margin: '1rem 8rem', width: '100%', gridTemplateColumns: '30% 1fr', alignItems: 'center', justifyContent: 'center' }}>
                <span>
                    <img src={require('./assets/covidLogo.png')} alt="Logo" style={{ width: 400, height: 400 }} />
                </span>
                <span style={{}}>
                    <form>
                        <div className='Grid' >
                            <h1> แบบฟอร์มสำหรับการกรอกข้อมูลลงทะเบียนสำหรับเจ้าหน้าที่ </h1>
                            <h2 className='NormalFont' style={{ margin: '1rem 0 0.75rem' }}> กรุณากรอกข้อมูลด้วยความเป็นจริง </h2>
                            <div className='Grid' style={{ gap: '24px 0' }}>
                                {/* {ช่องกรอก "ชื่อ" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto' }}>
                                    <span style={{ padding: '0.25rem 1.5rem', background: 'white', width: '250px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> ชื่อ </h2>
                                    </span>
                                    <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Firstname" onChange={(e) => setFirstname(e.target.value)} />
                                    <br />
                                </span>
                                {/* {ช่องกรอก "สกุล" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto', }}>
                                    <span style={{ padding: '0.25rem 1.5rem', background: 'white', width: '250px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> สกุล </h2>
                                    </span>
                                    <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Surname"
                                        onChange={(e) => setSurname(e.target.value)} />
                                    <br />
                                </span>
                                {/* {ช่องกรอก "หน่วยงาน" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto', }}>
                                    <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '250px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> หน่วยงาน </h2>
                                    </span>
                                    <input style={{ padding: '0.25rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Agent"
                                        onChange={(e) => setAgent(e.target.value)} />
                                    <br />
                                </span>
                                {/* {ช่องกรอก "บทบาท/ตำแหน่ง" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto', }}>
                                    <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '250px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> ตำแหน่ง </h2>
                                    </span>
                                    <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Role"
                                        onChange={(e) => setRole(e.target.value)} />
                                    <br />
                                </span>
                            </div>
                            <div className='Grid' style={{ gap: '24px 0', margin: '2rem 0', gridTemplateColumns: '1fr 35%' }}>
                                {/* {ช่องกรอก "๊Username" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto', }}>
                                    <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '250px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> ชื่อผู้ใช้ </h2>
                                    </span>
                                    <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text"
                                        onChange={(e) => setUsername(e.target.value)} />
                                </span>
                                <span className='Block' style={{ margin: 'auto 0 auto 1rem', fontSize: '1.5rem' }}>
                                    {usernameAllow} <br />
                                </span>
                                {/* {ช่องกรอก "๊Password" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto', }}>
                                    <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '250px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> รหัสผ่าน </h2>
                                    </span>
                                    <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="password" name="Password"
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <br />
                                </span>
                                <span className='Block' style={{ margin: 'auto 0 auto 1rem', fontSize: '1.5rem' }}>
                                    {usernameAllow}
                                </span>
                                {/* {ช่องกรอก "๊Confirm Password" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto', }}>
                                    <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '250px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> ยืนยันรหัสผ่าน </h2>
                                    </span>
                                    <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="password" name="Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                                    <br />
                                </span>
                                <span className='Block' style={{ margin: 'auto 0 auto 1rem', fontSize: '1.5rem' }}>
                                </span>
                            </div>
                            <div style={{ margin: '1.5rem 0' }}>
                                <div className='Flex' style={{ gap: '0 15px' }} >
                                    <button className='Button_Style' type='submit' onClick={() => handleSubmit(agent, firstname, surname)} style={{ width: '125px' }}> <h2> ยืนยัน </h2> </button>
                                    <button className='Button_Style' onClick={navigateToLogin} style={{ width: '125px' }}> <h2> ย้อนกลับ </h2> </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </span>
            </div>
        </div>
    );
}

export default Register