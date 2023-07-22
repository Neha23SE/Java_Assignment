package com.techlab.inheritance4;

public class PersonCm {
	public String name;
    public String address;

    public PersonCm(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public void displayPerson() {
        System.out.println("NAME: " + name);
        System.out.println("ADDRESS: " + address);
    }
}