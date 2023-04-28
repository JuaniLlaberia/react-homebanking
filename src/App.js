import ProtectedRoutes from "./components/ProtectedRoutes";
import Movements from "./pages/homeBanking/Movements";
import Budget from "./pages/homeBanking/Budget";
import ExchangeMoney from "./pages/homeBanking/ExchangeMoney";
import TransferMoney from "./pages/homeBanking/TransferMoney";
import Settings from "./pages/homeBanking/Settings";
import LoginForm from "./pages/login/LoginForm";
import SignUp from "./pages/signUp/SignUp";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<HomePage />}  />
      <Route path="/signup" element={<SignUp />}  />
      <Route path="/login" element={<LoginForm />} />
      <Route element={<ProtectedRoutes/>}>
        <Route path="/movements" element={<Movements />}/>
        <Route path="/exchange" element={<ExchangeMoney />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/transfer" element={<TransferMoney />}/>
        <Route path="/budget" element={<Budget />}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
