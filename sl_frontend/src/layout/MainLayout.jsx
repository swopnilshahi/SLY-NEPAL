import Header from "../components/Header";
import Footer from '../components/Footer'

import { Outlet } from "react-router-dom"
export default function MainLayout() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root ">
      <div className="layout-container flex h-full grow flex-col ">
        <Header />
        <main className="flex flex-col flex-1 overflow-x-hidden">
            <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  );
}
