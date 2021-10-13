import React from "react";
import Board from "./board";
import './game.css'
class ReactTikTok extends React.Component {

    render() {
        return (
            <div className="container">
                <div><h6>React App Tik Tok!</h6></div>
                <div className="game mp-2">
                    <div className="game-board">
                        <Board />
                    </div>
                </div>
            </div>
        )
    }
}
export default ReactTikTok;