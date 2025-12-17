import axios from 'axios';
import { useEffect, useState } from "react";
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

export default function Categories (){
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
            <Text numberOfLines={2} ellipsizeMode='tail' style={{  maxWidth:70, textAlign:'center'}}>
                {title}
            </Text>
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
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        flex : 1,
        marginTop:10,
        backgroundColor:'#cccc'
    },
    title :{
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom:10
       
    },
    catImage:{
        width: 50,
        height:50,
        borderRadius:'100%',
        backgroundColor:'gray'
    },
    card:{
        borderWidth:1,
        borderColor:'gray',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        marginRight:6,
        maxWidth:150,
        backgroundColor:'#fff',
        elevation: 40,
        minHeight:100
    }
})