import Header from "components/Header";
import { Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CategoryMovie from "pages/CategoryMovie";
import Loading from "components/Loading";
import Footer from "components/Footer";
import Banner from "components/Banner";
import ScrollButton from "components/ScrollButton";
import MovieMain from "pages/MovieMain";
import ModalSearch from "components/ModalSearch";
import NotFound from "pages/NotFound";

const Main = styled.div`
  background-color: ${(props) =>
    props.ui.darkMode ? props.ui.colorBgDark : props.ui.colorBgLight};
  overflow-y: ${(props) => (props.ui.search ? "hidden" : "auto")};
  ${(props) => (props.ui.search ? "max-height: 100vh" : "min-height: 100vh")};
  scroll-behavior: smooth;
`;
function App() {
  const ui = useSelector((state) => state.ui);

  return (
    <Main ui={ui}>
      {/* <Loading /> */}
      <ModalSearch />
      <Header />
      <Banner />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:category" exact component={CategoryMovie} />
        <Route path="/:category/page=:page" component={CategoryMovie} />
        <Route
          path="/:category/:nameMovie/episode=:episode"
          component={MovieMain}
        />
        <Route path = "*" component={NotFound}/>
      </Switch>
      <ScrollButton />
      <Footer />
    </Main>
  );
}

export default App;
