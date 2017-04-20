import React from 'react';
import ReactDOM from 'react-dom';

export class HeaderElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myKey: this.props.myKey,
            shadowOn: false
        }
    }

    changeBar = () => {

        this.props.handleStartClick(this.state.myKey);

    }
    shadow = () => {
        this.setState({shadowOn: true})
    }
    shadowOff = () => {
        this.setState({shadowOn: false})
    }

    render() {
        if (this.props.page === this.state.myKey) {
            return <li onMouseLeave={this.shadowOff}>
                <div className="cube shadow">
                    <div className="active-state1 first">
                        <span>{this.state.myKey}</span>
                    </div>
                    <div className="default-state second">
                        <span>{this.state.myKey}</span>
                    </div>
                </div>
            </li>
        } else if (this.state.shadowOn === false) {
            return <li onClick={this.changeBar} onMouseEnter={this.shadow}>
                <div className="cube">
                    <div className="default-state1 first">
                        <span>{this.props.myKey}</span>
                    </div>
                    <div className="active-state second">
                        <span>{this.props.myKey}</span>
                    </div>
                </div>
            </li>
        } else if (this.state.shadowOn === true) {
            return <li onClick={this.changeBar} onMouseLeave={this.shadowOff}>
                <div className="cube shadow">
                    <div className="default-state1 first">
                        <span>{this.props.myKey}</span>
                    </div>
                    <div className="active-state second">
                        <span>{this.props.myKey}</span>
                    </div>
                </div>
            </li>
        }

    }

}
