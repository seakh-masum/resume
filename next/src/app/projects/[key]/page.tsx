import { client } from "@/sanity/lib/client";
import { projectQuery } from "@/sanity/lib/query";
import ProjectDetails from "@/components/dialogs/ProjectDetails";
import { ModalProps } from "@/types/common.type";

export default async function ProjectDetailsPage({ params }: ModalProps) {
  const project = await client.fetch(
    projectQuery,
    { key: params.key },
    { next: { revalidate: 60 } },
  );

  if (!project) return null;

  return <ProjectDetails data={project} />;
}
