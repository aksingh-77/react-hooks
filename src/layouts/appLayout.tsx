import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "@/modules/appSideBar/appSideBar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSideBar />
        <div className="flex flex-col p-1.5">
          <div className="flex align-middle gap-1">
            <SidebarTrigger />
            <Separator orientation="vertical" />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
