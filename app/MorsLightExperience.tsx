"use client";

import dynamic from "next/dynamic";
import { LightLoading } from "./light/MorsPageSurface";

const LightCanvas = dynamic(
  () => import("./light/MorsLightCanvas").then((module) => module.LightCanvas),
  {
    loading: LightLoading,
    ssr: false,
  },
);

export function LightExperience() {
  return <LightCanvas />;
}
