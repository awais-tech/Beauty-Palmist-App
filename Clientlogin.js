import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Clientlogin() {
  const navigation = useNavigation();

  const move=()=>{
    navigation.navigate('ServiceSelect')
  }
  const moves=()=>{
    navigation.navigate('Choosesignuptype')
  }
  return (
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Client Login</Text>
          <Button icon="facebook" style={styles.socialbuttonfb} color='white'>
            Login with Facebook
          </Button>
          <Button icon="twitter" style={styles.socialbuttontw} color='white'>
            Login with Twitter
          </Button>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '20px' }}>Login with email</Text>
          <TextInput placeholder='Email' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Password' style={styles.Textfields}></TextInput>
          <Button style={{ marginBottom: '20px' }} mode="contained"  onPress={()=>move()}>Login</Button>
          <Text style={{ textAlign: 'center', marginBottom: '10px' }} >Don't have an account?</Text>
          <Button color='grey' onPress={()=>moves()}>Sign Up</Button>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  socialbuttonfb: {
    borderRadius: '20px',
    backgroundColor: '#4267B2',
    marginBottom: '20px'
  },
  socialbuttontw: {
    borderRadius: '20px',
    backgroundColor: '#1DA1F2',
    marginBottom: '20px'
  },
  Textfields: {
    borderRadius: '20px',
    borderColor: 'grey',
    padding: '10px',
    marginBottom: '20px'
  },
});
