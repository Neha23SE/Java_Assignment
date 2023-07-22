package com.techlab.inheritance4;

public class EmployeeCm extends PersonCm {
    public int eid;

    public EmployeeCm(String name, String address, int eid) {
        super(name, address);
        this.eid = eid;
    }

    public void displayEmployee() {
        displayPerson();
        System.out.println("EMPLOYEE ID: " + eid);
    }
}