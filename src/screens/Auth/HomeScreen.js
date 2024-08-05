import {
  StatusBar, StyleSheet, Text, View, Image,
  ImageBackground, TextInput, TouchableOpacity,
  FlatList, ScrollView,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DropShadow from 'react-native-drop-shadow'



const image = { uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTd1kBnygQLe9EARS1cf79rFPy31hq1fNx2YrsKPuvD79v7lh5G' }

const data = [
  {
    id: 'a',
    title: 'Paris,France',
    price: '$320',
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYTDqmBrvXFMkfo7m2r1VMbydELRGGpI-X5aXxed-FA9ALpcH",
  },
  {
    id: 'b',
    title: 'Kenya,Kenya',
    price: '$520',
    imageURL:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSIj5RjJ07SijBChZMpc8vSMIL0f5eanSjqgLNnpV8VA7YmnHrX",
  },
  {
    id: 'c',
    title: 'US, America',
    price: '$620',
    imageURL:
      "https://www.infoplease.com/sites/infoplease.com/files/inline-images/NYC%20Skyline.jpg",
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent"
        translucent={true} />
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.tbox}>
          <View style={styles.profile}>
            <TouchableOpacity>
              <Image style={styles.pro} source={require('./../../../assets/images/profile.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.greet}>
            <Text style={styles.hel}>Hello!</Text>
            <Text style={styles.prname}>Holder Name</Text>
          </View>
        </View>
        <View style={styles.tagl}>
          <Text style={styles.tagd}>Where are you</Text>
          <Text style={styles.tagds}>flying<Text style={styles.tagd}> to?</Text></Text>
        </View>
      </ImageBackground>

      {/* Travel info */}

      <View style={styles.locations}>
        <DropShadow
          style={{
            shadowColor: "#0000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: .25,
            shadowRadius: 5,
          }}>
            
          <View style={styles.search}>
            <TextInput style={styles.locs} onPress={() => navigation.navigate('locationselection')} placeholder='Location'></TextInput>
            <TextInput style={styles.des} onPress={() => navigation.navigate('locationselection')} placeholder='Destination'></TextInput>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('flightavailablity')}>
            <Image style={styles.swap} source={require('./../../../assets/images/swap.png')} />
          </TouchableOpacity>
        </DropShadow>
        <View>
          <Image style={styles.takeoff} source={require('./../../../assets/images/Flight-takeoff.png')} />
        </View>
        <View>
          <Text style={styles.ttakeoff}>From</Text>
        </View>
        <View>
          <Image style={styles.landing} source={require('./../../../assets/images/Flight-landing.png')} />
        </View>
        <View>
          <Text style={styles.tlanding}>To</Text>
        </View>
      </View>

      {/* Suggestion list */}

      <View style={styles.sug}>
        <View style={styles.tbsug}>
          <Text style={styles.tsug}>Suggested for you</Text>
        </View>
        <View style={styles.view}>
          <TouchableOpacity onPress={()=>navigation.navigate('suggestion')}>
            <View>
              <Image style={styles.viewimg} source={require('./../../../assets/images/arrow-icon.png')} />
            </View>
            <View style={styles.viewtextb}>
              <Text style={styles.viewtext}>View All</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Suggestion details */}

      <View style={styles.flatsug}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.flatimgedt}>
              <Image source={{ uri: item.imageURL }}
                style={{ width: 130, height: 100, borderRadius: 10, }} />
              <Text style={styles.flattextt}>{item.title}</Text>
              <Text style={styles.flatprice}>{item.price}</Text>
            </View>
          )}
        />
      </View>

      {/* Upcoming trips */}

      <View style={styles.sug}>
        <View style={styles.tbsug}>
          <Text style={styles.tsug}>Upcoming Trips</Text>
        </View>
        <View style={styles.view}>
          <TouchableOpacity onPress={()=>navigation.navigate('upcoming')}>
            <View>
              <Image style={styles.viewimg} source={require('./../../../assets/images/arrow-icon.png')} />
            </View>
            <View style={styles.viewtextb}>
              <Text style={styles.viewtext}>View All</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Upcoming trips details */}

      <View style={styles.triplist}>
        <View style={styles.from}>
          <Text style={styles.timedatel}>24 OCT, 09:40</Text>
          <Text style={styles.travelfromlocl}>LAS</Text>
          <Text style={styles.locl}>Los Vegos</Text>
        </View>
        <View style={styles.ficon}>
          <Image style={styles.ficonn} source={require('./../../../assets/images/flight-icon.png')} />
        </View>
        <View style={styles.to}>
          <Text style={styles.timedater}>24 OCT, 11:10</Text>
          <Text style={styles.travelfromlocr}>SFO</Text>
          <Text style={styles.locr}>San Francisco</Text>
        </View>
      </View>
