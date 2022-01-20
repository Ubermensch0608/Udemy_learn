import { Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Product Component
// our-domain.com/product-detail/a-book
