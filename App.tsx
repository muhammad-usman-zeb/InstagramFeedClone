import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import SearchScreen from './screens/SearchScreen';
import ReelsScreen from './screens/ReelsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <>
    <StatusBar barStyle={'light-content'}/>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {position: 'absolute', backgroundColor: 'black', padding:10},
        }}>
        <Tab.Screen
          name="Home"
          component={MainScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'ios-home' : 'home-outline'}
                color="white"
                size={35}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'search' : 'search-outline'}
                color="white"
                size={35}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Reels"
          component={ReelsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'play-circle' : 'play-circle-outline'}
                color="white"
                size={35}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'heart' : 'heart-outline'}
                color="white"
                size={35}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'person' : 'person-outline'}
                color="white"
                size={35}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
