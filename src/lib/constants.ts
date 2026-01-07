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
  { name: "Get Started", href: "#cta" },
] as const;

export const features = [
  {
    id: "remote-control",
    title: "Remote Agent Control",
    description: "Take full control of your AI agents from anywhere. Execute commands, debug issues, and manage workflows in real-time.",
    icon: "remote",
    highlight: "Zero Latency",
    size: "large" as const,
  },
  {
    id: "real-time-monitoring",
    title: "Real-Time Monitoring",
    description: "Watch your agents work with live status updates, performance metrics, and instant notifications.",
    icon: "monitor",
    highlight: "Live Updates",
    size: "normal" as const,
  },
  {
    id: "secure-connections",
    title: "Secure Connections",
    description: "Enterprise-grade encryption ensures your agent communications remain private and protected.",
    icon: "shield",
    highlight: "E2E Encrypted",
    size: "normal" as const,
  },
  {
    id: "multi-platform",
    title: "Multi-Platform Support",
    description: "Control agents running on any platform - cloud, on-premise, or edge devices.",
    icon: "devices",
    highlight: "Universal",
    size: "normal" as const,
  },
  {
    id: "session-recording",
    title: "Session Recording",
    description: "Record and replay agent sessions for debugging, training, and compliance purposes.",
    icon: "record",
    highlight: "Full History",
    size: "normal" as const,
  },
  {
    id: "custom-workflows",
    title: "Custom Workflows",
    description: "Create automated workflows that trigger based on agent states, events, or schedules.",
    icon: "workflow",
    highlight: "Automation",
    size: "large" as const,
  },
] as const;

export const howItWorks = [
  {
    step: 1,
    title: "Install the SDK",
    description: "Add the Momentum SDK to your project with a single command. Works with any AI framework.",
    codeSnippet: `npm install @momentum/sdk`,
    visual: "terminal" as const,
  },
  {
    step: 2,
    title: "Connect Your Agent",
    description: "Initialize the bridge in your agent code. Momentum handles the rest automatically.",
    codeSnippet: `import { Momentum } from '@momentum/sdk';

const bridge = new Momentum({
  apiKey: process.env.MOMENTUM_KEY,
  agentId: 'my-agent'
});

bridge.connect();`,
    visual: "code" as const,
  },
  {
    step: 3,
    title: "Take Control",
    description: "Access your agent from the Momentum dashboard. Monitor, debug, and control in real-time.",
    codeSnippet: null,
    visual: "dashboard" as const,
  },
] as const;

export const testimonials = [
  {
    quote: "Momentum transformed how we manage our AI fleet. The real-time control is a game-changer.",
    author: "Sarah Chen",
    role: "Head of AI, TechCorp",
    avatar: "/avatars/sarah.jpg",
  },
  {
    quote: "Finally, a tool that gives us enterprise-grade control over our autonomous agents.",
    author: "Marcus Johnson",
    role: "CTO, AutomateAI",
    avatar: "/avatars/marcus.jpg",
  },
  {
    quote: "The security features alone make Momentum worth it. We sleep better knowing our agents are protected.",
    author: "Dr. Emily Roberts",
    role: "AI Security Lead, SecureBot",
    avatar: "/avatars/emily.jpg",
  },
] as const;

export const stats = [
  { value: "10K+", label: "Agents Connected" },
  { value: "99.9%", label: "Uptime" },
  { value: "<50ms", label: "Latency" },
  { value: "500+", label: "Enterprise Users" },
] as const;

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/momentum" },
  { name: "Twitter", href: "https://twitter.com/momentum" },
  { name: "Discord", href: "https://discord.gg/momentum" },
  { name: "LinkedIn", href: "https://linkedin.com/company/momentum" },
] as const;

export const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Documentation", href: "/docs" },
    { name: "Changelog", href: "/changelog" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
} as const;
