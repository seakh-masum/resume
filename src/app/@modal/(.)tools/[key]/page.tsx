import { client } from "@/sanity/lib/client";
import { toolQuery } from "@/sanity/lib/query";
import SkillDetails from "@/components/dialogs/SkillDetails";
import Modal from "@/components/ui/Modal";
import { ModalProps } from "@/types/common.type";

export default async function ToolDetailsModal({ params }: ModalProps) {
  const tool = await client.fetch(
    toolQuery,
    { key: params.key },
    { next: { revalidate: 60 } },
  );

  if (!tool) return null;

  return (
    <Modal title="">
      <SkillDetails data={tool} feature="tools" />
    </Modal>
  );
}
