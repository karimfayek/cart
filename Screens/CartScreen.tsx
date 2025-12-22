import { Text } from "react-native";
import { useSelector } from 'react-redux';

export default function CartScreen () {
const items = useSelector((state) => state.cart.items)

    return (
        <Text>
       {items.length}      
     </Text>
    )
    
}