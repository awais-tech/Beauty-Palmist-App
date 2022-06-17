import { Avatar, Button, Card, Appbar , Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ServiceCategory() {
    const navigation = useNavigation();
    const move=()=>{
        navigation.navigate('ServiceDetailPage')
      }
    return (
        
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#fff4f4' }}>
            <View style={{backgroundColor: 'white', width: '100%', marginBottom: '50px', borderTopColor: '#6804ec', borderTopWidth: 3, borderBottomColor: '#6804ec', borderBottomWidth: 3}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: '32px', padding: '20px'}}>SERVICE CATEGORIES</Text>
            </View>
            <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' , borderColor: '#6804ec', borderWidth: 2}}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar.Icon size={70} icon="folder" style={{marginBottom: '20px'}} />
                    <Text style={{ fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic', marginBottom: '20px' }}>Service Name</Text>
                    <Text style={{ fontSize: '20px', marginBottom: '20px' }}>Service description</Text>
                    <Button mode="outlined" onPress={() => move()}>
                        View
                    </Button>

                </View>
            </Card>
        </View>
    );
}
