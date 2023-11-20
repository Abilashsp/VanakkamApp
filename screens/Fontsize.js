
import { Text, View } from 'react-native';


export default function Fontsize({route}) {
    const { getcss} = route.params;
    const fontsize=[

      { "name": "text-9xl", "value": "text-9xl" },
      { "name": "text-8xl", "value": "text-8xl" },
      { "name": "text-7xl", "value": "text-7xl" },
      { "name": "text-6xl", "value": "text-6xl" },
      { "name": "text-5xl", "value": "text-5xl" },
      { "name": "text-4xl", "value": "text-4xl" },
      { "name": "text-3xl", "value": "text-3xl" },
      { "name": "text-2xl", "value": "text-2xl" },
      { "name": "text-xl", "value": "text-xl" },
      { "name": "text-lg", "value": "text-lg" },
      { "name": "text-base", "value": "text-base" },
      { "name": "text-sm", "value": "text-sm" },
      { "name": "text-xs", "value": "text-xs" },
       
      ]
      


    return (

<View className="flex flex-row flex-wrap ">
        {fontsize.map((size, index) => (
          <View key={index} className=" p-3">
            <Text className={`${size.value} text-center py-2.5 px-2 mr-2 mb-2 w-16  focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 `} onPress={() => getcss("fontsize", size.value)} >T</Text>
          </View>
        ))}
      </View>

    )
}