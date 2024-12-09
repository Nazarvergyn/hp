import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";


const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet/>
    </div>
  );
};

export default RootLayout;