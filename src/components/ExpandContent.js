import { useState } from "react";

const ExpandContent = () => {

    let [status, setStatus] = useState('none')
    const showText = (e) => { 
        if (e === 'hien') {
            setStatus('block');
        } else {
          setStatus('none');
        }
        
    };
    


  return (
    <>
      <div className="alert alert-success">
        <strong>Conditional Rendering</strong>
      </div>
      <button className="btn btn-primary" onClick={() => showText('hien')}>
        Xem Gioi Thieu
      </button>
      <div style={{display: status, textAlign: 'center'}}> 
        <p>
          Import React, from; Tạo class App bằng class App extends Component Gọi
          hàm constructor(props) Gọi hàm super(props) Cập nhật object this.state
          lần lượt theo các key-value: isExpand: false Khai báo hàm handler cập
          nhật lại giá trị isExpand, mỗi lần handle được gọi, sử dụng setState()
          để cập nhật lại giá trị của isExpand bằng true hoặc false Gọi hàm
          render để thể hiện các element bao gồm Title “Conditional Rendering”
          Kiểm tra điều kiện để render giao diện (conditional rendering) Nếu
          isExpand là false, hiển thị button “Xem giới thiệu” Nếu isExpand là
          true, hiển thị button “Đóng giới thiệu” và Nội dung giới thiệu Xử lí
          sự kiện với hàm handler: sử dụng onClick của button để gọi tới hàm
          handler đã tạo bên trên
              </p>
              <button onClick={()=>showText('an')}>An bot</button>
      </div>
    </>
  );
};

export default ExpandContent;
