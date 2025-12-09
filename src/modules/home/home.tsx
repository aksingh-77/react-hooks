import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "../appSideBar/appSideBar";

const Home = () => {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSideBar />
        <main>
          <SidebarTrigger />
        </main>
        <div className="flex flex-col">
          <div className="navBar">skjdk</div>
          <div className="content">kjsdf</div>
          <div className="footer">ksjdfkjs</div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Home;
