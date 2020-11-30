import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllProducts from "./components/AllProducts.js";
import About from "./components/About.js";
import Info from "./components/Info";
// import NavBar from "./components/NavBar.js";
import OneProduct from "./components/OneProduct.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div>
    <Router>
      <div>
        <header class="text-gray-700 body-font add-shadow">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to="/">
            <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">PJS</span>
            </div>
            </Link>
            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <ul class="inline-flex">
              
                <li class="p-2">
                  <Link to="/product">Planes</Link>
                </li>
                <li class="p-2">
                  <Link to="/about">About</Link>
                </li>
                <li class="p-2">
                  <Link to="/info">Info</Link>
                </li>
              </ul>
            </nav>
            <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
              Button
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>

        
        <Switch>
          <Route component={OneProduct} path="/product/:slug" />
          <Route component={AllProducts} path="/product" exact />
          <Route component={About} path="/about" />
          <Route component={Info} path="/info" />
          <Route component={Home} path="/" />
        </Switch>
      </div>
    </Router>
    </div>
  );
}
export default App;