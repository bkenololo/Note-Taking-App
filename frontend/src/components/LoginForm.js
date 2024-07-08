import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await store.login();

        // navigate
        navigate('/');
    }

    return (
        <form onSubmit={handleLogin} class='display-flex-column'>
            <label for='email'>Your email</label>
            <input onChange={store.updateLoginForm} value={store.loginForm.email} type="email" name="email" id="email"/>
            <label for='password'>Your password</label>
            <input onChange={store.updateLoginForm} value={store.loginForm.password} type="password" name="password" id="password"/>
            <button type="Submit" className="submit button">Submit</button>
        </form>
    )
}
