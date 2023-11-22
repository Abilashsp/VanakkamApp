import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Displaydata from './Displaydata';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function List({ list, addnewvalues, navigation, geteditvalues }) {
  const [searchText, setSearchText] = useState('');

  return (
    <ScrollView>
      <View className="">
        <View className="flex-row justify-around">
          <View className="relative flex-row justify-evenly mt-2">
            <View className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Icon name="search" style={{ width: 60, height: 60, fontSize: 25, textAlign: 'left', alignItems: 'center',padding:12 }} />
            </View>
            <TextInput
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
              className="bg-transparent border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-16 mb-5  py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              placeholder="Search list Items"
              required
            />
          </View>
          <View className="bg-green-500 w-12 h-12 mt-2 rounded-xl">
            <Icon name='plus' style={{ width: 60, height: 60, fontSize: 50, color: 'white',  }} onPress={addnewvalues} />
          </View>
        </View>
<View className="border mx-5 rounded-lg px-3 bg-slate-200" > 
<Text className="bg-blue-600 text-white text-lg font-bold mb-3 me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300">List of  Items</Text>
        {list &&
          list
            .filter((item) => item?.Name?.toLowerCase().includes(searchText.toLowerCase()))
            .map((item) => (
              <View key={item.id} className="px-4 py-2 ">
                <Text
                  className={`${item.Bgcolor} ${item.fontsize} ${item.fontcolor} h-16 py-2 rounded-lg text-center`}
                  onPress={() => {
                    navigation.navigate('Displaydata', { paramKey: item.id });
                  }}
                  onLongPress={() => geteditvalues(item.id)}
                >
                  {item.Name}
                </Text>
              </View>
            ))}
      </View>
      </View>
    </ScrollView>
  );
}
