<<<<<<< HEAD
package com.techlab.movieApi;
=======
package movieApi;
>>>>>>> 80f7a70a4b7679b47aef657209cfd44c25ada0fb
import java.io.*;
import java.util.ArrayList;
import java.util.List;

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
