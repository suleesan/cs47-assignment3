import {WebView} from "react-native-webview";
import { StyleSheet, Text, View } from "react-native";
import { Themes } from "../assets/Themes";


const PreviewScreen = ({route, navigation}) => {
    return (
        <WebView source = {{uri: route.params.url}}></WebView>
    );
};

export default PreviewScreen;

const styles = StyleSheet.create({

});