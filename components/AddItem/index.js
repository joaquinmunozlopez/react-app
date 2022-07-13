import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function AddItem(props) {

    const { textItem, onHandlerChangeItem, onHandlerAddItem } = props

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Ingresa tarea' 
                style={styles.input} 
                value={textItem}
                onChangeText={onHandlerChangeItem}  
            />
            <Button title='Añadir'onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true : false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'  
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#B5B2B2',
    },
})