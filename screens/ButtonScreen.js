import react from "react"
import {View, Text,StyleSheet,Button,TouchableOpacity} from 'react-native';


const ButtonScreen = () => {
    let counter, counterT=0
    return(
        <View>
        <Text>button click</Text>
        <Button
        title='click me'
        color="blue"
        onPress={()=> console.log('button clicked', counter++)}
        />

        <Text>touchable opacity</Text>
        <TouchableOpacity
        title='touchable opacity'
        onPress={()=> console.log('button clicked', counterT++)}
        />

        </View>
    );
}

// const styles = StyleSheet.create(){

// }

export default ButtonScreen