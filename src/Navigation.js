import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from "@expo/vector-icons";

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

import PayButton from './components/PayButton';

const tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },

}

export default function Navigation(){

  return(
    <tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon:({ color, size, focused}) => {
          if(route.name === 'Pay'){
            return <PayButton 
              onPress={() => navigation.navigate('Pay')}
              focused={focused}
            />
          }

          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />
        }
      })}

      tabBarOptions={{
        style:{
          backgroundColor: '#121212',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#92929c',
      }}
    >
      <tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Inicio',
        }} 
      />

      <tab.Screen 
        name="Wallet" 
        component={WalletScreen}
        options={{
          title: 'Carteira',
        }}   
      />

      <tab.Screen 
        name="Pay" 
        component={PayScreen}
        options={{
          title: '',
        }}   
      />
      <tab.Screen 
        name="Notifications" 
        component={PayScreen}
        options={{
          title: 'Notificacoes',
        }}   
      />
      <tab.Screen 
        name="Settings" 
        component={PayScreen}
        options={{
          title: 'Ajustes',
        }}   
      />
    </tab.Navigator>

  );

}