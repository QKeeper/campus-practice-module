import Article from "../../components/common/Article";
import Keyhole from "../../components/common/Keyhole";
import Comments from "./Comments";
import Practices from "./Practices";

function Homepage() {
	return (
		<>
			<Article title patternColor="#f42e30" patternBg="white" className="text-white pt-24">
				<h1 className="text-6xl font-bold">Практико-ориентированность</h1>
			</Article>
			<Article middle patternColor="white" patternBg="#f7f6f1" className="text-xl leading-8 pt-16">
				<p>
					Добро пожаловать! Этот модуль - ваша площадка для приобретения реального опыта и развития
					как специалиста
				</p>
				<p>
					Это место, где вы окунетесь в мир профессионального роста и открытия новых возможностей
				</p>
				<br />
				<p>
					Когда вы ещё учитесь или уже окончили вуз, теоретические знания есть, а опыта обычно
					маловато
				</p>
				<p>
					Компании неохотно нанимают новичков, поэтому начать карьеру проще через стажировку или
					практику
				</p>
				<p>
					Данный раздел позволит узнать о актуальных вакансиях и почитать истории людей которые уже
					устроились на работу
				</p>
			</Article>
			<Article middle patternColor="#f7f6f1" patternBg="#8269ef" className="text-black">
				<div className="flex gap-32 items-center px-16">
					<Keyhole className="w-64" />
					<Comments />
				</div>
			</Article>
			<Article footer patternColor="#8269ef" patternBg="white">
				<Practices />
			</Article>
		</>
	);
}

export default Homepage;
