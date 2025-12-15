"use client";

import { useState, useEffect, useContext } from "react";
import { Card } from "../components/ui/Card";
import { HobbyList } from "../components/features/Hobby";
import { ProjectList } from "../components/features/Project";
import { AboutMe } from "../components/features/AboutMe";
import { Profile } from "../components/features/Profile";
import { ResponsiveContext } from "@/contexts/responsive.context";
import { DownloadBtn } from "../components/features/DownloadBtn";
import { CircleProgressGrid } from "@/components/ui/CircleProgressGrid";
import { StepperList } from "@/components/ui/StepperList";
import { ExperienceHeading } from "@/components/ui/ExperienceHeading";

type ProfileType = {
  name?: string;
  image?: string;
  role?: string;
  introduction?: string;
  description?: string;
  // add other properties as needed
};
const Content = ({ resume }: any) => {
  const [profile, setProfile] = useState<ProfileType>({});
  const [isLoading, setLoading] = useState(true);
  const isMobile = useContext(ResponsiveContext);
  const [totalExperience, setTotalExperience] = useState<string | null>(null);

  const handleTotalExperienceData = (data: any) => {
    setTotalExperience(data);
  };

  console.log(resume);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const res = await fetch("/api/profile");
    const { data } = await res.json();
    setProfile(data[0]);
    setLoading(false);
  };

  return (
    <>
      <div className="w-full bg-surface">
        <div
          className="relative my-0 mx-auto px-1 py-3 sm:p-3 max-w-7xl print-container print:w-[210mm] print:min-h-[297mm]
         print:p-[5mm]"
        >
          <Profile
            name={resume?.profile?.name || ""}
            image={resume?.profile?.image || ""}
            role={profile?.role || ""}
            isLoading={isLoading}
            contacts={resume?.contacts || []}
          />
          <div className="flex gap-4 sm:flex-row flex-col main-container">
            <div className="flex flex-col basis-[45%] left-side">
              <Card header="About Me">
                <AboutMe
                  introduction={profile.introduction || ""}
                  description={
                    Array.isArray(profile.description)
                      ? profile.description
                      : [profile.description || ""]
                  }
                  isLoading={isLoading}
                />
              </Card>
              <Card header="Hobbies">
                <HobbyList />
              </Card>
            </div>
            <div className="flex flex-col basis-[55%] right-side">
              <Card header="Skills">
                <CircleProgressGrid features="skills" data={resume.skills} />
              </Card>
              <Card header="Tools">
                <CircleProgressGrid features="tools" data={resume.tools} />
              </Card>
            </div>
          </div>
          <div className="no-break">
            <Card
              header={<ExperienceHeading totalExperience={totalExperience} />}
            >
              <StepperList
                features={`experience`}
                isMobile={isMobile}
                onDataLoad={handleTotalExperienceData}
              />
            </Card>
          </div>
          <div className="flex gap-4 sm:flex-row flex-col main-container">
            <div className="flex flex-col basis-[45%] left-side">
              <Card header="Education">
                <StepperList features="education" isMobile={isMobile} />
              </Card>
            </div>
            <div className="flex flex-col basis-[55%] right-side">
              <Card header="Projects">
                <ProjectList />
              </Card>
            </div>
          </div>
          <DownloadBtn />
        </div>
      </div>
    </>
  );
};

export default Content;
