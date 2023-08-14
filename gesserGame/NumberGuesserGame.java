package com.techlab.gesserGame;

import java.util.Scanner;
import java.util.Random;

public class NumberGuesserGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int maxNumber = 100;
        int minNumber = 1;
        int attempts = 0;
        boolean playAgain = true;

        System.out.println("Welcome to Number Guesser Game!");

        while (playAgain) {
            int targetNumber = random.nextInt(maxNumber - minNumber + 1) + minNumber;
            System.out.println("Guess the number between 1-100.");

            while (true) {
                attempts++;
                int userGuess = scanner.nextInt();

                if (userGuess == targetNumber) {
                    System.out.println("Congratulations! You guessed the correct number " + targetNumber + " in " + attempts + " attempts.");
                    break;
                } else if (userGuess < targetNumber) {
                    System.out.println("Sorry, Too Low");
                } else {
                    System.out.println("Sorry, Too High");
                }
            }

            System.out.println("Do you want to play again? (yes/no)");
            String playAgainChoice = scanner.next().toLowerCase();

            while (!playAgainChoice.equals("yes") && !playAgainChoice.equals("no")) {
                System.out.println("Invalid input. Please enter 'yes' or 'no'.");
                playAgainChoice = scanner.next().toLowerCase();
            }

            if (playAgainChoice.equals("no")) {
                playAgain = false;
            } else {
                attempts = 0;
            }
        }

        System.out.println("Thanks for playing! Goodbye!");
        scanner.close();
    }
}
