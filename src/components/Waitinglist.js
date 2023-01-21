import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Waitinglist.css';
import '../style/Align.css';

function Waitinglist() {
    const [orderNumber, setOrderNumber] = useState('NaN');
    const [lastname, setlastname] = useState('NaN');

    let navigate = useNavigate()
    const NavigateToIForm = () => { navigate('/iform') }

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
                <h2 style={{ fontWeight: 'normal', margin: '0', textAlign: 'center' }}>
                    คุณได้ส่งข้อมูลเพื่อขอรับการตรวจเรียบร้อยแล้ว  <br />
                    และนี่คือลำดับที่ตรวจของคุณ คุณสามารถเห็นผลลัพธ์  <br />
                    การตรวจหาเชื้อโควิด-19 ได้ภายในหน้านี้ <br />
                </h2>
            </div>

            <div className='Flex' style={{
                flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', margin: '3rem 0 0'
            }}>
                <div style={{ fontSize: '96px', color: '#FFE500', }}> {orderNumber} </div>
                <span className='Flex' style={{ width: '500px', height: 'auto', borderRadius: '45px', background: 'white', gap: '0 2.5rem', color: 'black', padding: '1.25rem 1.75rem', margin: '-2rem 0 0.25rem 0', fontSize: '32px', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center' }}>
                    <div> ******** </div>
                    <div> {lastname} </div>
                </span>
                <span style={{ border: '7.5px solid white ', borderRadius: '90px', color: 'white', fontSize: '48px', padding: '0.25rem 1.75rem', textAlign: 'center', width: '500px', fontWeight: 'bold' }}>
                    รอการตรวจ
                </span>
            </div>

            <div style={{ margin: '4rem 0' }}>
                <span style={{ display: 'block', margin: 'auto' }}>
                    <h2 style={{ fontWeight: 'normal', textAlign: 'center' }} > กรุณาติดต่อเจ้าหน้าที่เมื่อถึงลำดับของคุณ </h2>
                </span>
            </div>

            <div className='Flex' style={{
                flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center',
            }}>
                <button className='Button_Style' style={{ padding: '5px 14px', width: 'auto' }}> <h2 style={{ fontWeight: "normal" }} onClick={NavigateToIForm}>
                    ยกเลิกการขอเข้าตรวจ <br />
                    หาเชื้อโควิด-19 </h2>
                </button>
            </div>
        </div>)
}

export default Waitinglist