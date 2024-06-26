"use client";

import {
  createPriceIdAction,
  createStripePaymentAction,
  updateProfileAction,
} from "@/actions";
import { membershipPlans } from "@/utils";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import CommonCard from "../common-card";
import { Button } from "../ui/button";

const stripePromise = loadStripe(
  "pk_test_51PSzU1FQzSEBZEvhKrueFwePucJh7w1AwEMcF5EGo47aoU3zw6N5oYbn0ZHozIlxZBsfWO6Im1zPMf6a5v3fY8gK00h8zyj3Z6"
);

function Membership({ profileInfo }) {
  const pathName = useSearchParams();

  async function handlePayment(getCurrentPlan) {
    const stripe = await stripePromise;
    const extractPriceId = await createPriceIdAction({
      amount: Number(getCurrentPlan?.price),
    });

    if (extractPriceId) {
      sessionStorage.setItem("currentPlan", JSON.stringify(getCurrentPlan));
      const result = await createStripePaymentAction({
        lineItems: [
          {
            price: extractPriceId?.id,
            quantity: 1,
          },
        ],
      });

      console.log(result);

      await stripe.redirectToCheckout({
        sessionId: result?.id,
      });
    }

    console.log(extractPriceId);
  }

  async function updateProfile() {
    const fetchCurrentPlanFromSessionStorage = JSON.parse(
      sessionStorage.getItem("currentPlan")
    );

    await updateProfileAction(
      {
        ...profileInfo,
        isPremiumUser: true,
        memberShipType: fetchCurrentPlanFromSessionStorage?.type,
        memberShipStartDate: new Date().toString(),
        memberShipEndDate: new Date(
          new Date().getFullYear() +
            (fetchCurrentPlanFromSessionStorage?.type === "basic"
              ? 1
              : fetchCurrentPlanFromSessionStorage?.plan === "teams"
              ? 2
              : 5),
          new Date().getMonth(),
          new Date().getDay()
        ),
      },
      "/membership"
    );
  }

  useEffect(() => {
    if (pathName.get("status") === "success") updateProfile();
  }, [pathName]);

  console.log(profileInfo);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline dark:border-white justify-between border-b pb-6 pt-24">
        <h1 className="text-3xl dark:text-white tracking-tight text-gray-950">
          {profileInfo?.isPremiumUser
            ? "You are a premium user"
            : "Choose Your Best Plan"}
        </h1>
        <div>
          {profileInfo?.isPremiumUser ? (
            <Button className="flex h-11 items-center justify-center px-5 bg-blue-600">
              {
                membershipPlans.find(
                  (planItem) => planItem.type === profileInfo?.memberShipType
                ).heading
              }
            </Button>
          ) : null}
        </div>
      </div>
      <div className="py-20 pb-24 pt-6">
        <div className="container mx-auto p-0 space-y-8">
          <div className="">
            {membershipPlans.map((plan, index) => (
              <CommonCard
                key={plan.type}
                icon={
                  <div className="flex justify-between dark:text-black">
                    <img 
                    src="https://utfs.io/f/67134cc3-f42f-4243-be46-c24460e51fc9-r5otpm.webp"
                    width={120}
                    />
                    <h1 className="font-bold text-2xl">{plan.heading}</h1>
                  </div>
                }
                title={`₹ ${plan.price} /year`}
                description={plan.type}
                footerContent={
                  profileInfo?.memberShipType === "enterprise" ||
                  (profileInfo?.memberShipType === "basic" && index === 0) ||
                  (profileInfo?.memberShipType === "teams" &&
                  index >= 0 &&
                  index < 2 ? null : (
                    <Button
                      onClick={() => handlePayment(plan)}
                      className="disabled:opacity-65  bg-yellow-300 flex h-11 items-center justify-center px-5 text-black"
                    >
                      {profileInfo?.memberShipType === "basic" ||
                      profileInfo?.memberShipType === "teams"
                        ? "Update Plan"
                        : "Get Premium"}
                    </Button>
                  ))
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">Membership Perks</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-lg">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span role="img" aria-label="Job Application">📄</span>
            </div>
            <div>
              <span className="font-bold">Apply to More Jobs:</span>
              <p>Apply to more than two jobs simultaneously and maximize your chances of landing the perfect role.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span role="img" aria-label="Job Match">🔍</span>
            </div>
            <div>
              <span className="font-bold">Tailored Job Matches:</span>
              <p>Receive personalized job recommendations based on your skills and preferences included in all the plans.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span role="img" aria-label="Exclusive Jobs">🌟</span>
            </div>
            <div>
              <span className="font-bold">Exclusive Job Listings:</span>
              <p>Access job opportunities not available to the general public and have a higher chance to land a job with the Silver or Gold membership.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span role="img" aria-label="Resources">📚</span>
            </div>
            <div>
              <span className="font-bold">Career Development Resources:</span>
              <p>Gain access to premium resources like resume builders, interview prep, and career coaching.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span role="img" aria-label="Networking">🤝</span>
            </div>
            <div>
              <span className="font-bold">Networking Opportunities:</span>
              <p>Connect with industry professionals and potential employers within our exclusive community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
