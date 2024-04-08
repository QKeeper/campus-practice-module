import { IReview } from "./IReview";

export interface IPractice {
	id: number;
	role: string; // Направление стажировки
	company: string; // Компания
	title: string; // Должность
	internshipBeginning?: Date | string | undefined; // Дата начала стажировки
	internshipEnding?: Date | string | undefined; // Дата окончания стажировки
	isActive?: boolean; // Проходит ли набор
	description: string; // Описание
	testTask?: string | undefined; // Описание тестового задания
	employerHref: string; // Ссылка на сайт работодателя (набор на практику)
	reviews: IReview[];
}
