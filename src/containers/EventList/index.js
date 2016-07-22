import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {connect} from 'react-redux';
import Event from './Event';
import {fetchEvents} from '../../redux/modules/events';
import styles from '../../constants/styles';

function mapStateToProps(state) {
    return {
        events:  state.events.events,
        loading: state.events.loading,
        error:   state.events.error 
    }    
}

class EventList extends Component {
    componentDidMount() {
        this.props.fetchEvents();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{alignItems: 'stretch'}}>
                    {this.props.loading
                        ? <Text>Loading...</Text>
                        : this.props.events.map((event,id) => 
                            <Event key={event.id} 
                                   event={event}
                                   id={id}/>
                        )}
                </ScrollView>
            </View>
        );
    }
}

export default connect(mapStateToProps, {fetchEvents})(EventList);
