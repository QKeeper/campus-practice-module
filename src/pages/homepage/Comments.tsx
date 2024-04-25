import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useGetReviewsQuery } from "../../features/practice/practicesApiSlice";
import { useLocalStorage } from "usehooks-ts";
import { IReview } from "../../models/IReview";

export default function Comments() {
	const { data, isSuccess } = useGetReviewsQuery();
	const [localReviews, setLocalReviews] = useLocalStorage<IReview[]>("reviews", []);
	const [currentReview, setCurrentReview] = useState(0);

	useEffect(() => {
		if (isSuccess) setLocalReviews(data);
	}, [isSuccess]);

	const nextReview = () =>
		setCurrentReview((review) => (review < localReviews.length - 1 ? review + 1 : 0));
	const prevReview = () =>
		setCurrentReview((review) => (review > 0 ? review - 1 : localReviews.length - 1));

	return (
		<div className="flex gap-8 w-full">
			<Button onClick={prevReview}>
				<ChevronLeft size={32} className="p-1" />
			</Button>

			{localReviews.length && <ReviewContent {...localReviews[currentReview]} />}

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

function ReviewContent(review: IReview) {
	return (
		<div className="w-full rounded-2xl overflow-hidden">
			<div className="flex gap-2 bg-[#f42e30] p-4 text-white">
				<div className="size-12 flex overflow-hidden rounded-2xl bg-black bg-opacity-10">
					<img alt="avatar" src={review.profilePhoto} className="object-cover" />
				</div>
				<div>
					<p className="font-semibold">
						{review.name}, {review.age}
					</p>
					<p className="text-sm text-white text-opacity-75 font-light">{review.currentPosition}</p>
				</div>
			</div>
			<div className="bg-white p-4">
				<p>{review.description}</p>
			</div>
		</div>
	);
}
