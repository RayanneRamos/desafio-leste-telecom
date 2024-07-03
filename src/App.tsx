import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ListContacts } from "./pages/ListContacts";
import { NewContact } from "./pages/NewContact";
import { ContactProvider } from "./context/Contact";
import { EditForm } from "./pages/EditForm";

export function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addnewcontact" element={<NewContact />} />
          <Route path="/listcontact" element={<ListContacts />} />
          <Route path="/editform/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  );
}

export default App;
