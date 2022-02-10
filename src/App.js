import React from 'react';
import Container from '@mui/material/Container';
import MenuBar from './components/MenuBar';


const App = () => {
  return (
    <React.Fragment>
      <MenuBar/>
      <Container maxWidth="sm">
        <h1>Hello worldd</h1>
      </Container>
    </React.Fragment>
  )
}

export default App;
