"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer";
import { Fragment, useState } from "react";

import { createJobApplicationAction } from "@/actions";
import CommonCard from "../common-card";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

function CandidateJobCard({ jobItem, profileInfo, jobApplications }) {
  const [showJobDetailsDrawer, setShowJobDetailsDrawer] = useState(false);
  console.log(jobApplications, "jobApplications");
  const { toast } = useToast();

  async function handlejobApply() {
    if (!profileInfo?.isPremiumUser && jobApplications.length >= 3) {
      
      toast({
        variant: "destructive",
        title: "You can apply max 2 jobs.",
        description: "Please opt for membership to apply for more jobs",
      });
      return;
    }
    else{
      toast({
        variant: "",
        title: "Thank you for Applying.",
        description: "We will get back to you soon!",
      });
    }

    await createJobApplicationAction(
      {
        recruiterUserID: jobItem?.recruiterId,
        name: profileInfo?.candidateInfo?.name,
        email: profileInfo?.email,
        candidateUserID: profileInfo?.userId,
        status: ["Applied"],
        jobID: jobItem?._id,
        jobAppliedDate: new Date().toLocaleDateString(),
      },
      "/jobs"
    );
    setShowJobDetailsDrawer(false);
  }

  return (
    <Fragment>
      <Drawer
        open={showJobDetailsDrawer}
        onOpenChange={setShowJobDetailsDrawer}
      >
        <CommonCard
          title={jobItem?.title}
          description={jobItem?.companyName}
          footerContent={
            <Button
              onClick={() => setShowJobDetailsDrawer(true)}
              className=" bg-red-600 flex h-11 items-center justify-center px-5"
            >
              View Details
            </Button>
          }
        />
        <DrawerContent className="p-6">
          <DrawerHeader className="px-0">
            <div className="flex justify-between">
              <DrawerTitle className="text-4xl dark:text-white font-extralight text-gray-800">
                <span className="font-bold">Role: </span>{jobItem?.title}
              </DrawerTitle>
              <div className="flex gap-3">
                <Button
                  onClick={handlejobApply}
                  disabled={
                    jobApplications.findIndex(
                      (item) => item.jobID === jobItem?._id
                    ) > -1
                      ? true
                      : false
                  }
                  className="disabled:opacity-65 flex h-11 items-center justify-center px-5 bg-green-500"
                >
                  {jobApplications.findIndex(
                    (item) => item.jobID === jobItem?._id
                  ) > -1
                    ? "Applied"
                    : "Apply"}
                </Button>
                <Button
                  className=" flex h-11 items-center justify-center px-5"
                  onClick={() => setShowJobDetailsDrawer(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DrawerHeader>
          <DrawerDescription className="text-2xl dark:text-white  font-medium text-black">
            <span className="font-bold">Description: </span> 
            {jobItem?.description} <br></br>
            <span className="text-2xl dark:text-white  font-medium text-black">
              <span className="font-bold">Location :</span>
              {jobItem?.location}
            </span>
          </DrawerDescription>
          <div className=" ">
            <h2 className="text-2xl dark:text-black  text-black">
            <span className="font-bold">Job Type : </span> 
               {jobItem?.type}
            </h2>
          </div>
          <h3 className="text-2xl font-medium text-black">
          <span className="font-bold">Experience: </span> 
            {jobItem?.experience}
          </h3>
          <h3 className="text-2xl font-medium text-black">
          <span className="font-bold">Skills Required: </span> 
            {jobItem?.skills}
          </h3>
          <div className="flex gap-4 mt-6">
            {jobItem?.skills.split(",").map((skillItem) => (
              <div className="w-[100px] flex justify-center items-center h-[35px] dark:bg-white   rounded-[4px]">
                <h2 className="text-[13px] font-medium text-white">
                  {}
                </h2>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}

export default CandidateJobCard;
