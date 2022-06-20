import { Avatar, Button, Card, Checkbox , Switch  } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, SafeAreaView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function Serviceform() {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const category =['Beauty Service', 'Skin Treatment', 'Hair Treatment', 'Salon Product', 'Other'];
  const paymentpercent =['Full Payment', '50% Advance Payment', '25% Advance Payment', 'Add custom payment%']
  const move=()=>{
    navigation.navigate('BusinessLogin')
  }
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeAreaView>
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#9c8cbc' }}>
        <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginTop: '70px', marginBottom: '70px'}}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>ADD SERVICE</Text>
          <TextInput placeholder='Service Name' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Service Code' style={styles.Textfields}></TextInput>
          <TextInput placeholder='Price (PKR)' style={styles.Textfields}></TextInput>
          <View style={{marginBottom: '20px', marginTop: '20px'}}>
          <Text style={{fontWeight: 'bold', color: '#9c8cbc'}}>Select your Service Type in terms of Price Range</Text>
          <Checkbox.Item label="Luxury" status="checked" />
          <Checkbox.Item label="Affordable" status="unchecked" />
          <Checkbox.Item label="Low Cost" status="unchecked" />
          </View>
          <View>
            <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', marginBottom: '20px', backgroundColor: '#fffc9c'}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: '20px', fontWeight: 'bold', fontStyle: 'italic'}}>SALE</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            </View>
            <TextInput placeholder='Sale Percentage %' style={styles.Textfields}></TextInput>
            <TextInput placeholder='Sale Price (PKR)' style={styles.Textfields}></TextInput>

            </Card>
          </View>
          <TextInput placeholder='Enter your service description' style={styles.AboutTextfield}></TextInput>
          <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained" onPress={()=>move()}>Submit</Button>
        </Card>
    </View>
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
