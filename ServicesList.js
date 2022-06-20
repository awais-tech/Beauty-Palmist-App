import { Avatar, Button, Card, Appbar, Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function ServiceList() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const navigation = useNavigation();
    const move = () => {
        navigation.navigate('ServiceDetailPage')
    }
    const serviceformr = () => {
        navigation.navigate('Add Service Form')
    }
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#fff4f4' }}>
                <ImageBackground source={'https://static.wixstatic.com/media/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg/v1/fill/w_980,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg'} style={{ width: '100%', height: '80px', margin: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: '24px', fontWeight: 'bold', backgroundColor: 'white', padding: '10px' }}>Manage Services</Text>
                    </View>
                </ImageBackground>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '20px', }}>
                    <Searchbar
                        placeholder="Search Service"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={{width: '60%'}}
                    />
                    <Button mode='contained' style={{backgroundColor: '#FF69B4'}} onPress={()=>serviceformr()}>New Service</Button>
                </View>
                <Card style={{ padding: '40px', borderRadius: '2px', width: '90%', borderColor: '#6804ec', borderWidth: 2, marginBottom: '20px' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic', marginBottom: '20px' }}>Hair Protein Treatment</Text>
                        <Text style={{ fontSize: '20px', marginBottom: '20px' }}>/ Rating: 3.0</Text>
                        <Button mode="outlined" style={{ marginTop: '20px' }} onPress={() => move()}>
                            View Service
                        </Button>
                        <Button mode="outlined" style={{ marginTop: '20px' }}>
                            Edit Service
                        </Button>
                        <Button mode="outlined" style={{ marginTop: '20px' }}>
                            Delete Service
                        </Button>

                    </View>
                </Card>
                <Card style={{ padding: '40px', borderRadius: '2px', width: '90%', borderColor: '#6804ec', borderWidth: 2, marginBottom: '20px' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic', marginBottom: '20px' }}>Hair Protein Treatment</Text>
                        <Text style={{ fontSize: '20px', marginBottom: '20px' }}>/ Rating: 3.0</Text>
                        <Button mode="outlined" style={{ marginTop: '20px' }} onPress={() => move()}>
                            View Service
                        </Button>
                        <Button mode="outlined" style={{ marginTop: '20px' }}>
                            Edit Service
                        </Button>
                        <Button mode="outlined" style={{ marginTop: '20px' }}>
                            Delete Service
                        </Button>

                    </View>
                </Card>
                <Card style={{ padding: '40px', borderRadius: '2px', width: '90%', borderColor: '#6804ec', borderWidth: 2, marginBottom: '20px' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic', marginBottom: '20px' }}>Hair Protein Treatment</Text>
                        <Text style={{ fontSize: '20px', marginBottom: '20px' }}>/ Rating: 3.0</Text>
                        <Button mode="outlined" style={{ marginTop: '20px' }} onPress={() => move()}>
                            View Service
                        </Button>
                        <Button mode="outlined" style={{ marginTop: '20px' }}>
                            Edit Service
                        </Button>
                        <Button mode="outlined" style={{ marginTop: '20px' }}>
                            Delete Service
                        </Button>

                    </View>
                </Card>
            </View>
        </SafeAreaView>
    );
}
