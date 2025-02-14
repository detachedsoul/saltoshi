import Image from "next/image";
import DistributionImage from "@/assets/distribution-image.png";
import * as motion from "motion/react-client";

const SectionFive = () => {
	return (
		<motion.section
			className="bg-[#005246] text-white space-y-10 padding py-10 lg:py-[7%] xl:py-[10%]"
			id="onepager"
		>
			<h2 className="header text-3xl md:text-5xl text-center">
				Fair Launch Distribution
			</h2>

			<motion.div
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
					src={DistributionImage}
					alt="Fair Launch Distribution"
					placeholder="blur"
				/>
			</motion.div>
		</motion.section>
	);
};

export default SectionFive;
