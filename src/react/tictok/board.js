import React from "react";
import Square from "./square";

class Board extends React.Component {

    constructor() {
        super();
        this.state = { matrix: [['', '', ''], ['', '', ''], ['', '', '']], code: 'X', winner: false, counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    refresh() {
        this.setState({ matrix: [['', '', ''], ['', '', ''], ['', '', '']], code: 'X', winner: false, counter: 0 });
    }

    handleClick(row, col) {
        var m = [...this.state.matrix];
        console.log('row-' + row + ',col-' + col);
        if (this.state.winner) {
            return;
        }
        if(this.state.counter === 9) {
            return;
        }
        if (m[row][col] === '') {
            m[row][col] = this.state.code;
            if (this.state.code === 'X') {
                this.setState({ matrix: m, code: 'O', winner: this.state.winner, counter: this.state.counter + 1 });
            } else if (this.state.code === 'O') {
                this.setState({ matrix: m, code: 'X', winner: this.state.winner, counter: this.state.counter + 1 });
            } else {
                throw new Error('Unexpected...');
            }
            var res = this.checkForWinner('X');
            console.log(res);
            if (res) {
                this.setState({ matrix: this.state.matrix, code: this.state.code, winner: true });
            }
            res = this.checkForWinner('O');
            if (res) {
                this.setState({ matrix: this.state.matrix, code: this.state.code, winner: true });
            }
        }
    }

    checkForWinner(code) {
        if (this.state.matrix[0][0] === code && this.state.matrix[0][1] === code && this.state.matrix[0][2] === code) {
            return true;
        } else if (this.state.matrix[1][0] === code && this.state.matrix[1][1] === code && this.state.matrix[1][2] === code) {
            return true;
        } else if (this.state.matrix[2][0] === code && this.state.matrix[2][1] === code && this.state.matrix[2][2] === code) {
            return true;
        } else if (this.state.matrix[0][0] === code && this.state.matrix[1][1] === code && this.state.matrix[2][2] === code) {
            return true;
        } else if (this.state.matrix[2][0] === code && this.state.matrix[1][1] === code && this.state.matrix[0][2] === code) {
            return true;
        }else if (this.state.matrix[0][0] === code && this.state.matrix[1][0] === code && this.state.matrix[2][0] === code) {
            return true;
        } else if (this.state.matrix[0][1] === code && this.state.matrix[1][1] === code && this.state.matrix[2][1] === code) {
            return true;
        } else if (this.state.matrix[0][2] === code && this.state.matrix[1][2] === code && this.state.matrix[2][2] === code) {
            return true;
        }
        return false;
    }
    render() {
        return (
            <>
                {this.state.matrix.map((row, rowIdx) => {
                    return (
                        <div style={{ "width": "500px" }} className="row border board-row" key={rowIdx}>
                            {row.map((col, colIdx) => {
                                return (
                                    <div className="col" key={colIdx}>
                                        <Square row={rowIdx} col={colIdx} handleClick={this.handleClick} value={col} />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                {this.state.winner &&
                    <div>
                        Winner Found {this.state.code}
                    </div>
                }
                {this.state.counter === 9  && !this.state.winner &&
                    <div>
                        No Winner Found...
                    </div>
                }
                <button onClick={()=>this.refresh()}>Start Again</button>
            </>
        )
    }
}
export default Board;