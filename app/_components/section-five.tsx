import Image from "next/image";
import DistributionImage from "@/assets/distribution-image.png";

const SectionFive = () => {
    return (
		<section className="bg-[#005246] text-white space-y-10 padding py-10 lg:py-[7%] xl:py-[10%]">
			<h2 className="header text-3xl md:text-5xl text-center">
				Fair Launch Distribution
			</h2>

			<Image
				src={DistributionImage}
				alt="Fair Launch Distribution"
				placeholder="blur"
			/>
		</section>
	);
};

export default SectionFive;
