package com.techlab.ticTacToc;

public class Board {
    private Cell[][] cells;

    public Board(int size) {
        cells = new Cell[size][size];
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                cells[i][j] = Cell.EMPTY;
            }
        }
    }

    public Cell getCell(int row, int col) {
        return cells[row][col];
    }

    public void setCell(int row, int col, Cell cell) {
        cells[row][col] = cell;
    }

    public boolean isFull() {
        for (int i = 0; i < cells.length; i++) {
            for (int j = 0; j < cells[i].length; j++) {
                if (cells[i][j] == Cell.EMPTY) {
                    return false;
                }
            }
        }
        return true;
    }
    public int getSize() {
        return cells.length; 
        // Return the number of rows
    }
    
    
}
