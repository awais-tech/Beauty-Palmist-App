import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Clientlogin() {
  const navigation = useNavigation();

  const move=()=>{
    navigation.navigate('Home')
  }
  const moves=()=>{
    navigation.navigate('Choosesignuptype')
  }
  return (
    <ImageBackground source={'https://static.wixstatic.com/media/nsplsh_37357850484551426d7641~mv2_d_4447_6670_s_4_2.jpg/v1/fill/w_1349,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_37357850484551426d7641~mv2_d_4447_6670_s_4_2.jpg'} style={{height: '100%', width: '100%'}}>
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%',  }}>
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
          <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained"  onPress={()=>move()}>Login</Button>
          <Text style={{ textAlign: 'center', marginBottom: '10px' }} >Don't have an account?</Text>
          <Button color='grey' onPress={()=>moves()}>Sign Up</Button>
        </Card>
    </View>
    </ImageBackground>
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
