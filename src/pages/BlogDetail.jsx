import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForumIcon from "@mui/icons-material/Forum";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate, useParams } from "react-router-dom";
import { pink } from "@mui/material/colors";
import CommentForm from "../components/blog/CommentForm";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from "@mui/material/Modal";
import UpdateModal from "../components/blog/UpdateModal";
import Swal from "sweetalert2";

const BlogDetail = () => {
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
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(id);
  const { state: authState, currentUser } = React.useContext(AuthContext);
  const { getBlogWithId, state, getBlogs, deleteBlog, postLikes } =
    React.useContext(BlogContext);
  const [toggle, setToggle] = React.useState(false);
  const navigate = useNavigate();

  // console.log(authState?.user?.id);
  // console.log(detailData?.id);

  const handleClick = () => {
    navigate(-1);
  };
  const handleDelete = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
          deleteBlog(id);
          navigate("/");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };

  React.useEffect(() => {
    getBlogs();
  }, []);
  // console.log(state?.data);
  const detailData = state?.data?.filter((item) => item?.id == id)[0];
  // console.log(detailData);
  // console.log(currentUser);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        m: 3,
        backgroundColor: "#dede",
      }}
      key={detailData?.id}
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
          image={detailData?.image}
          title={detailData?.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {detailData?.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            {detailData?.content}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, textAlign: "justify" }}
          >
            {detailData?.publish_date}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar
              src="/broken-image.jpg"
              sx={{ mt: 1, width: 24, height: 24, bgcolor: pink[500] }}
            />
            <Typography variant="body2" sx={{ mt: 1, textAlign: "justify" }}>
              {detailData?.author}
            </Typography>
          </Box>
        </CardContent>

        <Box
          sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
        >
          <Box sx={{ gap: 2 }}>
            <IconButton
              aria-label="favorites"
              sx={{ gap: 1 }}
              onClick={() => postLikes(id)}
            >
              <FavoriteIcon
                sx={{
                  mt: 1,
                  width: 18,
                  height: 18,
                  color: detailData?.likes_n?.some(
                    (i) => i?.user_id == currentUser?.user?.id
                  )
                    ? "red"
                    : "",
                }}
              />
              <Typography variant="body2" sx={{ mt: 1 }}>
                {detailData?.likes}
              </Typography>
            </IconButton>
            <IconButton
              aria-label="favorites"
              sx={{ gap: 1 }}
              onClick={handleToggle}
            >
              <ForumIcon sx={{ mt: 1, width: 18, height: 18 }} />
              <Typography variant="body2" sx={{ mt: 1 }}>
                {detailData?.comment_count}
              </Typography>
            </IconButton>
            <IconButton aria-label="favorites" sx={{ gap: 1 }}>
              <RemoveRedEyeIcon sx={{ mt: 1, width: 18, height: 18 }} />
              <Typography variant="body2" sx={{ mt: 1 }}>
                {detailData?.post_views}
              </Typography>
            </IconButton>
          </Box>
          <Button size="small" variant="contained" onClick={handleClick}>
            Back
          </Button>
        </Box>
        <Box
          sx={
            { margin: 2 }
            //   detailData?.id == authState?.user?.id
            //     ? { display: "block" }
            //     : { display: "none" }
          }
        >
          <Button
            disabled={
              currentUser?.user?.username == detailData?.author ? false : true
            }
            size="small"
            variant="contained"
            color="success"
            onClick={handleOpen}
          >
            Update
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <UpdateModal detailData={detailData} handleClose={handleClose} />
          </Modal>

          <Button
            disabled={
              currentUser?.user?.username == detailData?.author ? false : true
            }
            size="small"
            variant="contained"
            color="warning"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Box>

        <Box sx={toggle ? { display: "block" } : { display: "none" }}>
          <CommentForm id={id} />
        </Box>
      </Card>
    </Box>
  );
};
export default BlogDetail;
