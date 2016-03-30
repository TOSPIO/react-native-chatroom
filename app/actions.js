export const ChannelList = {
    HELLO: 'HELLO'
};


function sayHello(text) {
    return {
        type: ChannelList.HELLO,
        text
    };
}
