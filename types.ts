// TODO move these to the types package
export type BaselineSpeciesEntry = {
  id: number;
  name: string;
  isActive: boolean;
  publicNotes: string;
  privateNotes: string;
  curatorReviewCount: number;
  researchGradeReviewCount: number;
  totalObservationCount: number;
};

export type BaselineSpecies = {
  validationDate: string;
  data: BaselineSpeciesEntry[];
};

export type ProjectSettings = {
  main: {
    curators: string;
    taxonId: string;
    placeId: string;
    omitObservationsByUsers: string;
    baselineCompletionDate: string;
  };
  taxonChanges: {
    enabled: boolean;
    omitTaxonChangeIds: number[];
  };
  newAdditions: {
    enabled: boolean;
  };
};
