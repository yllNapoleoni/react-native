import React from "react";
import {View,Text,StyleSheet,FlatList} from 'react-native';

const students=[
    {name:'gert',surname:'calaj',age:'13'},
    {name:'deon',surname:'beka',age:'15'},
    {name:'amar',surname:'vyzyke',age:'16'}
];

const ListScreen = () => {
    return(
        <View>
        <Text>list screen: </Text>
        <FlatList 
        horizontal={true}
        data={students}
        renderItem={({item}) =>{
            return <Text >{item.name}{item.surname}{item.age}</Text>
        }
        }
        />
        </View>
    );
}

const styles=StyleSheet.create({});

export default ListScreen;