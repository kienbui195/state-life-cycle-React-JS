import * as React from "react";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StudentManager = (props) => {
  let [users, setUsers] = useState([
    {
      index: "0",
      name: "admi2n",
      phone: "0123456789",
      email: "admin@gmail.com",
    },
    {
      index: "1",
      name: "user",
      phone: "0123456789",
      email: "user@gmail.com",
    },
  ]);

  let [temp, setTemp] = useState({
    index: `${users.length}`,
    name: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState({
    table: "block",
    add: "",
    addSuccess: "none",
    deleteSuccess: "none",
    update: "none",
    main: "block",
    updateSuccess: "none",
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const add = () => {
    setUsers([...users, temp]);
    setTemp({
      index: "",
      name: "",
      phone: "",
      email: "",
    });
    setStatus({ ...status, add: "none", addSuccess: "block" });
    setTimeout(() => setStatus({ ...status, addSuccess: "none" }), 2000);
  };

  const deleteItem = (index) => {
    if (window.confirm("Are u sure?")) {
      users.splice(index, 1);
      setUsers([...users]);
      setStatus({ ...status, deleteSuccess: "block" });
      setTimeout(() => setStatus({ ...status, deleteSuccess: "none" }), 2000);
    }
  };

  const updateItem = (index) => {
    let user = {
      name: users[index].name,
      phone: users[index].phone,
      email: users[index].email,
    };
    setTemp(user);
    setStatus({ ...status, main: "none", update: "block" });
    
  };

  const update = (index) => {
    users.splice(index, 1, temp);
    setUsers([...users]);
    setStatus({
      ...status,
      update: "none",
      main: "block",
      updateSuccess: "block",
    });
    setTimeout(()=>setStatus({...status, updateSuccess: 'none'}), 2500)
  };

  return (
    <>
      <div style={{ display: status.update, textAlign: "center" }}>
        <div style={{ textAlign: "center", border: "1px solid black" }}>
          <h3>Update User</h3>
          <div></div>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={temp.name}
            onChange={(e) => setTemp({ ...temp, name: e.target.value })}
          />
          <div></div>
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            value={temp.phone}
            onChange={(e) => setTemp({ ...temp, phone: e.target.value })}
          />
          <div></div>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={temp.email}
            onChange={(e) => setTemp({ ...temp, email: e.target.value })}
          />
          <br />
          <Button
            onClick={() => update(temp.index)}
            variant="outlined"
            className="mt-2"
            style={{ width: "10%" }}
          >
            {" "}
            Edit
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setStatus({ ...status, main: "block", update: "none" });
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
      <TableContainer
        component={Paper}
        style={{
          border: "1px solid black",
          display: status.main,
        }}
      >
        <h1>User manager</h1>
        <div
          className="alert alert-success"
          style={{ display: status.addSuccess }}
        >
          <strong>Add Success!</strong>
        </div>
        <div
          className="alert alert-success"
          style={{ display: status.deleteSuccess }}
        >
          <strong>Delete Success!</strong>
        </div>
        <div
          className="alert alert-success"
          style={{ display: status.updateSuccess }}
        >
          <strong>Update Success!</strong>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button onClick={handleOpen} variant="outlined">
            Add
          </Button>
        </div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h3>Add User</h3>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                
                onChange={(e) => setTemp({ ...temp, name: e.target.value })}
              />
              <TextField
                id="standard-basic"
                label="Phone"
                variant="standard"
                
                onChange={(e) => setTemp({ ...temp, phone: e.target.value })}
              />
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                
                onChange={(e) => setTemp({ ...temp, email: e.target.value })}
              />
              <br />
              <Button
                onClick={() => add()}
                variant="outlined"
                className="mt-2"
                style={{ width: "100%", textAlign: "center" }}
              >
                Add
              </Button>
            </Box>
          </Modal>
        </div>

        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          style={{ display: status.table }}
        >
          <TableHead style={{ border: "1px solid black" }}>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" onClick={() => deleteItem(index)}>
                    Delete
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined" onClick={() => updateItem(index)}>
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StudentManager;
