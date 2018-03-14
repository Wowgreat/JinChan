// 首页入口
import React, { Component } from 'react';
import {StyleSheet,View,Dimensions,Image,FlatList} from 'react-native';
import {
   Container, Header, Item, Input, Button,
   Text, Icon ,Content,Thumbnail,List,ListItem,
   Body,Right} from 'native-base';
import Carousel from 'react-native-banner-carousel';

const banners = [
    "https://pro.modao.cc/uploads3/images/984/9847901/raw_1495848926.jpeg",
    "https://pro.modao.cc/uploads3/images/984/9847896/raw_1495848913.jpeg",
    "https://pro.modao.cc/uploads3/images/984/9844064/raw_1495805569.jpeg"
];
const WindowWidth = Dimensions.get('window').width;
const BannerHeight = 150;

const menus = [
  {"index":1,"text":"签到","image":"https://pro.modao.cc/uploads3/images/1718/17189466/raw_1518163202.png"},
  {"index":2,"text":"红包","image":"https://pro.modao.cc/uploads3/images/1718/17189022/raw_1518162519.png"},
  {"index":3,"text":"抽奖","image":"https://pro.modao.cc/uploads3/images/1718/17189148/raw_1518162696.png"},
  {"index":4,"text":"邀请好友","image":"https://pro.modao.cc/uploads3/images/1718/17189574/raw_1518163393.png"}
];


class IndexPage extends Component{

  renderSwiper(image, index) {
      return (
          <View key={index}>
              <Image style={{ width: WindowWidth, height: BannerHeight }} source={{ uri: image }} />
          </View>
      );
  };
  renderMenu(menu,index){
    return(
      <View key={index}>
        <Thumbnail source={{uri: menu}}/>
      </View>
    );
  };
  render(){
    return (
      <Container>
        <Content>
          {/*banner(swiper) 轮播*/}
          <View style={styles.swiper} role="轮播">
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={WindowWidth}
            >
              {banners.map((image, index) => this.renderSwiper(image, index))}
            </Carousel>
          </View>
          {/* 菜单区 */}
          <View role="menus">
            <Text style={styles.title}>──────  我的福利  ──────</Text>
            <View role="menus" style={styles.menus}>
              <FlatList
                data={menus}
                numColumns={4}
                renderItem={({item}) =>
                <View style={styles.menu}>
                  <Thumbnail source={{uri: item.image}}/>
                  <Text style={styles.menuText}>{item.text}</Text>
                </View>
                }
                keyExtractor={item => item.index}
              />
            </View>
          </View>


          {/*理财福利区*/}
          <View role="理财福利">
            <View style={styles.titleBack}>
              <Text style={styles.title}>──────  理财福利  ──────</Text>
            </View>
            <Image style={{ width: WindowWidth, height: BannerHeight }} source={{uri:'https://pro.modao.cc/uploads3/images/972/9722742/raw_1495518328.jpeg'}} />
          </View>
          {/*贷款福利区*/}
          <View role="贷款福利">
            <View style={styles.titleBack}>
              <Text style={styles.title}>──────  贷款福利  ──────</Text>
            </View>
            <Image style={{ width: WindowWidth, height: BannerHeight }} source={{uri:'https://pro.modao.cc/uploads3/images/972/9722742/raw_1495518328.jpeg'}} />
          </View>
          {/*信用卡福利区*/}
          <View role="信用卡福利">
            <View style={styles.titleBack}>
              <Text style={styles.title}>──────  信用卡福利  ──────</Text>
            </View>
            <Image style={{ width: WindowWidth, height: BannerHeight }} source={{uri:'https://pro.modao.cc/uploads3/images/972/9722742/raw_1495518328.jpeg'}} />
          </View>
          {/*基金福利区*/}
          <View role="基金福利">
            <View style={styles.titleBack}>
              <Text style={styles.title}>──────  基金福利  ──────</Text>
            </View>
            <Image style={{ width: WindowWidth, height: BannerHeight }} source={{uri:'https://pro.modao.cc/uploads3/images/972/9722742/raw_1495518328.jpeg'}} />
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  swiper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  menus: {
    width:WindowWidth,
    height:95,
    paddingTop:10
  },
  menu: {
    width:WindowWidth/4,
    height:82,
    alignItems:'center',

  },
  menuText:{
    justifyContent:'center'
  },
  title:{
    fontSize:12,
    textAlign:'center',
    marginTop:10,
    marginBottom:10,
    color:'#709EB5'
  },
  titleBack:{
    backgroundColor:'#F0F0F2',
    justifyContent: 'center',
  }
});
//暴露
export default IndexPage;
