export default function PatternFooter({ fill }: React.ComponentPropsWithRef<"svg">) {
	return (
		<svg
			style={{ backgroundColor: fill }}
			className="pt-16"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1920 166"
			preserveAspectRatio="none"
			fill="none"
		>
			<path
				d="M356.25 9.5H56c-31.48 0-57 25.52-57 57V175h1920.5V95.5c0-31.48-25.52-57-57-57h-397.25c-10.63 0-19.25-8.619-19.25-19.25S1437.38 0 1426.75 0H1016c-14.91 0-27 12.088-27 27s-12.088 27-27 27H400.75c-12.288 0-22.25-9.962-22.25-22.25S368.538 9.5 356.25 9.5Z"
				fill="#fff"
			></path>
		</svg>
	);
}
