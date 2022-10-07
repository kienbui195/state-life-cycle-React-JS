import './App.css';
import ChangeColor from './components/ChangeBackGroundColor';
import Count from './components/Count';
import Notice from './components/Notice';
import CheckLogin from './components/CheckLogin';
import ExpandContent from './components/ExpandContent';
import LoginLogout from './components/LoginLogout';
import TodoList from './components/TodoList';
import StudentManager from './components/StudentManager';

function App() {
  return (
    <>
      {/* Đếm số lần click vào Button tăng/giảm (State + event) */}
      <Count />
      
      {/* Đổi màu nền component sau khi xuất hiện */}
      <ChangeColor />
      
      {/* Hiện thông báo trước khi Component ẩn */}
      <Notice />
      
      {/* Kiểm tra User Login/Logout */}
      <CheckLogin />
      
      {/* Component Expand/Collapse nội dung */}
      <ExpandContent />

      {/* Xử lý sự kiện Login/Logout với form đăng nhập bằng Bootstrap */}
      <LoginLogout />

      {/* Ứng dụng quản lý công việc (Todo App) */}
      <TodoList />

      {/* Ứng dụng quản lý học sinh (CRUD sử dụng Table) */}
      <StudentManager />
    </>
  );
}

export default App;
