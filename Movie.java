package com.techlab.movieApi;
import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;



class Movie implements Serializable {
    private static final long serialVersionUID = 1L;
    private int id;
    private String title;
    private int year;

    public Movie(int id, String title, int year) {
        this.id = id;
        this.title = title;
        this.year = year;
    }

 
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", year=" + year +
                '}';
    }
}
class MovieManager {
    private static final String InputFilePath = "data.txt";
    private static final String OutputFilePath = "output_data.txt";

    public void addMovie(Movie movie) {
        List<Movie> movies = readMovies();
        movies.add(movie);
        writeMovies(movies);
    }

    public void clearMovies() {
        writeMovies(new ArrayList<>());
    }

    public List<Movie> getLastMovies() {
        return readMovies();
    }

    public void deleteMovie(int movieId) {
        List<Movie> movies = readMovies();
        movies.removeIf(movie -> movie.getId() == movieId);
        writeMovies(movies);
    }

    public void writeDeserializedData() {
        List<Movie> movies = readMovies();
        try (PrintWriter writer = new PrintWriter(new FileWriter(OutputFilePath))) {
            writer.println("Deserialized Movies:");
            writer.println("+----+---------------------+------+");
            writer.println("| ID | Title               | Year |");
            writer.println("+----+---------------------+------+");

            for (Movie movie : movies) {
                writer.printf("| %2d | %-19s | %4d |\n", movie.getId(), movie.getTitle(), movie.getYear());
            }

            writer.println("+----+---------------------+------+");
            System.out.println("Deserialized data written to " + OutputFilePath);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private List<Movie> readMovies() {
        try (ObjectInputStream inputStream = new ObjectInputStream(new FileInputStream(InputFilePath))) {
            return (List<Movie>) inputStream.readObject();
        } catch (IOException | ClassNotFoundException e) {
            return new ArrayList<>();
        }
    }

    private void writeMovies(List<Movie> movies) {
        try (ObjectOutputStream outputStream = new ObjectOutputStream(new FileOutputStream(InputFilePath))) {
            outputStream.writeObject(movies);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

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

public class Main {
    public static void main(String[] args) {
        MovieController controller = new MovieController();
        controller.start();
    }
}
