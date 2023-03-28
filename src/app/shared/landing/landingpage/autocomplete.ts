export interface AutocompleteOptionGroups {
    label: string;
    value: string;
    count?: number;
    items?: AutocompleteOptionGroups[];
  }