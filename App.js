import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator,scroll } from "@react-navigation/material-top-tabs";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Fontname from "./screens/Fontname";
import Fontsize from "./screens/Fontsize";
import Fontcolor from "./screens/Fontcolor";
import Bgcolor from "./screens/Bgcolor";
import InputText from "./screens/InputText";
import { View ,Button,Text,ScrollableTabView, ViewBase,TextInput} from 'react-native';
import * as SQLite from "expo-sqlite";
import List from "./screens/List";
import Displaydata from "./screens/Displaydata";
import Icon from 'react-native-vector-icons/EvilIcons'
import Icons from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();


const components = [
  {
    "name": "Font Size",
    "comp": Fontsize
  },
  {
    "name": "Font Color",
    "comp": Fontcolor
  },
  {
    "name": "Bg Color",
    "comp": Bgcolor
  }
];

const App = () => {
  const [text, settext] = useState("");
  const [addvalue, setaddvalue] = useState(null);
  const [selecetedText, setselectedText] = useState(false);
  const [id, setid] = useState(0);
  const[list,setlist]=useState([])
  const [shows, setShows] = useState(false);
  const[addnew,setaddnew]=useState(false);
  const[editview,seteditview]=useState(false)
  const[editvalues,seteditvalues]=useState([]);
  const[textedit,settextedit]=useState(null)
  const [css, setCss] = useState({
    fontname: " ",
    bgcolor: " ",
    fontsize: " ",
    fontColor: " ",
  });



  const db = SQLite.openDatabase("welcome.db");

  const Save = (id, updatedValues, edittedtext) => {
    if (addnew) {
      db.transaction((t) => {
        t.executeSql(
          "UPDATE csstable SET Name = ?, fontsize = ?, fontcolor = ?, Bgcolor = ? WHERE id = ?",
          [edittedtext, updatedValues.fontsize, updatedValues.fontColor, updatedValues.bgcolor, id],
          (_, results) => {
            console.log("Row updated successfully");
            setlist((prevList) =>
              prevList.map((item) =>
                item.id === id ? { ...item, ...updatedValues, Name: edittedtext } : item
              )
            );
            console.log(
              "SQL UPDATE statement parameters:",
              edittedtext,
              updatedValues.fontsize,
              updatedValues.fontColor,
              updatedValues.bgcolor,
              id
            );
            refreshList(); 
          },
          (error) => {
            console.error("Error updating csstable:", error);
          }
        );
      });
    } else {
      db.transaction((t) => {
        t.executeSql(
          "INSERT INTO csstable (Name, fontsize, fontcolor, Bgcolor) VALUES (?, ?, ?, ?)",
          [text, css.fontsize, css.fontColor, css.bgcolor],
          (_, results) => {
            console.log("Row added successfully");
            setlist((prevList) => [
              ...prevList,
              {
                id: results.insertId, // Include the inserted id
                Name: text,
                fontsize: css.fontsize,
                fontColor: css.fontColor,
                Bgcolor: css.bgcolor,
              },
            ]);
          },
          (error) => {
            console.error("Error inserting into csstable:", error);
          }
        );
      });
    }
  };
  
  const refreshList = () => {
    db.transaction((t) => {
      t.executeSql("SELECT * FROM csstable", null, (_, { rows }) => {
        const data = rows._array;
        setlist(data);
      });
    });
  };
  

  const add = () => {
    setaddvalue(text);
    settext("");
    setShows(true);
    setid(id + 1);
  };

  const handlechange = (textvalue) => {
    settext(textvalue);
    console.log(text)
  };

  const textselected = () => {
    setselectedText(true);
  };

  const getcss = (field, value) => {
    setCss((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };
// console.log(css.fontColor)

const addnewvalues=()=>{
  setaddnew(true)
  // seteditview(false)
}

const back=()=>{
  setaddnew(false)
}

const geteditvalues=(item)=>{
  seteditvalues(item)
  console.log("getvaluesitem",editvalues)
  setaddnew(false)
}



  useEffect(() => {
    db.transaction((t) => {
      t.executeSql(
        "CREATE TABLE IF NOT EXISTS csstable (id INTEGER PRIMARY KEY AUTOINCREMENT,Name TEXT,fontsize TEXT, fontcolor TEXT, Bgcolor TEXT);"
      );
    });
    db.transaction((t) => {
      t.executeSql("SELECT*FROM  csstable", null, (_, { rows }) => {
        const data = rows._array;
        setlist(data);
        
      });
    })
    refreshList();
  },[]); 

  return (
    <View className=""> 
    {addnew?(<View className=""> 
   <View className="flex-row items-center justify-around "> 

   <Text className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-3 py-3 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onPress={back}><Icon name="arrow-left" style={{ color: 'white', textAlign: 'center', fontSize: 30  }}/></Text>
   
   <TextInput className="bg-transparent border hover:bg-blue-800 focus:ring-4  w-1/2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-3 py-3 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  placeholder="values..." value={text}/>
     <Text className="bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300  font-medium rounded-lg text-xl px-3 py-3  mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onPress={()=>Save(editvalues,css,textedit)}><Icons name="save" style={{ color: 'white', textAlign: 'center', fontSize: 30  }}/></Text>
   
     </View>
      <InputText
        text={text}
        addvalue={addvalue}
        handlechange={handlechange}
        textselected={textselected}
        add={add}
        shows={shows}
        selecetedText={selecetedText}
        css={css}
        Save={Save}
        list={list}
        editvalues={editvalues}
        settextedit={settextedit}
        addnew={addnew}
        setCss={setCss}
        editview={editview}
      />
      <NavigationContainer>
        <View className=" flex flex-row items-center justify-center h-screen ">
          <Tab.Navigator
         overScrollMode={"auto"}
            screenOptions={{
              labelStyle: {
                fontSize: 14,
                fontWeight: "bold",
              },
              activeTintColor: "#ffffff",
              inactiveTintColor: "#000000",
              pressOpacity: 1,
              indicatorStyle: {
                backgroundColor: "black",
                height: 30,
                borderRadius: 30,
                top: 9,
              },
              tabStyle: {
                width: "auto",
                scrollEnabled: true
              },
            }}
          >
            {components.map((comps) => (
              <Tab.Screen
                key={comps.name}
                name={comps.name}
                component={comps.comp}
                initialParams={{ getcss: getcss }}
                
              />
              
            ))}
          </Tab.Navigator>
        </View>
      </NavigationContainer>
      </View>):( 
        <View className="h-screen flex justify-center" >
        <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="VANAKKAM"  initialParams={{ list: list}}>{props => <List {...props} list={list} addnewvalues={addnewvalues} geteditvalues={geteditvalues}/>}</Stack.Screen>
        <Stack.Screen name="Displaydata" >{props => <Displaydata {...props} list={list} />}</Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
      </View>)}
    </View>
  );
};

export default App;
