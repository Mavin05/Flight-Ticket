import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
import DropShadow from 'react-native-drop-shadow';

const data = [
  {
    id: 'a',
    title: 'Reserved',
    imageURL: "https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg",
  },
  {
    id: 'b',
    title: 'Available',
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1r9-if6K3BGRs8BH5W_7EZebaM2GNGZd1BQ&s",
  },
  {
    id: 'c',
    title: 'Selected',
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Solid_yellow.png",
  },
];
const seats = [
  {
    id: 'a',
    title: 'Business Class',
    seata: 'A1',
    seatb: 'B1',
    seatc: 'C1',
    seatd: 'D1',
  },
  {
    id: 'b',
    seata: 'A2',
    seatb: 'B2',
    seatc: 'C2',
    seatd: 'D2',
  },
  {
    id: 'd',
    seata: 'A3',
    seatb: 'B3',
    seatc: 'C3',
    seatd: 'D3',
  },
  {
    id: 'e',
    seata: 'A4',
    seatb: 'B4',
    seatc: 'C4',
    seatd: 'D4',
  },
  {
    id: 'g',
    title:'Economy Class',
    seata: 'A5',
    seatb: 'B5',
    seatc: 'C5',
    seatd: 'D5',
  },
  {
    id: 'h',
    seata: 'A6',
    seatb: 'B6',
    seatc: 'C6',
    seatd: 'D6',
  },
  {
    id: 'i',
    seata: 'A7',
    seatb: 'B7',
    seatc: 'C7',
    seatd: 'D7',
  },
  {
    id: 'j',
    seata: 'A8',
    seatb: 'B8',
    seatc: 'C8',
    seatd: 'D8',
  },
];

const Seatselection = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#f6f1ef"
      />
      <View style={styles.head}>
        <View style={styles.bakicon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.backi} source={require('./../../../assets/images/back.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.traveld}>
          <Text style={styles.tdetails}>Selecting Seat</Text>
        </View>
        <View style={styles.filtericon}>
          <TouchableOpacity>
            <Image style={styles.ficon} source={require('./../../../assets/images/share.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.travelloc}>
        <Text style={styles.travellocdet}>SFO  ---->  MIL</Text>
      </View>
      <View style={styles.availd}>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.avail}>
              <Image style={styles.colors} source={{ uri: item.imageURL }} style={{ width: 15, height: 15, borderRadius: 10, }} />
              <Text style={styles.availability}>{item.title}</Text>
            </View>
          )} />
      </View>
      <View style={styles.seats}>
        <ImageBackground style={styles.backimg} source={require('./../../../assets/images/selectionn.png')}>
        <View style={styles.seatadj}>
        <FlatList
        data={seats}
        renderItem={({item})=>(
          <View style={styles.title}>
            <Text style={styles.seatf}>{item.title}</Text>
          <View style={styles.arrangement}>
            <TouchableOpacity>
            <Text style={styles.seata}>{item.seata}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.seatb}>{item.seatb}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.seatc}>{item.seatc}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.seatd}>{item.seatd}</Text>
            </TouchableOpacity>
          </View>
          </View>
        )}/>
        </View>
        </ImageBackground>
      </View>
      <DropShadow style={{
            shadowColor: "#0000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: .25,
            shadowRadius: 5,
          }} style={styles.buttom}>
      <View style={styles.passdetails}>
        <View style={styles.classd}></View>
        <View style={styles.passd}></View>
        <View style={styles.seatsd}></View>
      </View>
      <View style={styles.pricepay}>
        <View style={styles.price}></View>
        <View style={styles.pay}></View>
      </View>
      </DropShadow>
    </SafeAreaView>
  )
}

export default Seatselection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f1ef',
  },
  head: {
    flex: .06,
    backgroundColor: '#f6f1ef',
    flexDirection: 'row',
  },
  traveld: {
    alignItems: 'center',
  },
  bakicon: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backi: {
    width: 25,
    height: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bab9bd',
  },
  traveld: {
    flex: .6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tdetails: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  filtericon: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ficon: {
    width: 40,
    height: 40,
  },
  travelloc: {
    flex: .04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  travellocdet: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#706c73',
  },
  availd: {
    flex: .04,
    alignItems: 'center',
    left: "-3%"
  },
  avail: {
    marginHorizontal: 40,
    marginVertical: 12.5,
  },
  availability: {
    left: "40%",
    marginVertical: -18,
    fontWeight: 'bold',
  },
  seats: {
    flex: .69,
  },
  backimg: {
    width: "90%",
    height: "100%",
    marginHorizontal: "10%",
  },
  arrangement:{
    marginVertical:8,
    width:"89%",
    borderRadius:10,
  },
  seatadj:{
    marginTop:180,
    marginHorizontal:30,
  },
  seatf:{
    alignSelf:'center',
    marginLeft:-35,
    fontWeight:'bold',
    fontSize:15,
    color:"#a82365",
  },
  buttom:{
    flex:.17,
    backgroundColor:'red',
  },
  seatb:{
    marginTop:-43,
    fontWeight:'bold',
    marginLeft:65,
    paddingLeft:14,
    width:"16%",
    borderRadius:10,
    backgroundColor:'#f7f1f0',
    padding:12,
  },
  seata:{
    padding:12,
    fontWeight:'bold',
    paddingLeft:14,
    backgroundColor:'#f7f1f0',
    width:"16%",
    borderRadius:10,
  },
  seatc:{
    marginLeft:165,
    paddingLeft:14,
    fontWeight:'bold',
    width:"16%",
    borderRadius:10,
    backgroundColor:'#f7f1f0',
    padding:12,
    marginTop:-43,
  },
  seatd:{
    marginLeft:230,
    fontWeight:'bold',
    paddingLeft:14,
    width:"16%",
    borderRadius:10,
    backgroundColor:'#f7f1f0',
    padding:12,
    marginTop:-43,
  },
  passdetails:{
    flex:.5,
    backgroundColor:'green',
    flexDirection:'row',
  },
  classd:{
    flex:.33,
    backgroundColor:'yellow',
  },
  passd:{
    flex:.34,
    backgroundColor:'orange',
  },
  seatsd:{
    flex:.33,
    backgroundColor:'red',
  },
  pricepay:{
    flex:.5,
    backgroundColor:'green',
    flexDirection:'row',
  },
  price:{
    flex:.4,
    backgroundColor:'red',
  },
  pay:{
    flex:.6,
    backgroundColor:'yellow',
  }

})