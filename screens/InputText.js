import React, { useState, useEffect,useRef } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default function InputText({ ...props }) {
  const {
    selecetedText,
    addvalue,
    handlechange,
    text,
    textselected,
    shows,
    add,
    css,
    Save,
    editvalues,
    addnew,
    list,
    settextedit,
    setCss,
    editview,
  } = props;

  const selectedItem = list.find((listitem) => listitem.id === editvalues);

  const inputref=useRef(null);


  useEffect(() => {
    if (addnew) {
      setCss({
        fontname: "",
        bgcolor: "",
        fontsize: "",
        fontColor: "",
      });
    }

  }, [addnew]);



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      inputref.current?.focus();
    }, 0);
  
    return () => clearTimeout(timeoutId);
  }, []);


  return (
  
       <View
        className={`py-36 mt-1 ${css.bgcolor} ${
          selecetedText ? 'border-gray-200 rounded-lg shadow dark:bg-gray-800' : ''
        } dark:border-gray-700`}
      >
        <TextInput
          className={`${css.fontColor} ${css.fontsize} ${css.fontname} dark:text-white text-center`}
          value={text}
          ref={inputref}
          placeholder="Enter text..."
          onChangeText={handlechange}
        />
      </View> 
    
  );
}
