import React from "react";
import { Box } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import View from "./podomoro/View";
import Control from "./control/Control";
import { BrowserRouter } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Box className={classes.root} width="100vw" height="100vh">
        <CssBaseline />
        <Grid container spacing={0} style={{ height: "100%" }}>
          <Grid item xs={6}>
            <View />
          </Grid>
          <Grid item xs={6}>
            <Control />
          </Grid>
        </Grid>
      </Box>
    </BrowserRouter>
  );
};

export default App;
