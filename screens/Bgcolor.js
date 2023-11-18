import { Text, View } from 'react-native';


export default function Bgcolor({route}) {
    const { getcss} = route.params;


    const background=[
        { "name": "bg-slate-500", "value": "bg-slate-500" },
        { "name": "bg-gray-500", "value": "bg-gray-500" },
        { "name": "bg-zinc-500", "value": "bg-zinc-500" },
        { "name": "bg-neutral-500", "value": "bg-neutral-500" },
        { "name": "bg-stone-500", "value": "bg-stone-500" },
        { "name": "bg-red-500", "value": "bg-red-500" },
        { "name": "bg-orange-500", "value": "bg-orange-500" },
        { "name": "bg-amber-500", "value": "bg-amber-500" },
        { "name": "bg-yellow-500", "value": "bg-yellow-500" },
        { "name": "bg-lime-500", "value": "bg-lime-500" },
        { "name": "bg-green-500", "value": "bg-green-500" },
        { "name": "bg-emerald-500", "value": "bg-emerald-500" },
        { "name": "bg-teal-500", "value": "bg-teal-500" },
        { "name": "bg-cyan-500", "value": "bg-cyan-500" },
        { "name": "bg-sky-500", "value": "bg-sky-500" },
        { "name": "bg-blue-500", "value": "bg-blue-500" },
        { "name": "bg-indigo-500", "value": "bg-indigo-500" },
        { "name": "bg-violet-500", "value": "bg-violet-500" },
        { "name": "bg-purple-500", "value": "bg-purple-500" },
        { "name": "bg-fuchsia-500", "value": "bg-fuchsia-500" },
        { "name": "bg-pink-500", "value": "bg-pink-500" }
      ]


    return (
        <View className="flex flex-row flex-wrap">
        {background.map((bg, index) => (
          <View key={index} className=" p-3  mx-auto ">
            <Text className={`${bg.value} text-center py-2.5 px-2 mr-1 w-10 text-sm font-medium focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 `} onPress={() => getcss("bgcolor", bg.value)}></Text>
          </View>
        ))}
      </View>
    )
}