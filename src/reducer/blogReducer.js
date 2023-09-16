export const initialBlogState = {
  loading: false,
  id: "",
  title: "",
  content: "",
  image: "",
  category: "",
  publish_date: "",
  author: "",
  status: "",
  slug: "",
  comments: [],
  category_name: "",
  likes: 0,
  post_views: 0,
  comment_count: 0,
  likes_n: [],
  error: "",
  // key: "",
  data: [],
  categories:[],
  comment:[],
  like:[],
};
export const reducerBlog = (initialBlogState, action) => {
  switch (action.type) {
    case "START":
      return { ...initialBlogState, loading: true };
    case "SUCCESS":
      return { ...initialBlogState, loading: false, data: action.payload };
    case "SUCCESS-CAT":
      return { ...initialBlogState, loading: false, categories: action.payload };
    case "SUCCESS-COM":
      return { ...initialBlogState, loading: false, comment: action.payload };
    case "SUCCESS-LIKE":
      return { ...initialBlogState, loading: false, like: action.payload };
    case "FAIL":
      return { ...initialBlogState, loading: false };

    default:
      break;
  }
};
