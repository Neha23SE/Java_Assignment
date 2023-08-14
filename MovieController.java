package com.techlab.movieApi;
import java.util.List;  
import java.util.Scanner;
class MovieController {
    private MovieManager manager;
    private Scanner scanner;

    public MovieController() {
        this.manager = new MovieManager();
        this.scanner = new Scanner(System.in);
    }

    public void start() {
        displayMenu();
    }

    private void displayMenu() {
        boolean exit = false;

        while (!exit) {
            System.out.println("Movie Management Menu:");
            System.out.println("1. Add Movie");
            System.out.println("2. Clear Movies");
            System.out.println("3. List of Movies");
            System.out.println("4. Delete Movie");
            System.out.println("5. Exit");
            System.out.println("6. Write Deserialized Data");
            System.out.print("Select an option: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); 

            switch (choice) {
                case 1:
                    addMovie();
                    break;
                case 2:
                    clearMovies();
                    break;
                case 3:
                    getLastMovies();
                    break;
                case 4:
                    deleteMovie();
                    break;
                case 5:
                    exit = true;
                    break;
                case 6:
                    writeDeserializedData();
                    break;
                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }

        scanner.close();
    }

    private void addMovie() {
        System.out.print("Enter movie ID: ");
        int id = scanner.nextInt();
        scanner.nextLine(); 

        System.out.print("Enter movie title: ");
        String title = scanner.nextLine();

        System.out.print("Enter movie year: ");
        int year = scanner.nextInt();
        scanner.nextLine(); 

        Movie movie = new Movie(id, title, year);
        manager.addMovie(movie);

        System.out.println("Movie added successfully.");
    }

    private void clearMovies() {
        manager.clearMovies();
        System.out.println("All movies cleared.");
    }
    private void writeDeserializedData() {
        manager.writeDeserializedData();
    }

    private void getLastMovies() {
    	System.out.println(" ");
        System.out.println("List of Movies:");
        System.out.println("+-----+--------------------------------+------+");
        System.out.println("| ID  | Title                          | Year |");
        System.out.println("+-----+--------------------------------+------+");

        List<Movie> movies = manager.getLastMovies();
        for (Movie movie : movies) {
            System.out.printf("| %2d | %-30s | %4d |\n", movie.getId(), movie.getTitle(), movie.getYear());
        }

        System.out.println("+-----+--------------------------------+------+");
        System.out.println(" ");
    }


    private void deleteMovie() {
        System.out.print("Enter movie ID to delete: ");
        int id = scanner.nextInt();
        scanner.nextLine(); 

        manager.deleteMovie(id);
        System.out.println("Movie deleted successfully.");
    }
}



