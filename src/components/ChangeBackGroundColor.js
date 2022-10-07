import { useState } from "react";

const ChangeColor = () => {
    
    let [color, setColor] = useState('black');

    const changeColor = () => {
        setTimeout(()=>setColor( 'pink'), 2000);
    }
    changeColor();

    return (
        <div>
        <div
          style={{
            backgroundColor: color,
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: 'auto'
          }}
        />
      </div>
    )
}

export default ChangeColor;