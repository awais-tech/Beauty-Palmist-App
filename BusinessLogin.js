import {  Button, Card, } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BusinessLogin() {
  const navigation = useNavigation();

  const move=()=>{
    navigation.navigate('Business Dashboard')
  }
  const moves=()=>{
    navigation.navigate('BusinessSignup')
  }
  return (
    <ImageBackground source={'https://static.wixstatic.com/media/11062b_f68602886d71455a85a9705d586b75a0~mv2.jpg/v1/fill/w_1349,h_622,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_f68602886d71455a85a9705d586b75a0~mv2.jpg'} style={{width: '100%', height: '100%'}}>
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }} >Business Login</Text>
          <TextInput placeholder='Username' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Password' style={styles.Textfields}></TextInput>
          <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained" onPress={()=>move()} >Login</Button>
          <Text style={{ textAlign: 'center', marginBottom: '10px' }} >Don't have an account?</Text>
          <Button color='grey' onPress={()=>moves()}>Sign Up</Button>
        </Card>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Textfields: {
    borderRadius: '20px',
    borderColor: 'grey',
    padding: '10px',
    marginBottom: '20px'
  },
});
