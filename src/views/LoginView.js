import React, { Component } from 'react';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import s from './Auth.module.css';

export default class LoginView extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onLogin(name, number);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
        <div className={s.formWrapper}>
            <h2 className={s.title}>Login</h2>
            <form className={s.form} onSubmit={this.handleSubmit}>
                <Input
                    label="E-mail"
                    name="email"
                    placeholder=" "
                    autoComplete="email"
                    onChange={this.handleChange}
                    required
                />
                <Input
                    name="password"
                    label="Password"
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
}
