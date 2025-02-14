"use client";

import { JSX, useState } from "react";

const Accordion = ({
	question,
	answer,
}: {
	question: string;
	answer: JSX.Element;
}): JSX.Element => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const toggleAccordion = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div
			className={`border border-black shadow-[0px_5px_0px_0px_rgba(13,_18,_45,_1)] bg-brand-red text-white ${
				isExpanded ? "rounded-[30px]" : "rounded-full"
			}`}
		>
			<button
				className="leading-[170%] text-lg flex items-center gap-10 justify-between text-left w-full py-2 pl-6 pr-2"
				type="button"
				onClick={toggleAccordion}
			>
				<span className="text-xl md:text-2xl header">{question}</span>

				<span
					className={`inline-block rounded-full`}
				>
					{isExpanded ? (
						<svg
                            className="size-10 md:size-[50px]"
							width="50"
							height="50"
							viewBox="0 0 60 61"
							fill="none"
						>
							<rect
								y="0.5"
								width="60"
								height="60"
								rx="30"
								fill="black"
							/>
							<path
								d="M33.232 20.728C34.928 19.16 36.144 18.104 36.88 17.56C37.616 16.984 38.24 16.696 38.752 16.696C39.232 16.696 39.76 16.936 40.336 17.416C40.976 17.928 41.296 18.616 41.296 19.48C41.296 20.056 40.992 20.712 40.384 21.448C39.808 22.152 38.224 23.784 35.632 26.344C31.824 30.088 29.92 32.152 29.92 32.536C29.92 32.856 30.544 33.96 31.792 35.848C33.04 37.736 34.208 39.368 35.296 40.744C36.32 41.992 36.832 42.968 36.832 43.672C36.832 44.216 36.592 44.776 36.112 45.352C35.632 45.992 34.928 46.312 34 46.312C33.328 46.312 32.688 46.088 32.08 45.64C31.536 45.256 30.32 43.72 28.432 41.032C26.608 38.44 25.632 37.144 25.504 37.144C25.344 37.144 25.088 37.432 24.736 38.008C24.384 38.552 24.208 38.952 24.208 39.208C24.208 39.624 23.952 40.088 23.44 40.6C22.832 41.208 22.128 41.512 21.328 41.512C20.72 41.512 20.176 41.32 19.696 40.936C19.216 40.552 18.912 40.024 18.784 39.352C18.784 39.32 18.768 39.272 18.736 39.208C18.736 39.144 18.736 39.096 18.736 39.064C18.736 38.36 19.056 37.352 19.696 36.04C20.368 34.696 21.12 33.528 21.952 32.536C22.432 31.896 22.672 31.4 22.672 31.048C22.672 30.472 21.904 28.632 20.368 25.528C19.184 23.288 18.592 21.816 18.592 21.112C18.592 20.568 18.896 19.992 19.504 19.384C20.144 18.776 20.736 18.472 21.28 18.472C22.016 18.472 22.704 18.824 23.344 19.528C23.984 20.232 24.72 21.416 25.552 23.08C26.544 25.128 27.28 26.152 27.76 26.152C27.984 26.152 28.224 25.928 28.48 25.48C28.672 25.128 30.256 23.544 33.232 20.728Z"
								fill="white"
							/>
						</svg>
					) : (
						<svg
                            className="size-10 md:size-[50px]"
							width="50"
							height="50"
							viewBox="0 0 60 61"
							fill="none"
						>
							<rect
								y="0.5"
								width="60"
								height="60"
								rx="30"
								fill="black"
							/>
							<path
								d="M28.78 19.624C29.26 19.112 29.916 18.856 30.748 18.856C31.58 18.856 32.268 19.128 32.812 19.672C33.292 20.216 33.532 21.368 33.532 23.128V25.816H35.308C36.492 25.816 37.292 25.912 37.708 26.104C38.124 26.264 38.492 26.664 38.812 27.304C39.164 27.944 39.34 28.456 39.34 28.84C39.34 29.256 39.084 29.768 38.572 30.376C38.028 30.952 37.02 31.352 35.548 31.576L33.34 31.864V35.608C33.34 37.4 33.292 38.52 33.196 38.968C33.132 39.416 32.892 39.8 32.476 40.12C31.868 40.632 31.26 40.888 30.652 40.888C29.852 40.888 29.164 40.472 28.588 39.64C28.012 38.776 27.66 37.608 27.532 36.136L27.244 33.592L24.7 33.4C23.068 33.304 21.916 33.048 21.244 32.632C20.476 32.152 20.092 31.416 20.092 30.424C20.092 29.848 20.268 29.304 20.62 28.792C20.94 28.376 21.292 28.104 21.676 27.976C22.092 27.848 23.004 27.736 24.412 27.64L27.484 27.448L27.58 25.432C27.74 22.264 28.14 20.328 28.78 19.624Z"
								fill="white"
							/>
						</svg>
					)}
				</span>
			</button>

			<div
				className={`grid transition-all ease-linear px-6 ${
					isExpanded
						? "[grid-template-rows:1fr] pb-8"
						: "[grid-template-rows:0fr] pb-0"
				}`}
			>
				<div className={`overflow-hidden text-left`}>{answer}</div>
			</div>
		</div>
	);
};

export default Accordion;
