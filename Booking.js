import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Choosebookingtype() {
  const navigation = useNavigation();

  const move=()=>{
    navigation.navigate('Upcoming Bookings')
  }
  const moves=()=>{
    navigation.navigate('History')
  }
  const movess=()=>{
    navigation.navigate('Cancelled Bookings')
  }
  const movesss=()=>{
    navigation.navigate('SUserPaymentPending')
  }
  const movessss=()=>{
    navigation.navigate('SUserRequestPending')
  }
  return (
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}>Booking Schedule</Text>
          <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained"  onPress={()=>move()}>Upcoming Bookings</Button>
          <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained"  onPress={()=>moves()}>History</Button>
          <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained"  onPress={()=>movesss()}>Payment Pending</Button>
          <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained"  onPress={()=>movessss()}>Request Pending</Button>
          <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained"  onPress={()=>moves()}>History</Button>

          <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained"  onPress={()=>movess()}>Cancelled Bookings</Button>
        </Card>
    </View>
  );
}
