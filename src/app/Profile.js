import React from 'react';
import {useSelector} from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themecolur = useSelector((state) => state.theme.value)
  return (
    <div  className="wrapper fadeInDown"  style={{color: themecolur}}>
        <h1>profile Page</h1>
        <p> Name: {user.name} </p>
        <p> Age:  {user.age}</p>
        <p> Email: {user.email} </p>
    </div>
  )
}

export default Profile;