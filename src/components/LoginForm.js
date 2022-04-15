import "./LoginForm.css"
function LoginForm(){
    return(
        <form>
        <div className="new-expense__control">
        <input type='text' className="email" placeholder="Email Address"/>
        <input type='text' className="pwd" placeholder="Password"/>
        </div>
        <div className="new-expense__actions">
                    <button type="submit" className="button">LogIn</button>

                </div>
        </form>
    )
}

export default LoginForm;