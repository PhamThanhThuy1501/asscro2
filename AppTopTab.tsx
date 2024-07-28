import { Image, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppBottomTab from './AppBottomTab'
import Appcaidatcanhan from "./Appcaidatcanhan";
const Tab =createBottomTabNavigator();
export default function App1({route}){
    const { email } = route.params;
    return(
        <View style={{flex:1}}>
            <NavigationContainer independent={true}>
            <Tab.Navigator initialRouteName="Home">
             <Tab.Screen name="Home" component={Home} options={{headerShown:false,tabBarLabel: '',
                tabBarIcon:({focused}) =>(
                    <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                        <Image source={require('./img/home.png')}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? 'black' : 'gray'
                        }}/>
                        <Text style={{color: focused ? 'red' : 'gray'}}>Home</Text>
                    </View>
                )
               }}/> 

<Tab.Screen name="Vietbieton" component={AppBottomTab} options={{headerShown:false,tabBarLabel: '',
                        tabBarIcon:({focused}) =>(
                            <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                                <Image source={require('./img/edit.png')}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height:25,
                                    tintColor: focused ? 'black' : 'gray'
                                }}/>
                                <Text style={{color: focused ? 'red' : 'gray'}}>Viết biết ơn</Text>
                            </View>
                        )
                       }}/> 
                    <Tab.Screen name="Caidatcanhan" component={Appcaidatcanhan} initialParams={{ email: email }}options={{headerShown:false,tabBarLabel: '',
                        tabBarIcon:({focused}) =>(
                            <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                                <Image source={require('./img/setting.png')}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height:25,
                                    tintColor: focused ? 'black' : 'gray'
                                }}/>
                                <Text style={{color: focused ? 'red' : 'gray'}}>Cài đặt cá nhân</Text>
                            </View>
                        )
                       }}/>
            </Tab.Navigator>
            </NavigationContainer>   
        </View>
    )
}