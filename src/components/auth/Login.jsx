import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
// import image from "../assets/result.svg"
// import { Link } from "react-router-dom"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

// import { login } from "../hooks/useAuthCall"
// import useAuthCall from "../hooks/useAuthCall"

const Login = () => {
  //   const { login } = useAuthCall()
  const { state: authState, loginUser,logoutUser } = useContext(AuthContext);

  //? external validasyon schema
  const loginSchema = object({
    email: string().email("Email is not VALID").required("REquired Area"),
    password: string()
      .required("Required Area")
      .min(8, "At least 8 Chars")
      .max(16, "Max 16 chars")
      .matches(/\d+/, "At least include a number")
      .matches(/[a-z]/, "At least include a lowercase letter")
      .matches(/[A-Z]/, "At least include an uppercase letter")
      .matches(/[!,?{}><%&$#£+-.]+/, "At least include a special char"),
  });
  useEffect(() => {
    logoutUser()
  }, [])
  

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        direction="row"
        sx={{
          height: "100vh",
          p: 2,
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            BLOG APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={12}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, action) => {
              loginUser(values);
              action.resetForm();
              action.setSubmitting(false);
            }}
          >
            {({ handleChange, handleBlur, values, touched, errors }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                  />
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have NOT an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
