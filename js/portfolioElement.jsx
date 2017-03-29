import React from 'react';
import ReactDOM from 'react-dom';

export class PortfolioElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myKey: this.props.myKey,
            hover: false

        }
    }
    hover = () => {
        this.setState({hover: true})
    }
    hoverOff = () => {
        this.setState({hover: false})
    }
    render() {
            if (this.state.hover === false){
            return <div className="image" onMouseEnter={this.hover}><div className="small">
                    {this.props.myKey}
                    </div>
                </div>
              } else {
                return <div className="image" onMouseLeave={this.hoverOff}><div className="big">
                        {this.props.myKey}
                        </div>
                    </div>
              }
        }

    }
