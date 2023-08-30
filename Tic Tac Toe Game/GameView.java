package com.techlab.ticTacToc;

public class GameView {
    private GameController controller;

    public GameView(GameController controller) {
        this.controller = controller;
    }

    public void displayBoard() {
        int size = controller.getBoard().getSize();

        // Display column numbers
        System.out.print("  ");
        for (int col = 0; col < size; col++) {
            System.out.print(col + "   ");
        }
        System.out.println(  );

        // Display the board
        for (int row = 0; row < size; row++) {
            System.out.print(row + " ");
            for (int col = 0; col < size; col++) {
                Cell cell = controller.getBoard().getCell(row, col);
                String cellValue = cell == Cell.EMPTY ? " " : cell == Cell.X ? "X" : "O";
                System.out.print(cellValue);
                if (col < size - 1) {
                    System.out.print(" | ");
                }
            }
            System.out.println();

            if (row < size - 1) {
                System.out.print("  ");
                for (int k = 0; k < size * 4 - 1; k++) {
                    System.out.print("-");
                }
                System.out.println();
            }
        }
    }


    public void displayWinner(Player player) {
        System.out.println("Player " + player + " wins!");
    }

    public void displayDraw() {
        System.out.println("It's a draw!");
    }
}
