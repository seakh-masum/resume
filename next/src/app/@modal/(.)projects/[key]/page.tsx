import { client } from "@/sanity/lib/client";
import { projectQuery, skillQuery } from "@/sanity/lib/query";
import Modal from "@/components/ui/Modal";
import ProjectDetails from "@/components/dialogs/ProjectDetails";
import { ModalProps } from "@/types/common.type";

export default async function SkillModal({ params }: ModalProps) {
  const project = await client.fetch(
    projectQuery,
    { key: params.key },
    { next: { revalidate: 60 } },
  );

  if (!project) return null;

  return (
    <Modal title="">
      <ProjectDetails data={project} />
    </Modal>
  );
}
