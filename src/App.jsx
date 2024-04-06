import HomeScreen from "./layouts/HomeScreen";
import { ReferenceKeyboardControls } from "./controls/ReferenceKeyboardControls";
import { CanvasLevel } from "./canvas/CanvasLevel";

function App() {

  return (
    <HomeScreen>
      <ReferenceKeyboardControls >
        <CanvasLevel />
      </ReferenceKeyboardControls >
    </HomeScreen>
  );
}

export default App;