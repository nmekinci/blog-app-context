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
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            Title
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
