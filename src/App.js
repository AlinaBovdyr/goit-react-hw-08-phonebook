import AppBar from './components/AppBar/AppBar';
import Router from './Router/Router';
import Container from './components/Container/Container';

const App = () => {
  return (
    <Container>
      <AppBar />
      <Router />
    </Container>
  );
};

export default App;
