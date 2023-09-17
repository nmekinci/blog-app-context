import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
      <Card
        sx={{
          maxWidth: 345,
          m: 2,
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
          textAlign: "center",
          backgroundColor: "#dede",
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="nmekinci"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            nmekinci
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            This web application created with React.js and context method. This application allows us as a user; registration, sign-in and out, creating new blogs as a draft (it means just owner can see it) and published (everyone can see it), if you like it just click the heart button and if you changed your decide again click it and give back your like. You can see a red heart which one you liked. User can sent a comment to all blogs as well. Also there is a view counter in each blog and it shows us uniq count of views. After created a new blog user can update or delete it whenever want. When I create this application I used Sweetalert and MUI library. And If there is a something wrong or If you want to say hello to me nm.ekinci@gmail.com 📧
          </Typography>
        </CardContent>

        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", padding: 2 }}
        >
          <IconButton aria-label="favorites" sx={{ gap: 1 }}>
            <LinkedInIcon sx={{ mt: 1, width: 18, height: 18 }} />
          </IconButton>
          <IconButton aria-label="favorites" sx={{ gap: 1 }}>
            <GitHubIcon sx={{ mt: 1, width: 18, height: 18 }} />
          </IconButton>
          <IconButton aria-label="favorites" sx={{ gap: 1 }}>
            <AlternateEmailIcon sx={{ mt: 1, width: 18, height: 18 }} />
          </IconButton>
        </Box>

        <Button
          size="small"
          variant="outlined"
          color="warning"
          onClick={handleClick}
          sx={{ my: 2, width: "90%" }}
        >
          Home
        </Button>
      </Card>
    </Box>
  );
};
export default About;
