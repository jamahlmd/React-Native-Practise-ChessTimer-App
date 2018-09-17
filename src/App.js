import React from 'react';
import {View, NavigatorIOS, Text, TouchableOpacity, ScrollView} from 'react-native';
import NameInput from './components/NameInput';

export default App = () => (
    <NavigatorIOS
        initialRoute={{
            component: BeginScreen,
            title: 'Begin Scherm',
            passProps: {index: 1},
        }}
        style={{flex: 1}}
    />
)

const BeginScreen = (props) => {

   const nextRoute = {
            component: NameInput,
            title: 'Spelers Kiezen',
            passProps: {index: 2},
    };

    return(
        <View style={styles.viewStyles}>

                    <TouchableOpacity
                        style={styles.viewStyles2}
                        onPress={ () => props.navigator.push(nextRoute)}
                    >
                        <View style={styles.headingviewStyles}>
                            <Text style={styles.headingStyles}>
                                Chess Timer
                            </Text>
                        </View>
                        <ScrollView/>

                        <Text style={styles.textStyles}>
                             By Jamahl
                        </Text>
                    </TouchableOpacity>

        </View>

    )
};


const styles = {
  viewStyles:{
      backgroundColor: '#333',
      flex: 1,
  },
    viewStyles2:{
        backgroundColor: '#333',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingviewStyles:{
      justifyContent: 'center',
      alignItems: 'center',
        marginTop:180,
        flex: 1
    },
  headingStyles:{
      color: '#fff',
      marginTop:50,
      fontSize: 35,
      fontStyle: 'italic',
  },
    textStyles:{
      color: '#e7e7e7',
        fontSize:15,
        paddingBottom: 5
    }
};