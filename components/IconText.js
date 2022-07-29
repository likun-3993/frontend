import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const IconText = () => {
  return (
    <View>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Text>IconText</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({})