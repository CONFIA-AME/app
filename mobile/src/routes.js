import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './pages/Home';
import QRCode from './pages/QRCode';
import Favourite from './pages/Favourite';
import Wallet from './pages/Wallet';
import Extrato from './pages/Extrato';
import Ticket from './pages/Ticket';
import Product from './pages/Product';
import Perfil from './pages/Perfil';
import HomeOrStore from './pages/HomeOrStore';
import GetInStore from './pages/GetInStore';
import GetProduct from './pages/GetProduct';
import MyRequestItem from './pages/MyRequestItem';
import MyRequests from './pages/MyRequests';
import Assessments from './pages/Assessments';
import AssessmentSuccess from './pages/AssessmentSuccess';
import AnswerSuccess from './pages/AnswerSuccess';
import Chat from './pages/Chat';
import AnswerChat from './pages/AnswerChat'
import Search from './pages/Search';

import HeartShareShoppingCart from './components/Icons/HeartShareShoppingCart';

import HeaderRight from './components/Icons/HeaderIcons/HeaderRight';
import HeaderLeft from './components/Icons/HeaderIcons/HeaderLeft';
import HeaderBack from './components/Icons/HeaderIcons/HeaderBack';
import HeaderDots from './components/Icons/HeaderIcons/HeaderDots';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              return <Feather name={iconName} size={size} color={color} />;
            case 'QRCode':
              iconName = 'qrcode';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            case 'Favourite':
              iconName = 'heart';
              return <Feather name={iconName} size={size} color={color} />;
            case 'Wallet':
              iconName = 'wallet-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            case 'Ticket':
              iconName = 'ticket-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            default:
              break;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
          backgroundColor: '#FAFAFA',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
      }}
    >
      <Tab.Screen name="Wallet" component={Wallet} headerShown={false}/>
      <Tab.Screen name="Extrato" component={Extrato} headerShown={false}/>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourite" component={Home} />
      <Tab.Screen 
        name="Ticket" 
        component={Ticket} 
        headerShown={false}
      
      />
    </Tab.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{
            headerTitle: '',
            headerLeft: () => <HeaderLeft />,
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen
          name="QRCode"
          component={QRCode}
          options={{
            title: 'Escanear Produto',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <HeartShareShoppingCart />
              </>
            ),
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerTitle: '',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTitle: '',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="HomeOrStore"
          component={HomeOrStore}
          options={{
            title: 'Em casa ou na Loja',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="GetInStore"
          component={GetInStore}
          options={{
            title: 'Pegar na Loja',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="GetProduct"
          component={GetProduct}
          options={{
            title: 'Retirar Produto',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="MyRequestItem"
          component={MyRequestItem}
          options={{
            title: 'Meu Pedido',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="MyRequests"
          component={MyRequests}
          options={{
            title: 'Meus Pedidos',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="Assessments"
          component={Assessments}
          options={{
            headerTitle: '',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="AssessmentSuccess"
          component={AssessmentSuccess}
          options={{
            headerTitle: '',
            headerLeft: () => <HeaderBack direction='Home' />,
          }}
        />

        <Stack.Screen
          name="AnswerSuccess"
          component={AnswerSuccess}
          options={{
            headerTitle: '',
            headerLeft: () => <HeaderBack direction='Home' />,
          }}
        />  

        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            title: 'Joana',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="AnswerChat"
          component={AnswerChat}
          options={{
            title: 'Joana',
            headerLeft: () => <HeaderBack />,
            headerRight: () => <HeaderDots />,
          }}
      />
    

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
