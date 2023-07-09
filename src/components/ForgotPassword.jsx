import { useContext } from "react";
import { useFormik } from "formik";

import SignContext from "../context/SignContext";
import { forgotPasswordSchema } from "../schemas/forgotPassword";

const ForgotPassword = () => {

    const { setStep } = useContext(SignContext);

    const onSubmit = async (values, actions) => {
        console.log(values)
        console.log(actions);

        // Simula el envío de datos al backend
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        console.log("%cExito!", "color: YellowGreen",
        `Se ha enviado su password a la cuenta ${values.email}!`
        );

        // Limpia el formulario
        actions.resetForm();
    };

    // Hook useFormik: Permite manejar la información del formulario
    const { values, errors, handleSubmit, handleChange, handleBlur, isSubmitting} = useFormik({
        // Establece los valores iniciales de los campos del formulario
        initialValues: {
            email: ""
        },
        // Especifica un esquema de validación para el formulario
        validationSchema: forgotPasswordSchema,
        // Función que se ejecuta cuando se envía el formulario
        onSubmit
    });


    return (
        <main>
        <h3>Forgot password?</h3>
        <div className="card">
            <form autoComplete="off" onSubmit={handleSubmit} noValidate>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    autoFocus
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email ? "error-forgot-input" : ""}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
            </fieldset>
            <button type="submit"
                disabled={isSubmitting}>Remember me!</button>
            </form>
        </div>
        <p>
            Already have an account? <span
                onClick={() => setStep("signin")}
            >Sign in!</span>
        </p>
        </main>
    );
};

export default ForgotPassword;