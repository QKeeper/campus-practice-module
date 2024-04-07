export interface IReview {
	id: number;
	name: string; // Имя пользователя
	age: number; // Возраст
	currentPosition: string; // Текущая должность пользователя
	profilePhoto: string | URL; // Ссылка на фото
	description: string; // Текст отзыва
}
