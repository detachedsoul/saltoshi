import Link from "next/link";
import Image from "next/image";
import WhySoltoshi from "@/assets/why-soltoshi-image.png";
import * as motion from "motion/react-client";

const SectionTwo = () => {
	return (
		<section
			className="bg-light-pink padding py-10 lg:py-[7%] xl:py-[10%] grid gap-10 md:grid-cols-2 md:items-center scroll-mt-10"
			id="why-soltoshi"
		>
			<motion.div
				className="order-last md:order-first"
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 15,
					mass: 1,
				}}
			>
				<Image
					src={WhySoltoshi}
					alt="Why Soltoshi?"
					placeholder="blur"
				/>
			</motion.div>

			<motion.div
				className="space-y-8"
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 15,
					mass: 1,
				}}
			>
				<h2 className="header text-3xl md:text-5xl">Why Soltoshi?</h2>

				<p>
					Meme coins thrive on community and culture, but most lack
					long-term sustainability. Soltoshi changes the game by:
				</p>

				<motion.ul
					className="space-y-4"
					initial="hidden"
					whileInView="visible"
					transition={{ staggerChildren: 0.2 }}
				>
					{[
						"Eliminating rugs & centralized risks – No hidden mint functions, no liquidity pulls.",
						"Ensuring fair launches & decentralized ownership – No VC dumps, no early insider advantages.",
						"Incentivizing long-term holding – Staking rewards, deflationary mechanics, and buyback burns.",
					].map((item, index) => (
						<motion.li
							key={index}
							className="flex items-center gap-4"
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
							<svg
								className="shrink-0"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"
									fill="black"
								/>
                            </svg>

							{item}
						</motion.li>
					))}
				</motion.ul>

				<div className="relative group w-auto inline-block">
					<Link
						className="bg-brand-red text-white border w-full border-black py-1.5 px-4 text-2xl rounded-full transition-all duration-500 ease-in-out hover:bg-light-pink hover:text-black hover:top-1 focus:top-1 hover:gap-3 focus:gap-3 relative z-[1024] right-0.5 top-0 header inline-flex items-center gap-2"
						href="https://t.me/SoltoshiBot"
                        target="_blank"
                        rel="noopener noreferrer"
					>
						Start Trading{" "}
						<svg
							className="size-10 md:size-6"
							width="22"
							height="22"
							viewBox="0 0 40 40"
							fill="none"
						>
							<rect
								width="40"
								height="40"
								rx="20"
								fill="white"
							/>
							<path
								d="M14.6966 26.4821L13.5181 25.3038L23.0475 15.7743H18.3927V14.1077H25.8927V21.6077H24.226V16.9528L14.6966 26.4821Z"
								fill="#FF5C5C"
							/>
						</svg>
					</Link>

					<span className="inline-block absolute z-10 size-full bg-black border border-black rounded-full -right-0.5 top-1 group-hover:mt-1 group-focus:mt-1 transition-all duration-500 ease-in-out py-2"></span>
				</div>
			</motion.div>
		</section>
	);
};

export default SectionTwo;
