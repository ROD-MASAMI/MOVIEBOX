import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Image, Button, Platform, TouchableOpacity} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from 'axios';

const Upload = () => {
    const [photo, setPhoto] = useState();

    const ChoosePhoto = async () => {
       let Result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(Result.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
          }

          let picture = await ImagePicker.launchImageLibraryAsync({
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
          });
          
          if (picture.cancelled === true) return;
          setPhoto(picture);
      };

      const UploadPhoto = async (photo) =>{
         let data = new FormData();

         //structure file uri
         let localUri = Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri;
       
         //get file name
        let Filename = photo.uri.split('/').pop();
       
        //get file type
        let match = /\.(\w+)$/.exec(Filename);
  let type = match ? `image/${match[1]}` : `image`;
        
         data.append('photo',{
          name: Filename,
          type:type,
          uri: localUri ,
         });
         try {
          const response = await axios.post('https://c6f3-197-250-225-146.eu.ngrok.io/api/upload', data, {
            headers: { "Content-Type": "multipart/form-data"
          },
          });
          if (!response.data.message) {
            alert("Image upload failed!");
            return;
          }
          alert("Image Uploaded");
          console.log(response.url);
        } catch (err) {
          alert(err);
        } 
      }

  return (
    <View style={{marginTop:500}}>
      {photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 200, height: 200 }}
          />
           <TouchableOpacity style={{margin:50, borderWidth:1, maxWidth:120}}
      onPress={()=>UploadPhoto(photo)}
      >
        <Text>upload photo</Text>
      </TouchableOpacity>
          
        </>
      )}
      <TouchableOpacity style={{margin:50, borderWidth:1, maxWidth:120}}
      onPress={()=>ChoosePhoto()}
      >
        <Text>Choose photo</Text>
      </TouchableOpacity>
      <Button title="Choose Photo" onClick={ChoosePhoto} />
    </View>
  )
}

export default Upload
