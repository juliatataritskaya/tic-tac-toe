class TicTacToe {
    constructor(arr, symbol, winner, gameOver, numberOfOccupiedCell) {
        this.arr = [[null, null, null], [null, null, null], [null, null, null]];
        this.symbol = "x";
        this.winner = null;
        this.gameOver = false;
        this.numberOfOccupiedCell = 0;
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.arr[rowIndex][columnIndex] || this.noMoreTurns()) {
            return "Forbidden";
        } else {
            this.arr[rowIndex][columnIndex] = this.symbol;
            this.numberOfOccupiedCell++;
        }

        if (this.checkColumn(columnIndex) || this.checkRow(rowIndex) || this.checkDiagonal()
            || this.checkDiagonalReverse() == true) {
            this.winner = this.symbol;
            this.gameOver = true;
        }

        if (this.symbol == "x") {
            this.symbol = "o";
        } else {
            this.symbol = "x";
        }
    }

    checkColumn(columnIndex) {
        var count = 0;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i][columnIndex] == this.symbol) {
                count++;
            }
        }
        return count == this.arr.length;
    }

    checkRow(rowIndex) {
        var count = 0;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[rowIndex][i] == this.symbol) {
                count++;
            }
        }
        return count == this.arr.length;
    }

    checkDiagonal() {
        var count = 0;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i][i] == this.symbol) {
                count++;
            }
        }
        return count == this.arr.length;
    }

    checkDiagonalReverse() {
        var count = 0;
        for (var i = 0; i < this.arr.length; i++) {
            for (var j = 0; j <= this.arr.length; j++)
                if (i + j == 2 && this.arr[i][j] == this.symbol) {
                    count++;
                }
        }
        return count == this.arr.length;
    }

    isFinished() {
        return (this.getWinner() || this.gameOver || this.noMoreTurns()) ? true : false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.numberOfOccupiedCell == Math.pow(this.arr.length, 2);
    }

    isDraw() {
        return this.noMoreTurns() == true && this.winner == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];
    }
}
module.exports = TicTacToe;
