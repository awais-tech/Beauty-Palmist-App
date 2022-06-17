import { Avatar, Button, Card, Title, RadioButton } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function PalmistQuiz() {
    const [value, setValue] = React.useState('first');

    const navigation = useNavigation();

    const move = () => {
        navigation.navigate('Recommendations')
    }

    return (
        <SafeAreaView>
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
        <ImageBackground source={'https://static.wixstatic.com/media/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg/v1/fill/w_980,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg'} style={{width: '100%', height: '80px', margin: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: '24px', fontWeight: 'bold', backgroundColor: 'white', padding: '10px'}}>Palmist Quiz</Text>
                </View>
            </ImageBackground>
            <Card style={{ padding: '40px', borderRadius: '20px', width: '90%' , marginBottom: '30px'}}>

                <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: "12px" }}>What is your skin type?</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} style={{marginBottom: '20px'}}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="first" />
                        <Text style={{ fontSize: '20px' }}>Dry</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="second" />
                        <Text style={{ fontSize: '20px' }}>Oily</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="three" />
                        <Text style={{ fontSize: '20px' }}>Combination</Text>
                    </View>
                </RadioButton.Group>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: "12px" }}>What is your skin type?</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} style={{marginBottom: '20px'}}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="first" />
                        <Text style={{ fontSize: '20px' }}>Dry</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="second" />
                        <Text style={{ fontSize: '20px' }}>Oily</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="three" />
                        <Text style={{ fontSize: '20px' }}>Combination</Text>
                    </View>
                </RadioButton.Group>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: "12px" }}>What is your skin type?</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} style={{marginBottom: '20px'}}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="first" />
                        <Text style={{ fontSize: '20px' }}>Dry</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="second" />
                        <Text style={{ fontSize: '20px' }}>Oily</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="three" />
                        <Text style={{ fontSize: '20px' }}>Combination</Text>
                    </View>
                </RadioButton.Group>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: "12px" }}>What is your skin type?</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} style={{marginBottom: '20px'}}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="first" />
                        <Text style={{ fontSize: '20px' }}>Dry</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="second" />
                        <Text style={{ fontSize: '20px' }}>Oily</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="three" />
                        <Text style={{ fontSize: '20px' }}>Combination</Text>
                    </View>
                </RadioButton.Group>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: "12px" }}>What is your skin type?</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} style={{marginBottom: '20px'}}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="first" />
                        <Text style={{ fontSize: '20px' }}>Dry</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="second" />
                        <Text style={{ fontSize: '20px' }}>Oily</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="three" />
                        <Text style={{ fontSize: '20px' }}>Combination</Text>
                    </View>
                </RadioButton.Group>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: "12px" }}>What is your skin type?</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} style={{marginBottom: '20px'}}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="first" />
                        <Text style={{ fontSize: '20px' }}>Dry</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="second" />
                        <Text style={{ fontSize: '20px' }}>Oily</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioButton value="three" />
                        <Text style={{ fontSize: '20px' }}>Combination</Text>
                    </View>
                </RadioButton.Group>
                <Button mode='contained' style={{marginTop: '20px'}} onPress={()=>move()}>View Recommendations</Button>
            </Card>
        </View>
        </SafeAreaView>
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
