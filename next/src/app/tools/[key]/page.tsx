import { client } from "@/sanity/lib/client";
import { toolQuery } from "@/sanity/lib/query";
import SkillDetails from "@/components/dialogs/SkillDetails";

export const revalidate = 60;

interface Props {
  params: { key: string };
}

export default async function ToolDetailsPage({ params }: Props) {
  const tool = await client.fetch(
    toolQuery,
    { key: params.key },
    { next: { revalidate: 60 } },
  );

  if (!tool) return null;

  return <SkillDetails data={tool} feature="tools" />;
}
