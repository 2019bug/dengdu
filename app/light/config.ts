export const CONCEPTS = {
  设计: "原创光影美学，打造专属灯光视觉",
  研发: "自研核心技术，夯实产品硬核实力",
  制造: "精益自主智造，严守每一件灯具品质",
  方案: "定制场景方案，一站式灯光整体策划",
  工程: "全周期统筹，全程护航项目落地交付",
} as const;

export type Concept = keyof typeof CONCEPTS;

export type LightingSettings = {
  enabled: boolean;
  angle: number;
  brightness: number;
  color: string;
};

export const COLOR_PRESETS = ["#ffb36b", "#ffd9a3", "#8fdcff", "#c79cff", "#ff5f7f"] as const;

export const INITIAL_LIGHT: LightingSettings = {
  enabled: true,
  angle: 42,
  brightness: 1800,
  color: "#ffb36b",
};
