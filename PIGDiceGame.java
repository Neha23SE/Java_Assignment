package com.techlab.refactoringPig;
import java.util.Scanner;

public class PIGDiceGame {
	public static void main(String[] args) {
        playPIGDice();
    }

    public static void playPIGDice() {
        Scanner scanner = new Scanner(System.in);
        int totalScore = 0;
        int turnScore = 0;
        int turnCount = 1;

        System.out.println("Let's Play PIG!");
        System.out.println("See how many turns it takes you to get to 20.");
        System.out.println("Turn ends when you hold or roll a 1.");
        System.out.println("If you roll a 1, you lose all points for the turn.");
        System.out.println("If you hold, you save all points for the turn.\n");

        while (totalScore < 20) {
            System.out.println("TURN " + turnCount);

            char rollOrHold;
            do {
                System.out.print("Roll or hold? (r/h): ");
                rollOrHold = scanner.next().charAt(0);
            } while (rollOrHold != 'r' && rollOrHold != 'h');

            if (rollOrHold == 'r') {
                int die = rollDice();
                System.out.println("Die: " + die);
                if (die == 1) {
                    System.out.println("Turn over. No score.\n");
                    turnScore = 0;
                    turnCount++;
                } else {
                    turnScore += die;
                }
            } else if (rollOrHold == 'h') {
                totalScore += turnScore;
                System.out.println("Score for turn: " + turnScore);
                System.out.println("Total score: " + totalScore + "\n");
                turnScore = 0;
                turnCount++;
            }
        }

        System.out.println("You finished in " + (turnCount - 1) + " turns!\n");
        System.out.println("Game over");
    }

    public static int rollDice() {
        return (int) (Math.random() * 6) + 1;
    }
}