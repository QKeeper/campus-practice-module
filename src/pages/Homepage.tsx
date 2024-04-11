import practices from "../assets/mock/practices.json";
import { IPractice } from "../models/IPractice";
import { useGetPracticesQuery } from "../features/practice/practiceApiSlice";

function Homepage() {
	let { data, isLoading, isError, error } = useGetPracticesQuery();

	if (isLoading) return <p>Loading...</p>;

	if (isError || !data) {
		console.error(error);
		data = practices;
	}

	return (
		<div className="grid grid-cols-3 gap-x-16">
			{data.map((practice: IPractice) => (
				<div key={practice.id} className="flex flex-col max-w-96">
					<p className="text-lg font-medium">{practice.title}</p>
					<p className="text-sm text-neutral-500">
						{practice.company} / {practice.role}
					</p>
					<p className="mt-2">{practice.description}</p>
					<p className="text-sm text-neutral-500 mt-4">Отзывы ({practice.reviews.length})</p>
					<div className="flex flex-col gap-2 mt-2">
						{practice.reviews.map((review) => (
							<div key={review.id}>
								<p>{review.name}</p>
								<p className="text-sm">{review.description}</p>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default Homepage;
