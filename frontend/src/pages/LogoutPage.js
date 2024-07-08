import { useEffect } from "react";
import authStore from "../stores/authStore";

export default function LogoutPage() {
    const store = authStore();

    useEffect(() => {
        store.logout();
    }, [])

    return(
        <div className='margin-left-100px max-width'>
            <h1>You are logged out</h1>
            <hr></hr>
        </div>

    );

}
