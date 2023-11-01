import { TextInput, StyleSheet } from "react-native";

type InputProps = {
    placeholder:string
}
export default function Input({placeholder}:InputProps) {
    return (
        <TextInput placeholder={placeholder} placeholderTextColor='#9c9c9c' style={styles.container}/>

    )
}

const styles = StyleSheet.create(
    {
        container: {
            borderWidth:1,
            borderRadius:8,
            height:52,
            padding:15,
            minWidth:'100%',
            backgroundColor:'#333',
        }
    }
)