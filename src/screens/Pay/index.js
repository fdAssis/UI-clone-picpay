import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import {
  Wrapper, 
  Header, 
  SeachPaymentContainer,
  SearchPaymentInput,
} from './styles';

import TabInitical from '../../components/PayTabInitial';
import TabLocation from '../../components/PayTabLocation';

const Tab = createMaterialTopTabNavigator();

const icons = {
  Initial: {
    lib: Feather,
    name: 'star',
  },
  Location: {
    lib: Feather,
    name: 'map-pin',
  },
  Store: {
    lib: Feather,
    name: 'shopping-bag',
  },
}

export default function Home(){
  
  return (
    <Wrapper>
      <Header>
        
        <MaterialCommunityIcons name="qrcode-scan" size={32} color="#10c862" />
        
        <SeachPaymentContainer>
          <Feather name="search" size={20} color="#868686" />
          <SearchPaymentInput
            placeholder="Quem voce quer pagar?"
            placeholderTextColor="#868686"
          >

          </SearchPaymentInput>
        </SeachPaymentContainer>
      </Header>

      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon:({color, size }) =>{
            const {lib: Icon, name} = icons[route.name];
            return <Icon name={name} size={size} color={color} />
          }
        })}
        tabBarOptions={{
        showIcon: true,
        iconStyle:{
          alignItems: 'center',
          margin: 0,
          padding: 0,
        },

        labelStyle: {
          textTransform: 'none',
          marginTop: -10,
          padding: 0,
        },

        style:{
          backgroundColor: '#121212',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#10c862',
        inactiveTintColor: '#92929c',
        indicatorStyle:{
          backgroundColor: '#10c862',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          width: 110,
          
        }
      }}
      >
        <Tab.Screen 
          name="Initial" 
          component={TabInitical} 
          options={{
          title: 'Principais',
        }} 
        />
        <Tab.Screen name="Location" component={TabLocation} />
        <Tab.Screen name="Store" component={TabLocation} />
      </Tab.Navigator>

    </Wrapper>
  )
}
