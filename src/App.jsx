import { Provider } from "react-redux"
import { Catalog } from "./Components/Catalog/Catalog"
import { Footer } from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header"
import { Navigation } from "./Components/Navigation/Navigation";
import { store } from "./Store/index";

export const App = () => {

  return (
<Provider store={store}>
    <Header/>
<main>
    <Navigation/>  
    <Catalog/>
</main>
    <Footer/>
</Provider>
)
}

