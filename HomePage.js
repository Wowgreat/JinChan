//tabBar页面
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
import { Container, Header, Content, Tab, Tabs,TabHeading } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

//功能页面
import IndexPage from './js/index/index';
import WelfarePage from './js/welfare/index';
import CommunityPage from './js/community/index';
import MyPage from './js/my/index';

export default class HomePage extends Component<{}> {
  static navigationOptions = {
    title: '金蟾管家',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Tabs initialPage={3} tabBarPosition="bottom">
          <Tab heading={ <TabHeading><Icon name="ios-home" size={20} color="#000" /><Text>首页</Text></TabHeading>}>
            <IndexPage navigation={navigate}/>{/*将navigate对象传递给子页面*/}
          </Tab>
          <Tab heading={ <TabHeading><Icon name="ios-paper-plane" size={20} color="#000" /><Text>福利</Text></TabHeading>}>
            <WelfarePage navigation={navigate} />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="ios-ionic" size={20} color="#000" /><Text>社区</Text></TabHeading>}>
            <CommunityPage navigation={navigate} />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="ios-person" size={20} color="#000" /><Text>我的</Text></TabHeading>}>
            <MyPage navigation={navigate} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
