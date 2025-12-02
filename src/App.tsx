import "./App.css";
import { ModeToggle } from "./components/theme/Mode-toggle";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1>Buttons</h1>

      {/* <Button>Click me</Button> */}
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ModeToggle />
        <Button className="text-primary-3">Click me</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
