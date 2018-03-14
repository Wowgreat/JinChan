//tabBar页面
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Dimensions,FlatList,ScrollView,Image,TouchableOpacity} from 'react-native';
import { Container,ListItem,Thumbnail,Body,Left,Button,Badge,Icon,FooterTab,Right,Switch,List} from 'native-base';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Hr from "react-native-hr-plus";

const WindowWidth = Dimensions.get('window').width;

const investment = [
  {"index":1,"text":"我的理财",navigating:'MyRecording'},
  {"index":2,"text":"我的贷款",navigating:'MyRecording'},
  {"index":3,"text":"我的基金",navigating:'MyRecording'},
  {"index":4,"text":"我的信用卡",navigating:'MyRecording'},
];

export default class MyProfile extends Component {

  render() {
    const navigate = this.props.navigation;
    return (
      <Container>
        <ScrollView>
          {/* 头部 */}
          <View style={styles.myPageHeader}>
            <ListItem avatar>
              <Thumbnail size={40} source={{ uri: 'https://pro.modao.cc/uploads3/images/971/9715494/raw_1495506119.jpeg' }} />
              <Text style={{color:'#FFF',fontSize:22,marginLeft:10}}>李清照</Text>
            </ListItem>
            <FooterTab style={styles.footerTab}>
              <Button badge vertical>
                <Badge style={styles.badge} ><Text style={{color:'#FFF'}}></Text></Badge>
                <Icon name="hand" />
                <Text style={{color:'#FFF'}}>签到</Text>
              </Button>
              <Button badge vertical>
                <Badge style={styles.badge} ><Text style={{color:'#FFF'}}>51</Text></Badge>
                <Icon name="star-half" />
                <Text style={{color:'#FFF'}}>积分</Text>
              </Button>
              <Button badge vertical>
                <Badge style={styles.badge} ><Text style={{color:'#FFF'}}>3</Text></Badge>
                <Icon name="alarm" />
                <Text style={{color:'#FFF'}}>消息</Text>
              </Button>
            </FooterTab>
          </View>

          <Image style={{ width: WindowWidth, height: 120 }} source={{ uri: 'https://pro.modao.cc/uploads3/images/972/9722769/raw_1495518363.jpeg' }} />

          {/* 投资管理 */}
          <View style={{width:WindowWidth,height:176}}>
            <ListItem style={{marginRight:10}}>
              <Ionicon name="ios-card" style={{fontSize:25,color:'#B3B0F5'}} />
              <Text style={{fontSize:14,marginLeft:10}}>投资管理</Text>
            </ListItem>
            <View style={styles.menus}>
              <FlatList
                data={investment}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.menu}>
                  <TouchableOpacity onPress={()=>navigate('MyRecording',{ initTitle: item.text })}>
                    <Text style={styles.menuText} >{item.text}</Text>
                  </TouchableOpacity>
                </View>
                }
                keyExtractor={item => item.index}
              />
            </View>
          </View>
          <View style={{width:WindowWidth,height:16,backgroundColor:'#F0F0F2'}}></View>
          {/* 活动管理 */}
          <View style={{width:WindowWidth,height:176}}>
            <ListItem style={{marginRight:10}}>
              <Ionicon name="ios-card" style={{fontSize:25,color:'#B3B0F5'}} />
              <Text style={{fontSize:14,marginLeft:10}}>活动管理</Text>
            </ListItem>
            <View style={styles.menus}>
              <FlatList
                data={investment}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.menu}>
                  <Text  style={styles.menuText} >{item.text}</Text>
                </View>
                }
                keyExtractor={item => item.index}
              />
            </View>
          </View>
          <View style={{width:WindowWidth,height:16,backgroundColor:'#F0F0F2'}}></View>
          {/* 其他管理 */}
          <View style={{width:WindowWidth,height:176}}>
            <ListItem style={{marginRight:10}}>
              <Ionicon name="ios-card" style={{fontSize:25,color:'#B3B0F5'}} />
              <Text style={{fontSize:14,marginLeft:10}}>其他管理</Text>
            </ListItem>
            <View style={styles.menus}>
              <FlatList
                data={investment}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.menu}>
                  <Text  style={styles.menuText} >{item.text}</Text>
                </View>
                }
                keyExtractor={item => item.index}
              />
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  myPageHeader: {
    width:WindowWidth,
    height:114,
    backgroundColor:'#8484F5'
  },
  badge:{
    backgroundColor: '#8484F5',
  },
  menus: {
    width:WindowWidth,
    height:165,
    paddingTop:10
  },
  menu: {
    marginTop:10,
    width:WindowWidth/2,
    height:50,
    alignItems:'center',
  },
  menuText:{
    fontSize:16,
    justifyContent:'center'
  },
});
