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
import { BlogContext } from "../../context/BlogContext";
import { initialBlogState, reducerBlog } from "../../reducer/blogReducer";
import { AuthContext } from "../../context/AuthContext";

const BlogCard = () => {
  const navigate = useNavigate();
  const { currentUser } = React.useContext(AuthContext);

  const { getBlogs, postLikes, state, getBlogWithId } = React.useContext(BlogContext);
  // const [state, dispatch] = React.useReducer(reducerBlog, initialBlogState);

  React.useEffect(() => {
    getBlogs();
    // console.log(state.data);
  }, []);
  const handleClick = (e) => {
    postLikes(e);
    // getBlogs()
  };
  // console.log(currentUser);
  // console.log(state?.data);
  // console.log(state);
  // const handleClick = (id) => {
  // navigate("/blog-detail/" + `${id}` + "/")
  // console.log(id);
  // }
  // console.log(state.data);
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", m: 3 }}
    >
      
      {state?.data?.map((item) => (
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
              <Typography variant="body2" sx={{ mt: 1, textAlign: "justify" }}>
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
                disabled={currentUser?.user?.id ? false : true}
                //! above code line provide us to disable button if user logged out
                aria-label="favorites"
                sx={{ gap: 1 }}
                onClick={() => handleClick(item?.id)}
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
                    //! the above line will provide us if the user click the like button like button will appear red else default
                  }}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {item?.likes}
                </Typography>
              </IconButton>
              <IconButton aria-label="favorites" sx={{ gap: 1 }}>
                <ChatIcon sx={{ mt: 1, width: 18, height: 18 }} />
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
              onClick={() =>
                 {navigate("/details/" + item?.id + "/")
                 getBlogWithId(item?.id)}
                }
            >
              {/* <Button size="small" variant="contained" onClick={() => handleClick(item.id)}> */}
              Read More
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
};
export default BlogCard;
