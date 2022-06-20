import { Avatar, Button, Card, Checkbox, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Bookings() {
    const navigation = useNavigation();
    const move = () => {
        navigation.navigate('BusinessLogin')
    }
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#9c8cbc', }}>
    
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
