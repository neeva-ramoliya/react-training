import React from 'react';
import axios from 'axios';

function loadingHighOrderComponent(WrappedComponent, fetchUrl) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            console.log("dhfjd");
            this.state = {
                isLoading: true,
                data: []
            }
        }

        componentDidMount() {
            console.log("dhfjd");
            axios.get(fetchUrl)
            .then(res => {
                this.setState(
                    { 
                        isLoading:false,
                        data: res.data
                    });
            }).catch(res => {

                this.setState({
                    isLoading: false
                })
                console.log(res);
            });
        }

        render() {
            if(this.state.isLoading) {
                return <h2>loading...</h2>
            } else {
               return <WrappedComponent data={this.state.data} />
            }
        }
    }
}

export default loadingHighOrderComponent;