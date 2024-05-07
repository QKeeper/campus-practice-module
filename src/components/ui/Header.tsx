import { ChevronDown, Search, X } from "lucide-react";
import Brand from "../common/Brand";
import PatternHeader from "../common/PatternHeader";
import styles from "./Header.module.scss";
import { cn } from "../../hooks/utils";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Burger from "../icons/Burger";
import Tg from "../icons/Tg";
import Vk from "../icons/Vk";
import WhatsApp from "../icons/WhatsApp";
import Ok from "../icons/Ok";

export default function Header() {
	return (
		<>
			<HeaderDesktop />
			<HeaderMobile />
		</>
	);
}

function HeaderDesktop() {
	return (
		<div className={cn("hidden xl:block", styles.header)}>
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

					<DropDownMenu title="Еще">
						<DropDownItem href="https://studgorod.ru/pages/bonusnaya-programma">Бонусная программа</DropDownItem>
						<DropDownItem href="https://studgorod.ru/pages/lgotnye-kredity-na-obrazovanie">
							Льготные кредиты на образование
						</DropDownItem>
						<DropDownItem href="https://studgorod.ru/pages/stipendialnaya-programma">
							Стипендиальная программа
						</DropDownItem>
						<DropDownItem href="/">Практико-ориентированность</DropDownItem>
						<DropDownItem href="https://studgorod.ru/pages/kontakty">Контакты</DropDownItem>
						<DropDownItem href="https://studgorod.ru/pages/o-fonde-kampus">О фонде "Кампус"</DropDownItem>
					</DropDownMenu>

					<NavLink icon className="ml-auto">
						<Search strokeWidth={1.5} />
					</NavLink>
					<NavLink className="pr-[140px]">
						<span className="ml-4">Регистрация</span>
						<button className="bg-[#8269ef] text-white absolute py-3 px-8 rounded-full right-0">Войти</button>
					</NavLink>
				</Nav>
			</div>
		</div>
	);
}

function HeaderMobile() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "auto";
	}, [isOpen]);

	return (
		<>
			<div className="block xl:hidden h-[125px] relative">
				<Brand fill="#f42e30" className="absolute left-1/2 h-[56px] bottom-[35px] -translate-x-1/2" />
				<PatternHeader small className="absolute left-0 bottom-[25px]" />
				<div className="absolute bottom-0 bg-[#f42e30] h-[25px] w-full rounded-tr-[20px]" />
				<button
					className="absolute left-[24px] bottom-[40px] md:left-[36px] md:bottom-[48px] text-white"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					{isOpen ? (
						<X className={cn("size-7 md:size-8", styles.appear)} />
					) : (
						<Burger className={cn("size-7 md:size-8", styles.appear)} />
					)}
				</button>
			</div>

			<div
				className={cn(
					"fixed left-0 right-0 xl:hidden h-[calc(100vh-125px)] bg-[#f42e30] duration-300 flex flex-col overflow-y-scroll z-10",
					isOpen ? "top-[125px]" : "top-full"
				)}
			>
				<form className="bg-[#ec7a78] border border-white rounded-2xl mx-4 mt-4 flex items-center gap-2 cursor-text min-h-14 text-white">
					<input
						placeholder="Поиск"
						className="placeholder:text-[#fff4] outline-none bg-transparent w-full h-full pl-5"
					/>
					<button className="p-2 mr-4">
						<Search className="" />
					</button>
				</form>
				<ul className="mt-4 bg-white pt-4 rounded-t-2xl *:text-xl md:*:text-2xl">
					<DropDownItem href="https://studgorod.ru/#news">Новости</DropDownItem>
					<DropDownItem href="https://studgorod.ru/#events">Мероприятия</DropDownItem>
					<DropDownItem href="https://studgorod.ru/partners">Партнёры</DropDownItem>
					<DropDownItem href="https://studgorod.ru/pages/bonusnaya-programma">Бонусная программа</DropDownItem>
					<DropDownItem href="https://studgorod.ru/pages/lgotnye-kredity-na-obrazovanie">
						Льготные кредиты на образование
					</DropDownItem>
					<DropDownItem href="https://studgorod.ru/pages/stipendialnaya-programma">
						Стипендиальная программа
					</DropDownItem>
					<DropDownItem href="/">Практико-ориентированность</DropDownItem>
					<DropDownItem href="https://studgorod.ru/pages/kontakty">Контакты</DropDownItem>
					<DropDownItem href="https://studgorod.ru/pages/o-fonde-kampus">О фонде "Кампус"</DropDownItem>
				</ul>
				<div className="relative">
					<div className="w-full h-6 absolute bg-white top-[-.25rem]" />
					<div className="bg-[#f7f6f1] rounded-t-2xl absolute top-0 px-4 pt-6 space-y-4 w-full font-medium">
						<Brand className="h-[40px] left-0" />
						<p>Екатеринбург - студенческая столица России!</p>
						<A href="https://studgorod.ru/pages/politika-konfidencialnosti-i-obrabotka-personalnyh-dannyh">
							Политика конфиденциальности
						</A>
						<A href="https://studgorod.ru/pages/soglasie-na-obrabotku-personalnyh-dannyh">
							Согласие на обработку персональных данных
						</A>
						<div className="flex gap-2 sm:gap-[20px] h-10 sm:h-[45px] mt-4">
							<Ok />
							<Vk />
							<Tg />
							<WhatsApp />
						</div>
						<div className="h-14" />
					</div>
				</div>
			</div>
		</>
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
				"bg-[#ececec] text-[#353f2f] rounded-full relative flex items-center justify-center",
				styles.dropdown__menu,
				className
			)}
		>
			<button className="rounded-full text-xl leading-none flex items-center justify-center gap-1 px-5 h-full">
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

function A({ href, children }: React.ComponentPropsWithRef<"a">) {
	return (
		<Link to={href || "/"} className="text-[#8a72f0] underline block">
			{children}
		</Link>
	);
}
