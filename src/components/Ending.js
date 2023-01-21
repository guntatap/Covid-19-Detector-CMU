import React, { useState, useEffect } from 'react';

import '../style/Ending.css';
import '../style/Align.css';

function Ending() {

    return (
        <div className='Flex container' style={{
            flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1.5rem 0'
        }}>
            <div>
                รูปภาพ
                <img style={{ margin: '2rem 0' }} />
            </div>
            <h2 style={{ fontWeight: 'normal', textAlign: 'center' }}>
                ขอบคุณอย่างยิ่งที่ไว้ใจและให้พวกเราช่วยคุณ <br />
                ในการตรวจหาเชื้อโควิด-19
            </h2>
        </div>

    )
}

export default Ending;