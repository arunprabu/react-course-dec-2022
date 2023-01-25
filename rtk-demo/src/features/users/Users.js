import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAsync } from "./usersSlice";

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

  if (usersInfo.isLoading) {
    return <div className="spinner-border text-success"></div>;
  }

  if (usersInfo.isError) {
    return <div className="alert alert-danger">{usersInfo.status}</div>;
  }

  return (
    <div className="row">
      <h1>Users</h1>
      { 
      usersInfo.userList?.map( (user) => {
        return (
          <div className="col-md-4" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Phone: {user.phone}</h6>
                <p className="card-text">E-Mail: {user.email}</p>
              </div>
            </div>
          </div>
        );
      })
      }
     
    </div>
  );
};

export default Users;
