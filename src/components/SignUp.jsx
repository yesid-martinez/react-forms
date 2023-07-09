import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import SignContext from "../context/SignContext";
import {signUpSchema} from "../schemas/signUp.js";

const SignUp = () => {

    const { setStep } = useContext(SignContext);

    const initialValues = {
        fullname: "",
        email: "",
        password: "",
        confirm: "",
        framework: "",
        terms: false,
    };

    const onSubmit = () =>{
        console.log("Form submitted!");
    };

    return (
        <main>
        <h3>Welcome, join us!</h3>
        <div className="card">
            <Formik
                initialValues={initialValues}
                validationSchema={signUpSchema}
                onSubmit={onSubmit}
            >
                <Form autoComplete="off">
                    <fieldset>
                        <label htmlFor="fullname">Full name</label>
                        <Field name="fullname" type="text" id="fullname" autoFocus />
                        <ErrorMessage
                            name="fullname"
                            component="p"
                            className="error-message"
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" id="email" />
                        <ErrorMessage
                            name="email"
                            component="p"
                            className="error-message"
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" id="password" />
                        <ErrorMessage
                            name="password"
                            component="p"
                            className="error-message"
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="confirm">Confirm password</label>
                        <Field name="confirm"type="password" id="confirm" />
                        <ErrorMessage
                            name="confirm"
                            component="p"
                            className="error-message"
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="framework">Favorite framework</label>
                        <Field id="framework" name="framework" as="select">
                        <option value="">Select your framework</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                        </Field>
                        <ErrorMessage
                            name="framework"
                            component="p"
                            className="error-message"
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="terms">
                        <Field name="terms" type="checkbox" id="terms" /> Accept terms and conditions
                        </label>
                        <ErrorMessage
                            name="terms"
                            component="p"
                            className="error-message"
                        />
                    </fieldset>
                    <button type="submit">register</button>
                </Form>
            </Formik>
        </div>
        <p>
            Already have an account? <span
                onClick={() => setStep("signin")}
            >Sign in!</span>
        </p>
        </main>
    );
};

export default SignUp;