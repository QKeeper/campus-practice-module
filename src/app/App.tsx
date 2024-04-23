import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<AppRouter />
				<Footer />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
