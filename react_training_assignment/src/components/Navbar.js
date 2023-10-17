// import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const useStyles = makeStyles((theme) => ({
//   title: {
//     flexGrow: 1,
//   },
//   link: {
//     color: "white",
//     textDecoration: "none",
//     fontSize: "20px",
//   },
//   mobileView: {
//     display: "flex",
//     [theme.breakpoints.down("md")]: {
//       flexDirection: "column",
//     },
//   },
// }));

// const Navbar = (props) => {
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const handleLogout = (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     props.handleChange("", false);
//     toast.success("User Logout Successfully");
//     navigate("/");
//   };

//   return (
//     <AppBar position="sticky" className={classes.mobileView}>
//       <Toolbar className={classes.mobileView}>
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
//           <Typography variant="h6" className={classes.title}>
//             <Link className={classes.link} to={`${"/assignment" + item}`}>
//               {"Assignment" + item}
//             </Link>
//           </Typography>
//         ))}
//         {props.isLogged ? (
//           <Link className={classes.link} onClick={handleLogout}>
//             Logout
//           </Link>
//         ) : (
//           <Link className={classes.link} to="/sign-up">
//             Sign Up
//           </Link>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Hidden,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawer: {
    width: 250,
  },
  desktopLinks: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    props.handleChange("", false);
    toast.success("User Logout Successfully");
    navigate("/");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div className={classes.drawer}>
      <List>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <ListItem
            button
            key={item}
            component={Link}
            to={`/assignment${item}`}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={`Assignment ${item}`} />
          </ListItem>
        ))}
        {props.isLogged ? (
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <ListItem
            button
            component={Link}
            to="/sign-up"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Sign Up" />
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          My App
        </Typography>
        <div className={classes.desktopLinks}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <Typography variant="h6" className={classes.title} key={item}>
              <Link className={classes.link} to={`/assignment${item}`}>
                {"Assignment " + item}
              </Link>
            </Typography>
          ))}
          {props.isLogged ? (
            <Link className={classes.link} onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link className={classes.link} to="/sign-up">
              Sign Up
            </Link>
          )}
        </div>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            {drawerContent}
          </Drawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
