import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView, Text, View, TextInput, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Chooselogintype() {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('ClientLogin')
  }
  const moves = () => {
    navigation.navigate('BusinessLogin')
  }
  return (

    <SafeAreaView style={{ height: '100%' }}>
      <ImageBackground source={'https://static.wixstatic.com/media/11c705_7c51905d50334bd3b43b2565c50e8258~mv2.png/v1/fill/w_1016,h_505,al_c,q_90,enc_auto/11c705_7c51905d50334bd3b43b2565c50e8258~mv2.png'} style={{ height: '100%', width: '100%' }}>
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Card style={{ padding: '20px', borderRadius: '20px', width: '90%', marginBottom: '30px' }}>
            <Image source={'https://csspoint101.com/wp-content/uploads/2020/10/team.gif'} style={{ width: '100%', height: '200px' }}></Image>
            <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4', marginTop: '20px' }} mode="contained" onPress={() => move()}>Client Login</Button>
          </Card>
          <Card style={{ padding: '20px', borderRadius: '20px', width: '90%', }}>
            <Image source={'https://csspoint101.com/wp-content/uploads/2020/10/Data-Vis.gif'} style={{ width: '100%', height: '200px' }}></Image>
            <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4', marginTop: '20px' }} mode="contained" onPress={() => moves()}>Business Login</Button>
          </Card>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
