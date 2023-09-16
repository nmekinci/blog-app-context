import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import { BlogContext } from "../context/BlogContext";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

// {
  //   "title": "1",
  //   "content": "1",
  //   "image": "https://st.depositphotos.com/1023102/1783/i/950/depositphotos_17839035-stock-photo-3d-word-first-on-white.jpg",
  //   "category": 1,
  //   "status": "d",
  //   "slug": ""
  // }



const NewBlog = () => {
const [newBlog, setNewBlog] = React.useState({
  title: "",
  content: "",
  image: "",
  category: "",
  status: "",
  slug: "",
})
  const {getCategories,createBlog,state} = React.useContext(BlogContext)

  React.useEffect(() => {
    getCategories()
  }, [])

  const handleClick = () => {
    createBlog(newBlog)
    setNewBlog({
      title: "",
      content: "",
      image: "",
      category: "",
      status: "",
      slug: "",
    })
  }
  const handleChange = (e) => {
    setNewBlog({...newBlog, [e.target.name]:e.target.value })
    // console.log(e.target.value);
  }
  // console.log(newBlog);

  // console.log(state.categories); 
  return (
    <Card
      sx={{
        backgroundColor: "#e2f5e2ec",
        maxWidth: 350,
        margin: "50px auto",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h4">New Blog</Typography>
          <TextField
            id="title"
            label="Title"
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            onChange={(e) => handleChange(e)}
            name="title"
            value={newBlog?.title}
          />
          <TextField
            id="url"
            label="Image URL"
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            onChange={(e) => handleChange(e)}
            name="image"
            value={newBlog?.image}
          />

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Category"
              // sx={centered}
              onChange={(e) => handleChange(e)}
            name="category"
            value={newBlog?.category}
            >
              <MenuItem value="0">
                <em>None</em>
              </MenuItem>
              {state.categories.map( (item) => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
              {/* <MenuItem value={1}>Trivia</MenuItem>
              <MenuItem value={1}>Trivia</MenuItem>
              <MenuItem value={1}>Trivia</MenuItem>
              <MenuItem value={2}>Travel</MenuItem>
              <MenuItem value={3}>Web Development</MenuItem>
              <MenuItem value={4}>AI</MenuItem>
              <MenuItem value={5}>Science</MenuItem>
              <MenuItem value={6}>Fashion</MenuItem> */}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Category"
              onChange={(e) => handleChange(e)}
            name="status"
            value={newBlog?.status}
            >
              <MenuItem value="0">
                <em>None</em>
              </MenuItem>
              <MenuItem value="d">Draft</MenuItem>
              <MenuItem value="p">Published</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="standard-multiline-static"
            label="Content"
            multiline
            rows={4}
            // defaultValue="Default Value"
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            onChange={(e) => handleChange(e)}
            name="content"
            value={newBlog?.content}
          />

          <Button
          disabled={ //! let use here yup or formik for validation
            newBlog?.title?.trim() && 
            newBlog?.content?.trim() && 
            newBlog?.image?.trim() && 
            newBlog?.category !== "" && newBlog?.category != "0" &&
            newBlog?.status?.trim() && newBlog?.status != "0" 
            ?
            false : true
          }
            variant="contained"
            size="large"
            color="success"
            sx={{ m: 1, minWidth: 120 }}
            onClick={handleClick}
          >
            Create New Blog
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
export default NewBlog;
