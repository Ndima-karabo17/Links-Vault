import { Link } from "react-router-dom";
import pic1 from './assets/side-pic.png'



export default function signIn(){
    return(
        <>
        <div className="everything">
            <div className="form-div">
                <h1>Sign in with email</h1>

            <form action="">
             <label htmlFor="email">Email: <input type="email" className="email"/></label>
            <label htmlFor="password">Password: <input type="password" className="password"/></label>
            <label htmlFor="privacy"><input type="checkbox" className="terms"/>I agree to the <Link to="">Terms & Privacy</Link></label>
            <button>Sign In</button>
            </form>
            <label htmlFor="signup">Don't have account? <button>Sign Up</button></label>
            </div>
            <div className="image-div">
                <img src={pic1} alt="" />
            </div>
        </div>
        </>
    );
}