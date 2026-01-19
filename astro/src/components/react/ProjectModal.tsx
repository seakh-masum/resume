// "use client";

// import { useEffect } from "react";
// // import type { JSX } from "astro";
// import ProjectDetails from "../modals/ProjectDetails.astro";
// import CloseIcon from "../icons/CloseIcon.astro";

// interface ProjectModalProps {
//   project: any;
//   onClose: () => void;
// }

// export default function ProjectModal({ project, onClose }: ProjectModalProps) {
//   if (!project) return null;

//   // ESC key closes modal
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm
//                  transition-opacity duration-300 ease-out opacity-0 animate-fadeIn"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white dark:bg-gray-900 w-full sm:max-w-2xl rounded-2xl p-6
//                    max-h-[90vh] overflow-y-auto transform transition-all duration-300
//                    translate-y-8 opacity-0 animate-slideUp relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-900
//                      dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
//         >
//           {/* Astro CloseIcon */}
//           <CloseIcon client:load />
//         </button>

//         {/* ProjectDetails Astro Component */}
//         <ProjectDetails data={project} client:load />
//       </div>
//     </div>
//   );
// }
