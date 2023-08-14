package com.techlab.wordGuesserGame;

import java.util.Scanner;
import java.util.Random;

public class WordGuesserGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        String[] words = { "lily", "rose", "lotus", "jasmeen", "marrygold", "daliya" };
        String wordToGuess = words[random.nextInt(words.length)].toLowerCase();
        int wordLength = wordToGuess.length();
        char[] guessedWord = new char[wordLength];

        for (int i = 0; i < wordLength; i++) {
            guessedWord[i] = '_';
        }

        int maxAttempts = 6;
        int attemptsLeft = maxAttempts;
        boolean gameWon = false;

        System.out.println("Welcome to Word Guessing Game!");
        System.out.println("Try to guess the word by guessing its letters one by one.");
        System.out.println("The word consists of " + wordLength + " letters.");

        while (attemptsLeft > 0 && !gameWon) {
            System.out.println("Word: " + new String(guessedWord));
            System.out.println("Attempts left: " + attemptsLeft);
            System.out.println("Enter a letter: ");
            char guessedLetter = Character.toLowerCase(scanner.next().charAt(0));

            boolean letterFound = false;
            for (int i = 0; i < wordLength; i++) {
                if (wordToGuess.charAt(i) == guessedLetter) {
                    guessedWord[i] = Character.toUpperCase(guessedLetter);
                    letterFound = true;
                }
            }

            if (letterFound) {
                if (new String(guessedWord).toLowerCase().equals(wordToGuess)) {
                    gameWon = true;
                }
            } else {
                attemptsLeft--;
            }
        }

        if (gameWon) {
            System.out.println("Congratulations! You guessed the word: " + new String(guessedWord));
        } else {
            System.out.println("Game over! The word was: " + wordToGuess);
        }

        scanner.close();
    }
}



