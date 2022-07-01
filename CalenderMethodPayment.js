import { Avatar, Button, Card, Title, RadioButton, Divider } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function PaymentInfo() {
    const navigation = useNavigation();
    const moves=()=>{
        navigation.navigate('Confirmation Message')
      }
    const [value, setValue] = React.useState('CreditCard');
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginTop: '20px', marginBottom: '20px' }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}>Payment Information</Text>
                
                    <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', backgroundColor: '#f8ecec', marginBottom: '20px', marginTop: '20px' }}>
                        <TextInput placeholder='Card Number' style={styles.Textfields}></TextInput>
                        <TextInput placeholder='Card Holder Name' style={styles.Textfields}></TextInput>
                        <TextInput placeholder='Expiry Date' style={styles.Textfields}></TextInput>
                    </Card>
                    <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', backgroundColor: '#f8ecec', marginBottom: '20px' }}>
                        <Text style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Protein Treatment - Dr Fazeela Abbasi</Text>
                        <Text style={{ fontSize: '18px', marginBottom: '5px', marginTop: '5px' }}>1 hr | PKR 7000</Text>
                        <Divider />
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>5 April 2022, 11:30 PM</Text>
                    </Card>
                    <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained" onPress={() => moves()}>Book it!</Button>
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
