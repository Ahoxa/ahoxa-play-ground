import { createFileRoute } from "@tanstack/react-router";
import {
  Route as RouteIcon,
  Server,
  Shield,
  Sparkles,
  Waves,
  Zap,
} from "lucide-react";
import * as styles from "../styles/routes/index.css";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const features = [
    {
      icon: <Zap className={styles.icon} />,
      title: "Powerful Server Functions",
      description:
        "Write server-side code that seamlessly integrates with your client components. Type-safe, secure, and simple.",
    },
    {
      icon: <Server className={styles.icon} />,
      title: "Flexible Server Side Rendering",
      description:
        "Full-document SSR, streaming, and progressive enhancement out of the box. Control exactly what renders where.",
    },
    {
      icon: <RouteIcon className={styles.icon} />,
      title: "API Routes",
      description:
        "Build type-safe API endpoints alongside your application. No separate backend needed.",
    },
    {
      icon: <Shield className={styles.icon} />,
      title: "Strongly Typed Everything",
      description:
        "End-to-end type safety from server to client. Catch errors before they reach production.",
    },
    {
      icon: <Waves className={styles.icon} />,
      title: "Full Streaming Support",
      description:
        "Stream data from server to client progressively. Perfect for AI applications and real-time updates.",
    },
    {
      icon: <Sparkles className={styles.icon} />,
      title: "Next Generation Ready",
      description:
        "Built from the ground up for modern web applications. Deploy anywhere JavaScript runs.",
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <img
              src="/tanstack-circle-logo.png"
              alt="TanStack Logo"
              className={styles.logo}
            />
            <h1 className={styles.title}>
              <span className={styles.titleGray}>TANSTACK</span>{" "}
              <span className={styles.titleGradient}>START</span>
            </h1>
          </div>
          <p className={styles.subtitle}>
            The framework for next generation AI applications
          </p>
          <p className={styles.description}>
            Full-stack framework powered by TanStack Router for React and Solid.
            Build modern applications with server functions, streaming, and type
            safety.
          </p>
          <div className={styles.ctaContainer}>
            <a
              href="https://tanstack.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Documentation
            </a>
            <p className={styles.ctaNote}>
              Begin your TanStack Start journey by editing{" "}
              <code className={styles.code}>/src/routes/index.tsx</code>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIconContainer}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
