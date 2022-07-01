import { Avatar, Button, Card, Title, Divider } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-web';

import DatePicker from "sassy-datepicker";
import moment from 'moment';


export default function CalenderMethod({route}) {
    var val=route.params.val;
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [value, setdats] = useState(new Date());
    const [timer, changeTime] = useState("No Select");
    const [book, setBook] = React.useState([]);
    const [time, setTime] = React.useState([
      "10:00 am",
      "11:00 am",
      "12:00 pm",
      "1:00 pm",
      "2:00 pm",
      "3:00 pm",
      "4:00 pm",
      "5:00 pm",
      "6:00 pm",
      "7:00 pm",
    ]);
    const [oriTime, setOriTime] = React.useState([
      "10:00 am",
      "11:00 am",
      "12:00 pm",
      "1:00 pm",
      "2:00 pm",
      "3:00 pm",
      "4:00 pm",
      "5:00 pm",
      "6:00 pm",
      "7:00 pm",
    ]);
    const [ori, setOri] = React.useState([]);
    const setdates = (e) => {
        setBook(
          ori
            .filter(
              (val) =>
                val.Date.toString() == moment(e).format("Do MMM YYYY").toString() &&
                val.status == 4
            )
            .map((val) => val.Time)
        );
        setdats(e);
      };
      console.log(book);
      const saveTime = (t) => {
        changeTime(t);
      };
      React.useEffect(() => {
        setTime(oriTime.filter((val) => !book.includes(val)));
      }, [value]);
      React.useEffect(() => {
        // bookingServices.serviceBookings("1").then((val) => {
        //   setBook(val.Booking);
        //   setOri(val.Booking);
        // });
      }, []);
    const move=()=>{

        navigation.navigate('Add details',{val:val,  date: moment(value).format("Do MMM YYYY"),
        timer,})
      }
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginTop: '30px', marginBottom: '30px'
             }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}></Text>
                    <Text style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>Checkout our availability and book the date and time that works for you</Text>
                    <Text style={{ marginBottom: '10px', fontSize: '18px' }}>Select available date and time</Text>
                    <Divider />
                    <DatePicker
                  onChange={setdates}
                  selected={value}
                  minDate={new Date(Date.now())}
                />

{time.length > 0 &&
                    time.map((val, index) => (
                
                       <Button mode='contained' style={{ backgroundColor: '#FF69B4', marginBottom: '20px' }}   onPress={() => saveTime(val)}>     {val}</Button>
                     
                  
                 
                    ))}
                   

                    <Card style={{ padding: '40px', borderRadius: '20px', width: '100%', backgroundColor: '#f8ecec', marginBottom: '20px' }}>
                        <Text style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Booking Summary</Text>
                        <Divider />
                        <Text style={{ fontSize: '18px', marginBottom: '5px', marginTop: '5px' }}>{val.name}</Text>
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>{moment(value).format("Do MMM YYYY")}  {timer}</Text>
        
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>1 hr</Text>
                        <Text style={{ fontSize: '18px', marginBottom: '5px' }}>Rs, {val.Price}</Text>
                    </Card>
                    <Button style={{ marginBottom: '30px', backgroundColor: '#FF69B4' }} mode="contained" onPress={() => move()}>Next</Button>
                </Card>
            </View>
        </SafeAreaView>
    );
}
