import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthDetails from '../components/AuthContext';
import '../style/Dashboard.css';
import '../style/Align.css';

function Dashboard() {

    // สร้างตัวแปรลำดับ
    let queueCount = 0;
    let queueNumber = 0;

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
    const [covidStatus, setCovidStatus] = useState('รอรับผลการตรวจ')
    const covidAnalysis = () => {
        if (covidStatus) {
            if (covidStatus == 0) setCovidStatus('ตรวจไม่พบเชื้อ');
            else if (covidStatus == 1) setCovidStatus('ตรวจพบเชื้อ');
        }
    }
    return (
        <div className='Flex'
            style={{
                height: '100%',
                flexDirection: 'column'
            }}>
            <div className='Grid'
                style={{
                    gridTemplateColumns: 'auto 1fr auto',
                    color: 'white',
                    margin: '2.5rem 2.5rem 0',
                    height: 'auto'
                }}>
                {/* top-left position */}
                <span className='Flex' style={{
                    justifyContent: 'left'
                }}>
                    <span className='Flex'>
                        <span>
                            <h1
                                style={{
                                    color: 'white',
                                }}> จำนวนผู้เข้าร่วม
                            </h1>
                        </span>
                        <span>
                            <h1
                                style={{
                                    color: 'yellow',
                                    padding: '0 2.25rem'
                                }}> {queueCount}
                            </h1>
                        </span>
                        <span>
                            <h1
                                style={{
                                    color: 'white',
                                }}> คน
                            </h1>
                        </span>
                    </span>
                </span>
                <span />
                {/* top-right position */}
                <span className='Flex' style={{
                    justifyContent: 'right',
                }}>
                    <span className='Flex'>
                        <AuthDetails />
                    </span>
                </span>
            </div>
            <div className='Grid'
                style={{
                    gridTemplateColumns: '1fr 1fr',
                    color: 'white',
                    margin: 'auto 2.5rem',
                    height: '1fr'
                }}>
                <span>
                    QR-Code
                </span>
                <span className='Flex'
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    {/* รับการตรวจ */}
                    <div>
                        <span className='Grid'
                            style={{
                                alignItems: 'center',
                                width: '100%',
                            }}>
                            <p
                                style={{
                                    margin: '0 12rem 0 0',
                                    color: 'white',
                                    fontSize: '2rem',
                                }}>
                                ผู้เข้ารับการตรวจ
                            </p>
                            <button className='text-button' type='text'
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'white',
                                    fontWeight: '400',
                                    textAlign: 'right',
                                    textDecoration: 'underline',
                                    fontSize: '1.5rem'
                                }}>
                                คลิกเพื่อแสดงลำดับถัดไป
                            </button>
                            <div
                                style={{
                                    gridColumn: '1/3',
                                    gridRow: '2',
                                    background: 'white',
                                    borderRadius: '45px',
                                    padding: '1rem 0.75rem'
                                }} >
                                <div className='Flex'
                                    style={{
                                        width: '100%',
                                        color: 'black',
                                    }}>
                                    <span
                                        style={{
                                            margin: '0 0 0 6rem',
                                            fontSize: '5rem',
                                            fontWeight: 'bold',
                                            color: 'red',
                                            fontWeight: '500',
                                        }}> {queueNumber}

                                    </span>
                                    <span className='Flex'
                                        style={{
                                            margin: 'auto'
                                        }} >
                                        <span style={{ fontSize: '3rem', }}> ******** {surname} </span>
                                    </span>
                                </div>
                            </div>
                        </span>
                        <br />
                        <br />
                        <br />
                    </div>
                    {/* ผลการตรวจ */}
                    <div>
                        <span className='Grid'
                            style={{
                                alignItems: 'center',
                                width: '100%',
                            }}>
                            <p
                                style={{
                                    margin: '0 12rem 0 0',
                                    color: 'white',
                                    fontSize: '2rem',
                                }}>
                                ผลการตรวจ
                            </p>
                            <button className='text-button' type='text'
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'white',
                                    fontWeight: '400',
                                    textAlign: 'right',
                                    textDecoration: 'underline',
                                    fontSize: '1.5rem'
                                }}>
                                คลิกเพื่อเริ่มตรวจหาเชื้อโควิด-19
                            </button>
                            <div
                                style={{
                                    gridColumn: '1/3',
                                    gridRow: '2',
                                    background: 'white',
                                    borderRadius: '45px',
                                    padding: '1rem'
                                }} >
                                <div className='Flex'
                                    style={{
                                        width: '100%',
                                        color: 'black',
                                    }}>
                                    <span className='Flex'
                                        style={{
                                            margin: 'auto',
                                            padding: '1rem',
                                        }} >
                                        <span style={{ fontSize: '3rem', }}> {covidStatus}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </span>
                        <br />
                        <br />
                        <br />
                    </div>
                </span>
            </div>
            <div className='Grid'
                style={{
                    gridTemplateColumns: '1fr',
                    color: 'white',
                    margin: '0 2.5rem 2.5rem',
                    height: '1fr'
                }}>
                <span className='Flex'
                    style={{
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                    }}>
                    {date} {time}
                </span>
            </div>
        </div>
    )
}

export default Dashboard