import Image from "next/image";
import RoadmapImage from "@/assets/roadmap.png";
import HeroBg from "@/assets/bg.png";
import Faqs from "./_components/faqs";
import Header from "./_components/header";
import HeroSection from "./_components/hero-section";
import SectionFive from "./_components/section-five";
import SectionFour from "./_components/section-four";
import SectionOne from "./_components/section-one";
import SectionTwo from "./_components/section-two";
import * as motion from "motion/react-client";

const Index = () => {
	return (
		<>
			<div className="bg-[#FEC62E] padding selection:bg-brand-red selection:text-white relative isolate">
				<Header />

				<HeroSection />

				<Image
					className="hidden md:block pointer-events-none h-[300px] md:h-full absolute top-0 right-0"
					src={HeroBg}
					alt=""
					priority
				/>
			</div>

			<SectionOne />

			<SectionTwo />

            <motion.div
                className="scroll-mt-20"
                id="roadmap"
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
					className="pointer-events-none h-[350px] md:h-full"
					src={RoadmapImage}
					alt="Roadmap"
					priority
					quality={100}
				/>
			</motion.div>

			<SectionFour />

			<SectionFive />

			<Faqs />
		</>
	);
};

export default Index;
