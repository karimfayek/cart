import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";

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
const RenderItem = ({item})=> (
<View>
    <Image source={{uri:item.image}} style={styles.image}
     resizeMode="contain"
    />
</View>
)

  return (
    <View style={{ flex: 1, padding: 20 }}>
     <FlatList
     data={ catProducts}
     numColumns={2}
     keyExtractor={ item => item.id.toString()}
     renderItem={RenderItem}
     columnWrapperStyle = {{borderWidth:1}}
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
        width:( windowWidth /2 ) - 20,
        height : 250
    }
})