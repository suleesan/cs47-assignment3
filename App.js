import { StyleSheet, SafeAreaView, Text, Pressable, Image, View, Dimensions } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Images, Themes } from "./assets/Themes";
import AuthButton from "./components/AuthButton";
import SongList from "./components/SongList";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import PreviewScreen from "./screens/PreviewScreen";

// import { TouchableWithoutFeedback } from "react-native-web";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerShown: false,}}/>
      <Stack.Screen name="DetailScreen" component={DetailScreen} options = {{
          title: 'Song Details',
          headerStyle: {
            backgroundColor: Themes.colors.background,
          },
          headerTitleStyle: {
            color: 'white',
          }
      }}/>
      <Stack.Screen name="PreviewScreen" component={PreviewScreen} options= {{
          title: 'Song Preview',
          headerStyle: {
            backgroundColor: Themes.colors.background,
          },
          headerTitleStyle: {
            color: 'white',
          }
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
