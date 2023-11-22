import { Text, View } from 'react-native';


export default function Fontcolor({route}) {
    const { getcss} = route.params;
const fontcolor=[
  {"name": "text-gray-100", "value": "rgb(243 244 246)"},
  {"name": "text-gray-200", "value": "rgb(229 231 235)"},
  {"name": "text-gray-300", "value": "rgb(209 213 219)"},
  {"name": "text-gray-400", "value": "rgb(156 163 175)"},
  {"name": "text-gray-500", "value": "rgb(107 114 128)"},
  {"name": "text-gray-600", "value": "rgb(82 82 82)"},
  {"name": "text-gray-700", "value": "rgb(64 64 64)"},
  {"name": "text-gray-800", "value": "rgb(38 38 38)"},
  {"name": "text-gray-900", "value": "rgb(23 23 23)"},
  {"name": "text-red-100", "value": "rgb(254 226 226)"},
  {"name": "text-red-200", "value": "rgb(254 202 202)"},
  {"name": "text-red-300", "value": "rgb(252 165 165)"},
  {"name": "text-red-400", "value": "rgb(248 113 113)"},
  {"name": "text-red-500", "value": "rgb(239 68 68)"},
  {"name": "text-red-600", "value": "rgb(220 38 38)"},
  {"name": "text-red-700", "value": "rgb(185 28 28)"},
  {"name": "text-red-800", "value": "rgb(153 27 27)"},
  {"name": "text-red-900", "value": "rgb(127 29 29)"},
  {"name": "text-orange-100", "value": "rgb(255 237 213)"},
  {"name": "text-orange-200", "value": "rgb(252 209 156)"},
  {"name": "text-orange-300", "value": "rgb(250 178 103)"},
  {"name": "text-orange-400", "value": "rgb(245 121 60)"},
  {"name": "text-orange-500", "value": "rgb(249 115 22)"},
  {"name": "text-orange-600", "value": "rgb(235 93 5)"},
  {"name": "text-orange-700", "value": "rgb(190 72 5)"},
  {"name": "text-orange-800", "value": "rgb(155 59 5)"},
  {"name": "text-orange-900", "value": "rgb(124 45 18)"},
  {"name": "text-yellow-100", "value": "rgb(254 249 195)"},
  {"name": "text-yellow-200", "value": "rgb(254 225 128)"},
  {"name": "text-yellow-300", "value": "rgb(253 204 71)"},
  {"name": "text-yellow-400", "value": "rgb(251 162 31)"},
  {"name": "text-yellow-500", "value": "rgb(234 179 8)"},
  {"name": "text-yellow-600", "value": "rgb(193 136 12)"},
  {"name": "text-yellow-700", "value": "rgb(155 100 13)"},
  {"name": "text-yellow-800", "value": "rgb(126 81 9)"},
  {"name": "text-yellow-900", "value": "rgb(113 63 18)"},
  {"name": "text-green-100", "value": "rgb(220 252 231)"},
  {"name": "text-green-200", "value": "rgb(182 231 200)"},
  {"name": "text-green-300", "value": "rgb(133 201 141)"},
  {"name": "text-green-400", "value": "rgb(67 160 71)"},
  {"name": "text-green-500", "value": "rgb(34 197 94)"},
  {"name": "text-green-600", "value": "rgb(32 168 77)"},
  {"name": "text-green-700", "value": "rgb(25 135 57)"},
  {"name": "text-green-800", "value": "rgb(20 92 40)"},
  {"name": "text-green-900", "value": "rgb(20 83 45)"},
  {"name": "text-cyan-100", "value": "rgb(207 250 254)"},
  {"name": "text-cyan-200", "value": "rgb(140 235 255)"},
  {"name": "text-cyan-300", "value": "rgb(0 216 255)"},
  {"name": "text-cyan-400", "value": "rgb(0 178 214)"},
  {"name": "text-cyan-500", "value": "rgb(6 182 212)"},
  {"name": "text-cyan-600", "value": "rgb(6 182 212)"},
  {"name": "text-cyan-700", "value": "rgb(6 182 212)"},
  {"name": "text-cyan-800", "value": "rgb(6 182 212)"},
  {"name": "text-cyan-900", "value": "rgb(6 182 212)"},
    {"name": "text-blue-100", "value": "rgb(219 234 254)"},
    {"name": "text-blue-200", "value": "rgb(191 219 254)"},
    {"name": "text-blue-300", "value": "rgb(147 197 253)"},
    {"name": "text-blue-400", "value": "rgb(96 165 250)"},
    {"name": "text-blue-500", "value": "rgb(59 130 246)"},
    {"name": "text-blue-600", "value": "rgb(37 99 235)"},
    {"name": "text-blue-700", "value": "rgb(29 78 216)"},
    {"name": "text-blue-800", "value": "rgb(30 64 175)"},
    {"name": "text-blue-900", "value": "rgb(30 58 138)"},
    {"name": "text-indigo-100", "value": "rgb(224 231 255)"},
    {"name": "text-indigo-200", "value": "rgb(199 210 254)"},
    {"name": "text-indigo-300", "value": "rgb(165 180 252)"},
    {"name": "text-indigo-400", "value": "rgb(129 140 248)"},
    {"name": "text-indigo-500", "value": "rgb(99 102 241)"},
    {"name": "text-indigo-600", "value": "rgb(79 70 229)"},
    {"name": "text-indigo-700", "value": "rgb(67 56 202)"},
    {"name": "text-indigo-800", "value": "rgb(55 48 163)"},
    {"name": "text-indigo-900", "value": "rgb(49 46 129)"},
    {"name": "text-violet-100", "value": "rgb(237 233 254)"},
    {"name": "text-violet-200", "value": "rgb(221 214 254)"},
    {"name": "text-violet-300", "value": "rgb(196 181 253)"},
    {"name": "text-violet-400", "value": "rgb(167 139 250)"},
    {"name": "text-violet-500", "value": "rgb(139 92 246)"},
    {"name": "text-violet-600", "value": "rgb(124 58 237)"},
    {"name": "text-violet-700", "value": "rgb(109 40 217)"},
    {"name": "text-violet-800", "value": "rgb(91 33 182)"},
    {"name": "text-violet-900", "value": "rgb(76 29 149)"},
    {"name": "text-purple-100", "value": "rgb(243 232 255)"},
    {"name": "text-purple-200", "value": "rgb(233 213 255)"},
    {"name": "text-purple-300", "value": "rgb(216 180 254)"},
    {"name": "text-purple-400", "value": "rgb(192 132 252)"},
    {"name": "text-purple-500", "value": "rgb(168 85 247)"},
    {"name": "text-purple-600", "value": "rgb(147 51 234)"},
    {"name": "text-purple-700", "value": "rgb(126 34 206)"},
    {"name": "text-purple-800", "value": "rgb(107 33 168)"},
    {"name": "text-purple-900", "value": "rgb(88 28 135)"},
    {"name": "text-pink-100", "value": "rgb(252 231 243)"},
    {"name": "text-pink-200", "value": "rgb(251 207 232)"},
    {"name": "text-pink-300", "value": "rgb(249 168 212)"},
    {"name": "text-pink-400", "value": "rgb(244 114 182)"},
    {"name": "text-pink-500", "value": "rgb(236 72 153)"},
    {"name": "text-pink-600", "value": "rgb(219 39 119)"},
    {"name": "text-pink-700", "value": "rgb(190 24 93)"},
    {"name": "text-pink-800", "value": "rgb(157 23 77)"},
    {"name": "text-pink-900", "value": "rgb(131 24 67)"},
]

const itemsPerRow = 9;
      const renderColorItems = () => {
        return fontcolor.map((fc, index) => (
          <View key={index} className=" ">
            <Text
              className={`${fc.name} text-xl text-center py-2.5 px-2  w-10 h-10 font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 `}
              onPress={() => getcss("fontColor", fc.name)}
            >T</Text>
          </View>
        ));
      };
    
      const divideIntoRows = (items, itemsPerRow) => {
        const rows = [];
        for (let i = 0; i < items.length; i += itemsPerRow) {
          rows.push(<View key={i} className="flex flex-row flex-wrap  mx-auto">{items.slice(i, i + itemsPerRow)}</View>);
        }
        return rows;
      };
    
      return <View>{divideIntoRows(renderColorItems(), itemsPerRow)}</View>;
    }