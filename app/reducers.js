'use strict';

import {combineReducers} from 'redux';
import {ChannelList} from './actions';

function channelList(state, action) {
    switch(action.type) {
    case ChannelList.HELLO:
        return [
                ...state,
            {
                text: action.text
            }
        ];
    }
}

const awesomeProject = combineReducers({
    channelList
});
