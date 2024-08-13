import React, { useState } from "react";
import axios from "axios";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
      <div className="flex flex-col justify-center bg-white h-2/3 p-5 rounded-lg">
        <Heading label={"Signup"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox
          label={"First Name"}
          placeholder={"enter your first Name here"}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputBox
          label={"Last Name"}
          placeholder={"enter your last Name here"}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputBox
          label={"Email"}
          placeholder={"abc@gmail.com"}
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputBox
          label={"password"}
          placeholder={"password should be 8 digits long"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          label={"Sign Up"}
          onClick={async function () {
            try {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username,
                  firstName,
                  lastName,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            } catch (err) {
              console.log(err);
            }
          }}
        />
        <ButtonWarning
          label={"Already have an account"}
          buttonText={"Signin"}
          to={"/signin"}
        />
      </div>
    </div>
  );
};

export default Signup;
