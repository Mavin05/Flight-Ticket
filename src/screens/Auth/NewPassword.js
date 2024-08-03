import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, StatusBar  } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const NewPassword = ({navigation}) => {
  return (
    <ScrollView style={styles.scroll}>
    <SafeAreaProvider style={styles.container}>
    <StatusBar
        animated={true}
        backgroundColor="#e52881"
      />
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={styles.bak}>Back</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.dta}>
        <TextInput style={styles.old} placeholder='Old Password' secureTextEntry={true}></TextInput>
        <TextInput style={styles.npass} placeholder='New Password'></TextInput>
        <TextInput style={styles.cpass} placeholder='Confirm Password' secureTextEntry={true}></TextInput>
        </View>
        <TouchableOpacity>
        <View style={styles.lbuto}>
            <Text style={styles.con}>Confirm</Text>
        </View>
        </TouchableOpacity>
    </SafeAreaProvider>
    </ScrollView>
  )
}

export default NewPassword

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffff",
    },
    header:{
        flex:.09,
        backgroundColor:'#e52881',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    bak:{
        fontWeight:'bold',
        fontSize:22,
        padding:12,
        color:'#ffff',
    },
    dta:{
        marginVertical:"5%",
    },
    old:{
        paddingLeft:15,
        backgroundColor:'#fafafd',
        borderWidth:5,
        borderColor:'#f4f3f6',
        borderRadius: 10,
        marginHorizontal:"5%",
      },
      npass:{
        paddingLeft:15,
        backgroundColor:'#fafafd',
        borderWidth:5,
        borderColor:'#f4f3f6',
        borderRadius: 10,
        marginVertical:"3%",
        marginHorizontal:"5%",
      },
      cpass:{
        paddingLeft:15,
        backgroundColor:'#fafafd',
        borderWidth:5,
        borderColor:'#f4f3f6',
        borderRadius: 10,
        marginVertical:"1%",
        marginHorizontal:"5%",
      },
      lbuto:{
        marginHorizontal:"5%",
        backgroundColor:'#e52881',
        borderRadius:15,
      },
      con:{
        textAlign:'center',
        color:'#ffff',
        padding:13,
        fontWeight:'bold',
        fontSize:20,
      },
      scroll:{
        backgroundColor:'#ffff',
      }
})