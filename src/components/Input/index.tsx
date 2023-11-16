import { TextInput, StyleSheet, KeyboardTypeOptions, TextInputProps } from "react-native";

type InputProps = TextInputProps & {
    placeholder:string,
    keyboardType?:"number-pad"|"email-addres",
    securityKeyboard?:boolean
}
export default function Input({placeholder, keyboardType, securityKeyboard}:InputProps) {
    return (
        <TextInput 
        placeholder={placeholder} 
        placeholderTextColor='#999' 
        style={styles.container} 
        keyboardType={keyboardType || "default"}
        secureTextEntry={securityKeyboard || false}
        />

    )
}

const styles = StyleSheet.create(
    {
        container: {
            borderRadius:8,
            height:52,
            padding:15,
            minWidth:'100%',
            color: "white",
            backgroundColor:'#333',
        }
    }
)