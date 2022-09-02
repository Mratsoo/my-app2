import { useState } from "react";



const Form = () => {

const [pseudo, setPseudo] = useState("");
const [password, setPassword] = useState("");
const [verifPasword, setVerifPassword] = useState("");



    return(<>

<form className="mb-5">
  <div className="mb-3">
    <label className="form-label">Pseudo</label>
    <input type="text" className="form-control"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="mb-3">
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    
    </>)
}

export default Form;


