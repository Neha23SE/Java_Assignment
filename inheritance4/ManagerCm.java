package com.techlab.inheritance4;

public class ManagerCm extends EmployeeCm {
    public double salary;

    public ManagerCm(String name, String address, int eid, double salary) {
        super(name, address, eid);
        this.salary = salary;
    }

    public void displayManager() {
        displayEmployee();
        System.out.println("SALARY: " + salary);
    }
}