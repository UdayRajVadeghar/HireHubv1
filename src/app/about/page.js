import FeatureBox from "@/components/aboutcomponents/featureBox";

const About = () => {
  return (
    <>
      <div className="bg-gray-100 mt-20 mb-10 pt-10 pb-10">
        <div className="container mx-auto text-center px-6 lg:px-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 font-sans">
            About HireHub 
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed font-serif">
            Welcome to <strong>HireHub</strong>, the leading platform that
            bridges the gap between recruiters and candidates. Our mission is to
            revolutionize the hiring process by providing an innovative and
            efficient solution for job seekers and employers alike. Whether
            you're looking to make your next career move or in search of the
            perfect candidate, HireHub is here to ensure the process is seamless
            and effective.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center font-bold ">
        <div className="text-3xl">Tech Stack Used</div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-6 lg:px-20">
        <FeatureBox
          icon="https://utfs.io/f/5a266937-d23b-405f-938c-d52087fee08c-ruxgie.svg"
          title="Next.js"
          description="Provides hybrid static and server rendering for efficient web performance."
        />
        <FeatureBox
          icon="https://utfs.io/f/a21f61bc-22a7-4253-9fc8-bf08ac984fe9-h7agj9.png"
          title="Node.js"
          description="Handles backend operations and server-side logic."
        />
        <FeatureBox
          icon="https://utfs.io/f/ef4dff6a-284f-489e-a7ca-328071b0fd0f-rqpuxo.png"
          title="Supabase"
          description="Manages S3 storage for feeds and resumes."
        />
        <FeatureBox
          icon="https://utfs.io/f/e6f4fe15-7752-4ec5-b9ba-c49daee5c882-1pysc4.png"
          title="MongoDB"
          description="Primary database storing all user data securely."
        />
        <FeatureBox
          icon="https://utfs.io/f/5b6557df-360c-483f-821c-34c42cc8aaa5-rj49e0.png"
          title="Mongoose"
          description="Simplifies MongoDB data modeling and interactions."
        />
        <FeatureBox
          icon="https://utfs.io/f/ea97fe11-cac5-4190-aafb-9433078d7c9e-133hbv.png"
          title="Zustand"
          description="Manages global state across the application."
        />
        <FeatureBox
          icon="https://utfs.io/f/a586a035-5f95-47d9-a5c9-5b7ff083d231-1ker11.png"
          title="Clerk"
          description="Provides user authentication and management."
        />
        <FeatureBox
          icon="https://utfs.io/f/26de27cf-9214-45b8-92cb-e2c3d50b8651-73p8np.png"
          title="GitHub Actions"
          description="Automates CI/CD workflows for code integration."
        />
        <FeatureBox
          icon="https://utfs.io/f/61f16c37-9aa8-489c-9749-d2a5828ccb40-er2coj.png"
          title="Stripe"
          description="Secure payment gateway integration for transactions."
        />
        <FeatureBox
          icon="https://utfs.io/f/f6a02f09-0439-470a-83a9-888d720d5da2-dk6j3t.webp"
          title="Vercel"
          description="Hosting and deployment platform for the project."
        />
      </div>
    </>
  );
};

export default About;
