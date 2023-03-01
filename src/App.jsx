import style from "./App.module.css";
import Content from "./component/Contenr/Content";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
