import { AuthProvider, CarProvider } from "./context";
import { GameRoutes } from "./routes/GameRoutes";


function App() {

  return (
      <AuthProvider>
        <CarProvider>
          <GameRoutes/>
        </CarProvider>
      </ AuthProvider >
  )
}

export default App;