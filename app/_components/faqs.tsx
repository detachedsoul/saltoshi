import Link from "next/link";
import Accordion from "./accordion";
import * as motion from "motion/react-client";

const Faqs = () => {
    return (
		<motion.footer className="bg-brand-yellow space-y-10 padding py-10 lg:py-[7%] xl:py-[10%] selection:bg-brand-red selection:text-white">
			<h2 className="header text-3xl md:text-5xl text-center">FAQs</h2>

			<motion.div
				className="space-y-4"
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.2 }}
			>
				<motion.div
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
					<Accordion
						question="What is Soltoshi?"
						answer={
							<p>
								Soltoshi is a multi-chain meme coin that
								combines the speed and low fees of Solana, the
								security of Bitcoin (via Stacks), and
								cross-chain utility with Bitcoin Ordinals. It’s
								designed for seamless trading, staking rewards,
								and long-term sustainability.
							</p>
						}
					/>
				</motion.div>

				<motion.div
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
					<Accordion
						question="What makes Soltoshi unique?"
						answer={
							<ul className="list-disc list-inside">
								<li>
									Unlike most meme coins that exist purely for
									speculation, Soltoshi offers:
								</li>

								<li>Fast & cheap transactions on Solana</li>

								<li>
									Bitcoin-level security with Stacks’
									settlement layer
								</li>

								<li>
									Cross-chain utility – trade on Solana,
									bridge to Bitcoin Ordinals, and stake on
									Stacks
								</li>

								<li>
									Fair launch & decentralization – no VC
									dumps, no hidden mint functions
								</li>
							</ul>
						}
					/>
				</motion.div>

				<motion.div
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
					<Accordion
						question="Is there a buy/sell tax? How is it used?"
						answer={
							<>
								<p>
									Yes, in the version 2, there is a 7%
									buy/sell tax is applied to support growth
									and stability:
								</p>

								<ul className="list-disc list-inside">
									<li>
										2% reflections in SOL (rewards for
										holders)
									</li>

									<li>
										2% liquidity pool auto-growth
										(stabilizes price & deepens liquidity)
									</li>

									<li>
										1% auto buyback & burn (deflationary
										mechanism)
									</li>

									<li>
										2% marketing & development (funding
										campaigns & partnerships)
									</li>
								</ul>
							</>
						}
					/>
				</motion.div>

				<motion.div
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
					<Accordion
						question="Can I stake Soltoshi?"
						answer={
							<p>
								Yes! At version 2, staking on Stacks allows
								holders to earn long-term rewards. More details
								on staking pools will be released soon.
							</p>
						}
					/>
				</motion.div>

				<motion.div
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
					<Accordion
						question="Does Soltoshi ensure security?"
						answer={
							<p>
								Yes! Soltoshi merges Solana’s speed, Bitcoin’s
								security, and Stacks’ decentralization into a
								multi-chain asset.
							</p>
						}
					/>
				</motion.div>
			</motion.div>

			<div className="flex place-content-center items-center gap-8">
				<div className="relative group">
					<Link
						className="bg-brand-red border border-black grid place-content-center rounded-full p-2 transition-all duration-500 ease-in-out hover:mt-1 focus:mt-1 md:p-1 absolute z-50 right-0.5 top-0 hover:bg-light-pink"
						href=""
					>
						<svg
							className="size-6"
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

					<span className="inline-block relative size-14 md:size-8 bg-black border border-black rounded-full right-0 top-0.5 group-hover:mt-1 group-focus:mt-1 transition-all duration-500 ease-in-out"></span>
				</div>

				<div className="relative group">
					<Link
						className="bg-brand-red border border-black grid place-content-center rounded-full p-2 transition-all duration-500 ease-in-out hover:mt-1 focus:mt-1 md:p-1 absolute z-50 right-0.5 top-0 hover:bg-light-pink"
						href=""
					>
						<svg
							className="size-6"
							width="22"
							height="22"
							viewBox="0 0 38 34"
							fill="none"
						>
							<path
								d="M29.7021 0.182129L20.2997 10.93L12.1702 0.182129H0.395996L14.4644 18.5782L1.13081 33.8179H6.84027L17.1311 22.0592L26.1248 33.8179H37.6074L22.9422 14.43L35.4083 0.182129H29.7021ZM27.6996 30.4026L7.05932 3.41807H10.4522L30.8613 30.4026H27.6996Z"
								fill="black"
							/>
						</svg>
					</Link>

					<span className="inline-block relative size-14 md:size-8 bg-black border border-black rounded-full right-0 top-0.5 group-hover:mt-1 group-focus:mt-1 transition-all duration-500 ease-in-out"></span>
				</div>
			</div>
		</motion.footer>
	);
};

export default Faqs;
