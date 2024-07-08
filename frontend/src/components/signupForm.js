import authStore from "../stores/authStore"
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        await store.signup();
        navigate('/login');
        
    }

    return (
        // <form onSubmit={handleSignup} class='display-flex-column'>
        //     <label for='email'>Your email</label>
        //     <input onChange={store.updateSignupForm} value={store.signupForm.email} type="email" name="email" id='email' />
        //     <label for='password'>Create your password</label>
        //     <input onChange={store.updateSignupForm} value={store.signupForm.password} type="password" name="password" id='password' />
        //     <button type="Submit" className="submit button">Submit</button>
        // </form>
        <h1>Sorry bruv not for public! This is just a learning project 🙂</h1>
    )
}
