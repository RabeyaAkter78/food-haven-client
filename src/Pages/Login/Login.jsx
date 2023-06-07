import { useContext, useEffect, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const [disabled, setDesabled] = useState(true);
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);

    }, [])

    // Recaptcha validation:
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDesabled(false);
        }
        else {
            setDesabled(true)
        }
    }

    // Submit Button :
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'SuccessFully LogIn',
            showConfirmButton: false,
            timer: 1500
        });
        navigate(from, { replace: true });

    }


    return (
        <div>
            <Helmet>
                <title>Food Haven | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:w-1/2 lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <Form onSubmit={handleSubmit} className="card flex-shrink-0 md:w-1/2 max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="Type The Captcha Above" className="input input-bordered" />
                                {/* <button  className="btn btn-outline btn-xs">Validate</button> */}

                            </div>
                            {/* TODO: make button disabled for captcha */}
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                            <div>
                                <h3>New Here?Please <Link to="/signup">SignUp</Link> </h3>
                                <Link to="/" className="btn btn-primary form-control mt-6">Go To Home</Link>
                            </div>
                            

                        </div>

                    </Form>
                    <SocialLogin></SocialLogin>
                </div>
               
            </div>

        </div>
    );
};

export default Login;