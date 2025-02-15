import Link from "next/link";
import * as motion from "motion/react-client";

const SectionFour = () => {
	return (
		<motion.section
			className="bg-black text-white py-10 space-y-10 scroll-mt-10 selection:bg-light-pink selection:text-black overflow-hidden"
			id="tokenomics"
		>
			<h2 className="header text-3xl md:text-5xl text-center max-md:px-10 padding">
				TOKENOMICS
			</h2>

			<motion.div
				className="space-y-4 header max-md:px-10 padding text-xl md:text-2xl"
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.2 }}
			>
				<motion.p
					className="flex items-center gap-4 text-2xl md:text-3xl"
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
						viewBox="0 0 50 51"
						fill="none"
					>
						<rect
							y="0.5"
							width="50"
							height="50"
							rx="25"
							fill="white"
						/>
						<path
							d="M23.36 16.016C23.7013 15.6747 24.1067 15.504 24.576 15.504C25.0667 15.504 25.504 15.6853 25.888 16.048C26.2933 16.4107 26.496 16.8587 26.496 17.392C26.496 17.904 26.24 19.5573 25.728 22.352C25.2373 25.1467 24.8427 27.1307 24.544 28.304C23.6693 31.7173 22.6347 33.424 21.44 33.424C20.9067 33.424 20.32 33.104 19.68 32.464C19.1253 31.9093 18.4213 30.8853 17.568 29.392C16.736 27.8773 16.1067 26.512 15.68 25.296C15.296 24.1867 14.8693 23.1947 14.4 22.32C13.9947 21.552 13.792 20.9547 13.792 20.528C13.792 20.1013 13.984 19.7173 14.368 19.376C14.7733 19.0347 15.2107 18.864 15.68 18.864C16.3627 18.864 16.9493 19.2373 17.44 19.984C17.9307 20.7307 18.624 22.32 19.52 24.752C19.776 25.4347 20.064 26 20.384 26.448L20.832 27.056L21.056 26.448C21.2267 26.0853 21.568 24.336 22.08 21.2C22.4 19.3013 22.6347 18.0213 22.784 17.36C22.9547 16.6773 23.1467 16.2293 23.36 16.016ZM31.7067 14.032C32.1121 13.6907 32.5601 13.52 33.0507 13.52C33.8188 13.52 34.3948 13.8613 34.7787 14.544C34.9708 14.9493 35.1308 17.0827 35.2587 20.944C35.3654 24.8053 35.4827 27.2587 35.6108 28.304C35.6534 28.5813 35.6748 28.9013 35.6748 29.264C35.6748 29.6693 35.5148 30.0213 35.1947 30.32C34.8321 30.6613 34.4161 30.832 33.9468 30.832C33.2001 30.832 32.6134 30.4267 32.1867 29.616C31.9734 29.232 31.7921 28.4427 31.6427 27.248C31.5147 26.032 31.4507 24.8053 31.4507 23.568C31.4507 22.9707 31.4614 22.5333 31.4827 22.256L31.6427 20.112L30.9707 19.952C30.5654 19.8667 30.1921 19.6107 29.8507 19.184C29.5307 18.7573 29.3707 18.3307 29.3707 17.904C29.3707 17.5413 29.6374 16.9227 30.1707 16.048C30.7041 15.1733 31.2161 14.5013 31.7067 14.032Z"
							fill="black"
						/>
					</svg>
					100% Fair Launch (No Team Allocation)
				</motion.p>

				<motion.p
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
					📌 Best for: Full decentralization, no team allocation,
					strong investor trust
				</motion.p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 15,
					mass: 1,
				}}
			>
				<div className="mx-4 md:mx-10 h-4 after:bg-brand-red z-[1024] rounded-full relative after:absolute after:z-10 after:size-full bg-white after:rounded-full after:right-0.5 after:-top-1" />
			</motion.div>

			<motion.div
				className="space-y-8 max-md:px-10 padding"
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.2 }}
			>
				<motion.p
					className="header flex items-center gap-4 text-2xl md:text-3xl"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 15,
						mass: 1,
					}}
				>
					<svg
						className="shrink-0"
						width="24"
						height="24"
						viewBox="0 0 50 51"
						fill="none"
					>
						<rect
							y="0.5"
							width="50"
							height="50"
							rx="25"
							fill="white"
						/>
						<path
							d="M20.36 16.016C20.7013 15.6747 21.1067 15.504 21.576 15.504C22.0667 15.504 22.504 15.6853 22.888 16.048C23.2933 16.4107 23.496 16.8587 23.496 17.392C23.496 17.904 23.24 19.5573 22.728 22.352C22.2373 25.1467 21.8427 27.1307 21.544 28.304C20.6693 31.7173 19.6347 33.424 18.44 33.424C17.9067 33.424 17.32 33.104 16.68 32.464C16.1253 31.9093 15.4213 30.8853 14.568 29.392C13.736 27.8773 13.1067 26.512 12.68 25.296C12.296 24.1867 11.8693 23.1947 11.4 22.32C10.9947 21.552 10.792 20.9547 10.792 20.528C10.792 20.1013 10.984 19.7173 11.368 19.376C11.7733 19.0347 12.2107 18.864 12.68 18.864C13.3627 18.864 13.9493 19.2373 14.44 19.984C14.9307 20.7307 15.624 22.32 16.52 24.752C16.776 25.4347 17.064 26 17.384 26.448L17.832 27.056L18.056 26.448C18.2267 26.0853 18.568 24.336 19.08 21.2C19.4 19.3013 19.6347 18.0213 19.784 17.36C19.9547 16.6773 20.1467 16.2293 20.36 16.016ZM28.5787 18.128C29.0481 17.8507 29.5494 17.712 30.0827 17.712C30.3814 17.712 30.6161 17.7227 30.7867 17.744C31.4054 17.7867 31.8534 17.872 32.1308 18C32.4081 18.1067 32.7281 18.3413 33.0907 18.704C33.8801 19.4933 34.2747 20.5387 34.2747 21.84C34.2747 22.3093 34.2321 22.7467 34.1468 23.152C34.0188 23.8133 33.6667 24.848 33.0907 26.256C32.5361 27.6427 32.0134 28.7413 31.5227 29.552C31.1388 30.2347 30.9468 30.6613 30.9468 30.832C30.9468 30.9387 31.3308 30.992 32.0988 30.992C32.2908 30.992 32.8988 30.9707 33.9228 30.928C34.7761 30.8853 35.3201 30.864 35.5548 30.864C36.4721 30.864 37.1121 30.9493 37.4748 31.12C37.8588 31.2907 38.1894 31.6107 38.4668 32.08C38.6161 32.3147 38.6908 32.6027 38.6908 32.944C38.6908 33.584 38.4454 34.064 37.9548 34.384C37.4854 34.6827 35.8428 34.832 33.0267 34.832C30.4241 34.832 28.8561 34.6933 28.3227 34.416C27.3201 33.904 26.8187 33.136 26.8187 32.112C26.8187 31.0027 27.3841 29.3067 28.5147 27.024C29.5174 24.9547 30.0507 23.664 30.1147 23.152L30.2747 22.256L29.6347 22.896C29.1654 23.3227 28.6961 23.536 28.2267 23.536C27.7361 23.536 27.2774 23.3227 26.8507 22.896C26.5094 22.5547 26.3387 22.2133 26.3387 21.872C26.3387 21.7867 26.3601 21.5733 26.4027 21.232C26.5094 20.656 26.7547 20.08 27.1387 19.504C27.5441 18.928 28.0241 18.4693 28.5787 18.128Z"
							fill="black"
						/>
					</svg>
					Hybrid Model (Small Vested Team Reserve)
				</motion.p>

				<motion.div className="grid gap-4 md:grid-cols-2">
					<motion.ul
						className="space-y-4"
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 15,
							mass: 1,
						}}
					>
						<li className="flex items-center gap gap-4">
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
							Supply: 420,690,000,000,000 (fixed)
						</li>

						<li className="flex items-center gap gap-4">
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
							Burn: 10-15% at launch for scarcity
						</li>

						<li className="flex items-start gap gap-4">
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

							<span className="space-y-2">
								<span className="block">Buy/Sell Tax (7%)</span>

								<span className="list-disc space-y-1.5 list-inside">
									<span>2% Holder rewards (SOL reflections)</span>

									<span>2% Liquidity pool growth</span>

									<span>
										1% Auto buyback & burn (deflationary)
									</span>

									<span>2% Marketing & development</span>
								</span>
							</span>
						</li>
					</motion.ul>

					<motion.ul
						className="space-y-4"
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 15,
							mass: 1,
						}}
					>
						<li className="flex items-start gap gap-4">
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

							<span className="space-y-2">
								<span className="block">
									Anti-Whale & Anti-Bot Measures
								</span>

								<ul className="list-disc space-y-1.5 list-inside">
									<li>
										Buy limit (1-2% of supply per wallet)
									</li>

									<li>Cooldown timer at launch</li>

									<li>
										Higher sell tax for first 24-48 hours
									</li>
								</ul>
							</span>
						</li>

						<li className="flex items-center gap gap-4">
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
							Tax Reduction: Drops from 7% → 5% after 30 days
						</li>

						<li className="flex items-start gap gap-4">
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

							<span className="space-y-2">
								<span className="block">Distribution</span>

								<span className="list-disc space-y-1.5 list-inside">
									<span>
										85% Public (fair launch, no VC dumps)
									</span>

									<span>5% Marketing & partnerships</span>

									<span>5% Liquidity (locked for 6 months)</span>

									<span>
										5% Vested Team Reserve (locked for 12+
										months)
									</span>
								</span>
							</span>
						</li>
					</motion.ul>
				</motion.div>

				<motion.p
					className="header text-xl md:text-2xl"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 15,
						mass: 1,
					}}
				>
					📌 Best for: Balancing decentralization with sustainability
					for long-term growth
				</motion.p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 15,
					mass: 1,
				}}
			>
				<div className="mx-4 md:mx-10 h-4 after:bg-brand-yellow z-[1024] rounded-full relative after:absolute after:z-10 after:size-full bg-white after:rounded-full after:right-0.5 after:-top-1" />
			</motion.div>

			<motion.div
				className="space-y-4 header max-md:px-10 padding text-xl md:text-2xl"
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.2 }}
			>
				<motion.p
					className="flex items-center gap-4 text-2xl md:text-3xl"
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
						viewBox="0 0 50 51"
						fill="none"
					>
						<rect
							y="0.5"
							width="50"
							height="50"
							rx="25"
							fill="white"
						/>
						<path
							d="M20.86 16.016C21.2013 15.6747 21.6067 15.504 22.076 15.504C22.5667 15.504 23.004 15.6853 23.388 16.048C23.7933 16.4107 23.996 16.8587 23.996 17.392C23.996 17.904 23.74 19.5573 23.228 22.352C22.7373 25.1467 22.3427 27.1307 22.044 28.304C21.1693 31.7173 20.1347 33.424 18.94 33.424C18.4067 33.424 17.82 33.104 17.18 32.464C16.6253 31.9093 15.9213 30.8853 15.068 29.392C14.236 27.8773 13.6067 26.512 13.18 25.296C12.796 24.1867 12.3693 23.1947 11.9 22.32C11.4947 21.552 11.292 20.9547 11.292 20.528C11.292 20.1013 11.484 19.7173 11.868 19.376C12.2733 19.0347 12.7107 18.864 13.18 18.864C13.8627 18.864 14.4493 19.2373 14.94 19.984C15.4307 20.7307 16.124 22.32 17.02 24.752C17.276 25.4347 17.564 26 17.884 26.448L18.332 27.056L18.556 26.448C18.7267 26.0853 19.068 24.336 19.58 21.2C19.9 19.3013 20.1347 18.0213 20.284 17.36C20.4547 16.6773 20.6467 16.2293 20.86 16.016ZM27.9907 16.784C28.4814 16.5707 29.5054 16.464 31.0627 16.464H31.3507C32.5881 16.464 33.5374 16.592 34.1988 16.848C34.8814 17.0827 35.4894 17.5093 36.0227 18.128C36.4281 18.6187 36.6308 19.1093 36.6308 19.6C36.6308 20.0693 36.4388 20.688 36.0548 21.456L35.4148 22.576L36.4388 23.44C37.1001 24.016 37.5481 24.56 37.7828 25.072C38.0174 25.584 38.1348 26.2667 38.1348 27.12C38.1348 28.4427 37.6441 29.648 36.6628 30.736C35.7027 31.824 34.3907 32.6347 32.7267 33.168C32.1081 33.36 31.5321 33.456 30.9987 33.456C30.2734 33.456 29.6867 33.2853 29.2387 32.944C28.8121 32.5813 28.5987 32.0907 28.5987 31.472C28.5987 30.9387 28.8014 30.5013 29.2067 30.16C29.6334 29.7973 30.1454 29.616 30.7427 29.616C31.4894 29.616 32.2254 29.3707 32.9507 28.88C33.6974 28.3893 34.1561 27.8453 34.3267 27.248C34.3481 27.184 34.3588 27.0987 34.3588 26.992C34.3588 26.4587 33.6654 26.192 32.2787 26.192C31.2334 26.192 30.4014 26.0107 29.7827 25.648C29.1641 25.264 28.8547 24.752 28.8547 24.112C28.8547 23.7493 29.0574 23.3013 29.4627 22.768C29.8894 22.2347 30.3907 21.7973 30.9668 21.456C31.6707 20.9867 32.0227 20.688 32.0227 20.56C32.0227 20.4107 31.3614 20.336 30.0387 20.336C29.2067 20.336 28.6307 20.304 28.3107 20.24C27.9907 20.176 27.7134 20.0267 27.4787 19.792C27.0734 19.4507 26.8707 19.0133 26.8707 18.48C26.8707 17.6907 27.2441 17.1253 27.9907 16.784Z"
							fill="black"
						/>
					</svg>
					Development-Focused (Soltoshi Ordinals NFT Collection)
				</motion.p>

				<motion.p
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
					📌 Best for: Community identity and soltoshi cult culture
				</motion.p>
			</motion.div>

			<div className="grid place-content-center">
				<div className="relative group  mx-auto w-auto inline-block">
					<Link
						className="bg-brand-red text-white border w-full border-white py-1.5 px-4 text-2xl rounded-full transition-all duration-500 ease-in-out hover:bg-light-pink hover:text-black hover:top-1 focus:top-1 hover:gap-3 focus:gap-3 relative z-[1024] right-0.5 top-0 header inline-flex items-center gap-2"
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
								fill="white"
							/>
							<path
								d="M14.6966 26.4821L13.5181 25.3038L23.0475 15.7743H18.3927V14.1077H25.8927V21.6077H24.226V16.9528L14.6966 26.4821Z"
								fill="#FF5C5C"
							/>
						</svg>
					</Link>

					<span className="inline-block absolute z-10 size-full bg-white border border-white rounded-full -right-0.5 top-1 group-hover:mt-1 group-focus:mt-1 transition-all duration-500 ease-in-out py-2"></span>
				</div>
			</div>
		</motion.section>
	);
};

export default SectionFour;
