import './App.css';
import getRepositories from './github_calls/getRepositories';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ProjectCards from './components/project_cards/projectCards';
import { useState } from 'react';

function App() {

  const [projectList, setProjectList] = useState([{name: "wait"}]);

  getRepositories
    .then((value) => {
      console.log(value)
      setProjectList(value)
    })
    .catch((err) => console.error(err))

  
  return (
    <div className='App'>
      <Grid container spacing={4} sx={{margin: "3%"}}>
        {projectList.map((values, index) => (
          <Grid item xs={4}>
            <ProjectCards name={values.name} key={index}/>
          </Grid>
        ))}
        
      </Grid>
    </div>
  );
}

export default App;
