import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

const Banner = ({style,title,styleText}) => {
  return (
    <View style={[styles.banner,style]}>
      <AppText style={[styleText]}>
        {title}
      </AppText>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    banner:{
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,
        backgroundColor:'#3AB0FF',

    },
})