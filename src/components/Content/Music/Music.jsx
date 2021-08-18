import { Component } from 'react';
import s from './Music.module.css'

class Music extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visibility: false
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            visibility: !state.visibility
        }));
    }
    
    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <h1>Now you see me</h1>
                    <button onClick={this.handleClick}>click</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.handleClick}>click</button>
                </div>
            )
        }
    }
}
// https://www.youtube.com/watch?v=Q7FkSWMf2Qo



// const Music = (props) => {
//     return(
//         <div className={s.messages}>Music</div>
//     )
// }

export default Music;