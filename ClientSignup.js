import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, ImageBackground  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClientSignup() {
  const navigation = useNavigation();
  const move=()=>{
    navigation.navigate('ClientLogin')
  }
  return (
    <ImageBackground source={'https://static.wixstatic.com/media/11062b_39eb5581b30f41099a77bce7636c50f6~mv2.jpg/v1/fill/w_1349,h_622,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_39eb5581b30f41099a77bce7636c50f6~mv2.jpg'} style={{height: '100%', width: '100%'}}>
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%'}}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Client Signup</Text>
          <Text style={{ fontWeight: 'bold', textAlign: 'start', marginBottom: '20px', fontSize: '20px' }}>Create an Account</Text>
          <TextInput placeholder='Username' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Email' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Password' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Confirm Password' style={styles.Textfields}></TextInput>
          <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained" onPress={()=>move()}>Signup</Button>
          <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained">Cancel</Button>


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
