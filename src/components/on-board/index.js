"use client";
import { createProfileAction } from "@/actions";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  candidateOnboardFormControls,
  initialCandidateFormData,
  initialRecruiterFormData,
  recruiterOnboardFormControls,
} from "@/utils";
import { useUser } from "@clerk/nextjs";
import { TabsContent } from "@radix-ui/react-tabs";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import CommonForm from "../common-form";

const supabaseClient = createClient(
  "https://ateaxfooiijjqszouufm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZWF4Zm9vaWlqanFzem91dWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwMzgyMDEsImV4cCI6MjAzNDYxNDIwMX0.-8KTG_QGpSw0XnAyjpOCK-KFEvVvbOSKXFuYqWxkScs"
);

function OnBoard() {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData, setRecruiterFormData] = useState(
    initialRecruiterFormData
  );
  const [candidateFormData, setCandidateFormData] = useState(
    initialCandidateFormData
  );
  const [file, setFile] = useState(null);

  const currentAuthUser = useUser();
  const { user } = currentAuthUser;

  function handleFileChange(event) {
    event.preventDefault();
    setFile(event.target.files[0]);
  }

  async function handleUploadPdfToSupabase() {
    const { data, error } = await supabaseClient.storage
      .from("hirehub-public")
      .upload(`/public/${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log(data, error);
    if (data) {
      setCandidateFormData({
        ...candidateFormData,
        resume: data.path,
      });
    }
  }

  console.log(candidateFormData);

  useEffect(() => {
    if (file) handleUploadPdfToSupabase();
  }, [file]);

  function handleTabChange(value) {
    setCurrentTab(value);
  }

  function handleRecuiterFormValid() {
    return (
      recruiterFormData &&
      recruiterFormData.name.trim() !== "" &&
      recruiterFormData.companyName.trim() !== "" &&
      recruiterFormData.companyRole.trim() !== ""
    );
  }

  function handleCandidateFormValid() {
    return Object.keys(candidateFormData).every(
      (key) => candidateFormData[key].trim() !== ""
    );
  }

  async function createProfile() {
    const data =
      currentTab === "candidate"
        ? {
            candidateInfo: candidateFormData,
            role: "candidate",
            isPremiumUser: false,
            userId: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
          }
        : {
            recruiterInfo: recruiterFormData,
            role: "recruiter",
            isPremiumUser: false,
            userId: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
          };

    await createProfileAction(data, "/onboard");
  }

  console.log(candidateFormData);

  return (
    <div className="">
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome to onboarding
            </h1>
            <TabsList>
              <TabsTrigger value="candidate">Candidate</TabsTrigger>
              <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="candidate">
          <CommonForm
            action={createProfile}
            formData={candidateFormData}
            setFormData={setCandidateFormData}
            formControls={candidateOnboardFormControls}
            buttonText={"Onboard as a Candidate"}
            handleFileChange={handleFileChange}
            isBtnDisabled={!handleCandidateFormValid()}
          />
          <p>*Fill in all the details , if it still doesnt work try uploading a different resume</p><br>
          </br>
          In the worst case join in as recruiter
        </TabsContent>
        <TabsContent value="recruiter">
          <CommonForm
            formControls={recruiterOnboardFormControls}
            buttonText={"Onboard as a Recruiter"}
            formData={recruiterFormData}
            setFormData={setRecruiterFormData}
            isBtnDisabled={!handleRecuiterFormValid()}
            action={createProfile}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OnBoard;
