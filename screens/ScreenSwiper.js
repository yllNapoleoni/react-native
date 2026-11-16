import react from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const Home=()=> {
    return(
        <View>
            <View>
                <Swiper
                autoplay
                activeDotColor='lightblue'
                autoplayTimeout={5}
                >
                    <View>
                        <Image
                        source={require('../assests/image1.png')}
                        style={}
                        resizemode='cover'
                        />
                    </View>
                </Swiper>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    sliderContainer:{
        widht:'90%',
        height:200,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:10,
        borderRadius:8
    },
    imageItem:{
        width:'100%',
        height:'100%',
        borderRaidus:8,
    },
    item:{
        flex:1,
        justifyContent:'center',
    },
    iconContainers:{
        width:'100%',
        alignSelf:'center'
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title:{
        marginTop:35,
        fontSize:20,
        fontWeight:'bold',
        marginBottom:15,
    }


});

export default Home;