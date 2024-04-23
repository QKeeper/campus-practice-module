import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useGetReviewsQuery } from "../../features/practice/practicesApiSlice";

export default function Comments() {
	const { data, isLoading } = useGetReviewsQuery();
	const [currentReview, setCurrentReview] = useState(0);

	if (!data?.length) return <code>No data</code>;

	const nextReview = () =>
		setCurrentReview((review) => (review < data.length - 1 ? review + 1 : 0));
	const prevReview = () =>
		setCurrentReview((review) => (review > 0 ? review - 1 : data.length - 1));

	if (isLoading) return <p>Loading...</p>;

	return (
		<div className="flex gap-8 w-full">
			<Button onClick={prevReview}>
				<ChevronLeft size={32} className="p-1" />
			</Button>

			<div className="w-full rounded-2xl overflow-hidden">
				<div className="flex gap-2 bg-[#f42e30] p-4 text-white">
					<div className="size-12 flex overflow-hidden rounded-2xl bg-black bg-opacity-10">
						<img alt="avatar" src={data[currentReview].profilePhoto} className="object-cover" />
					</div>
					<div>
						<p className="font-semibold">
							{data[currentReview].name}, {data[currentReview].age}
						</p>
						<p className="text-sm text-white text-opacity-75 font-light">
							{data[currentReview].currentPosition}
						</p>
					</div>
				</div>
				<div className="bg-white p-4">
					<p>{data[currentReview].description}</p>
				</div>
			</div>

			<Button onClick={nextReview}>
				<ChevronRight size={32} className="p-1" />
			</Button>
		</div>
	);
}

function Button({ children, ...rest }: React.ComponentPropsWithRef<"button">) {
	return (
		<div className="flex items-center">
			<button
				className="text-white bg-black rounded-full flex items-center justify-center"
				{...rest}
			>
				{children}
			</button>
		</div>
	);
}
