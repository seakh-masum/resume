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

type ProfileType = {
  name?: string;
  image?: string;
  role?: string;
  introduction?: string;
  description?: string;
  // add other properties as needed
};

function App() {
  const [profile, setProfile] = useState<ProfileType>({});
  const [isLoading, setLoading] = useState(true);
  const isMobile = useContext(ResponsiveContext);

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
      {/* {loading ? ( */}
      <div className="w-full bg-white dark:bg-neutral-950">
        <div className="relative my-0 mx-auto p-3 max-w-7xl print-container">
          <Profile
            name={profile?.name}
            image={profile?.image}
            role={profile?.role}
            isLoading={isLoading}
            isMobile={isMobile}
          />
          <div className="flex gap-4 sm:flex-row flex-col main-container">
            <div className="flex flex-col basis-[45%] left-side">
              <Card header="About Me">
                <AboutMe
                  introduction={profile.introduction}
                  description={profile.description}
                  isLoading={isLoading}
                />
              </Card>
              <Card header="Hobbies">
                <HobbyList />
              </Card>
            </div>
            <div className="flex flex-col basis-[55%] right-side">
              <Card header="Skills">
                <CircleProgressGrid features="skills" />
              </Card>
              <Card header="Tools">
                <CircleProgressGrid features="tools" />
              </Card>
            </div>
          </div>
          <div className="no-break">
            <Card header="Experience">
              {/* <Experience isMobile={isMobile} /> */}
              <StepperList features="experience" isMobile={isMobile} />
            </Card>
          </div>
          <div className="flex gap-4 sm:flex-row flex-col main-container">
            <div className="flex flex-col basis-[45%] left-side">
              <Card header="Education">
                {/* <Education isMobile={isMobile} /> */}
                <StepperList features="education" isMobile={isMobile} />
              </Card>
            </div>
            <div className="flex flex-col basis-[55%] right-side">
              <Card header="Projects">
                <ProjectList />
              </Card>
            </div>
          </div>
          {/* <DownloadBtn /> */}
          <DownloadBtn />
        </div>
      </div>
    </>
  );
}

export default App;
