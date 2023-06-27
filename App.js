import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useRoute  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';

import TelaInicio from './Componentes/TelaInicio/TelaInicio';
import Vinho from './Componentes/TelaCatalogo/index';
import TelaContato from './Componentes/TelaContato/TelaContato';
import Detalhes from './Componentes/Detalhes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
	return (
		<Tab.Navigator screenOptions={{
			headerStyle:{
			  backgroundColor: '#914CFA'
			},
			headerTitleStyle: {
			  color: '#000',
			  fontWeight: 'bold'
			},
			headerTitleAlign: 'center',
	
			tabBarStyle: {
			  backgroundColor: "#000"
			},
			tabBarLabelStyle:{
			  fontSize: 14,
			  fontWeight: "bold"
			},
			tabBarActiveTintColor: '#000',
			tabBarInactiveTintColor: "#B994FA",
			tabBarActiveBackgroundColor: "#914CFA",
		  }}
		>

			<Tab.Screen 
				name="Início"
				component={ TelaInicio } 
				options={{
				tabBarIcon: ({ color }) => (
					<Entypo name="home" color={ color } size={ 20 } />
				),
				}}
			/>

			<Tab.Screen 
				component={ Vinho}
				name="Catálogo"
				options={{
				  tabBarIcon: ({ color }) => (
					<FontAwesome5 name="wine-bottle"  color={ color } size={ 20 }/>
				  ),
				}}
			/>

			<Tab.Screen 
				component={ TelaContato }
				name="Contato"
				options={{
					tabBarIcon: ({ color }) => (
					  <AntDesign name="contacts" color={ color } size={ 20 }/>
					),
				}}
			/>


		</Tab.Navigator>
	);
}



export default function App() {  
	return (    
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Tabs"        
        	screenOptions={{
				headerShown: false
			}}
      	>
				<Stack.Screen name="Tabs" component={MyTabs} />
				<Stack.Screen name="Detalhes" component={ Detalhes } />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
