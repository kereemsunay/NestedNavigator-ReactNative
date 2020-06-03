import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class TabScreen2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> TabScreen2 </Text>
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


