import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export default function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tag, setTag] = useState("");

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

  const handleSelectedTag = (tag) => {
    console.log("selectedTag: ", tag);
    setTag(tag);
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, isLoading, error, tag, handleSelectedTag }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
