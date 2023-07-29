package com.techlab.TreasureIslandGame;

import java.util.Scanner;

public class TreasureIslandGame {
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Welcome to Treasure Island. Your mission is to find the treasure.");
        crossroad();
    }

    private static void crossroad() {
        System.out.println("You are at a crossroad. You can go right or left.");
        String choice = getInput().toLowerCase();

        if (choice.equals("right")) {
            gameOver("You fell into a hole.");
        } else if (choice.equals("left")) {
            lake();
        } else {
            gameOver("You chose an invalid option.");
        }
    }

    private static void lake() {
        System.out.println("You arrived at a lake. Do you want to swim or wait for a boat?");
        String choice = getInput().toLowerCase();

        if (choice.equals("swim")) {
            gameOver("You were attacked by trout.");
        } else if (choice.equals("wait")) {
            System.out.println("You reached the other side of the lake safely.");
            chooseDoor();
        } else {
            gameOver("You chose an invalid option.");
        }
    }

    private static void chooseDoor() {
        System.out.println("You find three doors ahead: Red, Blue, and Yellow. Which door will you choose?");
        String choice = getInput().toLowerCase();

        switch (choice) {
            case "red":
                gameOver("You were burned by fire.");
                break;
            case "blue":
                gameOver("You were eaten by beasts.");
                break;
            case "yellow":
                System.out.println("Congratulations! You Win!");
                break;
            default:
                gameOver("You chose an invalid option.");
        }
    }

    private static String getInput() {
        return scanner.nextLine();
    }

    private static void gameOver(String message) {
        System.out.println(message + " Game Over.");
        scanner.close();
        System.exit(0);
    }
}

