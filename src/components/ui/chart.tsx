// "use client";

// import * as React from "react";
// import * as RechartsPrimitive from "recharts";

// import { cn } from "@/lib/utils";

// // Format: { THEME_NAME: CSS_SELECTOR }
// const THEMES = { light: "", dark: ".dark" } as const;

// export type ChartConfig = {
//   [k in string]: {
//     label?: React.ReactNode;
//     icon?: React.ComponentType;
//   } & (
//     | { color?: string; theme?: never }
//     | { color?: never; theme: Record<keyof typeof THEMES, string> }
//   );
// };

// type ChartContextProps = {
//   config: ChartConfig;
// };

// const ChartContext = React.createContext<ChartContextProps | null>(null);

// function useChart() {
//   const context = React.useContext(ChartContext);

//   if (!context) {
//     throw new Error("useChart must be used within a <ChartContainer />");
//   }

//   return context;
// }

// /* ------------------------- ChartContainer ------------------------ */

// function ChartContainer({
//   id,
//   className,
//   children,
//   config,
//   ...props
// }: React.ComponentProps<"div"> & {
//   config: ChartConfig;
//   children: React.ReactNode;
// }) {
//   const uniqueId = React.useId();
//   const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

//   return (
//     <ChartContext.Provider value={{ config }}>
//       <div
//         data-slot="chart"
//         data-chart={chartId}
//         className={cn(
//           "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
//           className
//         )}
//         {...props}
//       >
//         <ChartStyle id={chartId} config={config} />
//         <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
//       </div>
//     </ChartContext.Provider>
//   );
// }

// /* --------------------------- ChartStyle -------------------------- */

// const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
//   const colorConfig = Object.entries(config).filter(([, cfg]) => cfg.theme || cfg.color);

//   if (!colorConfig.length) return null;

//   const css = Object.entries(THEMES)
//     .map(([theme, prefix]) => {
//       const inner = colorConfig
//         .map(([key, itemConfig]) => {
//           const color =
//             (itemConfig as any).theme?.[theme as string] ??
//             (itemConfig as { color?: string }).color;
//           return color ? `  --color-${key}: ${color};` : null;
//         })
//         .filter(Boolean)
//         .join("\n");

//       return `${prefix} [data-chart=${id}] {\n${inner}\n}`;
//     })
//     .join("\n");

//   return <style dangerouslySetInnerHTML={{ __html: css }} />;
// };

// /* -------------------- Local (friendly) Recharts types ------------------- */

// /**
//  * Minimal shape we expect from a tooltip/legend payload item.
//  * Recharts payload objects are sometimes nested — we keep this permissive.
//  */
// type TooltipItem = {
//   name?: string;
//   dataKey?: string;
//   value?: string | number | null;
//   color?: string;
//   payload?: Record<string, any>;
//   // allow any additional fields
//   [k: string]: any;
// };

// type LegendPayloadItem = {
//   value?: any;
//   color?: string;
//   dataKey?: string;
//   payload?: Record<string, any>;
//   name?: string;
//   [k: string]: any;
// };

// /* ------------------------ ChartTooltipContent ----------------------- */

// /**
//  * Props we accept for the custom tooltip UI.
//  * Note: We don't rely on Recharts' internal types to avoid mismatches.
//  */
// type ChartTooltipContentProps = {
//   active?: boolean;
//   payload?: TooltipItem[] | undefined;
//   label?: string | number | undefined;
//   className?: string;
//   indicator?: "line" | "dot" | "dashed";
//   hideLabel?: boolean;
//   hideIndicator?: boolean;
//   labelFormatter?: (value: any, payload?: TooltipItem[]) => React.ReactNode;
//   labelClassName?: string;
//   formatter?: (
//     value: any,
//     name?: string,
//     item?: TooltipItem,
//     index?: number,
//     payloadObj?: Record<string, any> | undefined
//   ) => React.ReactNode;
//   color?: string;
//   nameKey?: string;
//   labelKey?: string;
// };

// const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({
//   active,
//   payload,
//   className,
//   indicator = "dot",
//   hideLabel = false,
//   hideIndicator = false,
//   label,
//   labelFormatter,
//   labelClassName,
//   formatter,
//   color,
//   nameKey,
//   labelKey,
// }) => {
//   const { config } = useChart();

//   const tooltipLabel = React.useMemo(() => {
//     if (hideLabel || !payload || payload.length === 0) return null;

