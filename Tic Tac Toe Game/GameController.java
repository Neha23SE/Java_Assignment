package com.techlab.ticTacToc;

public class GameController {
    private Board board;
    private Player currentPlayer;

    public GameController(int size) {
        board = new Board(size);
        currentPlayer = Player.X;
    }

    public void makeMove(int row, int col) throws IllegalArgumentException {
        if (row < 0 || row >= board.getSize() || col < 0 || col >= board.getSize()) {
            throw new IllegalArgumentException("Invalid cell coordinates");
        }
        if (board.getCell(row, col) != Cell.EMPTY) {
            throw new IllegalArgumentException("Cell is already occupied");
        }

        board.setCell(row, col, currentPlayer == Player.X ? Cell.X : Cell.O);
        currentPlayer = (currentPlayer == Player.X) ? Player.O : Player.X;
    }

    public boolean isGameOver() {
        return isWinner(Player.X) || isWinner(Player.O) || board.isFull();
    }

    public boolean isWinner(Player player) {
        int size = board.getSize();
        
        // Check rows
        for (int i = 0; i < size; i++) {
            boolean win = true;
            for (int j = 0; j < size; j++) {
                if (board.getCell(i, j) != (player == Player.X ? Cell.X : Cell.O)) {
                    win = false;
                    break;
                }
            }
            if (win) {
                return true;
            }
        }
        
        // Check columns
        for (int j = 0; j < size; j++) {
            boolean win = true;
            for (int i = 0; i < size; i++) {
                if (board.getCell(i, j) != (player == Player.X ? Cell.X : Cell.O)) {
                    win = false;
                    break;
                }
            }
            if (win) {
                return true;
            }
        }
        
        // Check main diagonal
        boolean win = true;
        for (int i = 0; i < size; i++) {
            if (board.getCell(i, i) != (player == Player.X ? Cell.X : Cell.O)) {
                win = false;
                break;
            }
        }
        if (win) {
            return true;
        }
        
        // Check anti-diagonal
        win = true;
        for (int i = 0; i < size; i++) {
            if (board.getCell(i, size - 1 - i) != (player == Player.X ? Cell.X : Cell.O)) {
                win = false;
                break;
            }
        }
        return win;
    }
    
    public Player getCurrentPlayer() {
        return currentPlayer;
    }

    public Board getBoard() {
        return board;
    }

}
