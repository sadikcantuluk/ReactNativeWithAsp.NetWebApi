import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    }
})