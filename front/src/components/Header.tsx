import { Link } from "@tanstack/react-router";
import {
	Activity,
	Database,
	Fingerprint,
	Home,
	Layers,
	Layout,
	Loader,
	Menu,
	MousePointerClick,
	RefreshCw,
	X,
} from "lucide-react";
import { useState } from "react";
import * as styles from "./Header.css";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ path: "/", label: "Home", icon: <Home size={20} /> },
		{ path: "/suspense", label: "Suspense", icon: <Loader size={20} /> },
		{
			path: "/use-deferred-value",
			label: "useDeferredValue",
			icon: <Layers size={20} />,
		},
		{ path: "/use-id", label: "useId", icon: <Fingerprint size={20} /> },
		{
			path: "/use-sync-external-store",
			label: "useSyncExternalStore",
			icon: <RefreshCw size={20} />,
		},
		{
			path: "/use-imperative-handle",
			label: "useImperativeHandle",
			icon: <MousePointerClick size={20} />,
		},
		{
			path: "/use-action-state",
			label: "useActionState",
			icon: <Database size={20} />,
		},
		{ path: "/activity", label: "Activity", icon: <Activity size={20} /> },
		{ path: "/cache", label: "cache", icon: <Layout size={20} /> },
	];

	return (
		<>
			<header className={styles.header}>
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className={styles.menuButton}
					aria-label="Open menu"
				>
					<Menu size={24} />
				</button>
				<h1 className={styles.title}>
					<Link to="/" className={styles.titleLink}>
						<span>React Playground</span>
					</Link>
				</h1>
			</header>

			{/* Overlay */}
			<div
				className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
				onClick={() => setIsOpen(false)}
				aria-hidden="true"
			/>

			<aside className={`${styles.aside} ${isOpen ? styles.asideOpen : ""}`}>
				<div className={styles.asideHeader}>
					<h2 className={styles.asideTitle}>Navigation</h2>
					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className={styles.closeButton}
						aria-label="Close menu"
					>
						<X size={24} />
					</button>
				</div>

				<nav className={styles.nav}>
					{navItems.map((item) => (
						<Link
							key={item.path}
							to={item.path}
							onClick={() => setIsOpen(false)}
							className={styles.link}
							activeProps={{
								className: `${styles.link} ${styles.activeLink}`,
							}}
						>
							{item.icon}
							<span className={styles.linkText}>{item.label}</span>
						</Link>
					))}
				</nav>
			</aside>
		</>
	);
}
