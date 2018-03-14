import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import { Container, Content, Tab, Tabs , Text } from 'native-base';

import Browse from './browseRecording';
import Deal from './DealRecording';

const WindowWidth = Dimensions.get('window').width;


class MyRecordingPage extends Component {
  constructor(props) {
    super(props);
  };

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.initTitle ? params.initTitle : 'A Nested Details Screen',
      // title:'A Nested Details Screen'
    }
  };

  render(){
    return(
      <Container>
        <Content>
          <Tabs initialPage={0}>
            <Tab heading="浏览记录">
              <Browse />
            </Tab>
            <Tab heading="成交记录">
              <Deal />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  };
}
export default MyRecordingPage;
