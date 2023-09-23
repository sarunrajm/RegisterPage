import { TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';
function App() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [conpassword,setConpassword]=useState("")

  const [isNameValid,setisNameValid]=useState(true)
  const [isEmailValid,setisEmailValid]=useState(true)
  const [isPasswordValid,setisPasswordValid]=useState(true)
  const [isConpasswordValid,setisConpasswordValid]=useState(true)

  const handleInput=(e)=>{
    e.preventDefault()
    if(!name || !email || !password || !conpassword){
      alert("Please fill the completely")
    }else{
      alert(`
    name:${name}
    email:${email}
    password:${password}
    confirmed password:${conpassword}
    `)
    }
  }
  const validateInput = (e)=>{
    console.log(e.target.value);
    const {name,value}=e.target
    if (name=="name"){
        if(!!value.match(/^[a-zA-Z ]+$/)){
          setName(value)
          setisNameValid(true) 
        }else{
          setisNameValid(false) 
          setName(value)
        }
    }else if(name=="email"){
      var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(value.match(mailformat)){
          setEmail(value)
          setisEmailValid(true)
        }else{
          setisEmailValid(false) 
          setEmail(value)
        }
      
    }else if(name=="password"){
      if(value.length>7){
        setPassword(value)
        setisPasswordValid(true)
      }else{
        setPassword(value)
        setisPasswordValid(false)

      }
    }else{
      if(value==password){
        setConpassword(value)
        setisConpasswordValid(true)
      }else{
        setisConpasswordValid(false)
        setConpassword(value)
      }
    }


  }
  return (
   
   <>
   <section className=" gradient-custom bg-dark">
  <div className="container py-5 h-100 bg-dark">
    <div className="row d-flex justify-content-center align-items-center h-100 bg-dark">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 bg-dark">
        <div className="card bg-light" style={{borderRadius: "1rem",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
        <h2 className="fw-bold text-center mt-5 mb-5 text-uppercase text-secondary" >Register</h2>

        <div className="hr mb-1 "></div>
          <div className="card-body p-5 text-center">

            <div className="mt-md-4">


              
              
              <form onSubmit={(e)=>handleInput(e)}> 
              <div className="form-outline form-white mb-4">
              <TextField  id="typeEmailX" label="Name" color="success" variant="outlined" className="bg-light form-control-lg w-100 "  for="typeEmailX" value={name || ''} name='name' onChange={(e)=>validateInput(e)}></TextField>
              {
                !isNameValid && 
                <div className='valid text-danger'>*Invalid input</div>
              }

              </div>

              <div className="form-outline form-white mb-4">
              <TextField  id="typeEmailX" label="Email" color="success" variant="outlined" className="bg-light form-control-lg w-100 "  for="typeEmailX" value={email || ''} name='email' onChange={(e)=>validateInput(e)}></TextField>
              {
                !isEmailValid && 
                <div className='valid text-danger'>*Invalid input</div>
              }

              </div>

              <div className="form-outline form-white mb-4">
              <TextField  id="typeEmailX" label="Password" color="success" variant="outlined" className="bg-light form-control-lg w-100 " type='password'  for="typeEmailX" value={password || ''} name='password' onChange={(e)=>validateInput(e)}></TextField>
              {
                !isPasswordValid && 
                <div className='valid text-danger'>*Should contain atleast 8 characters</div>
              }
              </div>
              

              <div className="form-outline form-white mb-4">
              <TextField  id="typeEmailX" label="Confirm Password" color="success" variant="outlined" className="bg-light form-control-lg w-100 " type='password' for="typeEmailX" value={conpassword || ''} name='conpassword' onChange={(e)=>validateInput(e)}></TextField>
              {
                !isConpasswordValid && 
                <div className='valid text-danger'>*password does't match</div>
              }
              </div>

              <p className="small mb-2"><a className="text-dark" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-dark btn-lg px-5 mb-3" type="submit" disabled={isNameValid && isEmailValid && isPasswordValid && isConpasswordValid ? false:true}>Sign Up</button>

              </form>
            

            </div>
            <div>
              <p className="mb-0">Already have an account?<a href="#!" className="text-secondary fw-bold" style={{textDecoration:"none"}}> Sign In</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  );
}

export default App;
