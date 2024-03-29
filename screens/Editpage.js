import React, { useState, useEffect,useRef } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default function Editpage({ ...props }) {
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
    editview
  } = props;

  const selectedItem = list.find((listitem) => listitem.id === editvalues);
  const inputref=useRef(null);

  const [editableText, setEditableText] = useState(selectedItem?.Name || '');
  const [cssStyle, setCSSStyle] = useState({
    bgcolor:selectedItem?.Bgcolor,
    fontsize: selectedItem?.fontcolor,
    fontColor: selectedItem?.fontname,
  })

  const handleEditableTextChange = (newValue) => {
    setEditableText(newValue);
    settextedit(newValue) 

  };

  useEffect(() => {
    setCSSStyle({
      bgcolor: css.bgcolor,
      fontsize: css.fontsize,
      fontColor: css.fontColor,
    });
  }, [css]);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      inputref.current?.focus();
    }, 0);
  
    return () => clearTimeout(timeoutId);
  }, []);



  return (
    <View>

      <View
        className={`py-36 mt-1 ${cssStyle.bgcolor} ${
          selecetedText ? 'border-gray-200 rounded-lg shadow dark:bg-gray-800' : ''
        } dark:border-gray-700`}
      >
        <TextInput
          className={`${cssStyle.fontColor} ${cssStyle.fontsize} dark:text-white text-center`}
          value={editableText}
          ref={inputref}
          placeholder="Enter text..."
          onChangeText={handleEditableTextChange}
        />
      </View>

    
  </View>
  );
}
