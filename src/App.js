import './App.css';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
 

function App() {

  const MyCustomButton = styled(Button)(({theme}) => ({
    padding: theme.spacing(2),
  }));
 
  return (
    <div className="App">
      <Typography variant='myVariant' >This is my app</Typography>
      <Typography sx={{ color: 'myCustomColor.superLight' }} >I hope you find value :)</Typography>
      <MyCustomButton  variant='contained' >Hello from MUI v5</MyCustomButton>
    </div>
  );
}

export default App;
