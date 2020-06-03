import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import StartOne from '../screen/StackScreen1'
import StartTwo from '../screen/StackScreen2'
import TabScreen1 from '../screen/TabScreen1'
import TabScreen2 from '../screen/TabScreen2'
import TabScreen3 from '../screen/TabScreen3'
import TabScreen3One from '../screen/TabScreen3-1'
import TabScreen3Two from '../screen/TabScreen3-2'



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'TabScreen1') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'TabScreen2') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }else if (route.name === 'TabScreen3') {
              iconName = focused ? 'ios-cog' : 'ios-cog';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen name="TabScreen1" component={TabScreen1} 
          
        />
        <Tab.Screen name="TabScreen2" component={TabScreen2} 
           
        />
         <Tab.Screen name="TabScreen3" component={TabScreen3Navigator} 
           
           />
        
      </Tab.Navigator>
    );
  }

  function TabScreen3Navigator() {
      return(
        <Stack.Navigator>
    <Stack.Screen
        name="TabScreen3One"
        component={TabScreen3One}
        options={{
            headerShown: false,
          }}
        
      />
      <Stack.Screen
        name="TabScreen3Two"
        component={TabScreen3Two}
        options={{
            headerShown: false,
          }}
      />
      
    </Stack.Navigator>
      );   
  }

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="StartOne"
            component={StartOne}
            
          />
          <Stack.Screen
            name="StartTwo"
            component={StartTwo}
          
          />
          
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
            headerShown: false,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }