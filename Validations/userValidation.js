import * as yup from "yup";

// Esquema de validación de usuario
// Estructura de validación de datos

const userSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default userSchema;
