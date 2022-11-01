import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, Entypo, FontAwesome  } from '@expo/vector-icons';
import News from "../screens/News";
import Likes from "../screens/Likes";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const TabBar = () =>{
    return(
<NavigationContainer>
        <Tab.Navigator
        screenOptions={ ({ route }) => ({

            tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'black',
            tabBarShowLabel: false,
            
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'absolute',
                elevation: 0,
                borderRadius: 20,
                height: 70,
                bottom:25,
                left:20,
                right:20,
            }
        }) }

    
        >
            <Tab.Screen
                name ="HOME"
                component={HomeScreen}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <MaterialIcons name="house" size={34} color={focused ? 'red' : 'black'} />
                    )
                }}                
            />

            <Tab.Screen
                name ="LIKES"
                component={Likes}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <Entypo name="heart" size={34} color={focused ? 'red' : 'black'} />
                    )
                }}                
            />
            <Tab.Screen
                name ="NEWS"
                component={News}
                options ={{
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <FontAwesome  name="newspaper-o" size={34} color={focused ? 'red' : 'black'} />
                    )
                }}                
            />
            
            </Tab.Navigator>
            </NavigationContainer>
    );
}
export default TabBar;