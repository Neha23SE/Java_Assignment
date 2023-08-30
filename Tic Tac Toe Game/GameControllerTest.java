package com.techlab.ticTacToc;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


public class GameControllerTest {
    private GameController controller;

    @BeforeEach
    public void setUp() {
        int boardSize = 3;
        controller = new GameController(boardSize);
    }

    @Test
    public void testMakeMoveValid() {
        controller.makeMove(0, 0);
        assertEquals(Cell.X, controller.getBoard().getCell(0, 0));
        assertEquals(Player.O, controller.getCurrentPlayer());
    }

    @Test
    public void testIsWinnerHorizontal() {
        fillHorizontalLine(controller, Player.X); // Fill a horizontal line with X
        assertTrue(controller.isWinner(Player.X));
    }

    @Test
    public void testIsWinnerVertical() {
        fillVerticalLine(controller, Player.O); // Fill a vertical line with O
        assertTrue(controller.isWinner(Player.O));
    }


    // Helper method to fill a horizontal line on the board with the specified player's moves
    private void fillHorizontalLine(GameController controller, Player player) {
        for (int col = 0; col < controller.getBoard().getSize(); col++) {
            controller.makeMove(0, col);
            controller.makeMove(1, col);
        }
    }

    // Helper method to fill a vertical line on the board with the specified player's moves
    private void fillVerticalLine(GameController controller, Player player) {
        for (int row = 0; row < controller.getBoard().getSize(); row++) {
            controller.makeMove(row, 0);
            controller.makeMove(row, 1);
        }
    }

    @Test
    public void testGameController() {
        assertNotNull(controller);
    }

    @Test
    public void testMakeMove() {
        controller.makeMove(0, 0);
        assertEquals(Cell.X, controller.getBoard().getCell(0, 0));
        assertEquals(Player.O, controller.getCurrentPlayer());
    }



    @Test
    public void testIsWinner() {
        assertFalse(controller.isWinner(Player.X));
        assertFalse(controller.isWinner(Player.O));

        fillHorizontalLine(controller, Player.X); // Fill a horizontal line with X
        assertTrue(controller.isWinner(Player.X));
    }

    @Test
    public void testGetCurrentPlayer() {
        assertEquals(Player.X, controller.getCurrentPlayer());

        controller.makeMove(0, 0);
        assertEquals(Player.O, controller.getCurrentPlayer());
    }

    @Test
    public void testGetBoard() {
        assertEquals(3, controller.getBoard().getSize());
    }

}
