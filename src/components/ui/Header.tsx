import { ChevronDown, Search } from "lucide-react";
import Brand from "../common/Brand";
import PatternHeader from "../common/PatternHeader";
import styles from "./Header.module.scss";
import { cn } from "../../hooks/utils";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.background}>
				<div className={styles.pattern}>
					<PatternHeader className="absolute" />
					<Brand fill="white" className="absolute w-[153px] h-[107px] left-[283px]" />
				</div>
				<div className="absolute bottom-0 bg-[#f42e30] h-[25px] w-full rounded-tr-[20px]" />
			</div>
			<div className={styles.content}>
				<Nav>
					<NavLink href="https://studgorod.ru/#news">Новости</NavLink>
					<NavLink href="https://studgorod.ru/#events">Мероприятия</NavLink>
					<NavLink href="https://studgorod.ru/partners">Партнёры</NavLink>

					<DropDownMenu title="Ещё">
						<DropDownItem href="https://studgorod.ru/pages/bonusnaya-programma">
							Бонусная программа
						</DropDownItem>
						<DropDownItem href="https://studgorod.ru/pages/lgotnye-kredity-na-obrazovanie">
							Льготные кредиты на образование
						</DropDownItem>
						<DropDownItem href="https://studgorod.ru/pages/stipendialnaya-programma">
							Стипендиальные программа
						</DropDownItem>
						<DropDownItem href="/">Практико-ориентированность</DropDownItem>
						<DropDownItem href="https://studgorod.ru/pages/kontakty">Контакты</DropDownItem>
						<DropDownItem href="https://studgorod.ru/pages/o-fonde-kampus">
							О фонде "Кампус"
						</DropDownItem>
					</DropDownMenu>

					<NavLink icon className="ml-auto">
						<Search strokeWidth={1.5} />
					</NavLink>
					<NavLink className="pr-[140px]">
						<span className="ml-4">Регистрация</span>
						<button className="bg-[#8269ef] text-white absolute py-3 px-8 rounded-full right-0">
							Войти
						</button>
					</NavLink>
				</Nav>
			</div>
		</div>
	);
}

function Nav({ children }: { children: React.ReactNode }) {
	return <ul className="flex gap-4 w-full">{children}</ul>;
}

interface NavLinkProps extends React.ComponentPropsWithRef<"a"> {
	icon?: boolean;
}

function NavLink({ icon, children, className, ...rest }: NavLinkProps) {
	return (
		<li className={cn("bg-[#ececec] text-[#353f2f] rounded-full", className)}>
			<a
				{...rest}
				className={cn(
					"rounded-full text-xl leading-none flex items-center justify-center gap-1",
					icon ? "p-[10px]" : "px-5 py-3"
				)}
			>
				{children}
			</a>
		</li>
	);
}

function DropDownMenu({ className, children, title }: React.ComponentPropsWithRef<"div">) {
	return (
		<li
			className={cn(
				"bg-[#ececec] text-[#353f2f] rounded-full relative",
				styles.dropdown__menu,
				className
			)}
		>
			<button className="rounded-full text-xl leading-none flex items-center justify-center gap-1 px-5 py-3">
				{title}
				<ChevronDown />
			</button>

			<div
				className={cn(
					"absolute top-0 left-0 bg-white rounded-2xl shadow-md w-96 overflow-hidden",
					styles.dropdown__container
				)}
			>
				{children}
			</div>
		</li>
	);
}

function DropDownItem({ href, children }: React.ComponentPropsWithRef<"a">) {
	return (
		<Link to={href || "/"} className="block text-xl p-4 hover:bg-[#e8e4fc]">
			{children}
		</Link>
	);
}
