import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style/Waitinglist.css';
import '../style/Align.css';

function IForm() {

    // ทำให้แสดงผลหน้า Login  
    let navigate = useNavigate()
    const NavigateToWaitingList = () => { navigate('/waitinglist') }

    return (
        <div className='container' >
            <div className='Flex' style={{
                alignItems: 'right', justifyContent: 'flex-end', gap: '0 0.5rem', margin: '0', padding: '0.5rem'
            }}>
                {/* <button className='Button_Style' style={{ padding: '5px 14px', width: '100px' }}> <h2> TH </h2> </button>
                <button className='Button_Style' style={{ padding: '5px 8px', width: '100px' }}>  <h2> ENG </h2></button> */}
            </div>

            <div className='Flex' style={{
                flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem'
            }}>
                <div>
                    รูปภาพ
                    <img style={{ margin: '2rem 0' }} />
                </div>
                <h2 style={{ fontWeight: 'normal', margin: '0' }}>ยินดีต้อนรับเข้าสู่การตรวจหาเชื้อโควิด-19 จากพวกเรา
                    <br />
                    กรุณากรอกข้อมูลที่ถูกต้องและเป็นความจริง
                    <br />
                </h2>
                <div>
                    <span className='Flex' style={{ padding: 'auto', }}>
                        <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '175px' }}>
                            <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> ชื่อ </h2>
                        </span>
                        <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Firstname" />
                        <br />
                    </span>
                </div>
                <div>
                    <span className='Flex' style={{ padding: 'auto', }}>
                        <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '175px' }}>
                            <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center' }}> สกุล </h2>
                        </span>
                        <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Surname" />
                        <br />
                    </span>
                </div>
                <div>
                    <span className='Flex' style={{ padding: 'auto', }}>
                        <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '175px' }}>
                            <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center', }}> เลขบัตรประชาชน </h2>
                        </span>
                        <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="tel" name="Personal ID" />
                        <br />
                    </span>
                </div>
                <div>
                    <span className='Flex' style={{ padding: 'auto', }}>
                        <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '175px' }}>
                            <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center', }}> เบอร์โทร </h2>
                        </span>
                        <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="tel" name="Phone NO." />
                        <br />
                    </span>
                </div>
                <div>
                    <span className='Flex' style={{ padding: 'auto', }}>
                        <span style={{ padding: '0.1rem 1.5rem', background: 'white', width: '175px' }}>
                            <h2 style={{ margin: '0', color: '#262AAF', textAlign: 'center', }}> ที่อยู่ </h2>
                        </span>
                        <input style={{ padding: '0.1rem 1.5rem', background: 'white', color: 'black', opacity: '0.9', fontSize: '1.25rem' }} type="text" name="Live in" />
                        <br />
                    </span>
                </div>
                <button className='Button_Style' style={{ margin: '2rem 0', padding: '5px 14px' }} onClick={NavigateToWaitingList}>
                    <h2 style={{ fontWeight: 'normal' }}> ส่งข้อมูลเพื่อขอรับการตรวจ </h2>
                </button>
            </div>
        </div>
    );
}

export default IForm;