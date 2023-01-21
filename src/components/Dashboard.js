import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import '../style/Dashboard.css';
import '../style/Align.css';

function Dashboard() {

    // ทำให้แสดงผลหน้า Login  
    let navigate = useNavigate()
    const NavigateToLogin = () => { navigate('/login') }

    // สร้างตัวแปรลำดับ
    const [order, setOrder] = useState(1);
    const ClickToNextOrders = () => { setOrder(prevNumber => prevNumber + 1); alert("เปลี่ยนเป็นลำดับถัดไปเป็นที่เรียบร้อยแล้ว"); }

    // สร้างตัวแปรเก็บชื่อ-สกุล
    const [surname, setSurName] = useState('ระบุนามสกุล');

    // **** สร้างเวลา ****
    // สร้างเพื่อเก็บตัวแปรเวลา
    const [dateTime, setDateTime] = useState(new Date());
    // +เวลาเพิ่มทุกๆ 1 วินาที
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    // ทำให้เกิดเป็นฟอร์แมต
    const date = dateTime.toLocaleDateString('th-TH');
    const time = dateTime.toLocaleTimeString('th-TH');

    // สร้างตัวบอกสถานะ
    const [status, setStatus] = useState('')
    const [aiConsider, setAIConsider] = useState()
    useEffect(() => {
        if (aiConsider !== null) {
            setStatus('กำลังรอผลการตรวจ')
        } else {
            setStatus('ตรวจไม่พบเชื้อ')
        }
    }, [aiConsider])
    const resetStatus = () => {
        setStatus('กำลังรอผลการตรวจ')
    }

    return (
        <div className='Flex' style={{ height: '100%' }}>
            <div className='Grid' style={{ margin: '1rem', width: '100%', gridTemplateRows: 'auto 1fr auto' }}>
                <span className='Grid' style={{ gridTemplateColumns: 'auto 1fr auto' }}>
                    <span className='Flex'>
                        <span> <h1 style={{ color: 'white', }}> จำนวนผู้เข้าร่วม </h1> </span>
                        <span style={{ color: '#FFE600', margin: '0 2.5rem ' }}> <h1> X </h1> </span>
                        <span> <h1 style={{ color: 'white' }}> คน </h1> </span>
                    </span>
                    <span>
                        <div style={{ margin: '1rem auto' }}>
                            {/* <div style={{ margin: '0 auto auto' }}>
                                <div className='Flex' style={{ gap: '0 0.5rem', justifyContent: 'center' }} >
                                    <button className='Button_Style' style={{ padding: '5px 14px' }}> TH </button>
                                    <button className='Button_Style' style={{ padding: '5px 8px' }}> ENG </button>
                                </div>
                            </div> */}
                        </div>
                    </span>
                    <span>
                        <div style={{ margin: '1rem auto' }}>
                            <div style={{ margin: '0 auto auto' }}>
                                <div className='Flex' style={{ gap: '0 0.5rem', justifyContent: 'flex-end' }} >
                                    <button className='Button_Style' style={{ padding: '5px 14px' }}> ? </button>
                                    <button className='Button_Style' onClick={NavigateToLogin}> <h2> ออกจากระบบ </h2> </button>
                                </div>
                            </div>
                        </div>
                    </span>
                </span>
                <span className='Grid' style={{ gridTemplateColumns: '1fr auto' }}>
                    <span>
                        A1
                    </span>
                    <span className='Grid' style={{ margin: '4rem 5rem 4rem', gridTemplateColumns: 'auto', alignItems: 'center' }}>
                        <span className='Grid'>
                            <h1> <h3 style={{ margin: '0 12rem 0 0', color: 'white' }}> ผู้เข้ารับการตรวจ </h3> </h1>
                            <button style={{ background: 'none', border: 'none', color: 'white' }} onClick={ClickToNextOrders}>
                                <h1 style={{ fontWeight: '400', textAlign: 'right', textDecoration: 'underline', fontSize: '2rem' }} > คลิกเพื่อแสดงลำดับถัดไป </h1>
                            </button>
                            <div style={{ gridColumn: '1/3', gridRow: '2', background: 'white', borderRadius: '45px', padding: '2rem 0.75rem' }} >
                                <div className='Grid' style={{ gridTemplateColumns: 'auto 1fr', margin: 'auto', textAlign: 'center', justifyContent: 'center' }}>
                                    <span style={{ margin: '0 0 0 6rem', fontSize: '4rem', fontWeight: 'bold' }}> {order} </span>
                                    <span className='Flex' style={{ margin: 'auto' }} >
                                        <span style={{ fontSize: '3rem', }}> ******** {surname} </span>
                                    </span>
                                </div>
                            </div>
                        </span>
                        <span className='Grid'>
                            <h1> <h3 style={{ margin: '0 15rem 0 0', verticalAlign: 'middle', color: 'white' }}> ผลการตรวจเชื้อโควิด-19 </h3> </h1>
                            <button style={{ background: 'none', border: 'none', color: 'white' }} onClick={resetStatus}>  <h1 style={{ fontWeight: '400', textAlign: 'right', textDecoration: 'underline' }}> ตรวจอีกครั้ง </h1></button>
                            <div style={{ gridColumn: '1/3', gridRow: '2', background: 'white', borderRadius: '45px', padding: '4rem 0.75rem' }} >
                                <span className='Flex' style={{ fontSize: '4rem', fontWeight: '500', margin: 'auto', justifyContent: 'center' }} > {status} </span>
                            </div>
                        </span>
                    </span>
                </span>
                <span>
                    <span className='Grid' style={{ textAlign: 'center', color: 'white', margin: 'auto' }}>
                        {date} {time}
                    </span>
                </span>
            </div>
        </div >
    )
}

export default Dashboard