import type { ResumeSectionItem } from "../models";

export type Education = ResumeSectionItem<"education"> & {
  id?: string;
};

export type StepperItem = ResumeSectionItem<"experience"> & {
  id?: string;
  link?: string;
  heading?: string;
};
