import { Button,Card, CardContent,CardActions,Typography,makeStyles} from '@material-ui/core';

const useStyle = makeStyles((themes) =>({

title: {
    color: "white",
    fontSize: 40,
    fontFamily: "Montserrat",
},

title1: {
    color:"white",
},

cover: {
    backgroundImage:  'url(https://images.unsplash.com/photo-1551963831-b3b1ca40c98e)',
   backgroundPosition: "center",
   padding: "35px 25px",
},

btn: {
    color: "white",
},

}));



const FeaturedPost = () => {
    const classes = useStyle();
    return (
       
            <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                 <Typography className={classes.title}>React Blog</Typography>
                 <Typography variant="h5" className={classes.title1} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit cumque consectetur eligendi ex pariatur delectus, reprehenderit fugiat excepturi voluptatem ad neque commodi accusantium vel sapiente similique rerum asperiores, veritatis est!</Typography>
            </CardContent>
            <CardContent>
                <CardActions>
                    <Button variant="text" className={classes.btn}>
                        Read More...
                    </Button>
                </CardActions>
            </CardContent>
            </Card>
      
    )
};

export default FeaturedPost;

