import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "../appSideBar/appSideBar";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSideBar />
        <div className="flex flex-col p-1.5">
          <div className="flex align-middle gap-1">
            <SidebarTrigger />
            <Separator orientation="vertical" />
            <h1>Document</h1>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Home;
