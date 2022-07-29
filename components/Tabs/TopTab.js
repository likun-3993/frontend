import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Treks from '../../pages/Treks';
import Trips from '../../pages/Trips';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Treks" component={Treks} />
      <Tab.Screen name="Trips" component={Trips} />
    </Tab.Navigator>
  )
}

export default TopTab

const styles = StyleSheet.create({})