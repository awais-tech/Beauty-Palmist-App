import { Avatar, Button, Card, Appbar, Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, ImageBackground, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function Home() {
    const navigation = useNavigation();
    const move = () => {
        navigation.navigate('Choose Service')
    }
    const moves = () => {
        navigation.navigate('QuizCategory')
    }
    return (
        <SafeAreaView>
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#fff4f4' }}>
            <ImageBackground source={'https://static.wixstatic.com/media/nsplsh_ec163b8588f6459ebbe1d10fb1ca9641~mv2.jpg/v1/fill/w_1349,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_ec163b8588f6459ebbe1d10fb1ca9641~mv2.jpg'} style={{ width: '100%', height: '100%' }}>
                <Text style={{ fontSize: '44px', fontWeight: 'bold', marginTop: '30px', marginLeft: '20px', textAlign: 'left', color: '#FF69B4' }}>Explore,</Text>
                <Text style={{ fontSize: '44px', fontWeight: 'bold', marginTop: '-10px', marginLeft: '20px', textAlign: 'left', }}>Beauty Palmist</Text>
                <View style={{ marginTop: '20px', padding: '30px' }}>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', marginBottom: '30px' }}>
                        <Image source={require('./assets/trending.gif')} style={{width: '100%', height: '300px'}}></Image>
                        <Button mode='contained' style={{ backgroundColor: '#FF69B4' }}>Trending</Button>
                    </Card>
                    <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', marginBottom: '30px' }}>
                        <Image source={require('./assets/service.gif')} style={{width: '100%', height: '300px'}}></Image>
                        <Button mode='contained' style={{ backgroundColor: '#FF69B4' }} onPress={() => { move() }}>Services</Button>
                    </Card>
                    <Card style={{ padding: '40px', borderRadius: '20px', width: '100%' }}>
                    <Image source={require('./assets/quiz.gif')} style={{width: '100%', height: '300px'}}></Image>
                        <Button mode='contained' textColor='black' style={{ backgroundColor: '#FF69B4' }} onPress={() => { moves() }}>Palmist Quiz</Button>
                    </Card>
                </View>
            </ImageBackground>
        </View>
        </SafeAreaView>

    );
}
