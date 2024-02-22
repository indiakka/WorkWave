import RoutesProject from './routes/routes';
import { CartContextProvider } from './context/CartContext'; 
import { FavoriteProvider } from './context/FavoriteContext';


function App() {
  return (
    <FavoriteProvider>
    <CartContextProvider>
    <RoutesProject />
    </CartContextProvider>
    </FavoriteProvider>
  );
}

export default App;