import Link from "next/link";
import Image from "next/image";
import AboutImage from "@/assets/about-image.png";
import * as motion from "motion/react-client";

const SectionOne = () => {
	return (
		<motion.section
			className="bg-black text-white padding py-10 lg:pb-5 grid gap-10 md:grid-cols-2 md:items-center scroll-mt-10 selection:bg-light-pink selection:text-black"
			id="about"
		>
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
				<h2 className="header text-3xl md:text-5xl">ABOUT $Soltoshi</h2>

				<p>
					Soltoshi is a multi-chain meme coin designed for fast
					trading, decentralized security, and cross-chain utility.
					Unlike other meme tokens, Soltoshi is more than just hype -
					it’s built for real adoption with
				</p>

				<motion.ul
					className="space-y-4"
					initial="hidden"
					whileInView="visible"
					transition={{ staggerChildren: 0.2 }}
				>
					{[
						"Solana’s speed & efficiency; high-volume trading with near-zero fees.",
						"Bitcoin’s security via Stacks; final settlement on the most secure blockchain.",
						"Cross-chain utility; trade, stake, and bridge across Solana, Bitcoin Ordinals & Stacks.",
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
									fill="white"
								/>
							</svg>
							{item}
						</motion.li>
					))}
				</motion.ul>

				<div className="relative group w-auto inline-block">
					<Link
						className="bg-light-pink text-black border w-full border-black py-1.5 px-4 text-2xl rounded-full transition-all duration-500 ease-in-out hover:bg-brand-red hover:text-white hover:top-1 focus:top-1 hover:gap-3 focus:gap-3 relative z-[1024] right-0.5 top-0 header inline-flex items-center gap-2"
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
								fill="black"
							/>
							<path
								d="M14.6966 26.4821L13.5181 25.3038L23.0475 15.7743H18.3927V14.1077H25.8927V21.6077H24.226V16.9528L14.6966 26.4821Z"
								fill="white"
							/>
						</svg>
					</Link>

					<span className="inline-block absolute z-10 size-full bg-black border border-black rounded-full -right-0.5 top-1 group-hover:mt-1 group-focus:mt-1 transition-all duration-500 ease-in-out py-2"></span>
				</div>
			</motion.div>

			<motion.div
				className="lg:-mt-10"
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
					src={AboutImage}
					alt="ABOUT $Soltoshi"
					placeholder="blur"
				/>
			</motion.div>
		</motion.section>
	);
};

export default SectionOne;
