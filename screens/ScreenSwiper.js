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

})

export default Home;