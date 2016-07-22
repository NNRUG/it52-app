import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../constants/styles';

function mapStateToProps(state) {
    return {
        events:     state.events.events,
        selectedId: state.events.selectedId
    }
}

class EventView extends Component {
    render() {
        let {events, selectedId} = this.props;
        let event = events[selectedId];
        return (
            <View style={styles.container}>
                <Text>{event.title}</Text>
                <Image source={{uri: event.image_url}}/>
                <Text>{event.description}</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps)(EventView);
