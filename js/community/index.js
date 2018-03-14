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
    "https://pro.modao.cc/uploads3/images/984/9844064/raw_1495805569.jpeg",
    "https://pro.modao.cc/uploads3/images/972/9722747/raw_1495518339.jpeg"
];

const information = [
  {id:0,title:'比特币暴跌的原因',thumb:'https://pro.modao.cc/uploads3/images/1571/15715143/raw_1513999267.png'},
  {id:1,title:'比特币暴跌的原因',thumb:'https://pro.modao.cc/uploads3/images/1571/15715143/raw_1513999267.png'},
  {id:2,title:'比特币暴跌的原因',thumb:'https://pro.modao.cc/uploads3/images/1571/15715143/raw_1513999267.png'},
  {id:3,title:'比特币暴跌的原因',thumb:'https://pro.modao.cc/uploads3/images/1571/15715143/raw_1513999267.png'}
];
const WindowWidth = Dimensions.get('window').width;
const BannerHeight = 100;


class CommunityPage extends Component{

  renderSwiper=(image, index)=>{
      return (
          <View key={index}>
              <Image style={{ width: WindowWidth, height: BannerHeight }} source={{ uri: image }} />
          </View>
      );
  };
  renderMenu=(menu,index)=>{
    return(
      <View key={index}>
        <Thumbnail source={{uri: menu}}/>
      </View>
    );
  };
  renderHeader=()=>{
    return (
      <View style={styles.swiper}>
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
    );
  };
  render(){
    return (
      <Container>
        {/*头部*/}
        <Header searchBar rounded style={styles.headerStyle}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="比特币暴跌" />
          </Item>
          <Button transparent>
            <Text>搜索</Text>
          </Button>
        </Header>
        <Content>
          {/* 资讯列表 */}
          <FlatList
            ListHeaderComponent={this.renderHeader}
            data={information}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
              <ListItem style={styles.listItem}>
                <Thumbnail square size={80} source={{ uri: item.thumb }} />
                <Body>
                  <Text>{item.title}</Text>
                  <Text note>Its time to build a difference . .</Text>
                </Body>
              </ListItem>
            }
          />

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
  listItem:{
    marginTop:10
  },
  title: {
    marginTop:8,
    alignItems:'center',
    width:WindowWidth,
    height:34,
    backgroundColor:'#D7DBDB'
  },
  titleText:{
    fontSize:16,
    marginTop:8,
    color:'#101010',
    fontStyle:'italic',
    fontWeight:('bold', '700')
  }
});
//暴露
export default CommunityPage;
