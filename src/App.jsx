import "./App.css";
import { Routes, Route, HashRouter, Navigate } from "react-router";
import Header from "./Components/Header";
import Item from "./Components/Item";
import Layout from "./Components/Layout";
import PhotoContextProvider from "./Context/PhotoContext";
import Search from "./Components/Search";

function App() {
  return (
    <PhotoContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="mountain" replace />} />

            <Route path="mountain" element={<Item searchTerm="mountain" />} />
            <Route path="beach" element={<Item searchTerm="beach" />} />
            <Route path="bird" element={<Item searchTerm="bird" />} />
            <Route path="food" element={<Item searchTerm="food" />} />

            <Route path="/search/:searchInput" element={<Search />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;
