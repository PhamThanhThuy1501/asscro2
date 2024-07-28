import { Image, StyleSheet, Text, View } from "react-native";
import BottomNavigationBar from "react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigationBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Appthongtin from "./Appthongtin";
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from "react";

const tab=createBottomTabNavigator();
export default function Appcaidatcanhan({route}){
    const [emaill,setemail]=useState(null);
    const { email } = route.params;
    useEffect(() => {
        const subscriber = firestore()
            .collection('Users').
            where('email','==',email)
            .onSnapshot(querySnapshot => {
                const list = [];
                querySnapshot.forEach(documentSnapshot => {
                    list.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setemail(list[0]);
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, [email]);
    return(
        <View>
         {emaill ? (
                <>
              <View style={st.tx}>
            <Image source={require('./img/user.png')} style={st.img}/>
            <Text style={st.tx1}>{emaill.name}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
            <Text style={st.tx3}>Email:</Text>
            <Text style={st.tx2}> {emaill.email}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                <Text style={st.tx3}>Giới tính: </Text>
            <Text style={st.tx2}> {emaill.gender}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
           <Text style={st.tx3}>Ngày sinh: </Text>
            <Text style={st.tx2}> {emaill.date}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
           <Text style={st.tx3}>Sở thích: </Text>
            <Text style={st.tx2}>{emaill.like}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
            <Text style={st.tx3}>Chiều cao: </Text>
            <Text style={st.tx2}>{emaill.hight/100}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
           <Text style={st.tx3}>Cân nặng: </Text>
            <Text style={st.tx2}>{emaill.weight}</Text>
            </View>  
                </>
            ) : (
                <Text>Loading...</Text>
            )}

        </View>
    )
}
const st=StyleSheet.create(
    {
        img:{
            width: 60,height: 60,borderRadius: 50, marginTop:'3%',marginStart:'4%'
        },tx:{
            flexDirection:"row"
        },tx1:{
            marginTop:'6%',marginStart:'4%',fontSize:25
        },tx2:{
            fontWeight:"bold",fontSize:20,marginStart:'1%'
        },tx3:{
fontSize:20,marginStart:'4%'
        }
    }
)