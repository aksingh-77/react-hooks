import AppLayout from "@/layouts/appLayout";
// import ContextHookPage from "@/modules/contextHook/contextHook.page";
import SideEffectHook from "@/modules/hooksConcept/lifeCycleHook/sideEffect.hook";
import StateMgmtHooks from "@/modules/hooksConcept/stateMgtHook/state.hook";
import ReducerHookPage from "@/modules/reducerHook/reducerHook.page";
import SimpleReducerHook from "@/modules/reducerHook/simpleReducerHook.page";
import { ContextHookPage } from "@/modules/selfContextHooks/contextHook.page";
import type { FC } from "react";
import type { RouteObject } from "react-router-dom";

export const Paths = [
  "/",
  "/useState",
  "/useEffect",
  "/useContext",
  "/useReducer",
  "/simpleReducer",
] as const;

export type Path = (typeof Paths)[number];

const r = (
  Component: FC,
  extra: Path | undefined | "*" | RouteObject[] = undefined,
): RouteObject => ({
  path: typeof extra === "string" ? extra : undefined,
  Component,
  children: typeof extra === "object" ? extra : undefined,
});

export const AppRoutes: RouteObject[] = [
  r(AppLayout, [
    r(StateMgmtHooks, "/"),
    r(SideEffectHook, "/useEffect"),
    r(ContextHookPage, "/useContext"),
    r(ReducerHookPage, "/useReducer"),
    r(SimpleReducerHook, "/simpleReducer"),
  ]),
];
