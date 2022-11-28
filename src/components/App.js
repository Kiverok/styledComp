import recipes from '../components/recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { RecipeList } from './RecipeList';

export const App = () => {
  return (
    <>
     <RecipeList recipes={recipes} />
     <GlobalStyle />
    </>
  );
};


