import React from 'react';
import {View, Text} from 'react-native';


export default LoseScreen = (props) => (

        <View style={styles.viewStyles}>
            <Text style={styles.textStyles}>
                {props[props.loser]} Lost!
            </Text>
        </View>


);



const styles = {
    viewStyles:{
        backgroundColor: '#333',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyles:{
        fontSize: 25,
        fontStyle: 'italic',
        padding: 20,
        color: '#fff',
        borderTopLeftRadius: 15
    }
};