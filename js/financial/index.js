//tabBar页面
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Dimensions} from 'react-native';
import { Container, Header, Tab, Tabs } from 'native-base';

import LicaiPage from './licai';
import DaikuanPage from './daikuan';
import JijinPage from './jijin';
import XinyongkaPage from './xinyongka';

export default class FinancialPage extends Component<{}> {

  static navigationOptions = {
    title: '理财',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Tabs initialPage={params.initPage}>
          <Tab heading="理财">
            <LicaiPage />
          </Tab>
          <Tab heading="基金">
            <JijinPage/>
          </Tab>
          <Tab heading="贷款">
            <DaikuanPage />
          </Tab>
          <Tab heading="信用卡">
            <XinyongkaPage/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
