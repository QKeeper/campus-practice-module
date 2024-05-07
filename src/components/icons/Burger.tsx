export default function Burger({ ...rest }: React.ComponentPropsWithRef<"svg">) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 29" {...rest}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="2"
				d="M1 1h22.572M1 14.488h30.848M1 27.977h10.534"
			></path>
		</svg>
	);
}
