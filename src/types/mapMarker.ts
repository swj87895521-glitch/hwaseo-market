export type MarketMapCategory =
  | '화서수산'
  | '화서야채'
  | '화서기름'
  | '화서육류'
  | '화서가게';

export type MarketMapFilter = 'All' | MarketMapCategory;

export type MarketMapFilterOption = {
  value: MarketMapFilter;
  label: string;
};

export type MarketMapCategorySummary = {
  id: MarketMapCategory;
  label: MarketMapCategory;
  shortLabel: string;
  markerColor: string;
  markerGlow: string;
  markerCountLabel: string;
  overviewDescription: string;
  categorySummary: string;
  helperDescription?: string;
};

export type MarketMapMarker = {
  id: string;
  category: MarketMapCategory;
  name: string;
  x: number;
  y: number;
  shortDescription: string;
  locationDescription: string;
  featuredItems: string[];
};

export type MarketMapOverviewItem = {
  title: string;
  description: string;
  markerColor: string;
};

export type MarketMapPanelContent =
  | {
      mode: 'overview';
      eyebrow: string;
      title: string;
      description: string;
      items: MarketMapOverviewItem[];
    }
  | {
      mode: 'category';
      eyebrow: string;
      title: string;
      description: string;
      helperDescription?: string;
      markerColor: string;
      markerCountLabel: string;
    }
  | {
      mode: 'store';
      eyebrow: string;
      title: string;
      description: string;
      category: string;
      markerColor: string;
      locationDescription: string;
      featuredItems: string[];
    };
