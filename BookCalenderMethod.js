import { Avatar, Button, Card, Title, Divider } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-web';

export default function CalenderMethod() {
    const navigation = useNavigation();
    const move=()=>{
        navigation.navigate('Add details')
      }
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginTop: '30px', marginBottom: '30px'
             }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}>Protein Treatment - Dr. Fazeela Abbasi</Text>
                    <Text style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>Checkout our availability and book the date and time that works for you</Text>
                    <Text style={{ marginBottom: '10px', fontSize: '18px' }}>Select available date and time</Text>
                    <Divider />
                    <Button mode='contained' style={{ backgroundColor: '#FF69B4', marginBottom: '20px' }}>Pick Date!</Button>
                    <Button mode='contained' style={{ backgroundColor: '#FF69B4', marginBottom: '20px' }}>Pick Time!</Button>

                    <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', backgroundColor: '#f8ecec', marginBottom: '20px' }}>
                        <Text style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Booking Summary</Text>
                        <Divider />
                        <Text style={{ fontSize: '18px', marginBottom: '5px', marginTop: '5px' }}>Protein Treatment - Dr Fazeela Abbasi</Text>
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>5 April 2022, 11:30 PM</Text>
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>Staff # 1</Text>
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>1 hr</Text>
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>Rs, 7000</Text>
                    </Card>
                    <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained" onPress={() => move()}>Next</Button>
                </Card>
            </View>
        </SafeAreaView>
    );
}
