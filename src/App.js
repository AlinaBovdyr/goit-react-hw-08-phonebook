import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import AppBar from './components/AppBar/AppBar';
import Router from './Router/Router';
import Container from './components/Container/Container';

class App extends Component {
  componentDidMount() {
    this.props.onRefresh();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Router />
      </Container>
    );
  }
};

const mapDispatchToProps = {
  onRefresh: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
