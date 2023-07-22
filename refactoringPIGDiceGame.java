package com.techlab.refactoringPig;
import java.util.Scanner;

public class refactoringPIGDiceGame {
    private static final int TARGET_SCORE = 20;
    private static final int DICE_SIDES = 6;

    public static void main(String[] args) {
        playPIGDice();
    }

    public static void playPIGDice() {
        Scanner scanner = new Scanner(System.in);
        int totalScore = 0;
        int turnCount = 1;

        System.out.println("Let's Play PIG!");
        System.out.println("See how many turns it takes you to get to " + TARGET_SCORE + ".");
        System.out.println("Turn ends when you hold or roll a 1.");
        System.out.println("If you roll a 1, you lose all points for the turn.");
        System.out.println("If you hold, you save all points for the turn.\n");

        while (totalScore < TARGET_SCORE) {
            System.out.println("TURN " + turnCount);

            int turnScore = takeTurn(scanner);
            totalScore += turnScore;

            System.out.println("Score for turn: " + turnScore);
            System.out.println("Total score: " + totalScore + "\n");
            turnCount++;
        }

        System.out.println("You finished in " + (turnCount - 1) + " turns!\n");
        System.out.println("Game over");
    }

    public static int takeTurn(Scanner scanner) {
        int turnScore = 0;
        boolean turnOver = false;

        while (!turnOver) {
            System.out.print("Roll or hold? (r/h): ");
            char rollOrHold = Character.toLowerCase(scanner.next().charAt(0));

            if (rollOrHold == 'r') {
                int die = rollDice();
                System.out.println("Die: " + die);
                if (die == 1) {
                    System.out.println("Turn over. No score.\n");
                    turnOver = true;
                } else {
                    turnScore += die;
                }
            } else if (rollOrHold == 'h') {
                System.out.println("Turn held.\n");
                turnOver = true;
            } else {
                System.out.println("Invalid choice. Please enter 'r' or 'h'.");
            }
        }

        return turnScore;
    }

    public static int rollDice() {
        return (int) (Math.random() * DICE_SIDES) + 1;
    }
}
