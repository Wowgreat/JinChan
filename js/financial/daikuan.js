import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Dimensions,Image,FlatList} from 'react-native';
import { Container,Thumbnail,Content,Left,Body,Right,ListItem,List,Item,Picker,Form} from 'native-base';
import Carousel from 'react-native-banner-carousel';


const WindowWidth = Dimensions.get('window').width;
const BannerHeight = 150;

const banners = [
    "https://pro.modao.cc/uploads3/images/984/9847901/raw_1495848926.jpeg",
    "https://pro.modao.cc/uploads3/images/984/9847896/raw_1495848913.jpeg",
    "https://pro.modao.cc/uploads3/images/984/9844064/raw_1495805569.jpeg"
];
const products = [
  {id:0,logo:'https://pro.modao.cc/uploads3/images/1571/15714448/raw_1513997370.png',name:'背景系',intro:'文字介绍文字介绍'},
  {id:1,logo:'https://pro.modao.cc/uploads3/images/1571/15714448/raw_1513997370.png',name:'人人贷',intro:'文字介绍文字介绍'},
  {id:2,logo:'https://pro.modao.cc/uploads3/images/1571/15714448/raw_1513997370.png',name:'实体系',intro:'文字介绍文字介绍'},
  {id:3,logo:'https://pro.modao.cc/uploads3/images/1571/15714448/raw_1513997370.png',name:'垂直系',intro:'文字介绍文字介绍'},
  {id:4,logo:'https://pro.modao.cc/uploads3/images/1571/15714448/raw_1513997370.png',name:'利率系',intro:'文字介绍文字介绍'},
];

export default class DaikuanPage extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSwiper=(image, index)=>{
      return (
          <View key={index}>
              <Image style={{ width: WindowWidth, height: BannerHeight }} source={{ uri: image }} />
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
        <View role="排行攻略">
          <View style={styles.title}>
            <Text style={styles.titleText}>-推荐产品-</Text>
          </View>
        </View>
      </View>
    );
  };
  onValueChange=(value: string)=>{
    this.setState({
      selected1: value
    });
  };
  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={products}
            numColumns={1}
            ListHeaderComponent={this.renderHeader}
            renderItem={({item}) =>
            <View style={{width:WindowWidth,height:100,top:20}}>
              <ListItem>
                <Thumbnail square size={100} source={{ uri:item.logo }} />
                <Body style={{marginLeft:20}}>
                  <Text style={{color:'#3B3B63',bottom:10}}>{item.name}</Text>
                  <Text note>{item.intro}</Text>
                </Body>
                <Text style={{color:'#93B6C7',fontSize:12}}>成功率<Text style={{color:'red',fontSize:20}}>64%</Text></Text>
              </ListItem>
            </View>
            }
            keyExtractor={item => item.id}
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
  title: {
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
