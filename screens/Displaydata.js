import { Text, View } from 'react-native';
import SvgComponent from "./Svg"


export default function Displaydata({route,list}) {
    
    const {paramKey} = route.params;
    console.log("paramkey",paramKey)

    const selectedItem = list.find(item => item.id === paramKey);
    console.log(selectedItem.Bgcolor)

    return (
        <View className={` h-screen flex justify-center ${selectedItem.Bgcolor}`}>
          
              <Text className={` text-center ${selectedItem.fontcolor} ${selectedItem.fontsize} `}>{selectedItem.Name}</Text>
             
         
     </View>
      
    )
}