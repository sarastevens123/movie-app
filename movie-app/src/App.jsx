import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies,setMovies] = useState([]);
  

  useEffect( () => {
    const fetchMovies = async () => {
      setLoading(true)
      try {
        const response = await axios.get('http://localhost:3001/movies/popularMovies');
        const results = response.data;
        setMovies(results);
        setLoading(false);
        console.log(results);
    } catch (error) {
        console.log(error);
        setError(error.message);
    } finally {
        setLoading(false);
    }
    
  }

    fetchMovies();
  }, []);
  

  return (
    <p>app</p>
  );
}




export default App;
