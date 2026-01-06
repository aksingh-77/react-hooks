import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { Path } from "@/configs/routes/app.routes";
import type { ReactNode } from "react";

const AppSideBar = () => {
  const items: { title: string; url: Path; icon?: ReactNode }[] = [
    {
      title: "useState",
      url: "/useState",
    },
    {
      title: "useEffect",
      url: "/useEffect",
    },
    {
      title: "Calendar",
      url: "/",
    },
    {
      title: "Search",
      url: "/",
    },
    {
      title: "Settings",
      url: "/",
    },
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Hooks</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items?.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSideBar;
