import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


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
    </SafeAreaView>
  )
}

export default FlightAvailability

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
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
  }
})