import { Text, View, StyleSheet } from "react-native";
import Input from "../../components/Input";
import ButtonPrimary from "../../components/ButtonPrimary";

export default function Login(){
    return(
        <View style={styles.container}>
            <Text>
                Tela de login
            </Text>
            <Input placeholder="Email ou número de telefone"/>
            <Input placeholder="Senha"/>
            <ButtonPrimary style={{borderWidth:1}}>
                Entrar
            </ButtonPrimary>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems: "center",
            justifyContent: "center",
            flex:1,
            gap:10,
            padding: 14,
        }
    }
)