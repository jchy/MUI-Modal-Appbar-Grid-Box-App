import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";
import "./styles.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import Item from "@mui/material/Item";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import ResponsiveAppBar from "./Navbar";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
// CSS in JS
// React Native
const useStyles = makeStyles({
  paper: {
    height: "12rem",
    margin: "2rem",
    padding: "1rem"
  }
});

export default function App() {
  const [state, setState] = React.useState(false);
  const [select, setSelect] = React.useState(1);
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className="App">
      <ResponsiveAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} lg={3} xl={2} md={4}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2} md={4}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2} md={4}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2} md={4}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2} md={4}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2} md={4}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2} md={4}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2} md={4}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2} md={4}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2} md={4}>
            <Item>1</Item>
          </Grid>

          <Grid item xs={1} sm={2} lg={3} xl={2} md={3}>
            <Item>1</Item>
          </Grid>
        </Grid>
        {/* </Box>
    </Container>
    <Container maxWidth="xl" className="App"> */}
        <Modal open={state} onClose={() => setState(false)}>
          <Paper className={classes.paper}>
            <Box>Welcome Sir</Box>
          </Paper>
        </Modal>
        <Box>
          <Button>Text</Button>
        </Box>
        <Box>
          <TextField
            onChange={(e) => console.log(e.target.value)}
            label="Name"
            placeholder="add something"
            variant="filled"
          />
        </Box>
        <Box mt={5} py={2}>
          <Checkbox
            checked={state}
            onClick={() => setState(!state)}
            color="secondary"
          />
        </Box>
        <Box>
          <Select
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            label="1"
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </Box>
        <div>
          <Button variant="text">Text</Button>
        </div>
        <div>
          <Button variant="outlined">Text</Button>
        </div>
        <div>
          <Button variant="contained">Text</Button>
        </div>
        <div>
          <Button
            startIcon={<UploadIcon />}
            endIcon={<UploadIcon />}
            size="large"
            variant="contained"
          >
            Text
          </Button>
        </div>
      </Box>
    </Container>
  );
}
