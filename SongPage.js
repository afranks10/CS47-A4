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
import {tracks} from "./HomeScreen"

function SongPage ({navigation, route}) {
    //console.log(route.params.songinformation[0])
    //const params = route.params.songinformation
    const url = route.params.externalurl
    //console.log(route.params)
    console.log(url)
    //const nagivation = useNavigation();
    //console.log(url)
    //console.log(params[0])
    //console.log(info)
    //console.log(route.params.songinformation)
    //console.log(tracks) //only printing the object
    return (
           <WebView
            source = {{uri: url}}>
           </WebView>
    );
}

export default SongPage;