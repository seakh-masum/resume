import { resumeQuery } from "@/lib/query";
import { client } from "@/sanity/lib/client";
import Content from "./content";

export default async function HomePage() {
  const resume = await client.fetch(resumeQuery);

  return <Content resume={resume} />;
}
