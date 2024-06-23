"use client";

import {
  getCandidateDetailsByIDAction,
  updateJobApplicationAction,
} from "@/actions";
import { createClient } from "@supabase/supabase-js";
import { Fragment } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";


const supabaseClient = createClient(
  "https://ateaxfooiijjqszouufm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZWF4Zm9vaWlqanFzem91dWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwMzgyMDEsImV4cCI6MjAzNDYxNDIwMX0.-8KTG_QGpSw0XnAyjpOCK-KFEvVvbOSKXFuYqWxkScs"
);

function CandidateList({
  jobApplications,
  currentCandidateDetails,
  setCurrentCandidateDetails,
  showCurrentCandidateDetailsModal,
  setShowCurrentCandidateDetailsModal,
}) {
  async function handleFetchCandidateDetails(getCurrentCandidateId) {
    const data = await getCandidateDetailsByIDAction(getCurrentCandidateId);

    if (data) {
      setCurrentCandidateDetails(data);
      setShowCurrentCandidateDetailsModal(true);
    }
  }

  console.log(currentCandidateDetails);

  function handlePreviewResume() {
    const { data } = supabaseClient.storage
      .from("hirehub-public")
      .getPublicUrl(currentCandidateDetails?.candidateInfo?.resume);

    const a = document.createElement("a");
    a.href = data?.publicUrl;
    a.setAttribute("download", "Resume.pdf");
    a.setAttribute("target", "_blank");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  async function handleUpdateJobStatus(getCurrentStatus) {
    let cpyJobApplicants = [...jobApplications];
    const indexOfCurrentJobApplicant = cpyJobApplicants.findIndex(
      (item) => item.candidateUserID === currentCandidateDetails?.userId
    );
    const jobApplicantsToUpdate = {
      ...cpyJobApplicants[indexOfCurrentJobApplicant],
      status: cpyJobApplicants[indexOfCurrentJobApplicant].status.concat(
        getCurrentStatus
      ),
      
    };

    console.log(jobApplicantsToUpdate, "jobApplicantsToUpdate");
    await updateJobApplicationAction(jobApplicantsToUpdate, "/jobs");
  }

  console.log(jobApplications);

  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-3 p-10 md:grid-cols-2 lg:grid-cols-3 ">
        {jobApplications && jobApplications.length > 0
          ? jobApplications.map((jobApplicantItem) => (
              <div
                key={jobApplicantItem?.candidateUserID}
                className="bg-white shadow-lg w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4 bg-gray-2 00"
              >
                <div className="px-4 my-6 flex justify-between items-center">
                  <h3 className="text-lg font-bold dark:text-black">
                    {jobApplicantItem?.name}
                  </h3>
                  <Button
                    onClick={() =>
                      handleFetchCandidateDetails(
                        jobApplicantItem?.candidateUserID
                      )
                    }
                    className="dark:bg-blue-300 flex h-11 items-center justify-center px-5"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))
          : null}
      </div>
      <Dialog
        open={showCurrentCandidateDetailsModal}
        onOpenChange={() => {
          setCurrentCandidateDetails(null);
          setShowCurrentCandidateDetailsModal(false);
        }}
      >
        <DialogContent>
          <div>
            <h1 className="text-lg font-bold dark:text-white text-black">
              Candidate Name:{" "}
              <span className="font-normal">
                {currentCandidateDetails?.candidateInfo?.name}
              </span>
            </h1>
            <h1 className="text-lg font-bold dark:text-white text-black">
              Email:{" "}
              <span className="font-normal">
                {currentCandidateDetails?.email}
              </span>
            </h1>
            <p className="text-lg font-bold dark:text-white text-black">
              Current Company:{" "}
              <span className="font-normal">
                {currentCandidateDetails?.candidateInfo?.currentCompany},
                {currentCandidateDetails?.candidateInfo?.currentJobLocation}
              </span>
            </p>
            <p className="text-lg font-bold dark:text-white text-black">
              Total Experience:{" "}
              <span className="font-normal">
                {currentCandidateDetails?.candidateInfo?.totalExperience} Years
              </span>
            </p>
            <p className="text-lg font-bold dark:text-white text-black">
              Salary:{" "}
              <span className="font-normal">
                {currentCandidateDetails?.candidateInfo?.currentSalary} LPA
              </span>
            </p>
            <p className="text-lg font-bold dark:text-white text-black">
              Notice Period:{" "}
              <span className="font-normal">
                {currentCandidateDetails?.candidateInfo?.noticePeriod} Days
              </span>
            </p>
            <div className="font-bold text-lg">Skill Set: </div>
              <div className="border-2">
                <div className="flex flex-wrap gap-4 ">
                {currentCandidateDetails?.candidateInfo?.skills
                  .split(",")
                  .map((skill) => (
                    <div
                      key={skill}
                      className=""
                    >
                      <h2 className=" ">
                        {skill},
                      </h2>
                </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="gap-3 pt-4">
            <Button
              onClick={handlePreviewResume}
              className="h-11 items-center justify-center px-5 bg-blue-500"
            >
              View Resume
            </Button>
            <div className="flex pt-5 gap-3 justify-between">
            <Button
              onClick={() => handleUpdateJobStatus("selected")}
              className="disabled:opacity-65 flex h-11 items-center justify-center px-5 bg-green-500"
              disabled={
                jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("selected") ||
                jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("rejected")
                  ? true
                  : false
              }
            >
              {jobApplications
                .find(
                  (item) =>
                    item.candidateUserID === currentCandidateDetails?.userId
                )
                ?.status.includes("selected")
                ? "Selected"
                : "Select"}
            </Button>
            <Button
              onClick={() => handleUpdateJobStatus("rejected")}
              className="disabled:opacity-65 flex h-11 items-center justify-center px-5 bg-red-500"
              disabled={
                jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("selected") ||
                jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("rejected")
                  ? true
                  : false
              }
            >
              {jobApplications
                .find(
                  (item) =>
                    item.candidateUserID === currentCandidateDetails?.userId
                )
                ?.status.includes("rejected")
                ? "Rejected"
                : "Reject"}
            </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

export default CandidateList;
