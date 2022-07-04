import { Button, Card, Appbar, ProgressBar } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';''

export default function ServiceDetailPage({route}) {
    const navigation = useNavigation();
    const [user,setUser]=React.useState({});
    const val= route.params.val;
    const move=()=>{
        navigation.navigate('Calender Method',{val,val})
      }
      React.useEffect(()=>{
fetch();
      },[])
      const fetch=async()=>{
       const user= JSON.parse(await AsyncStorage.getItem("user"));
       setUser(user);
      }
    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
            <Card style={{ padding: '40px', borderRadius: '20px', width: '90%',}}>
                <Image
                    source={`http://localhost:3000/${val.image}`}
                
                />
                <Text style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
                 {val?.name}
                </Text>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
             {val?.BussnesId.bussnessname}
                </Text>
                <Text style={{ textAlign: 'justify', marginBottom: '10px' }}>
                {val?.detail}</Text>
              {user.role!="bussness" && <View>
                        <Button icon={'star'} color="#ffa534">3.7 Average Rating</Button>
                        <Text style={{textAlign: 'center', marginBottom: '20px'}}>(Based on 209 Reviews)</Text>
                    <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained" onPress={()=>move(val)}>Book Now! (Calender Method)</Button>
                    <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained">Book Now! (Manual Input Method)</Button>

                    </View>}
            </Card>
        </View>
    );
}
