import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAsync, fetchUsersAsync } from "./usersSlice";

const Users = () => {
  const usersInfo = useSelector((state) => {
    // getting state from store
    // console.log(state); // store data
    return state.users; // we need only users
  });
  console.log(usersInfo);

  const dispatch = useDispatch(); // getting dispatch fn from store
  useEffect(() => {
    // right place for sending calls to rest api
    // we have to dispatch an action from fn comp
    dispatch(fetchUsersAsync());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: read the form data and submit 
    const formData = {
      name: 'John',
      phone: 12344534,
      email: 'j@k.com'
    }

    // let's send the form data to the rest api
    dispatch(addUserAsync(formData));
  }

  if (usersInfo.isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-success"></div>
      </div>
    );
  }

  if (usersInfo.isError) {
    return <div className="alert alert-danger">{usersInfo.status}</div>;
  }

  return (
    <div className="row">
      <div className="col-md-4">
        <h2>Add User</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
          />
          <input
            type="text"
            placeholder="Enter Phone"
            className="form-control"
          />
          <input
            type="text"
            placeholder="Enter E-Mail"
            className="form-control"
          />

          <button type="submit" className="btn btn-primary">Add User</button>
        </form>
      </div>

      <div className="col-md-8">
        <div className="row">
          <h2>Users</h2>
          {usersInfo.userList?.map((user) => {
            return (
              <div className="col-md-4" key={user.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Phone: {user.phone}
                    </h6>
                    <p className="card-text">E-Mail: {user.email}</p>
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
