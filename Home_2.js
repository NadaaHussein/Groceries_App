// import React from 'react';
// import {Image} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Shop} from './Shop';
// import {Explore} from './Explore';
// import {Cart} from './Cart';
// import {Favourite} from './Favourite';
// import {Account} from './Account';

// const Tab = createBottomTabNavigator();

// export const Home = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#53B175',
//         tabBarInactiveTintColor: '#181725',
//         tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
//         tabBarStyle: {
//           paddingBottom: 5,
//           borderTopWidth: 0,
//         },
//       }}
//       sceneContainerStyle={{backgroundColor: '#fff'}}>
//       <Tab.Screen
//         name="Shop"
//         component={Shop}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Image 
//               source={require('./images/shop.png')} 
//               resizeMode="center"
//               style={{tintColor: focused ? '#53B175' : '#181725'}} 
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Explore"
//         component={Explore}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={require('./images/explore.png')}
//               resizeMode="center"
//               style={{tintColor: focused ? '#53B175' : '#181725'}} 
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Cart"
//         component={Cart}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Image 
//               source={require('./images/cart.png')} 
//               resizeMode="center" 
//               style={{tintColor: focused ? '#53B175' : '#181725'}} 
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favourite"
//         component={Favourite}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={require('./images/favourite.png')}
//               resizeMode="center"
//               style={{tintColor: focused ? '#53B175' : '#181725'}} 
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Account"
//         component={Account}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={require('./images/profile.png')}
//               resizeMode="center"
//               style={{tintColor: focused ? '#53B175' : '#181725'}} 
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
