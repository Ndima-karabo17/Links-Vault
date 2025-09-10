
import pic1 from './assets/side-pic.png'


export default function Signup(){
    
    return(
        <>
        <div className="everything">
            <div className="form-div">
                <h1>Sign in with email</h1>

            <form action="">
             <label htmlFor="email">Email: <input type="email" className="email"/></label>
            <label htmlFor="password">Password: <input type="password" className="password"/></label>
            <label htmlFor="password">Confirm Password: <input type="password" className="password1"/></label>
             <button>Sign Up</button>
            </form>
           
            </div>
            <div className="image-div">
                <img src={pic1} alt="" />
            </div>
        </div>
        </>
    )
}