//Import React Module for JSX Manipulation
import React from "react";
//---------------------------------------------------------------------

//Import Input component:
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.isRegistered ? (
        <div>
          <button type="submit">Login</button>
        </div>
      ) : (
        <div>
          <Input type="password" placeholder="Confrim Password" />
          <button type="submit">Register</button>
        </div>
      )}
    </form>
  );
}

export default Form;
