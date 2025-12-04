import { toast } from "sonner";
import "./App.css";
import GroupForm from "./components/groupForm";
import { ModeToggle } from "./components/theme/Mode-toggle";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";
import { Icon } from "@iconify/react";

function App() {
  return (
    <>
      <h1>Buttons</h1>
      <Toaster position={"top-center"} />

      {/* <Button>Click me</Button> */}
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ModeToggle />

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
        <div className="flex items-center gap-5 flex-wrap">
          <Button onClick={() => toast("Event has been created.")}>
            click
          </Button>
          <Button variant={"blueGoast"}>click</Button>
          <Button variant={"warningGoast"}>click</Button>
          <Button variant={"primaryGoast"}>click</Button>
          <Button variant={"errorGoast"}>click</Button>
          <Button variant={"successGoast"}>click</Button>
          <Button variant={"purpleGoast"}>click</Button>
          <Button variant={"blue"}>click</Button>
          <Button variant={"warning"}>click</Button>
          <Button>click</Button>
          <Button variant={"error"}>click</Button>
          <Button variant={"success"}>click</Button>
          <Button variant={"purple"}>click</Button>
          <Button variant={"neutral"}>click</Button>

          <Button variant={"blueSecondary"}>click</Button>
          <Button variant={"warningSecondary"}>click</Button>
          <Button variant={"primarySecondary"}>click</Button>
          <Button variant={"errorSecondary"}>click</Button>
          <Button variant={"successSecondary"}>click</Button>
          <Button variant={"purpleSecondary"}>click</Button>
          <Button variant={"neutralSecondary"}>click</Button>
          <Icon
            icon="material-symbols-light:10k-sharp"
            width="24"
            height="24"
            className="text-primary-2"
          />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
