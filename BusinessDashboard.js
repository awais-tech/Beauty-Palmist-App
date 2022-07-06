
import { Avatar, Button, Card, Checkbox, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BusinessDashboard() {
    const navigation = useNavigation();
    const [detail,setdetails]=React.useState({name:"Name"});
    
    const move = () => {
        navigation.navigate('Manage Services')
    }
    const moves = () => {
        navigation.navigate('Profile Settings')
    }
    const movess = () => {
        navigation.navigate('Booking Options')
    }
    React.useEffect(()=>{
        fetch();
    },[])
    const fetch=async()=>{
       const user= await AsyncStorage.getItem("user");
        const users = JSON.stringify(user);
        setdetails(users);
    }
    return (
        <SafeAreaView >
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4', }}>
            <Text style={{textAlign:"center",color:"",fontSize:30,}}>Name:{detail.name}</Text>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginBottom: '30px', marginTop: '30px' }}>
                    <Image source={require('./assets/booking.gif')} style={{ width: '100%', height: '300px' }}></Image>
                    <Text style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>Bookings</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>View Booking Schedules and Requests</Text>
                    <Button mode='contained' style={{ backgroundColor: '#FF69B4' }} onPress={() => movess()}>Manage</Button>
                </Card>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginBottom: '30px' }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Image source={require('./assets/service.gif')} style={{ width: '100%', height: '300px' }}></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>Services</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>View and Update your services</Text>
                        <Button mode='contained' style={{ backgroundColor: '#FF69B4' }} onPress={() => move()}>Manage</Button>
                    </View>
                </Card>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginBottom: '30px' }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Image source={require('./assets/settings.gif')} style={{ width: '100%', height: '300px' }}></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>Profile Settings</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>Keep your Profile Information Up to Date</Text>
                        <Button mode='contained' style={{ backgroundColor: '#FF69B4' }} onPress={() => moves()}>Manage</Button>
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Textfields: {
        borderRadius: '20px',
        borderColor: 'grey',
        padding: '10px',
        marginBottom: '20px'
    },
    AboutTextfield: {
        height: '200px',
        borderRadius: '20px',
        borderColor: 'grey',
        padding: '10px',
        marginBottom: '20px'
    },
});
