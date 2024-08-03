/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scroll}>
    <SafeAreaView style={styles.container}>
    <StatusBar
        animated={true}
        backgroundColor="#ffff"
      />
        <View style={styles.Lpg}>
          <Text style={styles.tex}>Login to go where you leave</Text>
          <Image style={styles.limg} source={require('./../../../assets/images/Front-img.png')}/>
        </View>
        <View style={styles.wel}>
          <Text style={styles.twel}>Welcome Back</Text>
          <Text style={styles.tdel}>Enter details to setup your account back</Text>
        </View>
        <View style={styles.data}>
          <TextInput style={styles.eml} placeholder='Email Id'></TextInput>
          <TextInput style={styles.pass} placeholder='password'></TextInput>
        </View>
        <View style={styles.for}>
          <TouchableOpacity onPress={() => navigation.navigate('newpassword')}>
          <Text style={styles.tfor}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.lbut}>
        <View>
          <Text style={styles.tlbut}>Login</Text>
        </View>
        </TouchableOpacity>
    </SafeAreaView>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#ffff",
  },
  Lpg: {
    backgroundColor:'#faf7f5',
    borderRadius:20,
    marginHorizontal:"5%",
  },
  tex: {
    textAlign:'center',
    paddingTop:15,
    fontSize: 25,
    fontWeight:'bold',
    color:'black',
  },
  limg: {
    marginHorizontal: "10%",
    marginVertical:"5%",
  },
  twel: {
    fontSize:25,
    color:'black',
    fontWeight:'bold',
  },
  wel:{
    paddingTop:20,
    marginHorizontal:"5%",
  },
  data:{
    marginVertical:"10%",
    marginHorizontal:"5%",
  },
  eml:{
    paddingLeft:15,
    backgroundColor:'#fafafd',
    borderColor: '#f4f3f6',
    borderWidth: 5,
    borderRadius: 10,
  },
  pass:{
    paddingLeft:15,
    backgroundColor:'#fafafd',
    borderColor: '#f4f3f6',
    borderWidth: 5,
    borderRadius: 10,
    marginVertical:"5%",
  },
  for:{
    left:"62%",
    marginTop:"-13%",
  },
  tfor: {
    fontSize:17.5,
    color:'#871a4f',
  },
  lbut: {
    backgroundColor:'#e52881',
    marginVertical:"10%",
    borderRadius: 20,
    height:"7%",
    marginHorizontal:"5%",
  },
  tlbut:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingTop:10,
  },
  scroll: {
    backgroundColor:'#ffff',
  }
})