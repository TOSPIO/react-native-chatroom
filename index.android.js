/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import ChannelList from './app/components/ChannelList';
import ChatInput from './app/components/ChatInput';


const MOCKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail: 'http://wanzao2.b0.upaiyun.com/system/pictures/8359627/original/20140506185954.png'}},
];

class AwesomeProject extends Component {
    render() {
        var movie = MOCKED_MOVIES_DATA[0];
        return (
            <View style={styles.container}>
              <View style={styles.leftContainer}>
                <ChannelList style={styles.channelList} />
              </View>
              <View style={styles.centerContainer}>
                <Text style={styles.welcome}>
                  Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                  To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                  Press Cmd+R to reload,{'\n'}
                  Cmd+D or shake for dev menu
                </Text>
                <ChatInput style={styles.chatInput} />
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    leftContainer: {
        flex:1,
        alignItems: 'center'
    },
    centerContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#EFEFEF'
    },
    thumbnail: {
        width: 200,
        height: 100,
    },
    channelList: {
        flex: 1,
        backgroundColor: '#efefef'
    },
    chatInput: {
        width: 200
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
