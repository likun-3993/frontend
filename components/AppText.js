import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppText = (props) => {
  return (
    <View>
      <Text style={[styles.text, props.style]}>
        {props.children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default AppText
