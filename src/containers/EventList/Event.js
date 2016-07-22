import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {selectEvent} from '../../redux/modules/events';

const Event = (props) => 
    <TouchableOpacity onPress={()=>props.selectEvent(props.id)}>
        <Text>{props.event.title}</Text>
    </TouchableOpacity>;

export default connect((state)=>state,{selectEvent})(Event);
