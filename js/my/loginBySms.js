import React, { Component } from 'react';
import {Platform,StyleSheet,View,Dimensions} from 'react-native';
import { Container, Content, Item, Input, Button ,Text,Icon} from 'native-base';

const WindowWidth = Dimensions.get('window').width;


export default class LoginBySms extends Component {
  render(){
    return (
      <Container>
        <Content>
          <View style={styles.content}>
            <View style={styles.item}>
             <Item>
               <Icon name='person' />
               <Input placeholder='请输入手机号'/>
             </Item>
             <Item>
               <Icon name='wifi' />
               <Input placeholder='请输入验证码'/>
               <Button style={{height:30,marginTop:15}}><Text style={{fontSize:16}}>发送验证码</Text></Button>
             </Item>
             <Item>
               <Icon name='lock' />
               <Input placeholder='请输入密码'/>
             </Item>
             <Button style={{marginTop:10}} block>
               <Text>注册</Text>
             </Button>
             <Text style={{marginTop:10,color:'#101010',fontSize:14}}>登录即接受《金婆家用户协议》及《合作隐私权保护声明》</Text>
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
