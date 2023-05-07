import MovieApplication from "./components/MovieApplication";
import AddMovieForm from "./components/addMovieForm";
import Movies from "./components/Movies";
import Movie from "./components/Movie";

function App() {
  return (
    <div> 
      <AddMovieForm />

      <Movies>
        <Movie />
        <Movie />
        <Movie />
      </Movies>
    </div>
  );
}

export default App;
