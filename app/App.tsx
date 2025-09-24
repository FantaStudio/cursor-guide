import { withProviders } from "./providers";
import { Router } from "./routing";
import "./styles/index.css";

export const App = withProviders(AppComponent);

export default App;

function AppComponent() {
    return <Router />;
}
