import { client } from "@/sanity/lib/client";
import { skillQuery } from "@/sanity/lib/query";
import SkillDetails from "@/components/dialogs/SkillDetails";
import Modal from "@/components/ui/Modal";
import { ModalProps } from "@/types/common.type";

export default async function SkillModal({ params }: ModalProps) {
  const skill = await client.fetch(
    skillQuery,
    { key: params.key },
    { next: { revalidate: 60 } },
  );

  if (!skill) return null;

  return (
    <Modal title="">
      <SkillDetails data={skill} feature="skills" />
    </Modal>
  );
}
