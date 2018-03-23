//tabBar页面
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Dimensions} from 'react-native';
import { Container, Content, ListItem,Thumbnail,Left,Right,Icon} from 'native-base';

const WindowWidth = Dimensions.get('window').width;

export default class Myinfo extends Component {
  static navigationOptions = {
    title: '个人资料',
  };
  render() {
    const navigate = this.props.navigation;
    return (
      <Container>
        <Content style={{backgroundColor:'#F0F0F2'}}>
          <View style={styles.view}>
            <ListItem style={styles.listItem}>
                <Left>
                  <Text>安全头像</Text>
                </Left>
                <Right>
                  <Thumbnail style={styles.headPicture} source={{ uri: 'https://pro.modao.cc/uploads3/images/971/9715494/raw_1495506119.jpeg' }} />
                </Right>
              </ListItem>
          </View>
          <View style={styles.text}>
            <Text style={{color:'#101010',fontSize:14}}>完善资料领积分</Text>
          </View>
          <View style={styles.view}>
            <ListItem style={styles.listItem}>
                <Left>
                  <Text>用户名</Text>
                </Left>
                <Right>
                  <Text>xxx</Text>
                </Right>
              </ListItem>
          </View>
          <View style={styles.view}>
            <ListItem style={styles.listItem}>
                <Left>
                  <Text>用户名</Text>
                </Left>
                <Right>
                  <Text>xxx</Text>
                </Right>
              </ListItem>
          </View>
          <View style={styles.view}>
            <ListItem style={styles.listItem}>
                <Left>
                  <Text>用户名</Text>
                </Left>
                <Right>
                  <Text>xxx</Text>
                </Right>
              </ListItem>
          </View>
          <View style={styles.view}>
            <ListItem style={styles.listItem}>
                <Left>
                  <Text>用户名</Text>
                </Left>
                <Right>
                  <Text>xxx</Text>
                </Right>
              </ListItem>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  view:{
    backgroundColor:'#FFF',
    marginTop:10
  },
  text:{
    height:51,
    backgroundColor:'#F0F0F2',
    justifyContent: 'center',
    alignItems:'center',
  },
  listItem:{
    height:53
  },
  headPicture:{
    height:45,
    width:45
  }
});
