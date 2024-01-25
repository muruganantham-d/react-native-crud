import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";



 export const AddShoppingItem = ({addItem}) => {

    const [item, setItem] = useState('');

    const pressHandler = (item) => {
     addItem(item)
     setItem('')
    }

  return (
       <View style={styles.container}>
            <TextInput
             style={styles.input}
             placeholder="Enter an Item"
             value={item}
             onChangeText={(text) => setItem(text)}
             />
            <Button title="Add Item" onPress={() => pressHandler(item)}/>
       </View>
  )
}


const styles = StyleSheet.create({
           input: {
            borderBottomWidth:1,
            borderBottomColor: 'lightgray',
            marginVertical: 20,
            textAlign: 'center',
           },
           container: {
            marginHorizontal:40,
           }
})
