// import { useContext } from "react";
// import { motion } from "framer-motion";

// import { Card } from "../components/ui/Card";
// import { HobbyList } from "../components/features/Hobby";
// import { ProjectList } from "../components/features/Project";
// import { AboutMe } from "../components/features/AboutMe";
// import { Profile } from "../components/features/Profile";
// import { DownloadBtn } from "../components/features/DownloadBtn";
// import { CircleProgressGrid } from "@/components/ui/CircleProgressGrid";
// import { ExperienceHeading } from "@/components/ui/ExperienceHeading";
// import { Experience } from "@/components/features/Experience";
// import { Education } from "@/components/features/Education";

// import { ResponsiveContext } from "@/contexts/responsive.context";
// import { calculateTotalTenure } from "@/utils";
// import { pageVariant } from "@/styles/animations/motion";

// type Props = {
//   resume: any;
//   isLoading?: boolean;
// };

// export default function Content({ resume, isLoading = false }: Props) {
//   const isMobile = useContext(ResponsiveContext);

//   const tenures = resume.experience.map((exp: any) => ({
//     joiningDate: exp.joiningDate,
//     releaseDate: exp.releaseDate,
//   }));

//   const { years, months } = calculateTotalTenure(tenures);

//   return (
//     <motion.div
//       className="w-full bg-surface"
//       variants={pageVariant}
//       initial="hidden"
//       animate="visible"
//     >
//       <div
//         className="relative mx-auto my-0 max-w-7xl px-2 py-3 sm:p-3
//         print-container print:w-[210mm] print:min-h-[297mm] print:p-[5mm]"
//       >
//         <Profile
//           data={resume?.profile}
//           isLoading={isLoading}
//           contacts={resume?.contacts || []}
//         />

//         <div className="main-container flex gap-4 sm:flex-row flex-col">
//           <div className="left-side flex flex-col basis-[45%]">
//             <Card header="About Me">
//               <AboutMe
//                 introduction={resume?.profile?.introduction || ""}
//                 summary={resume?.profile?.summary || []}
//                 isLoading={isLoading}
//               />
//             </Card>

//             <Card header="Hobbies">
//               <HobbyList data={resume.hobbies} isLoading={isLoading} />
//             </Card>
//           </div>

//           <div className="right-side flex flex-col basis-[55%]">
//             <Card header="Skills">
//               <CircleProgressGrid
//                 features="skills"
//                 data={resume.skills}
//                 isLoading={isLoading}
//               />
//             </Card>

//             <Card header="Tools">
//               <CircleProgressGrid
//                 features="tools"
//                 data={resume.tools}
//                 isLoading={isLoading}
//               />
//             </Card>
//           </div>
//         </div>

//         <div className="no-break">
//           <Card header={<ExperienceHeading years={years} months={months} />}>
//             <Experience
//               data={resume.experience}
//               isMobile={isMobile}
//               isLoading={isLoading}
//             />
//           </Card>
//         </div>

//         <div className="main-container flex gap-4 sm:flex-row flex-col">
//           <div className="left-side flex flex-col basis-[45%]">
//             <Card header="Education">
//               <Education
//                 data={resume.education}
//                 isMobile={isMobile}
//                 isLoading={isLoading}
//               />
//             </Card>
//           </div>

//           <div className="right-side flex flex-col basis-[55%]">
//             <Card header="Projects">
//               <ProjectList data={resume.projects} isLoading={isLoading} />
//             </Card>
//           </div>
//         </div>

//         <DownloadBtn />
//       </div>
//     </motion.div>
//   );
// }
