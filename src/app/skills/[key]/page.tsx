import { client } from "@/sanity/lib/client";
import { skillQuery } from "@/sanity/lib/query";
import SkillDetails from "@/components/dialogs/SkillDetails";

export const revalidate = 60;

interface Props {
  params: { key: string };
}

export default async function SkillModal({ params }: Props) {
  const skill = await client.fetch(
    skillQuery,
    { key: params.key },
    { next: { revalidate: 60 } },
  );

  if (!skill) return null;

  return <SkillDetails data={skill} feature="skills" />;
}
