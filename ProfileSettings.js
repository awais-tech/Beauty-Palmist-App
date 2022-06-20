import { Avatar, Button, Card, Checkbox, Switch } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function ProfileSettings() {
    const navigation = useNavigation();
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const category = ['Beauty Service', 'Skin Treatment', 'Hair Treatment', 'Salon Product', 'Other'];
    const paymentpercent = ['Full Payment', '50% Advance Payment', '25% Advance Payment', 'Add custom payment%']
    const move = () => {
        navigation.navigate('BusinessLogin')
    }
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#9c8cbc' }}>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginTop: '70px', marginBottom: '70px' }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Profile Settings</Text>
                    <TextInput placeholder='Aestethic SL' style={styles.Textfields}></TextInput>
                    <TextInput placeholder='Location/Address' style={styles.Textfields}></TextInput>
                    <TextInput placeholder='Email' style={styles.Textfields}></TextInput>
                    <View>
                        <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', marginBottom: '20px', backgroundColor: '#fffc9c' }}>
                        <Text style={{fontStyle: 'italic', marginBottom: '10px'}}>Current Status: Home Based/Small Business</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: '16px', fontWeight: 'bold', fontStyle: 'italic' }}>Set Status: Registered</Text>
                                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                            </View>
                            <Button mode='outlined' style={{marginTop: '20px'}}>Send for approval</Button>
                        </Card>
                    </View>
                    <TextInput placeholder='Enter your service description' style={styles.AboutTextfield}></TextInput>
                    <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained" onPress={() => move()}>Submit</Button>
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
