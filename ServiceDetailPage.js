import { Button, Card, Appbar } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ServiceDetailPage() {
    const navigation = useNavigation();
    const move=()=>{
        navigation.navigate('Calender Method')
      }
    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
            <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' }}>
                <Image
                    source={{
                        uri: 'https://arynews.tv/wp-content/uploads/2022/02/salon.jpg',
                    }}
                    style={{width: '100%', height: '200px', marginBottom: '20px'}}
                />
                <Text style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Protein Treatment
                </Text>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Dr.Fazeela Abbasi Aesthetics
                </Text>
                <Text style={{ textAlign: 'justify', marginBottom: '10px' }}>
                    Protein Treatment will nourish your hair.Protein treatments, when used in moderation, may provide the strength your hair needs to minimize dryness and damage. However, these treatments should only be used as directed.</Text>
                    <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained" onPress={()=>move()}>Book Now! (Calender Method)</Button>
                    <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained">Book Now! (Manual Input Method)</Button>


            </Card>
        </View>
    );
}
