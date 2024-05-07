import { cn } from "../../hooks/utils";

interface PatternHeaderProps extends React.ComponentPropsWithRef<"svg"> {
	small?: boolean;
}

export default function PatternHeader({ className, small }: PatternHeaderProps) {
	if (small) {
		return (
			<svg
				viewBox="0 0 150 87"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={cn("h-[70px] md:h-[87px]", className)}
			>
				<path
					d="M0 19V87H141.141C134.862 87 128.988 83.8976 125.448 78.7114L77.3799 8.28862C73.8399 3.10236 67.9662 0 61.687 0H19C8.50659 0 0 8.50659 0 19Z"
					fill="#f42e30"
				></path>
			</svg>
		);
	}

	return (
		<svg
			className={cn("h-[107px]", className)}
			viewBox="0 0 534 105"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 -1V105H533.791C510.487 105 489.025 92.3329 477.762 71.9313L455.756 32.0688C444.493 11.6671 423.031 -1 399.727 -1H0Z"
				fill="#f42e30"
			></path>
		</svg>
	);
}
