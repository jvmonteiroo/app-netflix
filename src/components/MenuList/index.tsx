import { ReactNode } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export type MenuListProps = {
    title:string,
    icone?:ReactNode
}
export default function MenuList({title}:MenuListProps){
    return(
        <View style={styles.listItem}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        listItem: {
            backgroundColor: "#202020",
            width:"100%",
            height:50,
            justifyContent: 'center',
        },
        text: {
            color:"white",
        }
    }
)