import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import zIndex from "@mui/material/styles/zIndex"
import { Form } from "formik"
import { object, string } from "yup"

export const registerSchema = object({
  username: string()
    .max(20, "Username should be max 20 chars")
    .required("username required"),
  first_name: string()
    .max(20, "Name should be max 20 chars")
    .required("first_name is required"),
  last_name: string()
    .max(20, "Lastname should be max 20 chars")
    .required("last_name required"),

  email: string().email().required("Email reqired"),
  password: string()
    .required("password required")
    .min(8, "password should be min 8 chars")
    .max(20, "password should be max 20 chars")
    .matches(/\d+/, "Password should includes a number")
    .matches(/[a-z]/, "Password should includes a lowercase letter")
    .matches(/[A-Z]/, "Password should includes an uppercase letter")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password should includes a special char"),
})

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <Box>
      <Form >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2}}>
          <TextField
            label="User Name"
            name="username"
            id="userName"
            type="text"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={errors.username}
          />
          <TextField
            label="First Name"
            name="first_name"
            id="firstName"
            type="text"
            variant="outlined"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.first_name && Boolean(errors.first_name)}
            helperText={errors.first_name}
          />
          <TextField
            label="Last Name"
            name="last_name"
            id="last_name"
            type="text"
            variant="outlined"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.last_name && Boolean(errors.last_name)}
            helperText={errors.last_name}
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="Image"
            name="image"
            id="image"
            type="text"
            variant="outlined"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.image && Boolean(errors.image)}
            helperText={errors.image}
          />
          <TextField
            label="Bio"
            name="bio"
            id="bio"
            type="text"
            variant="outlined"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bio && Boolean(errors.bio)}
            helperText={errors.bio}
          />
          <TextField
            label="Password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={errors.password}
          />
          <TextField
            label="Password Again"
            name="password2"
            id="password2"
            type="password"
            variant="outlined"
            value={values.password2}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password2 && Boolean(errors.password2)}
            helperText={errors.password2}
          />
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Box>
      </Form>
    </Box>
  )
}

export default RegisterForm
