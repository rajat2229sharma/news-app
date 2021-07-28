import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    newsImg: {
      width: "100%",
      height: "100vh",
    },
  }));

const HomePage = () => {

    const classes = useStyles();

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News App
                    </Typography>
                    {!isAuthenticated ?
                        <Button onClick={() => loginWithRedirect()} color="inherit">Login</Button>
                        :<Button onClick={() => logout()} color="inherit">Log Out </Button>
                    }
                </Toolbar>
            </AppBar>
            {!isAuthenticated &&
              <div>
                <img 
                  className={classes.newsImg} 
                  alt="news-img"
                  src="https://iotcdn.oss-ap-southeast-1.aliyuncs.com/News-Image.jpg" 
                />
              </div>
            }
        </div>
    )
}

export default HomePage;
