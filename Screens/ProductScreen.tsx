import useApi from "@/hooks/useApi";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
export default function ProductScreen({ route }) {
    const [quantity, setQuantity] = useState(1)
    const { id } = route.params
    const { data } = useApi(`https://fakestoreapi.com/products/${id}`)
const navigation = useNavigation
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
            >
                <Image source={{ uri: data?.image }} style={styles.image} resizeMode="contain" />

                <Text style={styles.title}>{data?.title}</Text>

                <View>
                    <Text style={styles.price}>Price: {data?.price}</Text>
                    <Text>Description: {data?.description}</Text>
                </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TextInput
                    value={quantity}
                    onChangeText={(value) => setQuantity(value)}
                    placeholder="Quantity" style={styles.input} />
                <Pressable style={styles.button} onPress={() => navigation.navigate('Cart')}>
                    <Text style={{ color: 'white' }}>Add to Cart</Text>
                </Pressable>
            </View>
        </View>
    )
}
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    image: {
        width: width,
        height: height / 2
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

        backgroundColor: 'white',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ddd'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        width: width / 3
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        width: width / 2,
        alignItems: 'center'
    }
})
