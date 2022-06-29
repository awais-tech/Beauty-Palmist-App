import { Button, Card, Appbar, ProgressBar } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function ServiceDetailPage({route}) {
    const navigation = useNavigation();
    const val= route.params.val;
    const move=()=>{
        navigation.navigate('Calender Method')
      }
    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
            <Card style={{ padding: '40px', borderRadius: '20px', width: '90%',}}>
                <Image
                    source={{
                        uri: 'https://arynews.tv/wp-content/uploads/2022/02/salon.jpg',
                    }}
                    style={{width: '100%', height: '200px', marginBottom: '20px'}}
                />
                <Text style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
                 {val?.name}
                </Text>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
             {val?.BussnesId.bussnessname}
                </Text>
                <Text style={{ textAlign: 'justify', marginBottom: '10px' }}>
                {val?.detail}</Text>
                        <Button icon={'star'} color="#ffa534">3.7 Average Rating</Button>
                        <Text style={{textAlign: 'center', marginBottom: '20px'}}>(Based on 209 Reviews)</Text>
                    <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained" onPress={()=>move()}>Book Now! (Calender Method)</Button>
                    <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained">Book Now! (Manual Input Method)</Button>


            </Card>
        </View>
    );
}
