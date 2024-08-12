import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";

const Signin = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="flex flex-col justify-center ">
        <div className="rounded-lg bg-white w-80 text-left p-4 h-max px-7 py-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to signin"} />
          <InputBox label={"E-mail"} placeholder={"abc@gmail.com"} />
          <InputBox
            label={"Password"}
            placeholder={"enter your 8 digit password"}
          />
          <div className="pt-4">
            <Button label={"Sign In"} />
          </div>
          <ButtonWarning
            label={"Don't have an account?"}
            buttonText={"Signup"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
