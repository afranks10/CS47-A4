import { StyleSheet, SafeAreaView, Text, Button, Pressable, Image, View, FlatList, render, SectionList,} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { SpotifyColors } from "./assets/Themes/colors";
import { StatusBar } from "react-native-web";
import { getAlbumTracks, getMyTopTracks } from "./utils/apiOptions";
import { Ionicons } from '@expo/vector-icons';
import IndividualSongItem from "./renderSongItem";
//import UserList from "./song.js"
//import renderSongItem from "./renderSongItem";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import HomeScreen from "./HomeScreen";



function ThirdPage ({navigation, route}) {
    //const navigation = useNavigation();
    const url = route.params.previewurl
    return(
    <WebView
        source={{uri:url}} >
    </WebView>
    );

}
export default ThirdPage;

const styles = StyleSheet.create({
    noSong: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      paddingTop: 100,
      //marginHorizontal: 16
      //flexDirection: 'column',
    },
});