import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const data = [
  {
    id: 'a',
    title: 'Tue, 13 Jan',
    price: '$8,038',
  },
  {
    id: 'b',
    title: 'Wed, 14 Jan',
    price: '$7,528',
  },
  {
    id: 'c',
    title: 'Thr, 15 Jan',
    price: '$4,025',
  },
  {
    id: 'd',
    title: 'Fri, 16 Jan',
    price: '$5,025',
  },
  {
    id: 'e',
    title: 'Sat, 17 Jan',
    price: '$6,025',
  },
];

const flightdetails = [
  {
    id: 'a',
    title: 'Free Meal',
    timeleft: '08:05',
    timeright:'19:55',
    locationleft:'SFO',
    locationright:'MIL',
    tavelhours:'11h 50m',
    stopping:'. Non Stop',
    flightID:'LY 2465',
    price: '$8,038',
    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoxrtm6fgQilbAEfAiS5JFHJQtUN1Y0mTmQ&s",
  },
  {
    id: 'b',
    title: 'Free Meal',
    timeleft: '06:15',
    timeright:'18:05',
    loctionleft:'SFO',
    locationright:'MIL',
    tavelhours:'11h 50m',
    stopping:'Non Stop',
    flightID:'LY 2465',
    price: '$7,528',
    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoxrtm6fgQilbAEfAiS5JFHJQtUN1Y0mTmQ&s",
  },
  {
    id: 'c',
    title: 'Free Meal',
    timeleft: '10:05',
    timeright:'21:50',
    loctionleft:'SFO',
    locationright:'MIL',
    tavelhours:'11h 50m',
    stopping:'Non Stop',
    flightID:'LY 2465',
    price: '$4,025',
    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoxrtm6fgQilbAEfAiS5JFHJQtUN1Y0mTmQ&s",
  },
  {
    id: 'd',
    title: 'Free Meal',
    title: 'Free Meal',
    timeleft: '11:05',
    timeright:'20:55',
    loctionleft:'SFO',
    locationright:'MIL',
    tavelhours:'11h 50m',
    stopping:'Non Stop',
    flightID:'LY 2465',
    price: '$5,025',
    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoxrtm6fgQilbAEfAiS5JFHJQtUN1Y0mTmQ&s",
  },
  {
    id: 'e',
    title: 'Free Meal',
    title: 'Free Meal',
    timeleft: '12:05',
    timeright:'21:55',
    loctionleft:'SFO',
    locationright:'MIL',
    tavelhours:'11h 50m',
    stopping:'Non Stop',
    flightID:'LY 2465',
    price: '$6,025',
    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoxrtm6fgQilbAEfAiS5JFHJQtUN1Y0mTmQ&s",
  },
]

const FlightAvailability = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
          <StatusBar
        animated={true}
        backgroundColor="#fcfbfe"
      />
      <View style={styles.head}>
        <View style={styles.bakicon}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image style={styles.backi} source={require('./../../../assets/images/back.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.traveld}>
          <Text style={styles.tdetails}>SFO   -   MIL</Text>
        </View>
        <View style={styles.filtericon}>
          <TouchableOpacity>
            <Image style={styles.ficon} source={require('./../../../assets/images/filter.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.date}>
        <FlatList
        data={data}
        horizontal={true}
        renderItem={({item})=>(
          <View style={styles.dateday}>
            <TouchableOpacity>
            <Text style={styles.daydetails}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            </TouchableOpacity>
          </View>
        )}
        />
      </View>
      <View style={styles.content}>
        <FlatList 
        data={flightdetails}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('seatselection')}>
          <View style={styles.contentd}>
            <Image source={{uri: item.imageURL}} style={{width:20, height:20,}}/>
            <Text style={styles.meals}>{item.title}</Text>
            <Text style={styles.timel}>{item.timeleft}</Text>
            <Text style={styles.timer}>{item.timeright}</Text>
            <Text style={styles.locleft}>{item.locationleft}</Text>
            <Text style={styles.locrig}>{item.locationright}</Text>
            <Text style={styles.tavelh}>{item.tavelhours}</Text>
            <Text style={styles.stop}>{item.stopping}</Text>
            <View style={styles.buttomm}>
            <Text style={styles.fligid}>{item.flightID}</Text>
            <Text style={styles.pricef}>{item.price}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
        />
        
      </View>
    </SafeAreaView>
  )
}

export default FlightAvailability

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  head:{
    flex:.06,
    backgroundColor:'#fcfbfe',
    flexDirection:'row',
  },
  traveld:{
    alignItems:'center',
  },
  bakicon:{
    flex:.2,
    justifyContent:'center',
    alignItems:'center',
  },
  backi:{
    width:25,
    height:25,
    borderRadius:8,
    borderWidth:1,
    borderColor:'#bab9bd',
  },
  traveld:{
    flex:.6,
    justifyContent:'center',
    alignItems:'center'
  },
  tdetails:{
    fontSize:23,
    fontWeight:'bold',
  },
  filtericon:{
    flex:.2,
    justifyContent:'center',
    alignItems:'center',
  },
  ficon:{
    width:25,
    height:25,
    borderRadius:8,
    borderWidth:1,
    borderColor:'#bab9bd',
  },
  date:{
    flex:.07,
    backgroundColor:'yellow',
  },
  dateday:{
    justifyContent:'center',
    paddingHorizontal:13,
    backgroundColor:'#fcfbfe',
  },
  daydetails:{
    fontSize:20,
    fontWeight:'bold',
  },
  price:{
    fontSize:17,
    alignSelf:'center',
    color:'#bab9bd',
  },
  content:{
    flex:.87,
  },
  contentd:{
    backgroundColor:'#ffff',
    borderRadius:20,
    padding:10,
    marginTop:20,
    marginHorizontal:20,
  },
  meals:{
    paddingLeft:30,
    marginVertical:-20,
  },
  timel:{
    paddingTop:35,
    paddingLeft:15,
    fontSize:27,
    fontWeight:'bold',
    color:'#000',
  },
  timer:{
    paddingLeft:260,
    fontSize:27,
    marginVertical:-34,
    fontWeight:'bold',
    color:'#000',
  },
  locleft:{
    paddingTop:37,
    paddingLeft:15,
    fontSize:20,
    fontWeight:'bold',
  },
  locrig:{
    paddingLeft:260,
    marginVertical:-25,
    fontSize:20,
    fontWeight:'bold',
  },
  tavelh:{
    paddingLeft:110,
  },
  stop:{
    paddingLeft:170,
    marginVertical:-19,
  },
  buttomm:{
    marginVertical:10,
    top:"17%",
    borderTopWidth:.5,
    borderTopColor:'#86868a',
  },
  fligid:{
    paddingTop:10,
    paddingLeft:15,
    fontWeight:'bold',
    fontSize:20,
  },
  pricef:{
    paddingLeft:270,
    top:"-43%",
    fontWeight:'bold',
    fontSize:20,
  }
})