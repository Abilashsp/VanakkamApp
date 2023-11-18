import { Text, View } from 'react-native';


export default function Fontcolor({route}) {
    const { getcss} = route.params;
const fontcolor=[
    { "name": "Text", "value": "text-slate-500" },
    { "name": "Text", "value": "text-gray-500" },
    { "name": "Text", "value": "text-zinc-500" },
    { "name": "Text", "value": "text-neutral-500" },
    { "name": "Text", "value": "text-stone-500" },
    { "name": "Text", "value": "text-red-500" },
    { "name": "Text", "value": "text-orange-500" },
    { "name": "Text", "value": "text-amber-500" },
    { "name": "Text", "value": "text-yellow-500" },
    { "name": "Text", "value": "text-lime-500" },
    { "name": "Text", "value": "text-green-500" },
    { "name": "Text", "value": "text-emerald-500" },
    { "name": "Text", "value": "text-teal-500" },
    { "name": "Text", "value": "text-cyan-500" },
    { "name": "Text", "value": "text-sky-500" },
    { "name": "Text", "value": "text-blue-500" },
    { "name": "Text", "value": "text-indigo-500" },
    { "name": "Text", "value": "text-violet-500" },
    { "name": "Text", "value": "text-purple-500" },
    { "name": "Text", "value": "text-fuchsia-500" },
    { "name": "Text", "value": "text-pink-500" },
    { "name": "Text", "value": "text-rose-500" }
]


    return (
        <View className="flex flex-row flex-wrap ">
        {fontcolor.map((colors, index) => (
          <View key={index} className=" p-3 mx-auto">
            <Text className={`${colors.value} text-2xl text-center py-2.5 px-2  mb-2 w-16 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 `} onPress={() => getcss("fontColor", colors.value)}>T</Text>
          </View>
        ))}
      </View>
    );
  }