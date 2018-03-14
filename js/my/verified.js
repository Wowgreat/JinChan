import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import { Container, Content, Form, Item, Input, Label,View,Button,Text } from 'native-base';
// 实名认证

const WindowWidth = Dimensions.get('window').width;

class VerifyPage extends Component {
  static navigationOptions = {
    title: '实名认证',
  };
  render(){
    return(
      <Container>
        <Content>
          <View style={{alignItems:'center'}}>
            <View style={{width:WindowWidth*0.9,height:324,marginTop:30}}>
              <Form>
                <Item style={{marginTop:30}} inlineLabel>
                  <Label>真实姓名</Label>
                  <Input />
                </Item>
                <Item style={{marginTop:30}} inlineLabel last>
                  <Label>身份证号</Label>
                  <Input />
                </Item>
                <Button style={{marginTop:30}} block success>
                  <Text>立即认证</Text>
                </Button>
              </Form>
            </View>
          </View>
        </Content>
      </Container>
    );
  };
}
export default VerifyPage;
