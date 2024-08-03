import { StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DropShadow from 'react-native-drop-shadow'


const image = { uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTd1kBnygQLe9EARS1cf79rFPy31hq1fNx2YrsKPuvD79v7lh5G' }

const HomeScreen = () => {
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
            <TextInput style={styles.locs} placeholder='Location'></TextInput>
            <TextInput style={styles.des} placeholder='Destination'></TextInput>
          </View>
          <TouchableOpacity>
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
      <View style={styles.sug}>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingTop:23,
    borderStyle: 'dotted',
    borderBottomWidth: .15,
    paddingLeft:45,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  des: {
    backgroundColor: '#ffff',
    paddingLeft:45,
    height: "45%",
    paddingTop:23,
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
  takeoff:{
    width:25,
    height:25,
    marginVertical:"-47%",
    marginHorizontal:15,
  },
  ttakeoff:{
    marginVertical:"-46.5%",
    marginHorizontal:45,
  },
  tlanding:{
    marginVertical:"-26.5%",
    marginHorizontal:45,
  },
  landing:{
    width:25,
    height:25,
    marginVertical:"-27.5%",
    marginHorizontal:15,
  },
  sug:{
    flex:.28,
    backgroundColor:"yellow",
  }
})