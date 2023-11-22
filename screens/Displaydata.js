import { Text, View } from 'react-native';
import SvgComponent from "./Svg"
import React, { useState, useEffect,useRef } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation'
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/EvilIcons'


export default function Displaydata({route,list}) {
    const {paramKey} = route.params;
    console.log("paramkey",paramKey)

    const selectedItem = list.find(item => item.id === paramKey);

    
    

    return (
        <View className={`h-96 flex justify-center ${selectedItem.Bgcolor}`}>
          
              <Text className={` text-center ${selectedItem.fontcolor} ${selectedItem.fontsize} `}>{selectedItem.Name}</Text>
     </View>
      
    )
}