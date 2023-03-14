import React from 'react';
import { useDispatch } from 'react-redux';
import {login , logout} from "../feature/user"

function Login() {
  const dispatch = useDispatch()
  return (
    <div className="wrapper fadeInDown">

        <button onClick={() => {
          dispatch(login(
            {
             name:"fdf",
             age:0,
             email:"dsfsdf"
            }
        ));
        }}>login</button>

        <button onClick={() => {
          dispatch(logout(

            {
             }
          ))
        }}> LOGOUT</button>
        </div>
  );
}

export default Login;














































