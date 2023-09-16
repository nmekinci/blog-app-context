import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box, IconButton, Modal } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForumIcon from "@mui/icons-material/Forum";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import { pink } from "@mui/material/colors";
import CommentForm from "./CommentForm";
import UpdateModal from "./UpdateModal";
import Swal from 'sweetalert2'

const BlogForm = () => {
  const [toggle, setToggle] = React.useState(false);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleClick = () => {
    navigate("/my-blog");
  };
  const handleDelete = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };

  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        m: 3,
        backgroundColor: "#dede",
      }}
    >
      <Card
        sx={{
          // maxWidth: 345,
          m: 2,
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
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
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, textAlign: "justify" }}
          >
            Date & Time
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar
              src="/broken-image.jpg"
              sx={{ mt: 1, width: 24, height: 24, bgcolor: pink[500] }}
            />
            <Typography variant="body2" sx={{ mt: 1, textAlign: "justify" }}>
              Admin
            </Typography>
          </Box>
        </CardContent>

        <Box sx={{ padding: 2 }}>
          <Box sx={{ gap: 2, textAlign: "center", mb: 2 }}>
            <IconButton aria-label="favorites" sx={{ gap: 1 }}>
              <FavoriteIcon sx={{ mt: 1, width: 18, height: 18 }} />
              <Typography variant="body2" sx={{ mt: 1 }}>
                5
              </Typography>
            </IconButton>
            <IconButton
              aria-label="favorites"
              sx={{ gap: 1 }}
              onClick={handleToggle}
            >
              <ForumIcon sx={{ mt: 1, width: 18, height: 18 }} />
              <Typography variant="body2" sx={{ mt: 1 }}>
                5
              </Typography>
            </IconButton>
            <IconButton aria-label="favorites" sx={{ gap: 1 }}>
              <RemoveRedEyeIcon sx={{ mt: 1, width: 18, height: 18 }} />
              <Typography variant="body2" sx={{ mt: 1 }}>
                5
              </Typography>
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <Button
                size="small"
                variant="contained"
                color="success"
                onClick={handleOpen}
              >
                update
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <UpdateModal />
                </Box>
              </Modal>
            </div>

            <Button
              size="small"
              variant="contained"
            //   color="error"
              onClick={handleClick}
            >
              Back
            </Button>
            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Box>
        </Box>

        <Box sx={toggle ? { display: "block" } : { display: "none" }}>
          <CommentForm />
        </Box>
      </Card>
    </Box>
  );
};
export default BlogForm;
