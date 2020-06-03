import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class TabScreen1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> TabScreen1 </Text>
                <Button title='Back to StackScreen1' onPress={()=>this.props.navigation.navigate('StartOne')} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})