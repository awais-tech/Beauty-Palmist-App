import { Avatar, Button, Card, Appbar, Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function ServiceListings() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const navigation = useNavigation();
    const move = () => {
        navigation.navigate('ServiceDetailPage')
    }
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#fff4f4' }}>
                <ImageBackground source={'https://static.wixstatic.com/media/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg/v1/fill/w_980,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg'} style={{ width: '100%', height: '80px', margin: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: '24px', fontWeight: 'bold', backgroundColor: 'white', padding: '10px' }}>Selected Category Services</Text>
                    </View>
                </ImageBackground>
                <Searchbar
                    placeholder="Search Service"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{ marginBottom: '20px', width: '80%' }}
                />
                <Card style={{ padding: '40px', borderRadius: '2px', width: '90%', borderColor: '#6804ec', borderWidth: 2, marginBottom: '20px' }}>
                <TouchableOpacity onPress={()=>move()}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic', marginBottom: '20px' }}>Hair Protein Treatment</Text>
                        <Text style={{ fontSize: '20px', marginBottom: '20px' }}>/ Aira's Aesthetics Services</Text>
                        <Text style={{ fontSize: '20px', marginBottom: '20px' }}>the most powerful, non-invasive skin resurfacing treatments available today. It combines cleansing, exfoliation, extraction, hydration and antioxidant protection that removes........</Text>

                    </View>
                    </TouchableOpacity>

                </Card>
                <Card style={{ padding: '40px', borderRadius: '2px', width: '90%', borderColor: '#6804ec', borderWidth: 2, marginBottom: '20px' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic', marginBottom: '20px' }}>Hair Protein Treatment</Text>
                        <Text style={{ fontSize: '20px', marginBottom: '20px' }}>/ Aira's Aesthetics Services</Text>
                        <Text style={{ fontSize: '20px', marginBottom: '20px' }}>the most powerful, non-invasive skin resurfacing treatments available today. It combines cleansing, exfoliation, extraction, hydration and antioxidant protection that removes........</Text>

                    </View>
                </Card>
                <Card style={{ padding: '40px', borderRadius: '2px', width: '90%', borderColor: '#6804ec', borderWidth: 2, marginBottom: '20px' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic', marginBottom: '20px' }}>Hair Protein Treatment</Text>
                        <Text style={{ fontSize: '20px', marginBottom: '20px' }}>/ Aira's Aesthetics Services</Text>
                        <Text style={{ fontSize: '20px', marginBottom: '20px' }}>the most powerful, non-invasive skin resurfacing treatments available today. It combines cleansing, exfoliation, extraction, hydration and antioxidant protection that removes........</Text>

                    </View>
                </Card>
                <Card style={{ padding: '40px', borderRadius: '2px', width: '90%', borderColor: '#6804ec', borderWidth: 2, marginBottom: '20px' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic', marginBottom: '20px' }}>Hair Protein Treatment</Text>
                        <Text style={{ fontSize: '20px', marginBottom: '20px' }}>/ Aira's Aesthetics Services</Text>
                        <Text style={{ fontSize: '20px', marginBottom: '20px' }}>the most powerful, non-invasive skin resurfacing treatments available today. It combines cleansing, exfoliation, extraction, hydration and antioxidant protection that removes........</Text>

                    </View>
                </Card>
            </View>
        </SafeAreaView>
    );
}
