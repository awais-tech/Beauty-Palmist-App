import { Button, Card, List, Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function UserPaymentPending() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);


    const move = () => {
        navigation.navigate('Business Dashboard')
    }
    return (
        <SafeAreaView style={{}}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4' }}>
                <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', marginTop: '30px', marginBottom: '30px' }}>
                    <Searchbar
                        placeholder="Search By Booking ID"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                    <Searchbar
                        placeholder="Search By Client Name"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={{ marginTop: '20px' }}
                    />
                    <List.Section>
                        <List.Subheader>All Payment Requests</List.Subheader>
                        <List.Item
                            left={() => <View>
                                <Text>Service Name</Text>
                                <Text>Client Name</Text>
                                <Text style={{ fontSize: '12px' }}>Date</Text>
                                <Text style={{ fontSize: '12px' }}>Time</Text>
                                <Text style={{ fontSize: '12px' }}>Price</Text>
                                <Text style={{ fontSize: '12px' }}>Booking ID</Text>
                            </View>
                            }
                            right={() => <View>
                                <Button mode='contained' style={{ marginBottom: '5px', backgroundColor: '#FF69B4' }}>Confirm Booking</Button>
                                <Button mode='contained' style={{backgroundColor: '#FF69B4'}}>View Booking Form</Button>
                            </View>}
                        />
                        <List.Item
                            left={() => <View>
                                <Text>Service Name</Text>
                                <Text>Client Name</Text>
                                <Text style={{ fontSize: '12px' }}>Date</Text>
                                <Text style={{ fontSize: '12px' }}>Time</Text>
                                <Text style={{ fontSize: '12px' }}>Price</Text>
                                <Text style={{ fontSize: '12px' }}>Booking ID</Text>
                            </View>
                            }
                            right={() => <View>
                                <Button mode='contained' style={{ marginBottom: '5px', backgroundColor: '#FF69B4' }}>Confirm Booking</Button>
                                <Button mode='contained' style={{backgroundColor: '#FF69B4'}}>View Booking Form</Button>
                            </View>}
                        />
                        <List.Item
                            left={() => <View>
                                <Text>Service Name</Text>
                                <Text>Client Name</Text>
                                <Text style={{ fontSize: '12px' }}>Date</Text>
                                <Text style={{ fontSize: '12px' }}>Time</Text>
                                <Text style={{ fontSize: '12px' }}>Price</Text>
                                <Text style={{ fontSize: '12px' }}>Booking ID</Text>
                            </View>
                            }
                            right={() => <View>
                                <Button mode='contained' style={{ marginBottom: '5px', backgroundColor: '#FF69B4' }}>Confirm Booking</Button>
                                <Button mode='contained' style={{backgroundColor: '#FF69B4'}}>View Booking Form</Button>
                            </View>}
                        />
                        <List.Item
                            left={() => <View>
                                <Text>Service Name</Text>
                                <Text>Client Name</Text>
                                <Text style={{ fontSize: '12px' }}>Date</Text>
                                <Text style={{ fontSize: '12px' }}>Time</Text>
                                <Text style={{ fontSize: '12px' }}>Price</Text>
                                <Text style={{ fontSize: '12px' }}>Booking ID</Text>
                            </View>
                            }
                            right={() => <View>
                                <Button mode='contained' style={{ marginBottom: '5px', backgroundColor: '#FF69B4' }}>Confirm Booking</Button>
                                <Button mode='contained' style={{backgroundColor: '#FF69B4'}}>View Booking Form</Button>
                            </View>}
                        />
                        <List.Item
                            left={() => <View>
                                <Text>Service Name</Text>
                                <Text>Client Name</Text>
                                <Text style={{ fontSize: '12px' }}>Date</Text>
                                <Text style={{ fontSize: '12px' }}>Time</Text>
                                <Text style={{ fontSize: '12px' }}>Price</Text>
                                <Text style={{ fontSize: '12px' }}>Booking ID</Text>
                            </View>
                            }
                            right={() => <View>
                                <Button mode='contained' style={{ marginBottom: '5px', backgroundColor: '#FF69B4' }}>Confirm Booking</Button>
                                <Button mode='contained'style={{backgroundColor: '#FF69B4'}}>View Booking Form</Button>
                            </View>}
                        />
                    </List.Section>
                </Card>
            </View>
        </SafeAreaView>
    );
}