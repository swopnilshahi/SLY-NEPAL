import Header from "../components/Header";
import Footer from '../components/Footer'

import { Outlet } from "react-router-dom"
export default function MainLayout() {
  return (
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <Header />
        <main class="flex flex-col flex-1">
            <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  );
}
