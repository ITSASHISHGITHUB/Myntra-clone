import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}  >
           <Route index path={"/"} element={<ListPage/>} />
           <Route path={"/:id"} element={<DetailPage/>} />
           {/* <Route path={"/ListPage"} element={<DetailPage/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
