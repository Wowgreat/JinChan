import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

import { connect } from 'react-redux';

import Login from './login';
import Profile from './profile';

class My extends Component {
  render(){
    const navigate = this.props.navigation;
    if(this.props.token){
      return (
        <Profile navigation={navigate}/>
      );
    }else {
      return (
        <Login navigation={navigate}/>
      );
    }
  };
}
export default connect(
  (state) => ({
    token:state.user.token
  }),
  (dispatch) => ({})
)(My);
