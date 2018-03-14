import React, { Component } from 'react';
import {Dimensions,StyleSheet,FlatList} from 'react-native';
import { Container, Content, Tab, Tabs , Text,List,ListItem ,View,Left,Body} from 'native-base';


const WindowWidth = Dimensions.get('window').width;

const licai = [
  {id:0,name:'理财精选－京华月月盈',time:'2017-12-16 18:00'},
  {id:1,name:'理财精选－京华月月盈',time:'2017-12-16 18:00'},
  {id:2,name:'理财精选－京华月月盈',time:'2017-12-16 18:00'},
];


class BrowseRecordingPage extends Component {
  constructor(props) {
    super(props);
  };

  static navigationOptions = ({ navigation }) => {
    // const { params } = navigation.state;

    return {
      // title: params.initTitle ? params.initTitle : 'A Nested Details Screen',
      title:'A Nested Details Screen'
    }
  };

  render(){
    return(
      <Container>
        <Content>
          <FlatList
            data={licai}
            renderItem={({ item }) => (
              <ListItem style={{marginTop:20}} >
                <View style={styles.circle_text}>
                  <Text>理财</Text>
                </View>
                <Body>
                  <Text style={{fontSize:14}}>{item.name}</Text>
                  <Text style={{fontSize:14}}>{item.time}</Text>
                </Body>
              </ListItem>
            )}
            keyExtractor={item => item.id}
          />
        </Content>
      </Container>
    );
  };
}

const styles = StyleSheet.create({
  circle_text: {
    width:50,
    height:50,
    borderWidth: 0.5,
    borderColor: '#BBB',
    borderRadius: 25,
    alignItems:'center',
    justifyContent: 'center'
  }
});
export default BrowseRecordingPage;
