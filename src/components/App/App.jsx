import { Route, Routes } from "react-router-dom"
import { Guarantees } from "../../Pages/Guarantees/Guarantees"
import { MainPage } from '../../Pages/MainPage/MainPage'
import { Tehnology } from "../../Pages/Tehnology/Tehnology"
import { Chart } from "../../Pages/Сhart/Chart"
import { Аbout } from "../../Pages/Аbout/Аbout"
import { Contacts } from "../../Pages/Contacts/Contacts"

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/sagirov" element={<MainPage />} />
        <Route path="/tehnology" element={<Tehnology />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/guarantees" element={<Guarantees />} />
        <Route path="/about" element={<Аbout />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}
