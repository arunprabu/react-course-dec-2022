import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserAsync, fetchUsersAsync } from "./usersSlice";

const Users = () => {
  const usersInfo = useSelector((state) => { // getting state item from store
    return state.users;
  });
  const dispatch = useDispatch(); // getting dispatch from store

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, []);
  console.log(usersInfo);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUserAsync({
      name: 'a',
      email: 'a@b.com',
      phone: 12345678
    }));
  }

  if (usersInfo.isLoading) {
    return <div className="spinner-border text-primary"></div>;
  }

  if (usersInfo.isError) {
    return <div>Some error occurred! Try again Later</div>;
  }

  return (
    <div className="row">
      <h1>Users</h1>

      <div className="col-md-4">
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Phone"
            className="form-control"
          />
          <br />
          <input
            type="text"
            placeholder="Enter E-Mail"
            className="form-control"
          />
          <br />
          <button type="submit" className="btn btn-primary">Create User</button>
        </form>
      </div>

      <div className="col-md-8">
        <div className="row">
          {usersInfo.userList?.map((user) => {
            return (
              <div className="col-md-4" key={user.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      E-Mail: {user.email}
                    </h6>
                    <p className="card-text">Phone: {user.phone}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
