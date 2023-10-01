import { Provider } from "react-redux";
import RecipeProvider from "./contexts/recipeProvider";
import Homepage from "./pages/Homepage";

import store from "./redux/store";

function App() {
  return (
    <RecipeProvider>
      <Provider store={store}>
        <Homepage />
      </Provider>
    </RecipeProvider>
  );
}

export default App;
