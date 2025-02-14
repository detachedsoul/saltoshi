import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/assets/hero-image.png";

const HeroSection = () => {
    return (
		<section className="pt-10 mb:pb-10 relative grid gap-8 z-50 lg:py-[7%] xl:py-[10%] md:w-4/5 lg:w-3/5">
			<div className="space-y-8">
				<h1 className="text-4xl lg:text-8xl lg:leading-[90px] header">
					Fast, Cheap, Secure - Future of Trading
				</h1>

				<p className="w-4/5">
					Soltoshi merges Solana’s speed, Bitcoin’s security, and
					Stacks’ decentralization into a multi-chain asset. It offers
					instant transactions and low fees for traders and meme
					enthusiasts.
				</p>

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
			</div>

			<Image
				className="pointer-events-none md:hidden"
				src={HeroImage}
				alt=""
				priority
			/>
		</section>
	);
};

export default HeroSection;
