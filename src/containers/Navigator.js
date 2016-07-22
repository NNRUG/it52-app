import React, { Component } from 'react';
import {
    Text,
    NavigationExperimental
} from 'react-native';
const {
    CardStack: NavigationCardStack
} = NavigationExperimental;
import {connect} from 'react-redux';
import {push, pop} from '../redux/modules/navigation';
import EventList from './EventList';
import EventView from './EventView';

function mapStateToProps(state) {
    return {
        index: state.navigation.index,
        routes: state.navigation.routes
    };    
}

class Navigation extends Component {
    constructor(props) {
        super(props);

        this._renderScene = this._renderScene.bind(this);
    }

    render() {
        console.log(this._renderScene);
        return <NavigationCardStack
            onNavigateBack={this.props.pop}
            navigationState={{
                index: this.props.index,
                routes: this.props.routes
            }}
            renderScene={this._renderScene}
        />
    }

    _renderScene(sceneProps){
        let {index, routes} = this.props;
        let sceneType = routes[index].type;
        switch(sceneType) {
            case 'eventList': return <EventList/>;
            case 'event': return <EventView/>;
            default: return <Text>Invalid route</Text>;
        }
    }
}

export default connect(mapStateToProps, {push, pop})(Navigation);


