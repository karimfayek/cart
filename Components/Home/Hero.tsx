import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
export default function Hero () {
    const image =require('../../assets/images/hero.jpg')
    //const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
    return (
            <ImageBackground source={image} resizeMode={'cover'} style={styles.image}>
                <View style={styles.overlay}>

            <Text style={styles.text}>
                Welcome to Cart
            </Text>
            <Text style={styles.discount}>
              50% off
            </Text>
            <Text style={styles.desc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </Text>
             <Pressable >
                <Text style={styles.button}>Shop Now</Text>
            </Pressable>
                </View>
            </ImageBackground>
      
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1
    },
    image:{
        height:250 ,
         width: '100%',
    },
    overlay:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,.6)',
        position:'relative'
        
    },
    text:{
        color: '#fff',
        fontSize:15,
        fontWeight:'bold',
        paddingLeft:10,
        marginTop:5
    },
    discount:{
        color: '#fff',
    fontSize:30,
    paddingLeft:10
    },
    desc:{
        color: '#fff',
    fontSize:10,
    paddingLeft:10
    },
    button:{
        backgroundColor : '#000',
        width:100,
        padding:10,
        marginLeft:10,
        color: 'white',
        marginTop: 10,
    }
})