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
import { BlogContext } from "../../context/BlogContext";
import { HdrEnhancedSelectOutlined } from "@mui/icons-material";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

const UpdateModal = ({detailData, handleClose}) => {
  const {getCategories,state,updateBlog} = React.useContext(BlogContext)

  const [updatedBlog, setUpdatedBlog] = React.useState({
    title: detailData?.title,
    content: detailData?.content,
    image: detailData?.image,
    category: detailData?.category,
    status: detailData?.status,
    // slug: detailData?.slug,
  })
const handleChange = (e) => {
e.preventDefault()
setUpdatedBlog({...updatedBlog, [e.target.name]:e.target.value})
}
const handleClick = () => {
  updateBlog(detailData?.id, updatedBlog)
  handleClose()
}

  console.log(detailData);
  React.useEffect(() => {
    getCategories()
  }, [])


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
          <Typography variant="h4">Update Blog</Typography>
          <TextField
            id="title"
            label="Title"
            variant="standard"
            name="title"
            value={updatedBlog?.title || ""}
            onChange={handleChange}
            sx={{ m: 1, minWidth: 120 }}
          />
          <TextField
            id="url"
            label="Image URL"
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            name="image"
            value={updatedBlog?.image || ""}
            onChange={handleChange}

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
              name="category"
            value={updatedBlog?.category || ""}
            onChange={handleChange}

            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {state.categories.map( (item) => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
              {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
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
              label="Status"
              name="status"
            value={updatedBlog?.status || ""}
            onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="d">Draft</MenuItem>
              <MenuItem value="p">Published</MenuItem>
              {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
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
            name="content"
            value={updatedBlog?.content || ""}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            size="large"
            color="success"
            sx={{ m: 1, minWidth: 120 }}
            disabled={ //! let use here yup or formik for validation
              updatedBlog?.title?.trim() && 
              updatedBlog?.content?.trim() && 
              updatedBlog?.image?.trim() && 
              updatedBlog?.category !== "" && updatedBlog?.category != "0" &&
              updatedBlog?.status?.trim() && updatedBlog?.status != "0" 
              ?
              false : true
            }
            onClick={handleClick}
          >
            Update Blog
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
export default UpdateModal;
