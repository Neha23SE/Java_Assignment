package com.techlab.waterBillingApp;

import java.util.Scanner;

public class WaterBilling {
	public static void main(String args[])
	{
		int meter_charge= 75;
		int charge;
		int totalBill=0;
		Scanner scanner=new Scanner(System.in);
		System.out.println("Enter unit consumed: ");
		int unitConsumed=scanner.nextInt();
		if(unitConsumed>100)
		{
			if(unitConsumed>250)
			{
				charge= unitConsumed * 10;
			}
			else
			{
				charge= unitConsumed * 20;
			}
		}
		else
		{
			charge= unitConsumed * 5;
		}
		
		totalBill = charge+ meter_charge;
		System.out.println("Total Water Bill"+ totalBill);
		System.out.println(totalBill);
		
	}

}
