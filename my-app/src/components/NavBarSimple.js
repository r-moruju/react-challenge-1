import React from 'react'
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello guest!',
            button: 'Log in'
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Prev message:', prevState.message)
            console.log('Prev button text:', prevState.button)
            return{
                message: prevState.message === 'Hello guest!' ? 'Welcome beck, user' : 'Hello guest!',
                button: prevState.button === 'Log in' ? 'Log out' : 'Log in'
            }
        })
    };

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}
                        <button onClick={() => this.handleClick()}>{this.state.button}</button>
                    </span>
                </div>
            </div>
        )
    }
}

export default NavBarSimple