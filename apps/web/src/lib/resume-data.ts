import { sanity } from "@/lib/sanity";
import { resumeQuery } from "@/lib/queries";
import type { ResumeData } from "@/types/models";

type ResumeCacheEntry = {
  data: ResumeData;
  fetchedAt: number;
};

const RESUME_CACHE_TTL_MS = 5 * 60 * 1000;
let resumeCache: ResumeCacheEntry | null = null;

const hasFreshCache = () => {
  if (!resumeCache) {
    return false;
  }

  return Date.now() - resumeCache.fetchedAt < RESUME_CACHE_TTL_MS;
};

interface GetResumeDataOptions {
  bypassCache?: boolean;
}

export const getResumeData = async ({
  bypassCache = false,
}: GetResumeDataOptions = {}): Promise<ResumeData> => {
  if (!bypassCache && hasFreshCache()) {
    return resumeCache!.data;
  }

  const data = (await sanity.fetch(resumeQuery)) as ResumeData;
  resumeCache = {
    data,
    fetchedAt: Date.now(),
  };
  return data;
};
