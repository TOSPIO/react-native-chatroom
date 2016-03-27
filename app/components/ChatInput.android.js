/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    TextInput,
} from 'react-native';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello world"
        };
    }

    render() {
        return (
            <TextInput defaultValue={this.state.text} />
        );
    }
}

export default ChatInput;
