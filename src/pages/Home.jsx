import AffiliateSection from '../components/AffiliateSection/AffiliateSection';
import DescriptionSection from '../components/DescriptionSection/DescriptionSection';
import EcosystemSection from '../components/EcosystemSection/EcosystemSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import HeaderSection from '../components/HeaderSection/HeaderSection';

function Homepage() {
  return (
    <>
      <HeaderSection />
      <DescriptionSection />
      <EcosystemSection />
      <AffiliateSection />
      <FeaturesSection />
    </>
  );
}

export default Homepage;
