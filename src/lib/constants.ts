/**
 * Design System Constants
 * Central source of truth for colors, spacing, and content
 */

export const colors = {
  primary: {
    DEFAULT: "#0EA5E9",
    light: "#38BDF8",
    dark: "#0284C7",
    glow: "rgba(14, 165, 233, 0.5)",
  },
  secondary: {
    DEFAULT: "#8B5CF6",
    light: "#A78BFA",
    dark: "#7C3AED",
    glow: "rgba(139, 92, 246, 0.5)",
  },
  background: {
    base: "#0A0A0F",
    elevated: "#12121A",
    card: "rgba(26, 26, 46, 0.6)",
    gradientStart: "#0A0A0F",
    gradientEnd: "#1A1A2E",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#A1A1AA",
    muted: "#71717A",
  },
  border: {
    subtle: "rgba(255, 255, 255, 0.08)",
    default: "rgba(255, 255, 255, 0.12)",
    hover: "rgba(255, 255, 255, 0.2)",
  },
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const navigation = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Architecture", href: "#architecture" },
  { name: "Download", href: "https://github.com/HarshalPatel1972/agent-momentum/releases" },
] as const;

export const features = [
  {
    id: "human-in-loop",
    title: "Human-in-the-Loop",
    description: "Prevent `rm -rf` accidents. Your agent waits for your explicit approval before running dangerous commands.",
    icon: "shield",
    highlight: "Safety First",
    size: "normal" as const,
  },
  {
    id: "universal-bridge",
    title: "Universal Bridge",
    description: "Compatible with any MCP client. If it speaks JSON-RPC, Momentum can control it.",
    icon: "workflow",
    highlight: "MCP Native",
    size: "normal" as const,
  },
  {
    id: "zero-config",
    title: "Zero-Config Tunnel",
    description: "Built-in Ngrok tunneling. No router port-forwarding or complex DNS setup required.",
    icon: "remote",
    highlight: "Instant Access",
    size: "normal" as const,
  },
  {
    id: "multi-channel",
    title: "Multi-Channel",
    description: "Native integration with Telegram, WhatsApp, Ntfy, and more for alerts on your terms.",
    icon: "devices",
    highlight: "Anywhere",
    size: "normal" as const,
  },
] as const;

export const howItWorks = [
  {
    step: 1,
    title: "Launch",
    description: "Run the portable binary on your desktop. No installation required.",
    codeSnippet: null,
    visual: "terminal" as const,
  },
  {
    step: 2,
    title: "Link",
    description: "Add your Telegram bot token in the UI to enable remote control.",
    codeSnippet: null,
    visual: "code" as const,
  },
  {
    step: 3,
    title: "Listen",
    description: "Point your Agent to Momentum's local server and start monitoring.",
    codeSnippet: null,
    visual: "dashboard" as const,
  },
] as const;

export const testimonials = [] as const;

export const stats = [] as const;

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/HarshalPatel1972/agent-momentum" },
  { name: "Twitter", href: "#" }, 
] as const;

export const footerLinks = {
  product: [
    { name: "Download", href: "https://github.com/HarshalPatel1972/agent-momentum/releases" },
    { name: "Source Code", href: "https://github.com/HarshalPatel1972/agent-momentum" },
    { name: "Issues", href: "https://github.com/HarshalPatel1972/agent-momentum/issues" },
  ],
  company: [
    { name: "Harshal Patel", href: "https://github.com/HarshalPatel1972" },
    { name: "Twitter", href: "#" },
  ],
  legal: [
    { name: "MIT License", href: "https://github.com/HarshalPatel1972/agent-momentum/blob/main/LICENSE" },
  ],
} as const;
