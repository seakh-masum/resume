import { resumeQuery } from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";
import Content from "./content";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  let isLoading = true;
  const resume = await client.fetch(resumeQuery).then(() => {
    isLoading = false;
    return client.fetch(resumeQuery);
  });

  return <Content resume={resume} isLoading={isLoading} />;
}
