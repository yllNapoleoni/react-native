import React from 'react';
import {Vieww,Text,StylSheet,Image,TouchableOpacity} from 'react-native';
 const Item=({item})=> {
    return(
        <View style={styles.CardContainer}>
            <View style={styles.imageContainer}>
                <Image source={{uri:`${item.image}`}} style={styles.img} resizeMode="cover"></Image>
            </View>
            <View></View>

        </View>
    )
 }