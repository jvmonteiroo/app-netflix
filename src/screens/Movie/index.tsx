import { useRoute } from "@react-navigation/native"
import { View, Text, StyleSheet } from "react-native"

export default function Movie(){

    const route = useRoute<any>()

    return(
        <View style={styles.container}>
            <Text>
                O id do filme é {JSON.stringify(route.params.movie.id)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
      container: {
        alignItems:"center",
        justifyContent:"center",
        flex:1,
      }  
    }
)