//     const item = payload[0];
//     const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
//     const itemConfig = getPayloadConfigFromPayload(config, item, key);
//     const value =
//       !labelKey && typeof label === "string"
//         ? (config[label as keyof typeof config]?.label ?? label)
//         : itemConfig?.label;

//     if (labelFormatter) {
//       return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
//     }

//     if (!value) return null;

//     return <div className={cn("font-medium", labelClassName)}>{value}</div>;
//   }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

//   if (!active || !payload || payload.length === 0) return null;

//   const nestLabel = payload.length === 1 && indicator !== "dot";

//   return (
//     <div className={cn("border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl", className)}>
//       {!nestLabel ? tooltipLabel : null}
//       <div className="grid gap-1.5">
//         {payload.map((item: TooltipItem, index: number) => {
//           const key = `${nameKey || item.name || item.dataKey || "value"}`;
//           const itemConfig = getPayloadConfigFromPayload(config, item, key);
//           const indicatorColor = color || item.payload?.fill || item.color;

//           return (
//             <div
//               key={index}
//               className={cn(
//                 "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
//                 indicator === "dot" && "items-center"
//               )}
//             >
//               {formatter && item?.value !== undefined && item.name ? (
//                 formatter(item.value, item.name, item, index, item.payload)
//               ) : (
//                 <>
//                   {itemConfig?.icon ? (
//                     <itemConfig.icon />
//                   ) : (
//                     !hideIndicator && (
//                       <div
//                         className={cn("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
//                           "h-2.5 w-2.5": indicator === "dot",
//                           "w-1": indicator === "line",
//                           "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
//                           "my-0.5": nestLabel && indicator === "dashed",
//                         })}
//                         style={
//                           {
//                             "--color-bg": indicatorColor,
//                             "--color-border": indicatorColor,
//                           } as React.CSSProperties
//                         }
//                       />
//                     )
//                   )}
//                   <div className={cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center")}>
//                     <div className="grid gap-1.5">
//                       {nestLabel ? tooltipLabel : null}
//                       <span className="text-muted-foreground">{itemConfig?.label ?? item.name}</span>
//                     </div>
//                     {item.value !== undefined && item.value !== null && (
//                       <span className="text-foreground font-mono font-medium tabular-nums">
//                         {typeof item.value === "number" ? item.value.toLocaleString() : String(item.value)}
//                       </span>
//                     )}
//                   </div>
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// /* ----------------------- ChartLegendContent ----------------------- */

// /**
//  * We accept a simple payload shape. Recharts passes an array of objects to Legend content.
//  * We avoid intersecting React's intrinsic div props with Recharts' LegendProps to prevent
//  * type collisions (the TS errors you saw).
//  */
// function ChartLegendContent({
//   className,
//   hideIcon = false,
//   payload,
//   verticalAlign = "bottom",
//   nameKey,
// }: {
//   className?: string;
//   hideIcon?: boolean;
//   payload?: LegendPayloadItem[] | undefined;
//   verticalAlign?: "top" | "bottom";
//   nameKey?: string;
// }) {
//   const { config } = useChart();

//   if (!payload || payload.length === 0) return null;

//   return (
//     <div className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}>
//       {payload.map((item: LegendPayloadItem, idx: number) => {
//         const keyName = `${nameKey || item.dataKey || "value"}`;
//         const itemConfig = getPayloadConfigFromPayload(config, item as any, keyName);

//         return (
//           <div key={idx} className={cn("[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3")}>
//             {itemConfig?.icon && !hideIcon ? <itemConfig.icon /> : <div className="h-2 w-2 shrink-0 rounded-[2px]" style={{ backgroundColor: item.color }} />}
//             {itemConfig?.label ?? item.value ?? item.name}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// /* -------------------- Helper: payload -> config mapping -------------------- */

// function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
//   if (typeof payload !== "object" || payload === null) return undefined;

//   const payloadPayload =
//     "payload" in (payload as any) && typeof (payload as any).payload === "object" && (payload as any).payload !== null
//       ? (payload as any).payload
//       : undefined;

//   let configLabelKey: string = key;

//   if (key in (payload as any) && typeof (payload as any)[key] === "string") {
//     configLabelKey = (payload as any)[key] as string;
//   } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key as keyof typeof payloadPayload] === "string") {
//     configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
//   }

//   return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
// }

// /* ---------------------------- Exports ----------------------------- */

// const ChartTooltip = RechartsPrimitive.Tooltip;
// const ChartLegend = RechartsPrimitive.Legend;

// export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
