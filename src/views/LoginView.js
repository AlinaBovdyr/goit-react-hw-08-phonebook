import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { authOperations, authSelectors } from '../redux/auth';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import Notice from '../components/Notice';

import s from './Auth.module.css';
import '../styles/animations/NoticeAppear.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
    error: false,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({
      email: '',
      password: '',
    });

    if (!this.props.isAuthenticated) {
      this.showNotice();
    }

  };

  showNotice = () => {
    this.setState({
      error: true,
    });
    
    setTimeout(() => {
      this.setState({ error: false, })
    }, 2000);
  };

  render() {
    const { email, password, error } = this.state;
    const { errorMessage } = this.props;

    return (
      <div className={s.formWrapper}>
        
        {errorMessage && 
          <CSSTransition
            in={error}
            unmountOnExit
            classNames="notice"
            timeout={250}
          >
            <Notice text={errorMessage} />
          </CSSTransition>
        }

        <h2 className={s.title}>Login</h2>
        <form className={s.form} onSubmit={this.handleSubmit}>
            <Input
                label="E-mail"
                name="email"
                value={email}
                placeholder=" "
                autoComplete="email"
                onChange={this.handleChange}
                required
            />
            <Input
                label="Password"
                name="password"
                value={password}
                placeholder=" "
                autoComplete="new-password"
                type="password"
                onChange={this.handleChange}
            />
            <Button type="submit" title="LogIn" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  errorMessage: authSelectors.getError(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
