import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const GreetingComponent = () => {
  let history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/main-search");
    }, 2000);
  }, []);

  return <h1>HELLO!!</h1>;
};

export default GreetingComponent;
