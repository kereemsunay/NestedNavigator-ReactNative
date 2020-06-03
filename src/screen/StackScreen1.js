import React, { Component } from 'react'
import { Text, StyleSheet, View,Button } from 'react-native'

export default class StackScreen1 extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text> TabScreen1 </Text>
            <Button title='StackTwo' onPress={()=>this.props.navigation.navigate('StartTwo')} />
            <Button title='TabNavigator' onPress={()=>this.props.navigation.navigate('TabNavigator')} />
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
