
import { Text, View } from 'react-native';


export default function Fontname({route}) {
    

    const { getcss} = route.params;

    const fontname=[
        {"name": "Roboto", "value": "font-Roboto"},
        {"name": "timenewroman", "value": "font-Timesnewromon"},
       
    ]
    


    return (
<View>
   {fontname.map((fonts,index)=>(<Text key={index} className={`${fonts.value} text-2xl `} >{fonts.name}</Text>))} 
    </View>

    )
}