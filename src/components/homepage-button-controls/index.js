"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

function HomepageButtonControls({ user, profileInfo }) {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    router.refresh();
  }, []);

  function handleButtonClick(destination) {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      router.push(destination);
    }, 200);
  }

  return (
    <div className="flex space-x-4">
      <Button
        onClick={() => handleButtonClick("/jobs")}
        className={`flex h-11 items-center justify-center dark:bg-white bg-black px-5 transform transition-transform ${
          isAnimating ? "scale-95" : ""
        }`}
      >
        {user
          ? profileInfo?.role === "candidate"
            ? "Browse Jobs"
            : "Jobs Dashboard"
          : "Find Jobs"}
      </Button>
      <Button
        onClick={() =>
          handleButtonClick(
            user
              ? profileInfo?.role === "candidate"
                ? "/activity"
                : "/jobs"
              : "/jobs"
          )
        }
        className={`flex h-11 items-center dark:bg-white bg-black justify-center px-5 transform transition-transform ${
          isAnimating ? "scale-95" : ""
        }`}
      >
        {user
          ? profileInfo?.role === "candidate"
            ? "Your Activity"
            : "Post New Job"
          : "Post New Job"}
      </Button>
    </div>
  );
}

export default HomepageButtonControls;
