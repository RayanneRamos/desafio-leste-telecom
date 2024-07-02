import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ListContacts } from "./pages/ListContacts";
import { NewContact } from "./pages/NewContact";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addnewcontact" element={<NewContact />} />
        <Route path="/listcontact" element={<ListContacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
