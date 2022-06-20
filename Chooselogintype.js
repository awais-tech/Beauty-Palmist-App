import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Chooselogintype() {
  const navigation = useNavigation();

  const move=()=>{
    navigation.navigate('ClientLogin')
  }
  const moves=()=>{
    navigation.navigate('BusinessLogin')
  }
  return (
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}>Choose Login Type</Text>
          <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained"  onPress={()=>move()}>Client Login</Button>
          <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained"  onPress={()=>moves()}>Business Login</Button>
        </Card>
    </View>
  );
}
