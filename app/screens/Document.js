import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Image, Button, Platform, TouchableOpacity} from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
const Document = () => {
    const[doc, setDoc] = useState();
    const ChooseDoc = async () =>{
        let result = await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {
            if (response.type == 'success') {          
              let { name, size, uri } = response;
              let nameParts = name.split('.');
              let fileType = nameParts[nameParts.length - 1];
              var fileToUpload = {
                name: name,
                size: size,
                uri: uri,
                type: "application/" + fileType
              };
              console.log(fileToUpload, '...............file')
              setDoc(fileToUpload);
            }
        });
    };
    return (
        <View style={{marginTop:500}}>
          {doc && (
            <>
              
               <TouchableOpacity style={{margin:50, borderWidth:1, maxWidth:120}}
         
          >
            <Text>upload doc</Text>
          </TouchableOpacity>
              
            </>
          )}
          <TouchableOpacity style={{margin:50, borderWidth:1, maxWidth:120}}
          onPress={()=>ChooseDoc()}
          >
            <Text>Choose Doc</Text>
          </TouchableOpacity>
        </View>
      )
}

export default Document
