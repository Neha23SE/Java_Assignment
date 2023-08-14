package com.techlab.inheritance4;

import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		 Scanner scanner = new Scanner(System.in);

	        // Create an array of 5 managers
	        ManagerCm[] managers = new ManagerCm[5];

	        for (int i = 0; i < managers.length; i++) {
	            System.out.println("Enter manager " + (i + 1) + "'s name: ");
	            String name = scanner.nextLine();

	            System.out.println("Enter manager " + (i + 1) + "'s address: ");
	            String address = scanner.nextLine();

	            System.out.println("Enter manager " + (i + 1) + "'s employee ID: ");
	            int eid = scanner.nextInt();

	            System.out.println("Enter manager " + (i + 1) + "'s salary: ");
	            double salary = scanner.nextDouble();
	            scanner.nextLine(); // Consume the newline character left by nextDouble()

	            managers[i] = new ManagerCm(name, address, eid, salary);
	        }

	        // Display details of all managers
	        System.out.println("Details of all Managers:");
	        for (ManagerCm manager : managers) {
	            manager.displayManager();
	            System.out.println("--------------------------------------");
	        }

	        scanner.close();
	    }
	}