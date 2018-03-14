import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Dimensions,Image,FlatList,TouchableOpacity} from 'react-native';
import { Container ,Content,Left,Body,Right,ListItem,List,Item,Picker,Form} from 'native-base';
import Carousel from 'react-native-banner-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

const WindowWidth = Dimensions.get('window').width;
const BannerHeight = 150;

const banners = [
    "https://pro.modao.cc/uploads3/images/984/9847901/raw_1495848926.jpeg",
    "https://pro.modao.cc/uploads3/images/984/9847896/raw_1495848913.jpeg",
    "https://pro.modao.cc/uploads3/images/984/9844064/raw_1495805569.jpeg"
];
const categories = [
  {id:0,iconName:'ios-star',name:'背景系',intro:'文字介绍文字介绍'},
  {id:1,iconName:'ios-add-circle',name:'存管系',intro:'文字介绍文字介绍'},
  {id:2,iconName:'ios-calendar',name:'实体系',intro:'文字介绍文字介绍'},
  {id:3,iconName:'ios-beaker',name:'垂直系',intro:'文字介绍文字介绍'},
  {id:4,iconName:'ios-arrow-dropup-circle',name:'利率系',intro:'文字介绍文字介绍'},
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
];

export default class LicaiPage extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      selected1: "key0"
    };
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
            data={categories}
            numColumns={1}
            ListHeaderComponent={this.renderHeader}
            renderItem={({item}) =>
            <View style={{width:WindowWidth,height:70,top:20}}>
              <ListItem icon>
                <Left>
                  <Icon style={{color:'#B3B0F5',fontSize:30}} name={item.iconName}  />
                </Left>
                <Body>
                  <Text style={{color:'#012A36',fontSize:14}}>{item.name}</Text>
                  <Text style={{color:'#607D8B',fontSize:12,marginTop:5}}>文字描述文字描述文字描述</Text>
                </Body>
                <Right>
                  <Icon style={{color:'#607D8B',fontSize:20}} name="ios-arrow-forward" />
                </Right>
              </ListItem>
            </View>
            }
            keyExtractor={item => item.id}
          />
          {/* 排行攻略 */}
          <View role="排行攻略">
            <View style={styles.title}>
              <Text style={styles.titleText}>-排行攻略-</Text>
            </View>
            {/* 选择菜单 */}
            <Form>
             <Picker
               iosHeader="Select one"
               mode="dropdown"
               selectedValue={this.state.selected1}
               onValueChange={this.onValueChange.bind(this)}
             >
               <Item label="请选择" value="key0" />
               <Item label="热销排行" value="key1" />
               <Item label="安全排行" value="key2" />
               <Item label="Credit Card" value="key3" />
               <Item label="Net Banking" value="key4" />
             </Picker>
           </Form>

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
