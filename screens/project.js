import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Product=(props)=> {
    return(
        <View style={styles.cardContainer}>
            <Image source={{uri:'$(props.img)'}} style={styles.img}
            <View style={styles.cardDesc}>
                <Text>{props.name}</Text>
                <Text>{props.desc}</Text>
                <View style={styles.footer}>
                    <Text>stock:{props.stocks}</Text>
                    <Text>price: {props.price}</Text>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    cardContainer:{
        backgroundColor:'white',
        marginbottom:10,
        borderRadius:10,
    },

    img:{
        width:250,
        hegiht:100,
        borderTopLeftRadius:10,
    },

    footer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})