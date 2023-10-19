import {
  Container,
  CssBaseline,
  Typography,
  makeStyles,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Avatar,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const [Data, setData] = useState({
    email: "",
    password: "",
    age: "",
    dob: "",
  });

  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Data);
  };

  const handleChange = (event) => {
    setData({
      ...Data,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={Data.age}
              onChange={handleChange}
              label="Age"
              name="age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <TextField
            variant="outlined"
            id="datetime-local"
            label="Date of Birth"
            type="datetime-local"
            name="dob"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            onChange={handleChange}
          />

          <br />
          <br />

          <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleSubmit}>
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default App;
