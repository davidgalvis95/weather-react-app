import "./App.css";
import MainSearch from "./components/MainSearch/MainSearch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./hoc/Layout/Layout";
import Weather from "./components/Weather/Weather";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
import GreetingComponent from "./components/GreetingComponent/GreetingComponent"

function App() {

  const searchStatus = useSelector((state) => state.searchStatus);

  const routes = (
    <Switch>
      <Route path="/main-search" component={MainSearch} />
      {/* <Route path="/not-found" component={NotFound} /> */}
      <Route
        path="/current-weather"
        component={Weather}
        // component={NotFound}
        // render={() => {
        //   if (!searchStatus.searchBegan && searchStatus.city === null) {
        //     return <Redirect to="/" />;
        //   } else {
        //     return <Weather/>
        //   }
        // }}
      />
      <Route path="/" component={GreetingComponent}/>
    </Switch>
  );

  return (
    <Router>
      <Layout>{routes}</Layout>
    </Router>
  );
}

export default App;
