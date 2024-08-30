import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const location = [
  {
    id: 'a',
    title: 'Chennai',
  },
  {
    id: 'b',
    title: 'Banglore',
  },
  {
    id: 'c',
    title: 'Mumbai',
  },
];

const LocationSelection = ({navigation}) => {
  return (
    <SafeAreaView style={styles.containter}>
      <ScrollView>
      <View style={styles.sat}></View>
      <View style={styles.head}>
        <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backi} source={require('./../../../assets/images/back.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <TextInput placeholder='Search location'></TextInput>
        </View>
      </View>
      <View style={styles.locdata}>
      <FlatList
          data={location}
          renderItem={({ item }) => (
            <TouchableOpacity>
            <View style={styles.loccont}>
              <Text style={styles.locationd}>{item.title}</Text>
            </View>
            </TouchableOpacity>
          )} />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LocationSelection

const styles = StyleSheet.create({
  containter:{
    flex:1,
  },
  sat:{
    flex:.04,
  },
  head:{
    flex:.06,
    flexDirection:'row',
    marginTop:40,
  },
  back:{
    flex:.15,
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
  search:{
    flex:.8,
    backgroundColor:'#fafafd',
    paddingLeft:10,
    borderRadius:10,
  },
  locdata:{
    margin:8,
  },
  loccont:{
    padding:5,
    backgroundColor:'#fafafd',
    marginVertical:1,
    borderWidth:1,
    borderColor:'#eeeeee',
    borderRadius:5,
  },
  locationd:{
    fontSize:18,
    fontWeight:'bold',
    padding:10,
  }
})