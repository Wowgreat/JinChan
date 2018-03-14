import React, { Component } from 'react';
import {Platform,StyleSheet,View,Dimensions} from 'react-native';
import { Container, Content, Item, Input, Button,Icon ,Text} from 'native-base';

import { connect } from 'react-redux';

import *as Action from '../../action';
import CommonFunc from '../../common/func';

const WindowWidth = Dimensions.get('window').width;
class LoginByAccount extends Component {
  login = () => {
    this.props.loginAction(123)
  };
  render = () => {
    return (
      <Container>
        <Content>
          <View style={styles.content}>
            <View style={styles.item}>
             <Item>
               <Icon name='person' />
               <Input placeholder='请输入手机号/邮箱/用户名'/>
             </Item>
             <Item>
               <Icon name='lock' />
               <Input placeholder='请输入密码'/>
             </Item>
             <Button onPress={()=>this.login()} style={{marginTop:20}} block>
               <Text>登录</Text>
             </Button>
             <Text style={{marginTop:20,color:'#101010',fontSize:14}}>登录即接受《金婆家用户协议》及《合作隐私权保护声明》</Text>
            </View>
         </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  content:{
    alignItems:'center'
  },
  item:{
    width:260
  }
})

export default connect(
  (state) => ({}),
  (dispatch) => ({
    loginAction: (token) => dispatch(Action.login(token)),
  })
)(LoginByAccount);
