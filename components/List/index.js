import { FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'


export default function List(props) {

    const { itemList, onHandlerModal } = props
    console.log(itemList)
    return (
        <FlatList 
            data={itemList}
            renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
                    <Text style={{textDecorationLine: data.item.completed ? 'line-through' : null}}>{data.item.value}</Text>
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#00acee',
        borderRadius: 10,
        marginTop: '10%',
        height: 50,
        paddingLeft: '5%'
        
    }
})