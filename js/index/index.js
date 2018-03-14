// 首页入口
import React, { Component } from 'react';
import {StyleSheet,View,Dimensions,Image,FlatList,TouchableOpacity} from 'react-native';
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
  {"index":1,"text":"理财",initPage:0,"navigate_to":"Financial","image":"https://pro.modao.cc/uploads3/images/974/9740779/raw_1495541439.jpeg"},
  {"index":4,"text":"基金",initPage:1,"navigate_to":"Financial","image":"https://pro.modao.cc/uploads3/images/974/9740780/raw_1495541440.jpeg"},
  {"index":2,"text":"贷款",initPage:2,"navigate_to":"Financial","image":"https://pro.modao.cc/uploads3/images/974/9740774/raw_1495541436.jpeg"},
  {"index":3,"text":"信用卡",initPage:3,"navigate_to":"Financial","image":"https://pro.modao.cc/uploads3/images/974/9740782/raw_1495541441.jpeg"},

  {"index":5,"text":"红包","navigate_to":"RedEnvelope","image":"https://pro.modao.cc/uploads3/images/1718/17189022/raw_1518162519.png"},
  {"index":6,"text":"抽奖","navigate_to":"Lottery","image":"https://pro.modao.cc/uploads3/images/1718/17189148/raw_1518162696.png"},
  {"index":7,"text":"邀请好友","navigate_to":"Invite","image":"https://pro.modao.cc/uploads3/images/1718/17189574/raw_1518163393.png"},
  {"index":8,"text":"签到","navigate_to":"Attendance","image":"https://pro.modao.cc/uploads3/images/1718/17189466/raw_1518163202.png"}
];

const ranks = [
  {'product_name':'理财精选 - 京华月月盈1',
  'feedBackRate':'5.7',
  'minDuration':'30天',
  'minPrice':'1000元',
  'serviceCharge':'无手续费'},
  {'product_name':'理财精选 - 京华月月盈2',
  'feedBackRate':'5.7',
  'minDuration':'30天',
  'minPrice':'1000元',
  'serviceCharge':'无手续费'},
  {'product_name':'理财精选 - 京华月月盈3',
  'feedBackRate':'5.7',
  'minDuration':'30天',
  'minPrice':'1000元',
  'serviceCharge':'无手续费'},
  {'product_name':'理财精选 - 京华月月盈4',
  'feedBackRate':'5.7',
  'minDuration':'30天',
  'minPrice':'1000元',
  'serviceCharge':'无手续费'},
]

const newProducts = [
  {index:1,name:'人人理财',thumb:'https://pro.modao.cc/uploads3/images/1718/17189022/raw_1518162519.png'},
  {index:2,name:'人人理财',thumb:'https://pro.modao.cc/uploads3/images/1718/17189022/raw_1518162519.png'},
  {index:3,name:'人人理财',thumb:'https://pro.modao.cc/uploads3/images/1718/17189022/raw_1518162519.png'},
  {index:4,name:'人人理财',thumb:'https://pro.modao.cc/uploads3/images/1718/17189022/raw_1518162519.png'}
];

const activities = [
  {
    index:1,
    intro:'首次购买送100元京东购物卡',
    buttonText:'领红包',
    thumb:'https://pro.modao.cc/uploads3/images/1718/17189022/raw_1518162519.png'},
  {
    index:2,
    intro:'首次购买送100元京东购物卡',
    buttonText:'领红包',
    thumb:'https://pro.modao.cc/uploads3/images/1718/17189022/raw_1518162519.png'},
  {
    index:3,
    intro:'首次购买送100元京东购物卡',
    buttonText:'领红包',
    thumb:'https://pro.modao.cc/uploads3/images/1718/17189022/raw_1518162519.png'},
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
    const navigate = this.props.navigation;
    return (
      <Container>
        {/*头部*/}
        <Header searchBar rounded style={styles.headerStyle}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="搜索产品名称" />
          </Item>
          <Button transparent>
            <Text>搜索</Text>
          </Button>
        </Header>
        <Content>
          {/*banner(swiper) 轮播*/}
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
          {/* 菜单区 */}
          <View role="menus" style={styles.menus}>
            <FlatList
              data={menus}
              numColumns={4}
              renderItem={({item}) =>
              <TouchableOpacity onPress={() =>
                navigate(item.navigate_to,{ initPage: item.initPage })
              }>
                <View style={styles.menu}>
                  <Thumbnail source={{uri: item.image}}/>
                  <Text style={styles.menuText}>{item.text}</Text>
                </View>
              </TouchableOpacity>

              }
              keyExtractor={item => item.index}
            />
          </View>
          {/* 排行攻略 */}
          <View role="排行攻略">
            <View style={styles.title}>
              <Text style={styles.titleText}>-排行攻略-</Text>
            </View>
            <View role="content排行内容">
              <View>
                <List dataArray={ranks}
                  renderRow={(item) =>
                    <ListItem>

                      <View>
                        <Text style={{fontSize:14,color:"#012A36"}}>{item.product_name}</Text>
                        <Text style={{fontSize:24,color:'#ED6136',textAlign:'center'}}>{item.feedBackRate}<Text style={{color:'#ED6136'}}>%</Text></Text>
                        <Text style={{color:'#93B6C7',fontSize:12,top:10}} >历史年华投资回报率</Text>
                      </View>

                      <View style={{marginLeft:20}}>
                        <Text> </Text>
                        <Text style={{fontSize:14,color:'#93B6C7'}}>
                          产品期限 <Text style={{color:'#ED6136',fontSize:14}}>{item.minDuration}</Text>
                        </Text>
                        <View style={{flexDirection:'row',top:10}}>
                          <Text style={{backgroundColor:"#607D8B",fontSize:12}}>{item.minPrice}</Text>
                          <View style={{width:20,height:12}}></View>
                          <Text style={{backgroundColor:"#607D8B",fontSize:12}}>{item.serviceCharge}</Text>
                        </View>
                      </View>
                    </ListItem>
                }>
                </List>
              </View>
            </View>
          </View>

          <View role="新品推荐">
            <View style={styles.title}>
              <Text style={styles.titleText}>-新品推荐-</Text>
            </View>
            <View role="新品推荐内容">
              <View>
                <View>

                  <FlatList
                    data={newProducts}
                    numColumns={2}
                    renderItem={({item}) =>
                    <ListItem>
                      <Thumbnail square source={{uri:item.thumb}} />
                      <Text>{item.name}</Text>
                    </ListItem>
                    }
                    keyExtractor={item => item.index}
                  />

                </View>
                <View>
                  <Text>

                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View role="活动">
            <View style={styles.title}>
              <Text style={styles.titleText}>-活动ING-</Text>
            </View>
            <View role="活动ING内容">
              <View>
                <View>

                  <FlatList
                    data={activities}
                    renderItem={({item}) =>
                    <ListItem>
                      <Thumbnail square source={{uri:item.thumb}} />
                      <Text>{item.intro}</Text>
                      <Button bordered dark>
                        <Text>{item.buttonText}</Text>
                      </Button>
                    </ListItem>
                    }
                    keyExtractor={item => item.index}
                  />

                </View>
                <View>
                  <Text>

                  </Text>
                </View>
              </View>
            </View>
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
    height:165,
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
export default IndexPage;
