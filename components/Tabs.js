// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// // import Home from '../Home';
// // import Account from './Account';
// // import Cart from './Cart';
// // import Explore from './Explore';
// //import favourite from './Favourite';
// //import {tabIcons} from '../helpers/Icons';
// import StyleSheet from 'react-native';

// const {Navigator, Screen} = createBottomTabNavigator();

// // const Tabs = () => {
//   return (
//     <Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({color}) => {
//           switch (route) {
//             case Home:
//               return <tabIcons.ShopIcon color={color} />;
//             case Account:
//               return <tabIcons.PersonIcon color={color} />;
//             case Cart:
//               return <tabIcons.CartIcon color={color} />;
//             case Explore:
//               return <tabIcons.ExploreSearchIcon color={color} />;
//             case favourite:
//               return <tabIcons.HeartIcon color={color} />;
//             default:
//               return <tabIcons.ShopIcon color={color} />;
//           }
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: '#53B175',
//         inactiveTintColor: '#181725',
//         labelStyle: style.tabBarLabelStyle,
//       }}>
//       <Screen name={Home} component={Home} />
//       <Screen name={Explore} component={Explore} />
//       <Screen name={Cart} component={Cart} />
//       <Screen name={favourite} component={Favourite} />
//       <Screen name={Account} component={Account} />
//     </Navigator>
//   );
// };

// const style = StyleSheet.create({
//   tabBarLabelStyle: {
//     fontFamily: 'gilroyNormal',
//     fontWeight: '600',
//     fontSize: 25,
//   },
// });

// export default Tabs;
