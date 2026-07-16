import type { CSSProperties, Ref } from "react";
import {
  COLOR_PRESETS,
  CONCEPTS,
  INITIAL_LIGHT,
  type Concept,
  type LightingSettings,
} from "./config";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type PageSurfaceProps = {
  concept: Concept | null;
  lighting: LightingSettings;
  onConceptChange: (concept: Concept) => void;
  onLightingChange: (patch: Partial<LightingSettings>) => void;
  onReset: () => void;
  preview?: boolean;
  sourceRef?: Ref<HTMLDivElement>;
};

export function PageSurface({
  concept,
  lighting,
  onConceptChange,
  onLightingChange,
  onReset,
  preview = false,
  sourceRef,
}: PageSurfaceProps) {
  const titleId = preview ? "light-title-preview" : "light-title";
  const tabIndex = preview ? -1 : undefined;

  return (
    <div
      ref={sourceRef}
      className="page-source"
      style={{ "--lamp-color": lighting.color } as CSSProperties}
    >
      <header className="page-header">
        <div className="page-brand">
          <span>灯都互联</span>
          <span className="page-brand-suffix">ZHONGSHAN</span>
        </div>
        <div className="page-status"><span /> LIGHTING R&D CENTER</div>
      </header>

      <div className="page-main">
        <section className="page-copy" aria-labelledby={titleId}>
          <p className="page-kicker">01 / ORIGINAL MANUFACTURER</p>
          <h1 id={titleId}>
            我们的使命，<br />
            专注于光的<span>价值</span>
          </h1>
          <p className="page-subtitle">
            Our Mission , Devoted to Unlocking the Value of Light .
          </p>

          <div className="concepts" data-interactive>
            <div className="concept-list" role="list" aria-label="业务能力模块">
              {(Object.keys(CONCEPTS) as Concept[]).map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={concept === item ? "is-active" : ""}
                  onClick={() => onConceptChange(item)}
                  aria-pressed={concept === item}
                  tabIndex={tabIndex}
                >
                  <span>0{index + 1}</span>{item}
                </button>
              ))}
            </div>
            <p className="concept-description">{concept ? CONCEPTS[concept] : <span style={{opacity: 0.5}}>点击查看详情</span>}</p>
          </div>
        </section>

        <aside className="light-controls" data-interactive aria-label="Spotlight controls">
          <div className="control-heading">
            <div>
              <p>LIGHT CONTROL</p>
              <span>PHYSICAL SPOT / 01</span>
            </div>
            <button
              type="button"
              className={`power-toggle${lighting.enabled ? " is-on" : ""}`}
              onClick={() => onLightingChange({ enabled: !lighting.enabled })}
              aria-pressed={lighting.enabled}
              aria-label={lighting.enabled ? "Turn spotlight off" : "Turn spotlight on"}
              tabIndex={tabIndex}
            >
              <span />{lighting.enabled ? "ON" : "OFF"}
            </button>
          </div>

          <label className="control-row">
            <span className="control-label"><b>BEAM</b><output>{lighting.angle}°</output></span>
            <input
              type="range"
              min="16"
              max="58"
              step="1"
              value={lighting.angle}
              onInput={(event) => onLightingChange({ angle: Number(event.currentTarget.value) })}
              aria-label="Spotlight beam angle"
              tabIndex={tabIndex}
            />
          </label>

          <label className="control-row">
            <span className="control-label"><b>BRIGHTNESS</b><output>{lighting.brightness} lm</output></span>
            <input
              type="range"
              min="300"
              max="2600"
              step="50"
              value={lighting.brightness}
              onInput={(event) => onLightingChange({ brightness: Number(event.currentTarget.value) })}
              aria-label="Spotlight brightness"
              tabIndex={tabIndex}
            />
          </label>

          <div className="control-row color-control">
            <span className="control-label"><b>COLOR</b><output>{lighting.color.toUpperCase()}</output></span>
            <div className="color-options">
              {COLOR_PRESETS.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={lighting.color === color ? "is-active" : ""}
                  style={{ "--swatch": color } as CSSProperties}
                  onClick={() => onLightingChange({ color })}
                  aria-label={`Set light color to ${color}`}
                  aria-pressed={lighting.color === color}
                  tabIndex={tabIndex}
                />
              ))}
              <label className="custom-color" aria-label="Choose a custom light color">
                <input
                  type="color"
                  value={lighting.color}
                  onInput={(event) => onLightingChange({ color: event.currentTarget.value })}
                  tabIndex={tabIndex}
                />
                <span>+</span>
              </label>
            </div>
          </div>

          <button type="button" className="reset-light" onClick={onReset} tabIndex={tabIndex}>
            RESET LIGHT <span>↗</span>
          </button>
        </aside>
      </div>

      <footer className="page-footer">
        <p>设计 / 研发 / 制造 / 方案 / 工程</p>
        <div className="drag-instruction">
          <span className="drag-orbit" aria-hidden="true"><i /></span>
          <div><b>灯都 · 四季里 · 秋广场214</b><span>+86 131-1964-3888</span></div>
        </div>
        <p>深圳市云隙照明科技有限公司</p>
      </footer>
    </div>
  );
}

const ignoreConceptChange = () => {};
const ignoreLightingChange = () => {};
const ignoreReset = () => {};

export function LightPreview({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className={`scene-preview${hidden ? " is-hidden" : ""}`} aria-hidden="true" inert>
      <PageSurface
        concept={null}
        lighting={INITIAL_LIGHT}
        onConceptChange={ignoreConceptChange}
        onLightingChange={ignoreLightingChange}
        onReset={ignoreReset}
        preview
      />
    </div>
  );
}

export function LightLoading() {
  return (
    <main className="experience-shell" aria-label="灯都互联交互式灯光展示">
      <LightPreview />
    </main>
  );
}
