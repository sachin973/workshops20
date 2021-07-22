import "./App.css";
import {
  Container,
  Grid,
  makeStyles,

} from "@material-ui/core";
import FeaturedPost from "./components/FeaturedPost";
import PostCard from "./components/PostCard";
import Header from "./components/Header";
import { featuredPosts, sidebar } from "./Data/Data";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {

 

  const classes = useStyles();

  return (

      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
        <Sidebar
            title={sidebar.title}
            description={sidebar.description}

            social={sidebar.social}
          />
     

      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
 </Container>
  );
}

export default App;