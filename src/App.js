
import ChangePage from "./ChangePage";
import AuthProvider from "./context/AuthContext";
import SiteProvider from "./context/SiteContext";
import Home from "./Home";

function App() {
  

  return (
    <SiteProvider>
      <AuthProvider>
        <Home />
        <ChangePage/>>
        </AuthProvider>
    </SiteProvider>
  );
}

export default App;
