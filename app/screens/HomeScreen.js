import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, TextInput, ImageBackground, ScrollView, FlatList} from "react-native";
import { MaterialIcons, Entypo  } from '@expo/vector-icons';
import { Movies ,Shows } from "../constants/Data";
const HomeScreen = ({navigation}) => {
    const movieCard =({item}) =>{
        return(
<View>
        <ImageBackground 
        source={item.icon}
        style={styles.movieBlock}>

        </ImageBackground>
        <Text style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '700',
            marginLeft: 20,
            marginTop: 8,
        }}>{item.title}</Text>
        <Text style ={{
            color:'#5A5D65',
            marginLeft: 20,
            fontSize: 15,
            fontWeight: '500'
        }}
        > {item.Genre}</Text>
        <View style={{
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 5
        }}
        >
        <Entypo name="star" size={14} color="#F7DA2B" />
        <Text style ={{
            color:'#5A5D65',
            marginLeft: 5,
            fontSize: 15,
            fontWeight: '500',
            lineHeight: 18
        }}
        >{item.Rating}</Text>
        </View>
        </View>
        );
    }


return (
    
<View style={styles.main}>
<ScrollView>
<View 
       style={{
           flexDirection: 'row',
           justifyContent: 'space-between',
           paddingHorizontal: 20,
           marginTop: 90,
       }}>
           <View style={styles.search}>
           <MaterialIcons name="search" size={25} color='grey' />
           <TextInput style={{paddingBottom:15, paddingLeft:10}} placeholder='search for movie or tv show'/>
           </View>
           <View style={styles.sortBtn}>
           <MaterialIcons name="tune" size={25} color='white' />
           </View>
       </View>

       <Text style={styles.blocktext}>
        Popular Movies
        </Text>

        <FlatList 
       horizontal={true}
       data={Movies}
       keyExtractor={(item) => item.id}
       renderItem={movieCard}           
       /> 
        

        <Text style={[styles.blocktext,{marginTop:15}]}>
        Tv Shows
        </Text>
<FlatList 
       horizontal={true}
       data={Shows}
       keyExtractor={(item) => item.id}
       renderItem={movieCard}           
       /> 
        

        <Text style={[styles.blocktext,{marginTop:15}]}>
        Coming soon..
        </Text>

        <FlatList 
       horizontal={true}
       data={Movies}
       keyExtractor={(item) => item.id}
       renderItem={movieCard}           
       /> 
        
        </ScrollView>    
</View>

);
}

const styles = StyleSheet.create({
    main :{
   flex: 1,
   backgroundColor:'#0F111D'
    },
    sortBtn:{
        backgroundColor:'grey',
        height: 50,
        width: 50,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10, 
    },
    blocktext:{
        fontSize: 22,
        fontWeight: '700',
        color: 'white',
        marginTop: 35,
        marginLeft: 20
    },
    movieBlock:{
        height:200,
        width: 140,
        borderRadius: 40,
        marginLeft: 20,
        marginTop: 10,
    },
    search:{
        height: 50,
        paddingTop: 10,
        backgroundColor: '#292B37',
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
})
export default HomeScreen;