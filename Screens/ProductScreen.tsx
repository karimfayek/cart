import useApi from "@/hooks/useApi";
import { Dimensions, Image, StyleSheet, Text } from "react-native";

export default function ProductScreen ({route}) {
    const {id} = route.params

    const  {data , loading , error } = useApi(`https://fakestoreapi.com/products/${id}`)

    console.log(data , 'data')
  console.log(id , 'id')
    return (
        <>
        <Image source={{uri : data.image}} style={styles.image} resizeMode="contain" />
        <Text>
           {data.title}
        </Text>
        </>
    )
}
const {width , height} = Dimensions.get('window')
const styles = StyleSheet.create({
    image: {
        width: width,
        height : height /2
    }
})