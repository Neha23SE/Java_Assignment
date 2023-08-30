package com.techlab.ticTacToc;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;



public class BoardTest {
    private Board board;

    @BeforeEach
    public void setUp() {
        int boardSize = 3;
        board = new Board(boardSize);
    }

    @Test
    public void testInitialEmptyBoard() {
        for (int row = 0; row < board.getSize(); row++) {
            for (int col = 0; col < board.getSize(); col++) {
                assertEquals(Cell.EMPTY, board.getCell(row, col));
            }
        }
    }

    @Test
    public void testSetCellAndGetCell() {
        board.setCell(0, 0, Cell.X);
        board.setCell(1, 1, Cell.O);

        assertEquals(Cell.X, board.getCell(0, 0));
        assertEquals(Cell.O, board.getCell(1, 1));
        assertEquals(Cell.EMPTY, board.getCell(2, 2)); // Unset cell
    }

    @Test
    public void testIsFullEmptyBoard() {
        assertFalse(board.isFull());
    }


    @Test
    public void testSetCellOutOfRange() {
        assertThrows(ArrayIndexOutOfBoundsException.class, () -> {
            int boardSize = 3;
            Board board = new Board(boardSize);
            // Attempt to set a cell with an out-of-range row and column
            board.setCell(boardSize, boardSize, Cell.X);
        });
    }


    @Test
    public void testIsFullPartiallyFilledBoard() {
        board.setCell(0, 0, Cell.X);
        assertFalse(board.isFull());
    }


}
