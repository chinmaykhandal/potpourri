import "./Login.css"
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
function Login(){
    return(
    <div className="container">
            <h2 className="heading">Log in and share your recipes with the world!</h2>
            <div className="forms">
        <div className="login__page">

            <h3><b>Log In</b></h3>
            <LoginForm />

        </div>
        <div className="signup__page">

            <h3><b>First Time? Make an account!</b></h3>
            <SignupForm />

        </div>
        </div>
    </div>
    )
}

export default Login;