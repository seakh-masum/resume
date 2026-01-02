"use client";

import { useContext } from "react";
import { Card } from "../components/ui/Card";
import { HobbyList } from "../components/features/Hobby";
import { ProjectList } from "../components/features/Project";
import { AboutMe } from "../components/features/AboutMe";
import { Profile } from "../components/features/Profile";
import { ResponsiveContext } from "@/contexts/responsive.context";
import { DownloadBtn } from "../components/features/DownloadBtn";
import { CircleProgressGrid } from "@/components/ui/CircleProgressGrid";
import { ExperienceHeading } from "@/components/ui/ExperienceHeading";
import { Experience } from "@/components/features/Experience";
import { Education } from "@/components/features/Education";
import { calculateTotalTenure } from "@/utils";
import { motion } from "framer-motion";
import { pageVariant } from "@/styles/animations/motion";

const Content = ({ resume, isLoading }: any) => {
  const isMobile = useContext(ResponsiveContext);

  console.log("resume", resume);

  const tenures = resume.experience.map((exp: any) => ({
    joiningDate: exp.joiningDate,
    releaseDate: exp.releaseDate,
  }));
  const { years, months } = calculateTotalTenure(tenures);

  return (
    <>
      <motion.div
        className="w-full bg-surface"
        variants={pageVariant}
        initial="hidden"
        animate="visible"
      >
        <div
          className="relative my-0 mx-auto px-2 py-3 sm:p-3 max-w-7xl print-container print:w-[210mm] print:min-h-[297mm]
         print:p-[5mm]"
        >
          <Profile
            data={resume?.profile}
            isLoading={isLoading}
            contacts={resume?.contacts || []}
          />
          <div className="flex gap-4 sm:flex-row flex-col main-container">
            <div className="flex flex-col basis-[45%] left-side">
              <Card header="About Me">
                <AboutMe
                  introduction={resume?.profile.introduction || ""}
                  summary={resume?.profile?.summary || []}
                  isLoading={isLoading}
                />
              </Card>
              <Card header="Hobbies">
                <HobbyList data={resume.hobbies} isLoading={isLoading} />
              </Card>
            </div>
            <div className="flex flex-col basis-[55%] right-side">
              <Card header="Skills">
                <CircleProgressGrid
                  features="skills"
                  data={resume.skills}
                  isLoading={isLoading}
                />
              </Card>
              <Card header="Tools">
                <CircleProgressGrid
                  features="tools"
                  data={resume.tools}
                  isLoading={isLoading}
                />
              </Card>
            </div>
          </div>
          <div className="no-break">
            <Card header={<ExperienceHeading years={years} months={months} />}>
              <Experience
                data={resume.experience}
                isMobile={isMobile}
                isLoading={isLoading}
              />
            </Card>
          </div>
          <div className="flex gap-4 sm:flex-row flex-col main-container">
            <div className="flex flex-col basis-[45%] left-side">
              <Card header="Education">
                <Education
                  data={resume.education}
                  isMobile={isMobile}
                  isLoading={isLoading}
                />
              </Card>
            </div>
            <div className="flex flex-col basis-[55%] right-side">
              <Card header="Projects">
                <ProjectList data={resume.projects} isLoading={isLoading} />
              </Card>
            </div>
          </div>
          <DownloadBtn />
        </div>
      </motion.div>
    </>
  );
};

export default Content;
