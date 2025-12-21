import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryScreen({ route }) {
  const { title } = route.params ?? {};
  const [catProducts , setCatproducts] = useState([])
  const [loading , setLoading] = useState(true)
  const image =require('../assets/images/hero.jpg')
  const GetData = async ()=>{
        try {
            setLoading(true)
            const reponse = await axios.get('https://fakestoreapi.com/products')
            const data  = reponse.data 
            const filteredData = data.filter((pr) => pr.category === title)
            setCatproducts(filteredData)
            console.log(filteredData , 'cat screen')
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
  }
useEffect(
    () => {
        GetData()
    },[]
)

if (loading) {
    return (

        <ActivityIndicator animating={loading} />
    )
}
const navigation = useNavigation()
const RenderItem = ({item})=> (
<View style={styles.item} >
    <Pressable onPress={() => navigation.navigate('Product' ,{
        id : item.id
    }) }>

    <Image source={{uri:item.image}} style={styles.image}
     resizeMode="contain"
    />
    <Text numberOfLines={2} style={styles.title}>
        {item.title}
    </Text>
     <Text style={styles.price}>
        {item.price}
        <Text style={{fontWeight:'normal'}}>{' '}$</Text>
    </Text>
    </Pressable>
</View>
)

  return (
    <View style={{ flex: 1, padding: 20 }}>
     <FlatList
     data={ catProducts}
     numColumns={2}
     keyExtractor={ item => item.id.toString()}
     renderItem={RenderItem}
     ListHeaderComponent={
        <>
     <Text>Header 1</Text>
     <Text>Header 2</Text>
        </>
    }
     ListFooterComponent={<Text>footer</Text>}
/>
    </View>
  );
}

    const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    image : {
        width:( windowWidth /2 ) - 30,
        height : 250,
        backgroundColor: '#f8f8f9' ,
        margin: 5
    },
    title:{
        width:( windowWidth /2 ) - 30,
        textAlign:'center',
        position:'relative',
        marginBottom:25
    },
    item: {
        backgroundColor: '#fff',
        marginBottom:10,
        padding:5
    },
    price:{
        fontWeight: 'bold',
        position:'absolute',
        bottom: 0,
        marginBottom: 10
    }
})