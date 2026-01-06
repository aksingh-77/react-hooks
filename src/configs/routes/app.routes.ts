import AppLayout from "@/layouts/appLayout";
import SideEffectHook from "@/modules/hooksConcept/lifeCycleHook/sideEffect.hook";
import StateMgmtHooks from "@/modules/hooksConcept/stateMgtHook/state.hook";
import type { FC } from "react";
import type { RouteObject } from "react-router-dom";

export const Paths = ["/", "/useState", "/useEffect"] as const;

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
  r(AppLayout, [r(StateMgmtHooks, "/"), r(SideEffectHook, "/useEffect")]),
];
