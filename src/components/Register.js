import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import '../style/Register.css';
import '../style/Align.css';

function Register() {

    // สร้างตัวแปรไว้เก็บข้อมูลจากการกรอกฟอร์มของผู้ใช้
    const [registerData, setRegisterData] = useState({
        firstname: '',
        surname: '',
        agent: '',
        role: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const handleChange = event => {
        const { name, value } = event.target;
        setRegisterData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleSubmit = event => {
        event.preventDefault();
        // Validate form data and submit to backend
    };

    // ทำให้แสดงผลหน้า Login  
    let navigate = useNavigate()
    const NavigateToLogin = () => { navigate('/login') }

    const [usernameAllow, setUsernameAllow] = useState('กรุณาเชื่อมต่อกับฐานข้อมูล');

    return (
        <div className='Flex' style={{ height: '100%', color: 'white' }}>
            <div className='Grid' style={{ margin: '1rem 8rem', width: '100%', gridTemplateColumns: '30% 1fr', alignItems: 'center', justifyContent: 'center' }}>
                <span>
                    <img src={require('./assets/covidLogo.png')} alt="Logo" style={{ width: 400, height: 400 }} />
                </span>
                <span style={{}}>
                    <form onSubmit={handleSubmit}>
                        <div className='Grid' >
                            <h1> แบบฟอร์มสำหรับการกรอกข้อมูลลงทะเบียนสำหรับเจ้าหน้าที่ </h1>
                            <h2 className='NormalFont' style={{ margin: '1rem 0 0.75rem' }}> กรุณากรอกข้อมูลด้วยความเป็นจริง </h2>
                            <div className='Grid' style={{ gap: '24px 0' }}>
                                {/* {ช่องกรอก "ชื่อ" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto' }}>
                                    <span style={{ padding: '0.25rem 1.5rem', background: 'white', width: '175px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> ชื่อ </h2>
                                    </span>
                                    <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Firstname" value={registerData.firstname} onChange={handleChange} />
                                    <br />
                                </span>
                                {/* {ช่องกรอก "สกุล" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto', }}>
                                    <span style={{ padding: '0.25rem 1.5rem', background: 'white', width: '175px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> สกุล </h2>
                                    </span>
                                    <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Surname" value={registerData.surname} onChange={handleChange} />
                                    <br />
                                </span>
                                {/* {ช่องกรอก "หน่วยงาน" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto', }}>
                                    <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '175px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> หน่วยงาน </h2>
                                    </span>
                                    <input style={{ padding: '0.25rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Agent" value={registerData.agent} onChange={handleChange} />
                                    <br />
                                </span>
                                {/* {ช่องกรอก "บทบาท/ตำแหน่ง" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto', }}>
                                    <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '175px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> ตำแหน่ง </h2>
                                    </span>
                                    <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Role" value={registerData.role} onChange={handleChange} />
                                    <br />
                                </span>
                            </div>
                            <div className='Grid' style={{ gap: '24px 0', margin: '2rem 0', gridTemplateColumns: '1fr 35%' }}>
                                {/* {ช่องกรอก "๊Username" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto', }}>
                                    <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '175px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> ชื่อผุ้ใช้ </h2>
                                    </span>
                                    <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Username" value={registerData.role} onChange={handleChange} />

                                </span>
                                <span className='Block' style={{ margin: 'auto 0 auto 1rem', fontSize: '1.5rem' }}>
                                    {usernameAllow} <br />
                                </span>
                                {/* {ช่องกรอก "๊Password" เจ้าหน้าที่} */}
                                <span className='Flex' style={{ padding: 'auto', }}>
                                    <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '175px' }}>
                                        <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> รหัสผ่าน </h2>
                                    </span>
                                    <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="password" name="Password" value={registerData.role} onChange={handleChange} />
                                    <br />
                                </span>
                                <span className='Block' style={{ margin: 'auto 0 auto 1rem', fontSize: '1.5rem' }}>
                                    {usernameAllow}
                                </span>
                            </div>
                            <div style={{ margin: '1.5rem 0' }}>
                                <div className='Flex' style={{ gap: '0 15px' }} >
                                    <button className='Button_Style' style={{ width: '125px' }}> <h2> ยืนยัน </h2> </button>
                                    <button className='Button_Style' style={{ width: '125px' }}> <h2> ย้อนกลับ </h2> </button>
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
