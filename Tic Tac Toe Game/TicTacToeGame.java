package com.techlab.ticTacToc;

import java.util.Scanner;

public class TicTacToeGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("************* Welcome in TIC-TAC-TOE Game *****************");
        System.out.print("\n Enter the size of the board: ");
        int size = scanner.nextInt();

        GameController controller = new GameController(size);
        GameView view = new GameView(controller);

        while (!controller.isGameOver()) {
            view.displayBoard();

            Player currentPlayer = controller.getCurrentPlayer();
            System.out.println("Player " + currentPlayer + "'s turn.");

            System.out.print("Enter row and column (space-separated): ");
            int row = scanner.nextInt();
            int col = scanner.nextInt();

            try {
                controller.makeMove(row, col);
            } catch (IllegalArgumentException e) {
                System.out.println("Invalid move. " + e.getMessage());
            }
        }

        view.displayBoard();
        
        if (controller.isWinner(Player.X)) {
            view.displayWinner(Player.X);
        } else if (controller.isWinner(Player.O)) {
            view.displayWinner(Player.O);
        } else {
            view.displayDraw();
        }

        scanner.close();
    }
}

