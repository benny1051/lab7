import React, { useRef, useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([]); // en variabel som kan ändras genom setMovies.
  const inputRef = useRef();
  const ratingRef = useRef();

  function addItem() {
    //event som händer när man klicka i input fältet.

    if (inputRef.current.value !== "" && ratingRef.current.value !== "") {
      const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1; // Om id finns. lägg nästa på +1. Annars lägg id som 1.

      setMovies([
        ...movies, // Lägg till en ny movie i vår array med nedanstående värde.
        {
          id: newId,
          title: inputRef.current.value, // hämta nuvarande värde i vårt inputfield
          rating: ratingRef.current.value,
        },
      ]);

      inputRef.current.value = ""; // nollställ textfältet
      ratingRef.current.value = "";
    } else {
      window.alert("Fyll i båda fälten");
    }
  }

  function deleteItem(id) {
    setMovies(movies.filter((item) => item.id !== id)); // Ta bort den du klickade på ur array med index som kommer med.
  } //filter betyder att de ska finnas kvar om de inte motsvarar villkoret.

  return (
    <div>
      <fieldset>
        
        <div className="form-group">
          <h5>Titel:</h5>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={inputRef}
            placeholder="Titel här..."
          />
        </div>

        <div className="form-group">
          <h5>Betyg:</h5>
          <select ref={ratingRef} className="form-control">
            <option value="">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="form-group mt-2">
          <button id="save-movie" className="btn btn-success" onClick={addItem}>
            Spara film
          </button>
        </div>
      </fieldset>

      {/*       <input
        className="form-control"
        placeholder="Add new movies here..."
        ref={inputRef}
      />
      <input
        className="form-control"
        placeholder="Add Rating here..."
        ref={ratingRef}
      /> */}
      <ul className="list-group">
        {movies.map((movie) => (
          <Movie key={movie.id} item={movie} deleteItem={deleteItem} />
          //för varje movie. Mappa ut till en komponent som innehåller Id, title och en metod för att delete.
          //I movie finns ett list-item som med sakerna som finns i movies array.
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
