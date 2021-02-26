import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import backend from "../../clients/axios";
import { useHistory } from "react-router-dom";
const UsersTable = (props) => {
  const [users, setUsers] = React.useState([]);
  const history = useHistory();
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const { data } = await backend.get("/users");
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>created at</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

UsersTable.defaultProps = {
  users: [],
};
export default UsersTable;
