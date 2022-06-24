import { Avatar, Button, Card, Checkbox, Divider } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddCalenderMethodDetails() {
    const navigation = useNavigation();
    const move = () => {
        navigation.navigate('Payment Information')
    }
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginTop: '70px', marginBottom: '70px' }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Fill out your details</Text>
                    <TextInput placeholder='Name' style={styles.Textfields}></TextInput>
                    <TextInput placeholder='Contact Number' style={styles.Textfields}></TextInput>
                    <TextInput placeholder='Email' style={styles.Textfields}></TextInput>
                    <TextInput placeholder='Number Of Clients' style={styles.Textfields}></TextInput>
                    <TextInput placeholder='Address' style={styles.Textfields}></TextInput>
                    <Checkbox.Item label="Save Address" status="checked"/>
                    <TextInput placeholder='Building/Floor' style={styles.Textfields}></TextInput>
                    <TextInput placeholder='City' style={styles.Textfields}></TextInput>
                    <TextInput placeholder='State' style={styles.Textfields}></TextInput>
                    <TextInput placeholder='Add a message' style={styles.AboutTextfield}></TextInput>
                    <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', backgroundColor: '#f8ecec', marginBottom: '20px' }}>
                        <Text style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Booking Summary</Text>
                        <Divider />
                        <Text style={{ fontSize: '18px', marginBottom: '5px', marginTop: '5px' }}>Protein Treatment - Dr Fazeela Abbasi</Text>
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>5 April 2022, 11:30 PM</Text>
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>Staff # 1</Text>
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>1 hr</Text>
                        <Text style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Payment Details</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: '18px', marginBottom: '5px' }}>Total</Text>
                            <Text style={{ fontSize: '18px', marginBottom: '5px' }}>Rs 7000</Text>
                        </View>
                    </Card>


                    <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained" onPress={() => move()}>Pay Now</Button>
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
