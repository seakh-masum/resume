import {
  COVER_LETTER_COMPANY_TEXT_ID,
  COVER_LETTER_PARAGRAPH_IDS,
  COVER_LETTER_ROLE_TEXT_ID,
  COVER_LETTER_TEMPLATE_DATASET_KEYS,
  COVER_LETTER_TEMPLATE_META_ID,
} from "@/const";
import type {
  CoverLetterClientTemplateDataset,
  CoverLetterClientTemplatePayload,
} from "@/types/features";

const getRequiredDatasetValue = (
  dataset: DOMStringMap,
  key: keyof CoverLetterClientTemplateDataset,
): string | null => {
  const datasetKey = COVER_LETTER_TEMPLATE_DATASET_KEYS[key];
  const value = dataset[datasetKey]?.trim();
  return value || null;
};

export const parseCoverLetterClientTemplatePayload =
  (): CoverLetterClientTemplatePayload | null => {
    const metaElement = document.getElementById(COVER_LETTER_TEMPLATE_META_ID);
    const paragraphOne = document.getElementById(
      COVER_LETTER_PARAGRAPH_IDS.one,
    );
    const paragraphTwo = document.getElementById(
      COVER_LETTER_PARAGRAPH_IDS.two,
    );
    const paragraphThree = document.getElementById(
      COVER_LETTER_PARAGRAPH_IDS.three,
    );

    if (!metaElement || !paragraphOne || !paragraphTwo || !paragraphThree) {
      return null;
    }

    const dataset = metaElement.dataset;

    const parsedDataset: Partial<CoverLetterClientTemplateDataset> = {};
    const requiredKeys = Object.keys(
      COVER_LETTER_TEMPLATE_DATASET_KEYS,
    ) as Array<keyof CoverLetterClientTemplateDataset>;

    for (const key of requiredKeys) {
      const value = getRequiredDatasetValue(dataset, key);
      if (!value) {
        return null;
      }
      parsedDataset[key] = value;
    }

    return {
      dataset: parsedDataset as CoverLetterClientTemplateDataset,
      paragraphElements: {
        one: paragraphOne,
        two: paragraphTwo,
        three: paragraphThree,
      },
    };
  };

export const getCoverLetterRoleText = (): string => {
  return (
    document.getElementById(COVER_LETTER_ROLE_TEXT_ID)?.textContent?.trim() ||
    ""
  );
};

export const getCoverLetterCompanyText = (): string => {
  return (
    document
      .getElementById(COVER_LETTER_COMPANY_TEXT_ID)
      ?.textContent?.trim() || ""
  );
};
