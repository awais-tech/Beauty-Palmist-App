import { Card, Switch } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, SafeAreaViewBase, SafeAreaView } from 'react-native';
import * as React from 'react';

export default function Bookingmode() {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginBottom: '30px', marginTop: '30px' }}>
                    <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', backgroundColor: '#f8ecec', marginBottom: '30px' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Link Based Booking</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <Text style={{ marginTop: '20px', marginBottom: '20px' }}>This mode allows you to take booking through your website or whatsapp</Text>
                        <TextInput placeholder='Add Website Link' style={styles.Textfields}></TextInput>
                        <TextInput placeholder='Add WhatsApp Contact' style={styles.Textfields}></TextInput>
                    </Card>
                    <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', backgroundColor: '#f8ecec' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Manual Slot Input</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        <Text style={{ marginTop: '20px' }}>This Mode allows you to take bookings by taking requested date and time slots from clients. You may accept or reject the booking request as per availability.

                            In case of Approval the booking confirmation will be pending until payment step is completed by client. To Reject a request you must state the reason and an alternate time slot (if available).</Text>
                    </Card>
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