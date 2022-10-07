import { useState } from "react"

import (useState)

const CheckLogin = () => {

    let [status, setStatus] = useState({
        status1: 'block',
        status2: 'none'
    });
   
    const login = (ope) => {
        if (ope === 'in') {
            setStatus({
                status1: 'none',
                status2: 'block'
            });
            
        } else {
            setStatus({
                status1: 'block',
                status2: 'none'
            });
            
        }
    }

    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <div style={{display: status.status1}}>
            <h1>Please Login</h1>
            <button className="btn btn-primary" onClick={() => login('in')}>LogIn</button>
            </div>
            <div style={{display: status.status2}}>
            <h1>Welcome</h1>
            <button className="btn btn-danger" onClick={() => login('out')}>Logout</button>
            </div>
        </div>
    )
}

export default CheckLogin;