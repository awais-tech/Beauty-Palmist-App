import { Avatar, Button, Card, Appbar , Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, ImageBackground, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ServiceCategory() {
    const navigation = useNavigation();
    const move=()=>{
        navigation.navigate('ServiceListings')
      }
    return (
        <SafeAreaView>
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#fff4f4' }}>
                   <ImageBackground source={'https://static.wixstatic.com/media/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg/v1/fill/w_980,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg'} style={{ width: '100%', height: '80px', margin: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: '24px', fontWeight: 'bold', backgroundColor: 'white', padding: '10px' }}>Selected Category Services</Text>
                    </View>
                </ImageBackground>
            <Card style={{ padding: '40px', borderRadius: '2px', width: '90%' , borderColor: '#6804ec', borderWidth: 4, marginBottom: '20px'}}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={'https://www.seekpng.com/png/detail/184-1840642_clipart-free-beauty-vector-makeup-artist-make-up.png'} style={{width: '100%', height: '200px'}}></Image>
                    <Text style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', marginTop: '20px' }}>Beauty Services</Text>
                    <Text style={{ fontSize: '20px', marginBottom: '20px', fontStyle: 'italic' }}>Beauty Treatments including Makeup and Styling</Text>
                    <Button mode="outlined" onPress={() => move()} style={{borderRadius: '20px', width: '75%', borderWidth: 3}}>
                        View
                    </Button>

                </View>
            </Card>
            <Card style={{ padding: '40px', borderRadius: '2px', width: '90%' , borderColor: '#6804ec', borderWidth: 4, marginBottom: '20px'}}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={'https://www.seekpng.com/png/detail/184-1840642_clipart-free-beauty-vector-makeup-artist-make-up.png'} style={{width: '100%', height: '200px'}}></Image>
                    <Text style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', marginTop: '20px' }}>Beauty Services</Text>
                    <Text style={{ fontSize: '20px', marginBottom: '20px', fontStyle: 'italic' }}>Beauty Treatments including Makeup and Styling</Text>
                    <Button mode="outlined" onPress={() => move()} style={{borderRadius: '20px', width: '75%', borderWidth: 3}}>
                        View
                    </Button>

                </View>
            </Card>
            <Card style={{ padding: '40px', borderRadius: '2px', width: '90%' , borderColor: '#6804ec', borderWidth: 4, marginBottom: '20px'}}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={'https://www.seekpng.com/png/detail/184-1840642_clipart-free-beauty-vector-makeup-artist-make-up.png'} style={{width: '100%', height: '200px'}}></Image>
                    <Text style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', marginTop: '20px' }}>Beauty Services</Text>
                    <Text style={{ fontSize: '20px', marginBottom: '20px', fontStyle: 'italic' }}>Beauty Treatments including Makeup and Styling</Text>
                    <Button mode="outlined" onPress={() => move()} style={{borderRadius: '20px', width: '75%', borderWidth: 3}}>
                        View
                    </Button>

                </View>
            </Card>
            <Card style={{ padding: '40px', borderRadius: '2px', width: '90%' , borderColor: '#6804ec', borderWidth: 4, marginBottom: '20px'}}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={'https://www.seekpng.com/png/detail/184-1840642_clipart-free-beauty-vector-makeup-artist-make-up.png'} style={{width: '100%', height: '200px'}}></Image>
                    <Text style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', marginTop: '20px' }}>Beauty Services</Text>
                    <Text style={{ fontSize: '20px', marginBottom: '20px', fontStyle: 'italic' }}>Beauty Treatments including Makeup and Styling</Text>
                    <Button mode="outlined" onPress={() => move()} style={{borderRadius: '20px', width: '75%', borderWidth: 3}}>
                        View
                    </Button>

                </View>
            </Card>
        </View>
        </SafeAreaView>
    );
}
