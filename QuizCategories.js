import { Button, Card, List } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import SubCategory from './Services/services/subCategorybyCategory';

export default function QuizCategory() {
    const navigation = useNavigation();
const [subCat,setSubCat]=React.useState([]);
const [loading,setloading]=React.useState();
    const move=(value)=>{
      navigation.navigate('PalmistQuiz',{val:value})
    }
    const [expanded, setExpanded] = React.useState(true);
    React.useEffect(() => {
        getcate();
    
        // byCategory
      }, []);
    const getcate = async () => {
        try {
          const subCats = {};
          setloading(true);
    
          let result = await SubCategory.getSubCategory();
          result.subcategory.forEach((element) => {
            if (subCats[element.categoryId.name]) {
              subCats[element.categoryId.name].push(element);
            } else {
              subCats[element.categoryId.name] = [element];
            }
          });
    
          setSubCat(subCats);
    
          setloading(false);
        } catch (e) {
          alert(e.error);
        }
      };
    const handlePress = () => setExpanded(!expanded);
    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#ffe4e4'}}>
            <Card style={{ padding: '40px', borderRadius: '20px', width: '90%', backgroundColor: '#f8ecec' }}>
            {Object.entries(subCat).map(([k, v]) => (
        
                <List.Section title={k} titleStyle={{fontSize: '24px', fontWeight: 'bold'}}>
                    <List.Accordion
                        title={k}
                        left={props => <List.Icon {...props} icon="flare" />}>
                             {v.map((value) => (
                                <>
                        <List.Item title={value.name} right={props => <Button mode='outlined' onPress={()=>move(value)}>Take Quiz</Button>} />
                      
                        </>
                             ))}

                    </List.Accordion>

                  
                </List.Section>
                ))}
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
