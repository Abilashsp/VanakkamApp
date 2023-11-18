import { Text, View,TextInput ,Button,StyleSheet} from 'react-native';
import React, { useState } from 'react'
import Fontname from './Fontname';
import { useFonts, Inter_900Black ,Inter_700Bold,Inter_100Thin} from '@expo-google-fonts/inter';



export default function InputText({...props}) {



  const{selecetedText,addvalue,handlechange,text,textselected,shows,add,css,Save,editvalues}=props
  // const fcolor=css.map((e)=>(e.fontColor))
  // const bcolor=css.map((e)=>(e.bgcolor))
  // const fsize=css.map((e)=>(e.fontsize))


console.log(css.fontColor)
  return (
 
<View>
     
      
<View className={`py-36 mt-1 ${css.bgcolor} ${selecetedText?"  border-gray-200 rounded-lg shadow dark:bg-gray-800":" "} dark:border-gray-700  `}>
        <TextInput
     className={`${css.fontColor} ${css.fontsize} ${css.fontname} dark:text-white text-center `}
      value={text}
      placeholder="Enter text..."
      onChangeText={handlechange}
    />
    












  </View>
  </View>
  )
  
    
    }
