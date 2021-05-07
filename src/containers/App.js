import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {connect} from 'react-redux';
import {setSearchField} from '../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchField || '' //can be undefined
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)) //key name equals to method in App
    }
}
class App extends Component {

    constructor () {
        super();
        this.state = {
            robots: [],
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }


    render() {

        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        console.log(searchField, robots)
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        console.log('filteredRobots', filteredRobots)
        if (!robots.length) {
            return <h1 className="f1 light-green">Loading robots...</h1>
        } else {
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