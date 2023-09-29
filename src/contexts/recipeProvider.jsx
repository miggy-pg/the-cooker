import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export default function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchRecipes = async () => {
        const request = await fetch("http://localhost:8000/recipe");
        await request.json().then((data) => setRecipes(data));
      };
      fetchRecipes();
    } catch (err) {
      setError(err);
      console.log("error: ", err);
    } finally {
      setIsLoading(false);
      console.log("finally");
    }
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, isLoading, error }}>
      {children}
    </RecipeContext.Provider>
  );
}
