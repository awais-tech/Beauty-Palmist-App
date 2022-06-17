import { Button, Card, List } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function QuizCategory() {
    const navigation = useNavigation();

    const move=()=>{
      navigation.navigate('PalmistQuiz')
    }
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#9c8cbc' }}>
            <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', backgroundColor: '#f8ecec' }}>
                <List.Section title="Salon Categories" titleStyle={{fontSize: '24px', fontWeight: 'bold'}}>
                    <List.Accordion
                        title="Salons"
                        left={props => <List.Icon {...props} icon="flare" />}>
                        <List.Item title="Beauty" right={props => <Button mode='outlined' onPress={()=>move()}>Take Quiz</Button>} />
                        <List.Item title="Skin Treatments" right={props => <Button mode='outlined'>Take Quiz</Button>}/>
                        <List.Item title="Hair Treatments" right={props => <Button mode='outlined'>Take Quiz</Button>}/>
                    </List.Accordion>

                    <List.Accordion
                        title="Aesthetics"
                        left={props => <List.Icon {...props} icon="brush" />}
                        onPress={handlePress}>
                        <List.Item title="TBD" right={props => <Button mode='outlined'>Take Quiz</Button>} />
                        <List.Item title="TBD" right={props => <Button mode='outlined'>Take Quiz</Button>}/>
                        <List.Item title="TBD" right={props => <Button mode='outlined'>Take Quiz</Button>}/>
                    </List.Accordion>
                    <List.Accordion
                        title="Fitness"
                        left={props => <List.Icon {...props} icon="run" />}
                        onPress={handlePress}>
                        <List.Item title="TBD" right={props => <Button mode='outlined'>Take Quiz</Button>} />
                        <List.Item title="TBD" right={props => <Button mode='outlined'>Take Quiz</Button>}/>
                        <List.Item title="TBD" right={props => <Button mode='outlined'>Take Quiz</Button>}/>
                    </List.Accordion>
                    <List.Accordion
                        title="Photography"
                        left={props => <List.Icon {...props} icon="camera" />}
                        onPress={handlePress}>
                        <List.Item title="TBD" right={props => <Button mode='outlined'>Take Quiz</Button>} />
                        <List.Item title="TBD" right={props => <Button mode='outlined'>Take Quiz</Button>}/>
                        <List.Item title="TBD" right={props => <Button mode='outlined'>Take Quiz</Button>}/>
                    </List.Accordion>
                </List.Section>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    Textfields: {
        borderRadius: '20px',
        borderColor: 'grey',
        padding: '10px',
        marginBottom: '20px'
    },
});
