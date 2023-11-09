
import { View, StyleSheet, Text, Image } from 'react-native'
import { images } from '../../../images'

export type MenuListProps = {
    title:string,
    icone:string,
}
export default function MenuList({title, icone}:MenuListProps){
    return(
        <View style={styles.listItem}>
            <Image source={images[icone]} style={styles.icone} resizeMethod='resize' resizeMode='contain'/>
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
            flexDirection: 'row',
            alignItems:'center',
        },
        text: {
            color:"white",
        },
        icone: {
            widht:20,
            height:20,
        }
    }
)