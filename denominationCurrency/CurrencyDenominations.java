package com.techlab.denominationCurrency;

import java.util.Scanner;

public class CurrencyDenominations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter withdrawal amount: ");
        int amount = scanner.nextInt();

        if (amount > 50000) {
            System.out.println("Amount exceeds withdrawal limit of 50000");
        } else if (amount % 100 != 0) {
            System.out.println("Amount should be in multiples of 100");
        } else {
            int remainingAmount = amount;

            int twoThousandCount = remainingAmount / 2000;
            remainingAmount %= 2000;

            int fiveHundredCount = remainingAmount / 500;
            remainingAmount %= 500;

            int twoHundredCount = remainingAmount / 200;
            remainingAmount %= 200;

            int hundredCount = remainingAmount / 100;

            System.out.println("Two Thousand: " + twoThousandCount);
            System.out.println("Five Hundred: " + fiveHundredCount);
            System.out.println("Two Hundred: " + twoHundredCount);
            System.out.println("Hundred: " + hundredCount);
        }

        scanner.close();
    }
}
