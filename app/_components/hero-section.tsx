import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/assets/hero-image.png";
import * as motion from "motion/react-client";

const HeroSection = () => {
	return (
		<motion.section className="pt-10 md:pb-10 relative grid gap-8 md:z-10 lg:py-[7%] xl:py-[10%] md:w-1/2 lg:w-3/4">
			<motion.div
				className="space-y-8"
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.2 }}
			>
				<motion.h1
					className="text-4xl lg:text-8xl lg:leading-[90px] header"
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
					Fast, Cheap, Secure - Future of Trading
				</motion.h1>

				<motion.p
					className="md:w-4/5 lg:w-1/2"
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
					Soltoshi merges Solana’s speed, Bitcoin’s security, and
					Stacks’ decentralization into a multi-chain asset. It offers
					instant transactions and low fees for traders and meme
					enthusiasts.
				</motion.p>

				<div className="relative group w-auto inline-block">
					<Link
						className="bg-light-pink border w-full border-black py-1.5 px-4 text-2xl rounded-full transition-all duration-500 ease-in-out hover:bg-brand-red hover:top-1 focus:top-1 hover:gap-3 focus:gap-3 relative z-[1024] right-0.5 top-0 header inline-flex items-center gap-2"
						href=""
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

			<Image
				className="pointer-events-none md:hidden"
				src={HeroImage}
				alt=""
				priority
			/>
		</motion.section>
	);
};

export default HeroSection;
