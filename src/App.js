import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.styles";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
