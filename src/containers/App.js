import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {connect} from 'react-redux';
import {setSearchField, requestRobots} from '../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField || '' ,//can be undefined
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), //key name equals to reducer, ex method in App,
        onRequestRobots: () => dispatch(requestRobots()) //equals to reducer
    }
}
class App extends Component {
    //initialState is in reducers.js
    componentDidMount() {
        this.props.onRequestRobots();
    }


    render() {
        //console.log(this.props.store.getState())
        //alert('App rendered')

        const {searchField, onSearchChange, robots, isPending, error} = this.props;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if (isPending) {
            return <h1 className="f1 light-green">Loading robots...</h1>
        }
        if (error) {
            return <h1 className="f1 light-green">Something went wrong...</h1>
        }else {
            return (
                <div className="tc">
                    <h1 className="f1 light-green">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);