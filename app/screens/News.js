import React,{useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from "react-native";
import axios from 'axios';
const News =({navigation}) =>{
    const [news, setNews] = useState({});

    useEffect(() =>{
        axios.get(`https://api.currentsapi.services/v1/search?category=movie&apiKey=5dn2NLyhgMi9_LpGUN2HUkTG-G5RF2dcs4t0xwLCInGD3W0P&limit=20`).then(response =>{
            if(!(response == '')){
              setNews(response.data);
            }
            
          }).catch(error => alert(error));
    }, []) 

    const Card = ({item}) =>{
        
        return (
        <TouchableOpacity >
<View style={styles.card}>
                   <Image
                      style={styles.image}
                      source={{ uri: item.image}}
                      resizeMode='contain'
                      contentContainerStyle={{padding:20}}
                      />
                      <View style={styles.wrapText}>
                          <Text style={styles.fontSize}>{item.title}</Text>
                          
                      </View>
                      <View style={{marginTop:22}}>
                          <Text style={[styles.fontsize, {marginBottom:15, fontWeight:'bold'}]}>{item.author}</Text>
                          {/* <Text style ={styles.fontsize}>{item.STATUS_}</Text> */}
                      </View>
               </View>
        </TouchableOpacity>
        
        );
    };
    return(
    <View style={styles.main}>
        <Text style={styles.headerText}>TRENDING NEWS</Text>
        <View style={{
            marginTop:40
        }}>
<FlatList 
       vertical={true}
       data={news.news}
       keyExtractor={(item) => item.id}
       renderItem={Card}           
       /> 
       </View>
    </View>
    );
}
const styles = StyleSheet.create({
    main :{
   flex: 1,
   backgroundColor:'#0F111D'
    },
    wrapText:{
        flex:1,
        marginLeft:10,
        justifyContent:'center'
    },
    fontSize:{
        fontSize:18
    },
    image:{
        width:100,
        height:100,
    },
    card:{
        flexDirection:'row',
        marginBottom:20,
        borderRadius:20,
        backgroundColor:'grey',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.3,
        shadowRadius:20,
        padding:15
    },
    headerText: {
        color: 'white',
        fontSize: 25,
        marginLeft:105,
        marginTop: 50,
    }
});
export default News;