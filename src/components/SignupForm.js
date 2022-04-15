import "./SignupForm.css"
function SignupForm(){
    return(
        <form>
        <div className="new-expense__control">
        <input type='text' className="userid" placeholder="Unique Username"/>
        <input type='text' className="email" placeholder="Email Address"/>
        <input type='text' className="pwd" placeholder="Create Password"/>
        </div>
        <div className="new-expense__actions">
                    <button type="submit" className="button">Register</button>

                </div>
        </form>
    )
}

export default SignupForm;