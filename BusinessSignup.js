import { Avatar, Button, Card, Checkbox , Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, SafeAreaView, ImageBackground  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BusinessSignup() {
  const navigation = useNavigation();
  const move=()=>{
    navigation.navigate('BusinessLogin')
  }
  return (
    <SafeAreaView>
    <ImageBackground source={'https://static.wixstatic.com/media/11062b_39eb5581b30f41099a77bce7636c50f6~mv2.jpg/v1/fill/w_1349,h_978,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_39eb5581b30f41099a77bce7636c50f6~mv2.jpg'} style={{height: '100%', width: '100%'}}>
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginTop: '70px', marginBottom: '70px'}}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Business Signup</Text>
          <TextInput placeholder='Company/Business Name' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Location/Address' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Email' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Add Logo' style={styles.Textfields}></TextInput>
          <View style={{marginBottom: '20px'}}>
          <Text style={{fontWeight: 'bold', color: '#9c8cbc'}}>Select Your Service Category</Text>
          <Checkbox.Item label="Salon" status="unchecked" />
          <Checkbox.Item label="Aesthetics" status="unchecked" />
          <Checkbox.Item label="Fitness" status="checked" />
          <Checkbox.Item label="Photography" status="unchecked" />
          </View>
          <View style={{marginBottom: '20px'}}>
          <Text style={{fontWeight: 'bold', color: '#9c8cbc'}}>What is your business status?</Text>
          <Checkbox.Item label="Registered" status="checked" />
          <Checkbox.Item label="Small Business" status="unchecked" />
          <Checkbox.Item label="Home based" status="unchecked" />
          </View>
          <TextInput placeholder='Attach CNIC (Home based/Small Business)' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Attach Documents (If Registered)' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Give description about your services, experience and achievements' style={styles.AboutTextfield}></TextInput>

          <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained" onPress={()=>move()}>Signup</Button>
        </Card>
    </View>
    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Textfields: {
    borderRadius: '20px',
    borderColor: 'grey',
    padding: '10px',
    marginBottom: '20px'
  },
  AboutTextfield: {
    height: '200px',
    borderRadius: '20px',
    borderColor: 'grey',
    padding: '10px',
    marginBottom: '20px'
  },
});
