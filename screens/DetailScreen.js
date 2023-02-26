import {WebView} from "react-native-webview";


const DetailScreen = ({route, navigation}) => {
    return (
        <WebView source= {{uri: route.params.url}}></WebView>
    );
};

export default DetailScreen;
