import AuthContextProvider from "./context/AuthContext";
import BlogContextProvider from "./context/BlogContext";
import Dashboard from "./pages/Dashboard";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
