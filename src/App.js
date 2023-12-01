import Button from "./components/button";
import Paragraph from './components/paragraph'

function App() {
  return (
    <>
      < Paragraph
        text="Esse texto está sendo renderizado pelo JS."
        color="Red" />

      <Button label="Baixar Anime Grátis"></Button>
    </>
  );
}
export default App;