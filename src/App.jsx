import RecipeProvider from "./contexts/recipeProvider";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <RecipeProvider>
        <Homepage />
      </RecipeProvider>
    </>
  );
}

export default App;
