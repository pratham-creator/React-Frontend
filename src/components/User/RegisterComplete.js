import { useEffect } from 'react'
import { auth } from "./firebase";
import { toast } from 'react-toastify';
import { createOrUpdateUser } from "../../api/auth";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailLink, updatePassword } from "firebase/auth";

const RegisterComplete = () => {
    const navigate = useNavigate();
    useEffect(() => {
        handleSubmit();
    });

    const handleSubmit = async () => {
        //e.preventDefault();
        let name = window.localStorage.getItem("nameForRegistration");
        let email = window.localStorage.getItem("emailForRegistration");
        let password = window.localStorage.getItem("passwordForRegistration");

        try {
            console.log("Email ===>>", email);
            const result = await signInWithEmailLink(auth, email, window.location.href);
            console.log("isVerify ==>>", result.user.emailVerified);
            if (result.user.emailVerified) {

                window.localStorage.removeItem("emailForRegistration");     //remove user email from local storage
                window.localStorage.removeItem("passwordForRegistration");     //remove user email from local storage
                window.localStorage.removeItem("nameForRegistration");
                let user = auth.currentUser;     //get user

                await updatePassword(user, password);    //add password of user to firebase
                console.log("hekkko");
                const idTokenResult = await user.getIdTokenResult();

                createOrUpdateUser(idTokenResult.token, name)
                    .then((res) => {
                        console.log(res.data);
                        toast.success("Registered Successfully");
                        window.localStorage.setItem("email", email);
                        window.localStorage.setItem("authtoken", idTokenResult.token);
                        navigate("/");
                    })
                    .catch((err) => toast.error(err));
            }
        }
        catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6  offset-md-3">
                    {/* {
                        success ? (<h1>Registration Completed</h1>): (<h1>Registration Unsuccessful</h1>)
                    } */}
                    <h1>Registration Completed</h1>
                </div>
            </div>
        </div>
    );
};
export default RegisterComplete;