import React from 'react';
import ReactDOM from 'react-dom';

export class PortfolioElementHorizontal extends React.Component {

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
            return <div className="imageHorizontal" onMouseEnter={this.hover}><div className="smallHorizontal">
                    {this.props.myKey}
                    </div>
                </div>
              } else {
                return <div className="imageHorizontal" onMouseLeave={this.hoverOff}><div className="bigHorizontal">
                        {this.props.myKey}
                        </div>
                    </div>
              }
        }

    }
