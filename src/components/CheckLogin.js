import { useState } from "react"

import (useState)

const CheckLogin = () => {

    let [status1, setStatus1] = useState('block');
    let [status2, setStatus2] = useState('none');

    const login = (ope) => {
        if (ope === 'in') {
            setStatus1('none');
            setStatus2('block');
        } else {
            setStatus1('block');
            setStatus2('none');
        }
    }

    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <div style={{display: status1}}>
            <h1>Please Login</h1>
            <button className="btn btn-primary" onClick={() => login('in')}>LogIn</button>
            </div>
            <div style={{display: status2}}>
            <h1>Welcome</h1>
            <button className="btn btn-danger" onClick={() => login('out')}>Logout</button>
            </div>
        </div>
    )
}

export default CheckLogin;