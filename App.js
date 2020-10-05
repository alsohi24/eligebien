import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Intituciones } from './components/Intituciones';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Listwa!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Comparadores!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Instituciones académicasss') {
              iconName = focused ? 'university' : 'university';
            } else if (route.name === 'Comparadores') {
              iconName = focused ? 'area-chart' : 'area-chart';
            }
      
            return <FontAwesome name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3610e3',//'#250aa1',
          inactiveTintColor: '#bababa',
        }}
      >
        <Tab.Screen name="Instituciones académicas" component={Intituciones} />
        <Tab.Screen name="Comparadores" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}