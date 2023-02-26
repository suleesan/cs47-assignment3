import { FlatList, Text, ScrollView, SafeAreaView } from "react-native";
import {Themes} from "../assets/Themes";
import Song from "./Song";
import Header from "./Header";
import {WebView} from "react-native-webview";


const renderItem = ({ item, index }) => (
    <Song
      id={index+1}
      image={item.imageUrl}
      title={item.songTitle}
      album={item.albumName}
      artist={item.songArtists[0].name}
      duration={item.duration}
      previewUrl = {item.previewUrl}
      externalUrl = {item.externalUrl}
    />
  );

const SongList = ({tracks}) => {
    return (
        <SafeAreaView>
            <Header>My Top Tracks</Header>
            <ScrollView>
                <FlatList 
                data = {tracks}
                renderItem = {(item) => 
                    renderItem(item)}
                keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default SongList;