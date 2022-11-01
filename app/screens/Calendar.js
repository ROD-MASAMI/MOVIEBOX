import React,{useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {Agenda} from 'react-native-calendars';
import { Movies ,Shows } from "../constants/Data";
import axios from 'axios';

const CalendarScreen = () => {
    const Items = {
        '2022-10-28': [{name: 'event 1 - any js object'}],
        '2022-10-29': [{name: 'event 2 - any js object'}],
        '2022-10-31': [{name: 'event 3 - any js object'}]
    };

    const [data, setData] = useState({});

    const itemCard = (Item) => {
        return(
            <View style={{marginTop:40}}>
                <Text> {Item.title}</Text>
                <Text> {Item.Genre}</Text>
            </View>
        )
    }
    useEffect(() =>{
        const reduced = Movies.reduce((acc, current) =>{
          const {date, ...final} =current;

          acc[date] = [final];

          return acc;
        }, {});
 setData(reduced);
    }, [])
  return (
    <View style={{flex: 1}}>
        <View style={{marginBottom:100}}><Text> testing</Text></View>
   <Agenda
     items={data}
      renderItem ={itemCard}
   />
    </View>
  )
}

export default CalendarScreen
