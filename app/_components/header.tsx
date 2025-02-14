"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

const sections = [
	{
		name: "About",
		id: "about",
	},
	{
		name: "Roadmap",
		id: "roadmap",
	},
	{
		name: "Tokenomics",
		id: "tokenomics",
	},
	{
		name: "Onepager",
		id: "onepager",
	},
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.header className="flex items-center justify-between gap-4 py-4 lg:py-6 header relative z-50">
			<Link href="/">
				<Image
					className="size-16"
					src="/logo.svg"
					alt="Soltoshi"
					width={40}
					height={40}
					quality={100}
				/>
			</Link>

			<motion.ul
				className={`flex items-center flex-col gap-8 lg:flex-row absolute bg-brand-yellow top-full py-4 shadow lg:shadow-none left-0 w-full transition-transform duration-500 z-[9999] ease-in-out lg:w-auto lg:translate-y-0 lg:static lg:bg-transparent ${
					isOpen ? "translate-y-0" : "-translate-y-[200%]"
				}`}
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.2 }}
			>
				{sections.map((section) => (
					<motion.li
						key={section.id}
						variants={{
							hidden: { opacity: 0, y: 50, scale: 0.9 },
							visible: { opacity: 1, y: 0, scale: 1 },
						}}
						transition={{
							type: "spring",
							stiffness: 150,
							damping: 12,
							mass: 0.8,
						}}
					>
						<button
							className="text-xl inline-block transition-all hover:px-1 duration-300 ease-in-out"
							type="button"
							onClick={() =>
								document
									.querySelector(`#${section.id}`)
									?.scrollIntoView({
										behavior: "smooth",
									})
							}
						>
							{section.name.toUpperCase()}
						</button>
					</motion.li>
				))}
			</motion.ul>

			<motion.div
				className="hidden md:flex items-center gap-4"
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.2 }}
			>
				<motion.div
					className="relative group"
					variants={{
						hidden: { opacity: 0, y: 50, scale: 0.9 },
						visible: { opacity: 1, y: 0, scale: 1 },
					}}
					transition={{
						type: "spring",
						stiffness: 150,
						damping: 12,
						mass: 0.8,
					}}
				>
					<Link
						className="bg-brand-red border border-black grid place-content-center rounded-full p-2 transition-all duration-500 ease-in-out hover:mt-1 focus:mt-1 md:p-1 absolute z-50 right-0.5 top-0 hover:bg-light-pink"
						href=""
					>
						<svg
							className="size-10 md:size-6"
							width="22"
							height="22"
							viewBox="0 0 38 38"
							fill="none"
						>
							<path
								d="M37.8172 19.0001C37.8172 29.3924 29.3924 37.8173 19 37.8173C8.60754 37.8173 0.1828 29.3924 0.1828 19.0001C0.1828 8.60761 8.60754 0.182861 19 0.182861C29.3924 0.182861 37.8172 8.60761 37.8172 19.0001ZM19.6744 14.0746C17.8441 14.8359 14.1862 16.4116 8.7006 18.8015C7.80981 19.1557 7.3432 19.5023 7.30071 19.841C7.22892 20.4138 7.94604 20.6392 8.9226 20.9463C9.05543 20.9881 9.19308 21.0314 9.33417 21.0773C10.2949 21.3895 11.5874 21.7549 12.2592 21.7694C12.8687 21.7826 13.5489 21.5314 14.2999 21.0156C19.4253 17.5558 22.071 15.8072 22.2371 15.7695C22.3544 15.7428 22.5168 15.7095 22.6266 15.8072C22.7367 15.905 22.7258 16.0902 22.7143 16.1399C22.6432 16.4428 19.8282 19.0599 18.3715 20.4142C17.937 20.818 17.5136 21.2305 17.0869 21.6418C16.1944 22.5021 15.525 23.1474 17.1239 24.2011C18.7448 25.2694 20.378 26.3354 21.9588 27.4624C22.7384 28.0182 23.439 28.5176 24.3042 28.438C24.8072 28.3917 25.3265 27.9189 25.5902 26.5087C26.2136 23.1762 27.439 15.9556 27.7222 12.9801C27.747 12.7194 27.7158 12.3858 27.6907 12.2394C27.6657 12.0929 27.6132 11.8842 27.423 11.7298C27.1973 11.5468 26.8494 11.5082 26.6938 11.511C25.9859 11.5235 24.9001 11.901 19.6744 14.0746Z"
								fill="black"
							/>
						</svg>
					</Link>

					<span className="inline-block relative size-8 bg-black border border-black rounded-full right-0 top-0.5 group-hover:mt-1 group-focus:mt-1 transition-all duration-500 ease-in-out"></span>
				</motion.div>

				<motion.div
					className="relative group"
					variants={{
						hidden: { opacity: 0, y: 50, scale: 0.9 },
						visible: { opacity: 1, y: 0, scale: 1 },
					}}
					transition={{
						type: "spring",
						stiffness: 150,
						damping: 12,
						mass: 0.8,
					}}
				>
					<Link
						className="bg-brand-red border border-black grid place-content-center rounded-full p-2 transition-all duration-500 ease-in-out hover:mt-1 focus:mt-1 md:p-1 absolute z-50 right-0.5 top-0 hover:bg-light-pink"
						href=""
					>
						<svg
							className="size-10 md:size-6"
							width="22"
							height="22"
							viewBox="0 0 38 34"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M29.7021 0.182129L20.2997 10.93L12.1702 0.182129H0.395996L14.4644 18.5782L1.13081 33.8179H6.84027L17.1311 22.0592L26.1248 33.8179H37.6074L22.9422 14.43L35.4083 0.182129H29.7021ZM27.6996 30.4026L7.05932 3.41807H10.4522L30.8613 30.4026H27.6996Z"
								fill="black"
							/>
						</svg>
					</Link>

					<span className="inline-block relative size-8 bg-black border border-black rounded-full right-0 top-0.5 group-hover:mt-1 group-focus:mt-1 transition-all duration-500 ease-in-out"></span>
				</motion.div>

				<motion.div
					className="relative group"
					variants={{
						hidden: { opacity: 0, y: 50, scale: 0.9 },
						visible: { opacity: 1, y: 0, scale: 1 },
					}}
					transition={{
						type: "spring",
						stiffness: 150,
						damping: 12,
						mass: 0.8,
					}}
				>
					<Link
						className="bg-brand-red text-white border w-full border-black py-1.5 px-4 text-2xl rounded-full transition-all duration-500 ease-in-out hover:bg-light-pink hover:text-black hover:top-1 focus:top-1 relative z-[1024] right-0.5 top-0"
						href=""
					>
						BUY $Soltoshi
					</Link>

					<span className="inline-block absolute z-10 w-full h-[130%] bg-black border border-black rounded-full -right-0.5 -top-0.5 group-hover:mt-1 group-focus:mt-1 transition-all duration-500 ease-in-out py-2"></span>
				</motion.div>
			</motion.div>

			<motion.button
				className="lg:hidden"
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 15,
					mass: 1,
				}}
			>
				{isOpen ? (
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
			</motion.button>
		</motion.header>
	);
};

export default Header;
