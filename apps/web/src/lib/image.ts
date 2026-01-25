import createImageUrlBuilder, {
  type SanityImageSource,
} from "@sanity/image-url";

export const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
/**
 * Sanity Image URL builder
 */
const builder = createImageUrlBuilder({
  projectId: projectId,
  dataset: dataset,
});

export const urlFor = (source: SanityImageSource) => builder.image(source);
