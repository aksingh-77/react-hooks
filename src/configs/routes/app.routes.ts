import AppLayout from "@/layouts/appLayout";
import DashboardPage from "@/modules/dashboard/pages/dashboard.page";
import HookCounter from "@/modules/hooksExamples/useStateEg/hookCounter";
import type { FC } from "react";
import type { RouteObject } from "react-router-dom";

export const Paths = ["/", "/dashboard", "/useState"] as const;

export type Path = (typeof Paths)[number];

const r = (
  Component: FC,
  extra: Path | undefined | "*" | RouteObject[] = undefined
): RouteObject => ({
  path: typeof extra === "string" ? extra : undefined,
  Component,
  children: typeof extra === "object" ? extra : undefined,
});

export const AppRoutes: RouteObject[] = [
  r(AppLayout, [r(DashboardPage, "/"), r(HookCounter, "/useState")]),
];
