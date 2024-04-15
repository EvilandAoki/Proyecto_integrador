import { AuthProvider } from "./context/context/AuthProvider";
import { GameRoutes } from "./routes/GameRoutes";
import { GameProvider } from "./context/gameContext/GameProvider"

function App() {

  return (
    <GameRoutes>
      <AuthProvider />
      <GameProvider />
    </GameRoutes>
  )
}

export default App;