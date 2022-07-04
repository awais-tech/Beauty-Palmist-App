
import {
    Button,
    Card,
    List,
    Searchbar,
    Modal,
    Portal,
    Provider,
  } from "react-native-paper";
    import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import * as React from 'react';
    import bookingServices from './Services/services/booking';
    
    import AsyncStorage from '@react-native-async-storage/async-storage';
    export default function Cancelled() {
        const navigation = useNavigation();
        const [searchQuery, setSearchQuery] = React.useState('');
        const onChangeSearch = query => setSearchQuery(query);
    
        const [service, setServices] = React.useState([]);
        const [review, setReview] = React.useState([]);
        const [visible, setVisible] = React.useState(false);
   
const [val,setval]=React.useState({});
        const showModal = () => setVisible(true);
        const hideModal = () => setVisible(false);
        const containerStyle = {backgroundColor: 'white', padding: 20};
  
    
        React.useEffect(() => {
        booking();
        }, []);
     
        const booking=async ()=>{
            const user=await AsyncStorage.getItem('user');
            const userInfo=JSON.parse(user);
            bookingServices.getOwnerBooking(userInfo.id).then((val) => {
              console.log(val);
              setServices(
                val.Booking.filter(
                  (val) =>
                  val.status == 3 
                   
                )
              );
                console.log(formatDate("May 11th 14"));
              });
          }
    
    
        function formatDate(date) {
          let main = date.replace("th", "");
          var d = new Date(main),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();
      
          if (month.length < 2) month = "0" + month;
          if (day.length < 2) day = "0" + day;
      
          return [year, month, day].join("-");
        }
   
        const view = (val) => {
           
            setval(val);
            showModal()
          };
        return (
            <Provider>
          <SafeAreaView style={{}}>
    
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  backgroundColor: "#ffe4e4",
                }}
              >
                <Card
                  style={{
                    padding: "40px",
                    borderRadius: "20px",
                    width: "90%",
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                >
                
                    <List.Section>
                      <List.Subheader>Cancelled Booking</List.Subheader>
                      {service.map((val) => (
                        <View>
    
                      <List.Item
                        left={() => (
                          <View>
                            <Text>{val?.ServiceId?.name}</Text>
                            <Text>{val.OwnerId?.name}</Text>
                            <Text style={{ fontSize: "12px" }}>
                              {" "}
                              Date:{val.Date}{" "}
                            </Text>
                            <Text style={{ fontSize: "12px" }}>Time: {val.Time}</Text>
                            <Text style={{ fontSize: "12px" }}>
                              {" "}
                              Price {val.Price}
                            </Text>
                            <Text style={{ fontSize: "12px" }}>
                              id: {val._id.substr(1, 5)}
                            </Text>
                          </View>
                        )}
                        right={() => (
                          <View>
                            <Button
                           
                              style={{
                                marginBottom: "5px",
                                backgroundColor: "#FF69B4",
                              }}
                              onPress={() => view(val)}
                            >
                              View
                            </Button>
                            <Text
                           
                              style={{
                                marginBottom: "5px",
                                backgroundColor: "#FF69B4",
                              }}
                             
                            >
                              Canceled By  {val.canceledBy}
                            </Text>
                           
                          </View>
                        )} />
                        </View>
                        ))}
                    </List.Section>
          
                    <Portal>          
       <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <Text>Detail:</Text>
        <Text>name:{val.UserId?.name}</Text>
        <Text>email:{val.UserId?.email}</Text>
        <Text>Price:{val.Price}</Text>
        <Text>Building:{val.Building}</Text>
        <Text>Address:{val.Address}</Text>
        <Text>City:{val.City}</Text>
        <Text>Message:{val.Message}</Text>
      </Modal>
      
      </Portal>
    
                </Card>
              </View>
          
          </SafeAreaView>
          </Provider>
        );
    }
