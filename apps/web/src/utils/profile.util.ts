type ProfileWithLegacyLocation = {
  location?: string;
};

export const normalizeProfileLocation = (
  profile: ProfileWithLegacyLocation | null | undefined,
  fallback = "",
): string => {
  return profile?.location || fallback;
};
