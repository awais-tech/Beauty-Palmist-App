import { Avatar, Button, Card, Checkbox, Divider } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Drawer, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ErrorMessage, Formik } from "formik";
import beautyService from './Services/services/Servicesbeauty';
import bussnessServices from './Services/services/bussnessuser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bookingServices from './Services/services/booking';


export default function AddCalenderMethodDetails({route}) {
    const navigation = useNavigation();
    const [user,setUser]=React.useState();
const val=route.params;
    const move = () => {
        navigation.navigate('Payment Information')
    }
    React.useEffect(()=>{
        savedata();
    },[])
    const [init, setInit] = React.useState({
        name: "",
        email: "",
        phoneno: "",
        Message: "",
        state: "",
        city: "",
        building: "",
        address: "",
      });
    const savedata=async()=>{
        const user=await AsyncStorage.getItem('user');
        const userInfo=JSON.parse(user);
        console.log(userInfo);
        setInit({...init,name:userInfo.name,email:userInfo.email,phoneno:userInfo.phoneNo});
    }

      const handleFormSubmit = async (values) => {
        const user=await AsyncStorage.getItem('user');
        const userInfo=JSON.parse(user);
        bookingServices
          .addBooking({
            NumberClients: 1,
            Price: val.val.Price,
            Address: values.address,
    
            Building: values.building,
            City: values.city,
            State: values.state,
            Message: values.message,
            Date: val.date,
            Time: val.timer,
    
            ServiceId: val.val._id,
            UserId: userInfo.id,
            OwnerId: val.val.userid._id,
          })
          .then((val) => {
            // bussnessServices.createextra({...extra,address:values.address}).then(() => {
            //   Swal.fire("Booking Request has been sent").then((val) => {
            //     navigation("/MyBooking");
            //   });
            alert("Booking Request has been sent");

            // });
         
          });
      };
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginTop: '70px', marginBottom: '70px' }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Fill out your details</Text>
                    <Formik
                initialValues={init}
                onSubmit={handleFormSubmit}
                enableReinitialize={true}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                    <TextInput placeholder='Name' style={styles.Textfields}    value={values.name} onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}/> 
                    <TextInput placeholder='Contact Number' style={styles.Textfields} value={values.phoneno}    onChangeText={handleChange("phoneno")}
              onBlur={handleBlur("phoneno")}/>
                    <TextInput placeholder='Email' style={styles.Textfields}  value={values.email}   onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}/>
                    {/* <TextInput placeholder='Number Of Clients' style={styles.Textfields}  keyboardType='numeric'    onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}/> */}
                    <TextInput placeholder='Address' style={styles.Textfields}    onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}/>
                   
                    <TextInput placeholder='Building/Floor' style={styles.Textfields}    onChangeText={handleChange("building")}
              onBlur={handleBlur("building")}/>
                    <TextInput placeholder='City' style={styles.Textfields}    onChangeText={handleChange("city")}
              onBlur={handleBlur("city")}/>
                    <TextInput placeholder='State' style={styles.Textfields}    onChangeText={handleChange("state")}
              onBlur={handleBlur("state")}/>
                    <TextInput placeholder='Add a message' style={styles.AboutTextfield}    onChangeText={handleChange("Message")}
              onBlur={handleBlur("Message")}/>
            
                    <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', backgroundColor: '#f8ecec', marginBottom: '20px' }}>
                        <Text style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Booking Summary</Text>
                        <Divider />
                        <Text style={{ fontSize: '18px', marginBottom: '5px', marginTop: '5px' }}>{val.val.name}</Text>
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>{val.date}, {val.time}</Text>
                      
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>1 hr</Text>
                        <Text style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Payment Details</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: '18px', marginBottom: '5px' }}>Total</Text>
                            <Text style={{ fontSize: '18px', marginBottom: '5px' }}>Rs {val.val.Price}</Text>
                        </View>
                    </Card>


                    <Button style={{ marginBottom: '20px', backgroundColor: '#FF69B4' }} mode="contained" onPress={() => handleSubmit()}>Pay Now</Button>
                    </View>
                )}</Formik> </Card>
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
