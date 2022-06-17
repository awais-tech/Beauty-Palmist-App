import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Choosesignuptype() {
  const navigation = useNavigation();

  const move=()=>{
    navigation.navigate('BusinessSignup')
  }
  const moves=()=>{
    navigation.navigate('ClientSignup')
  }
  return (
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#9c8cbc' }}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}>Choose Signup Type</Text>
          <Button style={{ marginBottom: '30px' }} mode="contained"  onPress={()=>moves()}>Client Signup</Button>
          <Button style={{ marginBottom: '30px' }} mode="contained" onPress={()=>move()}>Business Signup</Button>
        </Card>
    </View>
  );
}
