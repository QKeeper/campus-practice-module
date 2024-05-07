import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useGetReviewsQuery } from "../../features/practice/practicesApiSlice";
import { useLocalStorage } from "usehooks-ts";
import { IReview } from "../../models/IReview";
import { cn } from "../../hooks/utils";

export default function Stories() {
	const { data, isSuccess } = useGetReviewsQuery();
	const [localReviews, setLocalReviews] = useLocalStorage<IReview[]>("reviews", []);
	const [currentReview, setCurrentReview] = useState(0);

	useEffect(() => {
		if (isSuccess) setLocalReviews(data);
	}, [isSuccess]);

	const nextReview = () => setCurrentReview((review) => (review < localReviews.length - 1 ? review + 1 : 0));
	const prevReview = () => setCurrentReview((review) => (review > 0 ? review - 1 : localReviews.length - 1));

	if (!localReviews.length) return;

	return (
		<div className="flex flex-col lg:flex-row gap-2 lg:gap-8 w-full">
			<Button onClick={prevReview} className="hidden lg:flex">
				<ChevronLeft size={32} className="p-1" />
			</Button>

			{localReviews.length && <ReviewContent {...localReviews[currentReview]} />}

			<button className="lg:hidden bg-white shadow-sm w-fit mx-auto px-3 py-1 rounded-lg" onClick={nextReview}>
				Следующая история
			</button>

			<Button onClick={nextReview} className="hidden lg:flex">
				<ChevronRight size={32} className="p-1" />
			</Button>
		</div>
	);
}

function Button({ children, className, ...rest }: React.ComponentPropsWithRef<"button">) {
	return (
		<div className={cn("flex items-center justify-center", className)}>
			<button
				className="text-black bg-white shadow-sm active:opacity-70 duration-100 rounded-full flex items-center justify-center"
				{...rest}
			>
				{children}
			</button>
		</div>
	);
}

function ReviewContent(review: IReview) {
	return (
		<div className="w-full rounded-2xl overflow-hidden shadow-sm">
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
			<div className="bg-white p-4 relative">
				<p>{review.description}</p>
			</div>
		</div>
	);
}
