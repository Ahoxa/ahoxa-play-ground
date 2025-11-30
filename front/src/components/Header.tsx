import { Link } from "@tanstack/react-router";
import {
	ChevronDown,
	ChevronRight,
	Home,
	Menu,
	Network,
	SquareFunction,
	StickyNote,
	X,
} from "lucide-react";
import { useState } from "react";
import * as styles from "./Header.css";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [groupedExpanded, setGroupedExpanded] = useState<
		Record<string, boolean>
	>({});

	return (
		<>
			<header className={styles.header}>
				<button
					onClick={() => setIsOpen(true)}
					className={styles.menuButton}
					aria-label="Open menu"
				>
					<Menu size={24} />
				</button>
				<h1 className={styles.title}>
					<Link to="/">
						<img
							src="/tanstack-word-logo-white.svg"
							alt="TanStack Logo"
							className={styles.logo}
						/>
					</Link>
				</h1>
			</header>

			<aside className={`${styles.aside} ${isOpen ? styles.asideOpen : ""}`}>
				<div className={styles.asideHeader}>
					<h2 className={styles.asideTitle}>Navigation</h2>
					<button
						onClick={() => setIsOpen(false)}
						className={styles.closeButton}
						aria-label="Close menu"
					>
						<X size={24} />
					</button>
				</div>

				<nav className={styles.nav}>
					<Link
						to="/"
						onClick={() => setIsOpen(false)}
						className={styles.link}
						activeProps={{
							className: `${styles.link} ${styles.activeLink}`,
						}}
					>
						<Home size={20} />
						<span className={styles.linkText}>Home</span>
					</Link>

					{/* Demo Links Start */}

					<Link
						to="/demo/start/server-funcs"
						onClick={() => setIsOpen(false)}
						className={styles.link}
						activeProps={{
							className: `${styles.link} ${styles.activeLink}`,
						}}
					>
						<SquareFunction size={20} />
						<span className={styles.linkText}>Start - Server Functions</span>
					</Link>

					<Link
						to="/demo/start/api-request"
						onClick={() => setIsOpen(false)}
						className={styles.link}
						activeProps={{
							className: `${styles.link} ${styles.activeLink}`,
						}}
					>
						<Network size={20} />
						<span className={styles.linkText}>Start - API Request</span>
					</Link>

					<div className={styles.groupedLinkContainer}>
						<Link
							to="/demo/start/ssr"
							onClick={() => setIsOpen(false)}
							className={`${styles.link} ${styles.groupedLink}`}
							activeProps={{
								className: `${styles.link} ${styles.groupedLink} ${styles.activeLink}`,
							}}
						>
							<StickyNote size={20} />
							<span className={styles.linkText}>Start - SSR Demos</span>
						</Link>
						<button
							className={styles.expandButton}
							onClick={() =>
								setGroupedExpanded((prev) => ({
									...prev,
									StartSSRDemo: !prev.StartSSRDemo,
								}))
							}
						>
							{groupedExpanded.StartSSRDemo ? (
								<ChevronDown size={20} />
							) : (
								<ChevronRight size={20} />
							)}
						</button>
					</div>
					{groupedExpanded.StartSSRDemo && (
						<div className={styles.nestedLinks}>
							<Link
								to="/demo/start/ssr/spa-mode"
								onClick={() => setIsOpen(false)}
								className={styles.link}
								activeProps={{
									className: `${styles.link} ${styles.activeLink}`,
								}}
							>
								<StickyNote size={20} />
								<span className={styles.linkText}>SPA Mode</span>
							</Link>

							<Link
								to="/demo/start/ssr/full-ssr"
								onClick={() => setIsOpen(false)}
								className={styles.link}
								activeProps={{
									className: `${styles.link} ${styles.activeLink}`,
								}}
							>
								<StickyNote size={20} />
								<span className={styles.linkText}>Full SSR</span>
							</Link>

							<Link
								to="/demo/start/ssr/data-only"
								onClick={() => setIsOpen(false)}
								className={styles.link}
								activeProps={{
									className: `${styles.link} ${styles.activeLink}`,
								}}
							>
								<StickyNote size={20} />
								<span className={styles.linkText}>Data Only</span>
							</Link>
						</div>
					)}

					{/* Demo Links End */}
				</nav>
			</aside>
		</>
	);
}
