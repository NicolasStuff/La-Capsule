import React, {useState} from 'react';
import './App.css';
import {Input,Button} from 'antd';
import {Link, Redirect} from 'react-router-dom'

function ScreenHome() {

  const [signUpUsername, setsignUpUsername] = useState('')
  const [signUpEmail , setsignUpEmail ] = useState('')
  const [signUpPassword , setsignUpPassword ] = useState('')
  const [UserExists, setUserExists] = useState(false)
  const [login, setLogin] = useState(false)
  const [loginSignUp, setLoginSignUp] = useState(false)
  const [signInEmail, setsignInEmail] = useState('')
  const [signInPassword, setsignInPassword] = useState('')
  const [myErrorSignIn, setmyErrorSignIn] = useState('')
  const [myErrorSignUp, setmyErrorSignUp] = useState('')

  var handleSubmitSignUp = async () => {
    const data = await fetch(`/sign-up`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `usernameFromFront=${signUpUsername}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`
    })
    const body = await data.json();
    console.log(body)
    if(body.result === false ){
      setLoginSignUp(true)
    } else if (body.result === false || signInEmail === "") {
      setmyErrorSignUp('Une erreur est apparu, veillez recommencer')
    }
  } 
  if(loginSignUp) {
    return (
      <Redirect to="/screensource"></Redirect>
    )
  }

  var handleSubmitSignIn = async () => {
    const data = await fetch(`/sign-in`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
    })
    const body = await data.json();
    console.log(body)
    if(body.result === true){
      setLogin(true)}
    else{
     setmyErrorSignIn('Username ou mot de passe incorrect')
    }
  }
    if(login) {
      return (
        <Redirect to="/screensource"></Redirect>
      )
    } else {
      return (
      <div className="Login-page" >

            {/* SIGN-IN */}

            <div className="Sign">

                    <Input className="Login-input" placeholder="arthur@lacapsule.com" onChange={(e) => setsignInEmail(e.target.value)} value={signInEmail} />

                    <Input.Password className="Login-input" placeholder="password" onChange={(e) => setsignInPassword(e.target.value)} value={signInPassword}/>
                    
                    <p>{myErrorSignIn}</p>
                    
                    <Button style={{width:'80px'}} type="primary" onClick={ () => handleSubmitSignIn()}>Sign-in</Button>

            </div>

            {/* SIGN-UP */}

            <div className="Sign">

                    <Input className="Login-input" placeholder="Username" onChange={(e) => setsignUpUsername(e.target.value)} value={signUpUsername} />

                    <Input className="Login-input" placeholder="email" onChange={(e) => setsignUpEmail(e.target.value)} value={signUpEmail}/>

                    <Input.Password className="Login-input" placeholder="password" onChange={(e) => setsignUpPassword(e.target.value)} value={signUpPassword}/>

                    <p>{myErrorSignUp}</p>

                    <Button style={{width:'80px'}} type="primary" onClick={ () => handleSubmitSignUp() }>Sign-up</Button>
            </div>

        </div>
    );
  }
}


export default ScreenHome;
