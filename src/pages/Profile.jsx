import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { CardMedia, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { currentUser } = React.useContext(AuthContext);
// console.log(currentUser);
  return (
    <Box sx={{ display:"flex", justifyContent:"center",margin:4 }}>
      <Box
        sx={{
          width: 600,
          height: "100%",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
        }}
      >
        <CardMedia
          sx={{ margin:2 , height: 200 }}
          image={currentUser?.user?.image == "" ?
          "https://i1.sndcdn.com/avatars-000657382289-iowytg-t500x500.jpg"
          :
          currentUser?.user?.image
        }
          
        />
        <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {currentUser?.user?.username}
          </Typography><Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {currentUser?.user?.email}
          </Typography>
      </Box>
    </Box>
  );
};
export default Profile;
