import { ReactNode } from "react"
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native"

type ButtonPrimaryProps = TouchableOpacityProps & {
    children:ReactNode
}
export default function ButtonPrimary ({children, style, ...rest}:ButtonPrimaryProps){
    return(
        <TouchableOpacity style={[styles.container, style]} {...rest}>
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:'#e50914',
            width:'100%',
            height:50,
            borderRadius:8,
        },
        text: {
            color:"white",
            fontWeight: "bold",
        }
    }
)