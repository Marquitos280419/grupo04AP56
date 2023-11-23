import "./App.css";
import Grid from "@mui/material/Grid";
import TaskList from "./components/tasklist";

import {
  Card,
  Typography,
 
  CardContent,
 
} from "@mui/material";

function App() {
  return (
    <>
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom >
            Tareas
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TaskList/>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default App;
