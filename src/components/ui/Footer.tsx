import { Search } from "lucide-react";
import Brand from "../common/Brand";
import Ok from "../icons/Ok";
import Vk from "../icons/Vk";
import Tg from "../icons/Tg";
import WhatsApp from "../icons/WhatsApp";

export default function Footer() {
	return (
		<footer className="container max-w-[1360px] mx-auto leading-none text-[#352f2f]">
			<div className="flex">
				<div className="w-[544px] text-lg">
					<Brand className="h-[67px]" />
					<p className="mt-8 mb-6 w-1/2">Екатеринбург - студенческая столица России</p>
					<p>Подпишитесь на наши соцсети</p>
					<div className="flex gap-[20px] h-[45px] mt-4">
						<Ok />
						<Vk />
						<Tg />
						<WhatsApp />
					</div>
				</div>
				<div className="w-[816px]">
					<div className="bg-[#ececec] px-[16px] py-[10px] rounded-full">
						<Search strokeWidth={1.6} />
					</div>
					<div className="mt-6 flex justify-between text-lg">
						<ul className="w-[240px] space-y-[20px]">
							<li>
								<a href="https://studgorod.ru/#news">Новости</a>
							</li>
							<li>
								<a href="https://studgorod.ru/#events">Мероприятия</a>
							</li>
							<li>
								<a href="https://studgorod.ru/partners">Партнёры</a>
							</li>
							<li>
								<a href="https://studgorod.ru/pages/Kontakty">Контакты</a>
							</li>
						</ul>
						<ul className="w-[560px] text-[#8a72f0] underline space-y-[20px]">
							<li>
								<a href="https://studgorod.ru/pages/politika-konfidencialnosti-i-obrabotka-personalnyh-dannyh">
									Политика конфиденциальности
								</a>
							</li>
							<li>
								<a href="https://studgorod.ru/pages/soglasie-na-obrabotku-personalnyh-dannyh">
									Согласие на обработку персональных данных
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="h-11" />
		</footer>
	);
}
