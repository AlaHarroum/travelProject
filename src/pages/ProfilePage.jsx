import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import "../styles/profile.css";
//import {Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
// import { BASE_IMAGE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";
import usePut from "../hooks/usePut";
import { BASE_URL } from "../utils/config";
import logo_user from "../assets/images/profile.png";



const ProfileUpdatePage = () => {

  const { user } = useContext(AuthContext)

  const [updateUser, setUpdateUser] = useState({
    username: user.username,
    email: user.email,
    password: undefined,
    photo: "", 
  });


  //calling the usePut custome hook to put the data in the database 
  const { data, error, loading, putData } = usePut(`${BASE_URL}/users/${user._id}`)

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUpdateUser((prevUser) => ({ ...prevUser, [id]: value }));
    console.log(updateUser)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(updateUser.username && updateUser.email && updateUser.password){
      putData({
        username:updateUser.username,
        email:updateUser.email,
        password:updateUser.password,
      })
    }
  };
console.log(updateUser)

  return (
    
    <div className="bg-slate-100 rounded-2xl w-[60%] h-[40%] mt-3 ml-[20%] flex justify-between shadow-lg">
      <div className="bg-slate-100 w-[40%] m-3 flex-col items-center mt-5 gap-5 sm:hidden md:flex">
       <img src={logo_user} alt="" className="lg:w-60 lg:h-60 md:w-40 md:h-40 sm:w-[8rem] sm:h-[8rem] shadow-lg shadow-cyan-500/50 rounded-2xl" />
        <span className="text-xl font-bold">{user?.username}</span>
      </div>
      <div className="bg-slate-200 shadow-md text-center m-4 rounded-full flex-1 p-[5%] justify-center items-center flex">
        <Form onSubmit={handleSubmit} className="form-box-shadow">
        {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {/* {data && <div>Updated data: {JSON.stringify(data)}</div>} */}
          <h1 className="text-center text-blue-700">Update Profile</h1>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              value={updateUser.username || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={updateUser.email || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={updateUser.password || ""}
              onChange={handleChange}
              autoComplete="off"
            />
          </FormGroup>
          {/*<FormGroup>
            <Label for="photo">Photo</Label>
            <Input
              type="file"
              name="photo"
              id="photo"
              value={updateUser.photo}
              onChange={handleChange}
            />
            </FormGroup> */}
          <Button type="submit" color="primary" >
            Update
          </Button>
        </Form>
      </div>
    </div>


  );
};

export default ProfileUpdatePage;