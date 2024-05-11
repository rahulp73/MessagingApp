import Login from './components/Login';
import Dashboard from './components/Dashboard'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import useLocalStorage from './hooks/useLocalStorage';

const darkTheme = createTheme({
  palette:{mode:'dark'}
})

function App() {
  const [id, setId] = useLocalStorage('id')
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {id ? <Dashboard id={id}/>: <Login setId={setId}/>}
    </ThemeProvider>
  );
}

export default App;