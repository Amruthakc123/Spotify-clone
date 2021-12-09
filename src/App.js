import React, { useContext, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./pages/HeaderComp/Navbar";
import Slider from "./pages/SliderComp/Slider";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./components/AuthComp/Login";
import Signup from "./components/AuthComp/Signup";
import { AuthContextApi } from "./Apis/AuthContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserHome from "./UserComponents/UserHome";

const App = () => {
  let USER = useContext(AuthContextApi);

  return (
    <section id="spotifyMainBlock">
      <article>
        <Router>
          <header>{!USER ? <Navbar /> : ""}</header>
          {/* toastify import */}
          <ToastContainer />
          <main>
            {/* <Slider /> */}
            {/* dynamic routing starts here  */}
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/signup" exact>
                <Signup />
              </Route>

              {/* start authentication routes */}
              <Route path="/UserHome">
                <UserHome />
              </Route>

              {/* end of authentication routes */}

              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
            {/* dynamic routing stops here  */}
          </main>
        </Router>
      </article>
    </section>
  );
};

//     return <UserHome />;
//   };

//   return (
//     <Fragment>
//       {state === null ? <IsAnnonymousTemplate /> : <IsAuthenticatedTemplate />}
//     </Fragment>
//   );
// };

export default App;
