import Timer from "./Timer";
import {Component} from "react";

export default class InputForm extends Component{
    state = {
        timer: ''
    };

    render(){

        const nextRoute = {
            component: Timer,
            title: 'Timer',
            passProps: {timer: this.state.timer},
        };

        return(
            <View
                style={styles.viewStyles}
            >
                <View style={{flex:1}}>
                    <Input
                        placeholder={"6"}
                        label={"tijd"}
                        value={this.state.timer}
                        onChangeText={(timer) => this.setState({timer})}
                    />
                </View>

                <View style={{flex:1}}>
                    <Button
                        style={styles.buttonStyles}
                        onPress={() => {

                            this.props.navigator.push(nextRoute)
                        }}
                    >
                        Bevestig
                    </Button>
                </View>
            </View>
        )
    }
}



/*<View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
            {props[props.loser]} Lost!
        </Text>
    </View>
    */