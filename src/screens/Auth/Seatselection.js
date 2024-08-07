import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

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
    seatb: 'A2',
    seatc: 'A3',
    seatd: 'A4',

  },
  {
    id: 'b',
    seata: 'B1',
    seatb: 'B2',
    seatc: 'B3',
    seatd: 'B4',
  },
  {
    id: 'd',
    seata: 'C1',
    seatb: 'C2',
    seatc: 'C3',
    seatd: 'C4',
  },
  {
    id: 'e',
    seata: 'C1',
    seatb: 'C2',
    seatc: 'C3',
    seatd: 'C4',
  },
]

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
          <FlatList
            data={seats}
            horizontal={true}
            renderItem={({ item }) => (
              <View style={styles.dseats}>
                <Text>{item.seata}</Text>
                <Text>{item.seatb}</Text>
                <Text>{item.seatc}</Text>
                <Text>{item.seatd}</Text>
              </View>
            )} />
        </ImageBackground>
      </View>
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
  dseats: {
    backgroundColor: "#ffff",
    marginVertical: 10,
  }
})