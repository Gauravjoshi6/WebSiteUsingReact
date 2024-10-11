import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Home from './pages/Home';
import Nested from './pages/Nested';
import AlabaySite from './components/GamePage.jsx/AlabaySite';
import AlabaySites from './components/GamePage2/AlabaySites';
import MyComponent from "./components/GameInside.jsx/MyComponent";
import AlabayHeritage from "./components/GameInside1/AlabayHeritage";

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
            <Route path=""element={<Home />} />
            <Route path="about" element={<AlabaySite />} />
            <Route path="nested" element={<Nested />} /> {/* Add a specific path for Nested */}
            <Route path="GamePage" element={<AlabaySites/>}/>
            <Route path="about/GamePage" element={<MyComponent/>}/>
            <Route path="about/GamePage1" element={<AlabayHeritage/>}/>
           
            </Route>
    )
);

export default router;