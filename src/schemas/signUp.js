import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
    fullname: Yup.string()
        .min(4, "Fullname must be 4 characters at least")
        .required("Fullname is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be 8 characters at least")
        .required("Password is required")
        // Método de validación, valida si un valor cumple con un patrón
        .matches(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            "Password should has lower, upper, nums"
        ),
    confirm: Yup.string()
        // Método de validación, valida que un valor se encuentre en una lista
        // específica de valores 
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        // Se valida que el valor del campo "confirm" coincida con el valor del campo "password"
        // Si no hay coincidencia o si el campo está vacío [ ,null] se muestra el mensaje de error
        .required("Confirmation required"),
    framework: Yup.string()
        .oneOf(["react", "vue", "angular"], "Must select a valid framework")
        .required("Framework required"),
    terms: Yup.bool()
        .oneOf([true], "You must accept the terms")
        .required("Required"),
});