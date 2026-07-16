import type { Metadata } from "next";
import { LightExperience } from "./MorsLightExperience";

export const metadata: Metadata = {
  title: "专注光的价值",
  description:
    "原创光影美学，设计、研发、制造、方案、工程一站式照明解决方案。",
};

export default function Home() {
  return <LightExperience />;
}
