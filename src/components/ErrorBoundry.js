import React, {Component} from 'react';

class ErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            logErrors: [],
        }
    }

    //лог ошибок
    logComponentStackToMyService = (errorInfo) => {
        console.log(this.state.logErrors);
        this.setState({
            logErrors: [
                ...this.state.logErrors,
                errorInfo.toString()
            ]
        }, () => console.log('err', this.state.logErrors[0]))
    }

    componentDidCatch(error, info) {
        console.log(info.componentStack)
        this.logComponentStackToMyService(info.componentStack)
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {

        if(this.state.hasError) {
           // alert()
            return <h1 className="light-green">Ooops! Something went wrong...</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;