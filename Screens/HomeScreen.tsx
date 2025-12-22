import { ScrollView } from "react-native";
import Categories from "../Components/Home/Categories";
import Hero from "../Components/Home/Hero";

export default function HomeScreen() {
    return (
        <>
            <ScrollView>

                <Hero />
                <Categories />
            </ScrollView>
        </>
    )
}