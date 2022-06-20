import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chooselogintype from "./Chooselogintype";
import Clientlogin from "./Clientlogin";
import ServiceSelect from "./ServiceSelect";
import ServiceDetailPage from "./ServiceDetailPage";
import ServiceCategory from "./ServiceCategory";
import Choosesignuptype from "./Choosesignuptype";
import BusinessLogin from "./BusinessLogin";
import BusinessSignup from "./BusinessSignup";
import ClientSignup from "./ClientSignup";
import QuizCategory from "./QuizCategories";
import PalmistQuiz from "./QuizQuestionnare";
import Recommendations from "./PalmistRecommendations";
import ServiceListings from "./Servicelistings";
import Home from "./Home";
import BusinessDashboard from "./BusinessDashboard";
import ServiceList from "./ServicesList";
import Serviceform from "./Serviceform";
import ProfileSettings from "./ProfileSettings";
const Stack = createNativeStackNavigator();



export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Chooselogintype"
          component={Chooselogintype}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Choosesignuptype"
          component={Choosesignuptype}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="BusinessLogin"
          component={BusinessLogin}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="ClientSignup"
          component={ClientSignup}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="BusinessSignup"
          component={BusinessSignup}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="ClientLogin"
          component={Clientlogin}

        />



        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="ServiceDetailPage"
          component={ServiceDetailPage}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="ServiceCategory"
          component={ServiceCategory}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="ServiceSelect"
          component={ServiceSelect}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="QuizCategory"
          component={QuizCategory}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="PalmistQuiz"
          component={PalmistQuiz}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="Recommendations"
          component={Recommendations}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="ServiceListings"
          component={ServiceListings}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="Home"
          component={Home}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="Business Dashboard"
          component={BusinessDashboard}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="Manage Services"
          component={ServiceList}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="Add Service Form"
          component={Serviceform}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}

          name="Profile Settings"
          component={ProfileSettings}

        />



      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  stretch: {
    width: "100%",
    height: 150,
    resizeMode: "stretch",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    backgroundImage:
      'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(70, 64, 68, 0.73)), url("https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-900301626_437925_t2i3bm.jpg"',
    backgroundSize: "cover",
    /* position: fixed; */
  },
});
