import { cn } from "../../hooks/utils";

export default function PatternHeader({ className }: React.ComponentPropsWithRef<"svg">) {
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
