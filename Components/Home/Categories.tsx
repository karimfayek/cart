import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from "react";
import { FlatList, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
export default function Categories (){
    const navigation= useNavigation();
    const image =require('../../assets/images/hero.jpg')
const [cats , setCats] = useState([])
const [error , seterror] = useState(null)
type cat = {
    title:string,
    category:string
}
const getData = async () => {
try {

    const response = await axios.get('https://fakestoreapi.com/products')
    const UniqCats = [...new Set( response.data.map(item => item.category))];
    setCats(UniqCats)
    
    console.log(UniqCats)
} catch (error : any){
    seterror(error.message)
}

}
useEffect(
    () => {
        getData()
    },[]
)
type CatProbs = {title:string , image:ImageSourcePropType }

const Cat = ({title , image} : CatProbs)=> (
    <View>
        <View style={styles.card}>
            <Image source={image} style={styles.catImage} />
           
                <Pressable 
                onPress = {
                    () => {
                        navigation.navigate('Category',{
                            title: title
                        })
                    }
                    }
                    >
                         <Text numberOfLines={2} ellipsizeMode='tail' style={styles.catTitle}>
                {title}
            </Text>
            </Pressable>
        </View>
    </View>
)
    return (
        <View style={styles.container}>
            {error &&
            <Text style={{color:'red'}}>
                {error}
            </Text>
            }
            <Text style={styles.title}>
                Categories
            </Text>
            
            <FlatList 
            data = {cats}
            renderItem = {({item}) => <Cat  title={item} image={image} />}
            keyExtractor = {item => item }
            horizontal
            contentContainerStyle= {{paddingHorizontal : 10}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        flex : 1,
        marginTop:10,
        backgroundColor: '#f7f7f7',
        paddingVertical:10
    },
    title :{
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom:10
       
    },
    catImage:{
        width: 50,
        height:50,
        borderRadius:25,
        backgroundColor:'gray'
    },
    card:{
        width: 90,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,

    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    },
    catTitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
    marginTop:5
  },
})