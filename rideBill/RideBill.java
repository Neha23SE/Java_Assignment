package com.techlab.rideBill;


import java.util.Scanner;

public class RideBill {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your height: ");
        int Height = scanner.nextInt();
        String Photo;
        int Bill = 0;

        if (Height > 120) {
            System.out.println("Can ride");
            System.out.println("Age < 12, Charges = $5");
            System.out.println("Age > 12 & Age < 18, Charges = $7");
            System.out.println("Age == 18 | Age > 18, Charges = $12");
            System.out.println("Age > 45 & Age < 55, Charges = $0");
            System.out.println("Enter Your age: ");
            int Age = scanner.nextInt();

            if (Age < 12) {
                Bill = Bill + 5;
                System.out.println("Want photos? say (Yes/No)");
                Photo = scanner.next().toLowerCase();
                if (Photo.equals("yes")) {
                    Bill = Bill + 3;
                System.out.println("The total bill is $" + Bill);
            }
                else {
                    System.out.println("The total bill is $" + Bill);
                }
            }

            if (Age > 12 && Age < 18) {
                Bill = Bill + 7;
                System.out.println("Want photos? say Yes/No");
                Photo = scanner.next().toLowerCase();
                if (Photo.equals("yes")) {
                    Bill = Bill + 3;
                    System.out.println("The total bill is $" + Bill);
                } 
                else {
                    System.out.println("The total bill is $" + Bill);
                }
            }

            if (Age == 18 || Age > 18) {
                Bill = Bill + 12;
                System.out.println("Want photos? say Yes/No");
                Photo = scanner.next().toLowerCase();
                if (Photo.equals("yes")) {
                    Bill = Bill + 3;
                System.out.println("The total bill is $" + Bill);
                } 
                else {
                    System.out.println("The total bill is $" + Bill);
                }

            }

            if (Age > 45 && Age < 55) {
                System.out.println("Want photos? say Yes/No");
                Photo = scanner.next().toLowerCase();
                if (Photo.equals("yes")) {
                    Bill = Bill + 3;
                }
                System.out.println("The total bill is $" + Bill);
            }
        } else {
            System.out.println("Can't Ride");
        }

        scanner.close();
    }
}