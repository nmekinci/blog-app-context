import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";
import CommentForm from "../components/blog/CommentForm";

const MyBlog = () => {
  const navigate = useNavigate();
  const { getBlogs, postLikes, state, getBlogWithId } =
    React.useContext(BlogContext);
  const { currentUser } = React.useContext(AuthContext);
  const [toggle, setToggle] = React.useState({isActive: false, itemId :""});

  // console.log(currentUser);
  // console.log(state?.data);

  // const handleClick = () => {
  //   // navigate("/blog-form")
  // };
  const handleToggle = (item) => {
    setToggle({"isActive":!toggle.isActive , "itemId" :item});
    // console.log(item);
  };
  // console.log(toggle);
  const filteredData = state?.data?.filter(
    (item) => item?.author == currentUser?.user?.username
  );
  // console.log(filteredData);
  // console.log(filteredData?.length);
React.useEffect(() => {
  getBlogs()
}, [])

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", m: 3 }}
    >
      {filteredData?.length > 0
        ? filteredData?.map((item) => (
            <Card
              key={item?.id}
              sx={{
                maxWidth: 345,
                m: 2,
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={item?.image}
                title={item?.author}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  {item?.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "justify" }}
                >
                  {item?.content}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1, textAlign: "justify" }}
                >
                  {item?.publish_date}
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Avatar
                    src="/broken-image.jpg"
                    sx={{ mt: 1, width: 24, height: 24 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, textAlign: "justify" }}
                  >
                    {item?.author}
                  </Typography>
                </Box>
              </CardContent>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 2,
                }}
              >
                <Box sx={{ gap: 2 }}>
                  <IconButton
                    aria-label="favorites"
                    sx={{ gap: 1 }}
                    onClick={() => postLikes(item?.id)}
                  >
                    <FavoriteIcon
                      sx={{
                        mt: 1,
                        width: 18,
                        height: 18,
                        color: item?.likes_n?.some(
                          (i) => i?.user_id == currentUser?.user?.id
                        )
                          ? "red"
                          : "",
                      }}
                    />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {item?.likes}
                    </Typography>
                  </IconButton>
                  <IconButton aria-label="favorites" sx={{ gap: 1 }} onClick={()=> handleToggle(item?.id)}>
                    <ChatIcon sx={{ mt: 1, width: 18, height: 18 }}  />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {item?.comment_count}
                    </Typography>
                  </IconButton>
                  <IconButton aria-label="favorites" sx={{ gap: 1 }}>
                    <RemoveRedEyeIcon sx={{ mt: 1, width: 18, height: 18 }} />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {item?.post_views}
                    </Typography>
                  </IconButton>
                </Box>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    navigate("/details/" + item?.id + "/");
                    getBlogWithId(item?.id);
                  }}
                >
                  Read More
                </Button>
              </Box>
              <Box sx={toggle.isActive && item?.id == toggle.itemId ? { display: "block" } : { display: "none" }}>
                <CommentForm id={item?.id} />
              </Box>
            </Card>
          ))
        : `There is NO Blogs created by
      ${currentUser?.user?.username}`}
    </Box>
  );
};
export default MyBlog;
