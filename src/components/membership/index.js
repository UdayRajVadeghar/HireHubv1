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
    const fetchCurrentPlanFromSessionStroage = JSON.parse(
      sessionStorage.getItem("currentPlan")
    );

    await updateProfileAction(
      {
        ...profileInfo,
        isPremiumUser: true,
        memberShipType: fetchCurrentPlanFromSessionStroage?.type,
        memberShipStartDate: new Date().toString(),
        memberShipEndDate: new Date(
          new Date().getFullYear() +
            fetchCurrentPlanFromSessionStorage?.type ===
          "basic"
            ? 1
            : fetchCurrentPlanFromSessionStroage?.plan === "teams"
            ? 2
            : 5,
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
        <h1 className="text-3xl font-serif dark:text-white tracking-tight text-gray-950">
          {profileInfo?.isPremiumUser
            ? "You are a premium user"
            : "Choose Your Best Plan"}
        </h1>
        <div>
          {profileInfo?.isPremiumUser ? (
            <Button className="flex h-11 items-center justify-center px-5">
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
                    width={100}
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
      <div>
        <div className="text-3xl font-bold">
        Membership Perks
        </div>
        <ul className="mt-8 text-xl lg:flex lg:gap-12">
        <li className="py-2 lg:py-0">
          <span className="font-bold">Apply more than two jobs:</span> Connect with industry professionals and potential employers within our exclusive community.
          </li>
          <li className="py-2 lg:py-0">
            <span className="font-bold">Tailored Job Matches for your profile:</span> Receive personalized job recommendations based on your skills and preferences included in <span className="font-bold">all the plans</span>.
          </li>
          <li className="py-2 lg:py-0">
          <span className="font-bold">Exclusive Job Listings:</span>Access job opportunities not available to the general public and have a higher chance to land a job with the <span className="font-bold">Silver or Gold membership</span>.
          </li>
          <li className="py-2 lg:py-0">
          <span className="font-bold">Career Development Resources:</span> Gain access to premium resources like resume builders, interview prep, and career coaching.
          </li>
          <li className="py-2 lg:py-0">
          <span className="font-bold">Networking Opportunities:</span> Connect with industry professionals and potential employers within our exclusive community.
          </li>
          
        </ul>


        
      </div>
    </div>
  );
}

export default Membership;
