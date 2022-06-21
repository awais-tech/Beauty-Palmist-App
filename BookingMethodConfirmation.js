import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CalenderMethodConfirmation() {
  const navigation = useNavigation();

 

  const movess=()=>{
    navigation.navigate('Cancelled Bookings')
  }
  return (
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}>Great! You're Booked</Text>
          <Text style={{ textAlign: 'center', marginBottom: '30px', fontSize: '16px' }}>Confirmation Email is on its way</Text>
          <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained"  onPress={()=>movess()}>Go to Bookings</Button>
        </Card>
    </View>
  );
}
