//Import React Module for JSX Manipulation
import React from "react";
//---------------------------------------------------------------------

//Import Input component:
import Input from "./Input";

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      <Input type="password" placeholder="Confrim Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
