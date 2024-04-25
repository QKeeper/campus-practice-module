import { IPractice } from "../../models/IPractice";
import { useGetPracticesQuery } from "../../features/practice/practicesApiSlice";
import { cn } from "../../hooks/utils";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function Practices() {
	const { data, isSuccess } = useGetPracticesQuery();
	const [localPractices, setLocalPractices] = useLocalStorage<IPractice[]>("practices", []);

	useEffect(() => {
		if (isSuccess) setLocalPractices(data);
	}, [isSuccess]);

	const [active, setActive] = useState<
		"аналитик" | "frontend" | "backend" | "менеджер" | "qa" | "другое"
	>("аналитик");

	return (
		<>
			<h2 className="text-5xl font-bold text-white mb-8">Стажировка у партнёров</h2>
			<div className="flex gap-2 mb-8">
				<Button {...{ active: active == "аналитик" }} onClick={() => setActive("аналитик")}>
					Аналитик
				</Button>
				<Button {...{ active: active == "frontend" }} onClick={() => setActive("frontend")}>
					Frontend
				</Button>
				<Button {...{ active: active == "backend" }} onClick={() => setActive("backend")}>
					Backend
				</Button>
				<Button {...{ active: active == "менеджер" }} onClick={() => setActive("менеджер")}>
					Менеджер
				</Button>
				<Button {...{ active: active == "qa" }} onClick={() => setActive("qa")}>
					QA
				</Button>
				<Button {...{ active: active == "другое" }} onClick={() => setActive("другое")}>
					Другое
				</Button>
			</div>
			<div className="flex flex-wrap justify-start gap-4">
				{localPractices &&
					localPractices
						.filter((practice) => practice.role.toLowerCase().includes(active))
						.sort((a, b) => (a.isActive === b.isActive ? 0 : a.isActive ? -1 : 1))
						.map((practice) => <Practice key={practice.id} {...practice} />)}
			</div>
		</>
	);
}

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
	active?: boolean;
}

function Button({ active, children, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={cn(
				"text-lg rounded-full px-4 py-3 bg-[#a89dea] text-white duration-300 hover:bg-white hover:text-black leading-none",
				{ "bg-white text-black": active }
			)}
		>
			{children}
		</button>
	);
}

function Practice({
	company,
	description,
	employerHref,
	title,
	internshipBeginning,
	internshipEnding,
	isActive,
}: IPractice) {
	return (
		<a
			className={cn("p-6 rounded-3xl bg-white w-[300px] relative flex flex-col", {
				"opacity-60": !isActive,
			})}
			href={employerHref}
		>
			<h2 className="text-xl font-medium">{title}</h2>
			<h3 className="text-sm text-black text-opacity-60">{company}</h3>
			<p>{description}</p>
			<div className="mt-auto text-sm leading-5">
				<p className="mt-4 text-black text-opacity-50 font-medium">
					{internshipBeginning && (
						<span>с {new Date(internshipBeginning).toLocaleDateString()}</span>
					)}
					{internshipEnding && <span> до {new Date(internshipEnding).toLocaleDateString()}</span>}
				</p>
			</div>
		</a>
	);
}
