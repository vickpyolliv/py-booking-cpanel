import { toast } from "sonner";
import "./App.css";
import GroupForm from "./components/groupForm";
import { ModeToggle } from "./components/theme/Mode-toggle";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <h1>Buttons</h1>
      <Toaster position={"top-center"} />

      {/* <Button>Click me</Button> */}
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ModeToggle />
        <Button className="text-primary-3">Click me</Button>
        <Input />
        <div className="my-5">
          <GroupForm
            label={"label"}
            labelStyle={""}
            inputStyle={""}
            className={""}
            type={"number"}
          />
        </div>
        <Button onClick={() => toast("Event has been created.")}>click</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
