import Faqs from "./_components/faqs";
import Header from "./_components/header";
import HeroSection from "./_components/hero-section";
import SectionFive from "./_components/section-five";
import SectionFour from "./_components/section-four";
import SectionOne from "./_components/section-one";
import SectionTwo from "./_components/section-two";

const Index = () => {
    return (
		<>
			<div className="bg-brand-yellow padding selection:bg-brand-red selection:text-white">
				<Header />

				<HeroSection />
			</div>

			<SectionOne />

			<SectionTwo />

			<SectionFour />

			<SectionFive />

			<Faqs />
		</>
	);
};

export default Index;
