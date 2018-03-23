import React, { Component } from 'react';
import {Platform,StyleSheet,View,Dimensions} from 'react-native';
import { Container, Content, Item, Input, Button,Icon ,Text,Toast,Spinner} from 'native-base';
import queryString from 'query-string';

import { connect } from 'react-redux';

import *as Action from '../../action';
import CommonFunc from '../../common/func';

const WindowWidth = Dimensions.get('window').width;

class LoginByAccount extends Component {

  _login = () => {
    _this = this;
                                //apiname {}params
    const obj = CommonFunc.post('Login',{mobile:_this.mobile,password:_this.password});
    obj.then((responseJson) => {
      console.log(responseJson);
      if ('OK'==responseJson.status) {
        _this.props.loginAction(responseJson.data)
      }else {
        Toast.show({
          text: responseJson.msg,
          position: 'top',
        })
      }
    })
 };
  render = () => {
    return (
      <Container>
        <Content>
          <View style={styles.content}>
            <View style={styles.item}>
             <Item>
               <Icon name='person' />
               <Input onChangeText={(text) => {this.mobile = text} } placeholder='请输入手机号'/>
             </Item>
             <Item>
               <Icon name='lock' />
               <Input onChangeText={(text) => {this.password = text} } placeholder='请输入密码'/>
             </Item>
             <Button onPress={()=>this._login()} style={{marginTop:20}} block>
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
