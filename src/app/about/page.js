
import Footer from "@/components/aboutcomponents/footer";
import Infoband from "@/components/aboutcomponents/infoBar";
import Infocards from "@/components/aboutcomponents/infocards";
import SubscriptionCard from "@/components/aboutcomponents/subscriptionCard";

const About = () => {
  return (
    <>
      <div className="bg-gray-100 mt-20 mb-10 pt-10 pb-10">
      <div class="container mx-auto text-center px-6 lg:px-20">
    <h1 class="text-3xl font-bold text-gray-800 mb-6  font-sans">About HireHub</h1>
    <p class="text-xl text-gray-700 leading-relaxed font-serif">
        Welcome to <strong>HireHub</strong>, the leading platform that bridges the gap between recruiters and candidates. Our mission is to revolutionize the hiring process by providing an innovative and efficient solution for job seekers and employers alike. Whether you're looking to make your next career move or in search of the perfect candidate, HireHub is here to ensure the process is seamless and effective.
    </p>
</div>

      </div>
      <Infocards />
      <SubscriptionCard />
      <Infoband />
      <Footer />
    </>
  );
};

export default About;
