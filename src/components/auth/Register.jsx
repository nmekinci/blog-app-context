import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import LockIcon from "@mui/icons-material/Lock"
// import image from "../assets/result.svg"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
// import { Link } from "react-router-dom"

import { Formik } from "formik"
// import useAuthCall from "../hooks/useAuthCall"
import RegisterForm, { registerSchema } from "./RegisterForm"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Register = () => {
//   const { register } = useAuthCall()
  const {createUser} = useContext(AuthContext)

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        direction="row"
        // rowSpacing={{ sm: 3 }}
        sx={{
          minHeight: "100vh",
          p: 2,
          maxWidth: "600px",
          margin:"20px auto"
        }}
      >
        <Grid item>
          <Typography variant="h3" color="primary" align="center">
            Blog APP
          </Typography>
        </Grid>

        <Grid item xs={8} sm={9} md={10} lg={11} xl={12} >
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
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              image:"",
              bio:"",
              password: "",
              password2: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              createUser(values)
              actions.resetForm()
              actions.setSubmitting(false)
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/auth">Do you have an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register
