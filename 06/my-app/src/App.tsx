import { Header } from "./header/Header.js";
import { Main } from "./main/Main.js";
import { Footer } from "./footer/Footer.tsx";
import "./App.css";

function App(): React.JSX.Element {
  console.log("App");
  return (
    <div id="app">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