<View style={styles.fig}></View>

      {/* buttom tab */}

      <View style={styles.buttomtab}>
        <View style={styles.tabrig}>
          <TouchableOpacity>
          <Image style={styles.tabhome} source={require('./../../../assets/images/tab-home.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.tabsearch} source={require('./../../../assets/images/tab-search.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.flig}>
        <Image style={styles.centerflight} source={require('./../../../assets/images/center-flight.png')}/>
      </View>
        <View style={styles.tablef}>
        <TouchableOpacity>
          <Image style={styles.tabcomment} source={require('./../../../assets/images/tab-comment.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.tabprofile} source={require('./../../../assets/images/tab-profile.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fafafc',
  },
  image: {
    flex: .3,
    marginVertical: "-6%",
  },
  tbox: {
    flex: .5,
    flexDirection: 'row',
  },
  profile: {
    flex: .15,
  },
  pro: {
    width: "100%",
    height: "50%",
    marginVertical: 30,
    marginHorizontal: 5,
  },
  greet: {
    flex: .25,
    height: "45%"
  },
  hel: {
    padding: 5,
    paddingTop: 37,
    fontSize: 15,
    color: '#ffff'
  },
  prname: {
    color: "#ffff",
    paddingLeft: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  tagl: {
    flex: .5,
    flexDirection: 'column',
    marginHorizontal: 18,
  },
  tagd: {
    color: '#ffff',
    fontSize: 25,
    fontFamily: 'times new roman',
  },
  tagds: {
    color: '#ffff',
    fontSize: 25,
    fontFamily: 'times new roman',
    fontWeight: 'bold',
  },

  // Travel info

  locations: {
    flex: .23,
    marginHorizontal: 20,
  },
  search: {
    paddingTop: 55,
    shadowColor: 'black',
  },
  locs: {
    backgroundColor: '#ffff',
    height: "45%",
    paddingTop: 23,
    borderStyle: 'dotted',
    borderBottomWidth: .15,
    paddingLeft: 45,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  des: {
    backgroundColor: '#ffff',
    paddingLeft: 45,
    height: "45%",
    paddingTop: 23,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  swap: {
    width: 40,
    height: 40,
    marginHorizontal: 300,
    borderWidth: 1.5,
    top: "-280%",
    borderColor: '#f4f3f6',
    borderRadius: 60,
  },
  takeoff: {
    width: 25,
    height: 25,
    marginVertical: "-47%",
    marginHorizontal: 15,
  },
  ttakeoff: {
    marginVertical: "-46.5%",
    marginHorizontal: 45,
  },
  tlanding: {
    marginVertical: "-26.5%",
    marginHorizontal: 45,
  },
  landing: {
    width: 25,
    height: 25,
    marginVertical: "-27.5%",
    marginHorizontal: 15,
  },

  // Suggestion list

  sug: {
    flex: .045,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  tbsug: {
    flex: .5,
  },
  tsug: {
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  view: {
    flex: .5,
  },
  viewimg: {
    width: "32%",
    height: "40%",
    paddingTop: 40,
    marginHorizontal: 145,
  },
  viewtextb: {
    left: "55%",
    top: "-53.5%",
  },
  viewtext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e52881',
  },

  // Suggestion details

  flatsug: {
    flex: .18,
    marginLeft: 17,
  },
  flatimgedt: {
    padding: 13,
    marginHorizontal: 10,
    backgroundColor: '#ffff',
    borderRadius: 10,
  },
  flattextt: {
    paddingTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  flatprice: {
    color: '#8e8d92',
  },

  // Upcoming trips details

  triplist: {
    flex: .11,
    marginHorizontal: 20,
    backgroundColor: '#ffff',
    borderRadius: 10,
    flexDirection: 'row',
  },
  from: {
    flex: .40,
  },
  timedatel: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingHorizontal: 15,
    color: '#8e8e8e',
  },
  travelfromlocl: {
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 15,
    color: '#000',
  },
  locl: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: '#8e8e8e',
  },
  ficon: {
    flex: .20,
  },
  ficonn: {
    width: "100%",
    height: "50%",
    marginVertical: 30,
  },
  to: {
    flex: .40,
  },
  timedater: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingHorizontal: 15,
    color: '#8e8e8e',
  },
  travelfromlocr: {
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 15,
    color: '#000',
  },
  locr: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: '#8e8e8e',
  },
  fig:{
    flex:.03,
  },
  buttomtab:{
    flex:.06,
    flexDirection:'row',
    backgroundColor:'#f8edf3',
  },
  tabrig:{
    flex:.4,
    flexDirection:'row',
    marginVertical:10,
  },
  tabhome:{
    width:32,
    height:32,
    marginHorizontal:20,
  },
  tabsearch:{
    width:32,
    height:32,
    marginHorizontal:30,
  },
  tablef:{
    flex:.4,
    flexDirection:'row',
    marginVertical:10,
  },
  tabcomment:{
    width:34,
    height:34,
    marginHorizontal:25,
  },
  tabprofile:{
    width:34,
    height:34,
    marginHorizontal:20,
  },
  flig:{
    flex:.2,
    flexDirection:'row',
    justifyContent:'center',
  },
  centerflight:{
    width:60,
    height:50,
    top:"-25%",
    borderColor:'#fafafc',
    borderWidth:5,
    borderRadius:30,
  }
  
})