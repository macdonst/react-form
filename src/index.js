/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import FormikPage from "./FormikPage";
import FormikPageTakeTwo from "./FormikPageTakeTwo";
import FormikPageNumeroTrois from "./FormikPageNumeroTrois";
import FormikPageFinal from "./FormikPageFinal";
import ReactHookFormPage from "./ReactHookFormPage";
import ReactWithForm from "./ReactWithForm";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="hooks" element={<ReactHookFormPage />} />
      <Route path="formik" element={<FormikPage />} />
      <Route path="formik2" element={<FormikPageTakeTwo />} />
      <Route path="formik3" element={<FormikPageNumeroTrois />} />
      <Route path="formik4" element={<FormikPageFinal />} />
      <Route path="form" element={<ReactWithForm />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
