import React, { Component } from 'react';
import {Platform,StyleSheet,View,Dimensions} from 'react-native';
import { Container, Content, Card, CardItem,Text,Body,Tab,Tabs} from 'native-base';

import LoginByAccount from './loginByAccount';
import LoginBySms from './loginBySms'

const WindowWidth = Dimensions.get('window').width;


class LoginPage extends Component {
  render(){
    return (
      <Container>
        <Content>
          <View style={styles.content}>
            <Card style={styles.card}>
              <Tabs initialPage={0}>
                <Tab heading="账号登录">
                  <LoginByAccount/>
                </Tab>
                <Tab heading="短信注册">
                  <LoginBySms/>
                </Tab>
              </Tabs>
           </Card>
         </View>
       </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  content:{
    alignItems:'center',
    marginTop:70
  },
  card:{
    width:276,
    height:345
  }
})


export default LoginPage;
