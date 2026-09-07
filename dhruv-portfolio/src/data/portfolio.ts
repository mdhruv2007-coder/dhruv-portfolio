import apexVisual from "@/assets/apex-battery.jpg";
import aeroVisual from "@/assets/aero-airfoil.jpg";

export const profile = {
  name: "M Dhruv",
  role: "AI & Data Science undergraduate",
  school: "REVA University · B.Tech Artificial Intelligence & Data Science · Semester III",
  location: "Bengaluru, India",
  coordinate: "12.9716° N · 77.5946° E",
  status: "Available for ML & Data Science internships",
  email: "mdhruv2007@gmail.com",
  github: "https://github.com/mdhruv2007-coder",
  linkedin: "https://www.linkedin.com/in/dhruv-m-105357400",
  intro:
    "I build low-latency ML surrogate models, real-time API inference engines, and Formula Student engineering systems that are designed to be measured.",
  focus: ["Python 3.11", "PyTorch", "FastAPI", "ONNX Runtime", "OpenFOAM"],
};

export type Metric = {
  label: string;
  value: string;
  unit?: string;
  detail: string;
};

export const metrics: Metric[] = [
  { label: "P99 inference", value: "2.3", unit: "ms", detail: "TCN runtime target" },
  { label: "TR false negatives", value: "0.0", unit: "%", detail: "across 90 positive tests" },
  { label: "SoH model RMSE", value: "1.158", unit: "%", detail: "ONNX-exported TCN" },
  { label: "Aero analysis range", value: "2.0", unit: "M Re", detail: "Reynolds number bound" },
];

export type SkillGroup = {
  signal: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    signal: "LANG",
    title: "Languages & CS",
    items: ["Python 3.11", "C Programming", "Data Structures & Algorithms", "Linear Algebra"],
  },
  {
    signal: "MODEL",
    title: "ML & Deep Learning",
    items: ["PyTorch", "Scikit-learn", "XGBoost", "ONNX Runtime", "Temporal CNNs"],
  },
  {
    signal: "API",
    title: "Backend & Systems",
    items: ["FastAPI", "Pydantic", "Uvicorn", "REST APIs", "CAN Bus Ingestion", "Rate Limiting"],
  },
  {
    signal: "SIM",
    title: "Simulation & Tooling",
    items: ["OpenFOAM (RANS)", "XFoil", "Git", "WSL2 / Conda", "Cloudflare Tunnels", "Vercel"],
  },
];

export const coursework =
  "Coursework: Data Structures & Algorithms, C/Python Programming, Applied Mathematics.";

export type Project = {
  index: string;
  slugTone: "signal" | "data";
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  metrics: { label: string; value: string; note: string }[];
  highlights: string[];
  stack: string[];
  architecture: string[];
  endpoint: string;
  payload: { key: string; value: string; highlight?: boolean }[];
  visual: string;
  visualAlt: string;
};

export const projects: Project[] = [
  {
    index: "01",
    slugTone: "signal",
    title: "APEX.AI",
    subtitle: "Battery Intelligence System · EBISM Backend",
    tags: ["Formula Student EV", "Dual ML API"],
    description:
      "A real-time lithium-ion thermal and health engine built for Formula Student EV battery packs. The backend combines safety classification and state-of-health tracking so telemetry can be evaluated inside a sub-5ms runtime budget.",
    metrics: [
      { label: "P99 latency", value: "~2.3 ms", note: "runtime" },
      { label: "TR false negatives", value: "0.0%", note: "90 tests" },
      { label: "SoH RMSE", value: "1.158%", note: "TCN model" },
    ],
    highlights: [
      "Paired an XGBoost thermal-runaway classifier with a PyTorch Temporal Convolutional Network exported to ONNX for state-of-health tracking.",
      "Mapped API outputs into GREEN, AMBER, RED and ABORT safety tiers with API-key authentication and rate limiting.",
      "Connected the service to a real-time CAN bus ingestion flow and completed 19 integration tests.",
    ],
    stack: ["Python 3.11", "FastAPI", "XGBoost", "PyTorch TCN", "ONNX Runtime", "CAN Bus"],
    architecture: [
      "CAN telemetry ingest",
      "Pydantic validation",
      "Dual-model inference",
      "Alert-tier mapping",
      "Signed API response",
    ],
    endpoint: "POST /api/v1/telemetry/evaluate",
    payload: [
      { key: "tr_risk_score", value: "0.0012", highlight: true },
      { key: "soh_percentage", value: "98.42" },
      { key: "latency_ms", value: "2.28", highlight: true },
      { key: "alert_state", value: '"GREEN"', highlight: true },
    ],
    visual: apexVisual,
    visualAlt: "Schematic illustration of a lithium-ion battery module with thermal gradient contours",
  },
  {
    index: "02",
    slugTone: "data",
    title: "AERO.AI",
    subtitle: "Aerodynamic Coefficient Prediction Engine · MVP1 Backend",
    tags: ["FSAE Aerodynamics", "CFD Surrogate Model"],
    description:
      "A lightweight ML surrogate that replaces compute-heavy CFD iterations for FSAE 2D airfoil analysis. The FastAPI service predicts coefficient, stall-margin and lift-to-drag outputs for NACA four-digit airfoils.",
    metrics: [
      { label: "Model weight", value: "~5.4 MB", note: "PyTorch binary" },
      { label: "Reynolds range", value: "≤ 2.0M", note: "flow condition" },
      { label: "Geometry", value: "NACA 4", note: "2D airfoil" },
    ],
    highlights: [
      "Produces Cl, Cd, Cm, stall-margin and L/D balance estimates without launching a new CFD solve.",
      "Trained against OpenFOAM RANS CFD and XFoil simulation data for engineering-oriented surrogate inference.",
      "Uses structured Pydantic schemas and Cloudflare Tunnels to expose remote API access from a WSL2 / Conda workflow.",
    ],
    stack: ["Python 3.11", "PyTorch", "FastAPI", "OpenFOAM", "XFoil", "Cloudflare Tunnels"],
    architecture: [
      "NACA parameter input",
      "Flow-condition schema",
      "Neural surrogate",
      "Coefficient post-process",
      "Remote API response",
    ],
    endpoint: "POST /api/v1/airfoil/predict",
    payload: [
      { key: "cl", value: "0.842", highlight: true },
      { key: "cd", value: "0.0187" },
      { key: "cm", value: "-0.091" },
      { key: "ld_ratio", value: "45.02", highlight: true },
    ],
    visual: aeroVisual,
    visualAlt: "Airfoil cross-section with laminar streamlines and pressure contours",
  },
];

export const navigation = [
  { label: "Index", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Stack", to: "/stack" },
  { label: "Contact", to: "/contact" },
] as const;
