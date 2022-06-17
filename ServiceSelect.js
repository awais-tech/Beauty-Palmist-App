import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ServiceSelect() {
  const navigation = useNavigation();
  const move=()=>{
      navigation.navigate('ServiceCategory')
    }
  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={'https://static.wixstatic.com/media/nsplsh_c7567a7e7bf34da784e174828d5c9298~mv2.jpg/v1/fill/w_1349,h_608,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_c7567a7e7bf34da784e174828d5c9298~mv2.jpg'}>
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Services</Text>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
          <Button style={{ marginBottom: '30px', width: '150px', marginRight: '10px', backgroundColor: '#FF69B4' }} mode="contained" onPress={() => move()}>Salon</Button>
          <Button style={{ marginBottom: '30px', width: '150px', backgroundColor: '#FF69B4' }} mode="contained" onPress={() => move()}>Aesthetics</Button>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
          <Button style={{ marginBottom: '30px', width: '150px', marginRight: '10px', backgroundColor: '#FF69B4'}} mode="contained" onPress={() => move()}>Fitness</Button>
          <Button style={{ marginBottom: '30px', width: '150px', backgroundColor: '#FF69B4' }} mode="contained" onPress={() => move()}>Photography</Button>
          </View>

        </Card>
    </View>
    </ImageBackground>
  );
}
