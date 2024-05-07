import { cn } from "../../hooks/utils";
import PatternArticle from "./PatternArticle";
import PatternFooter from "./PatternFooter";
import PatternTitle from "./PatternTitle";

interface ArticleProps {
	children: React.ReactNode;
	className?: string;
	patternBg: string;
	patternColor: string;
	title?: boolean;
	middle?: boolean;
	footer?: boolean;
}

export default function Article({ children, className, patternBg, patternColor, title, middle, footer }: ArticleProps) {
	return (
		<div>
			<div style={{ backgroundColor: patternColor }}>
				<article className={cn("container mx-auto max-w-[1214px] px-2 sm:px-8 xl:px-16 py-4", className)}>
					{children}
				</article>
			</div>
			<div about="pattern-wrapper" style={{ backgroundColor: patternBg }}>
				{title && <PatternTitle fill={patternColor} />}
				{middle && <PatternArticle fill={patternColor} />}
				{footer && <PatternFooter fill={patternColor} />}
			</div>
		</div>
	);
}
