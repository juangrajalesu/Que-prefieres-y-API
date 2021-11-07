import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar/Navbar";
import QuestionForm from "./components/Questions/QuestionForm";
import RandomQuestion from "./components/Questions/RandomQuestion";
import QuestionList from "./components/Questions/QuestionList";
import PageNotFound from "./components/NotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

import "bootswatch/dist/superhero/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

ReactDOM.render(
    <BrowserRouter>
      <Navbar />

      <div className="container-fluid px-4 px-lg-5 centered ">
        <Switch>
          <Route exact path="/" component={RandomQuestion} />
          <Route path="/list" component={QuestionList} />
          <Route path="/new-question" component={QuestionForm} />
          <Route path="/update/:id" component={QuestionForm} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  ,
  document.getElementById("root")
);


