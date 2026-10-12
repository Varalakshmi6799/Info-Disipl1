export interface MediaAsset {
  id: string;
  code: string;
  title: string;
  city: string;
  location: string;
  landmark: string;
  type: 'Mega Unipole' | 'Digital DOOH (LED)' | 'Highway Gantry' | 'Cantilever' | 'Transit Hub / Metro' | 'Bus Shelter Network';
  dimensions: string; // e.g., "100 ft x 40 ft"
  sqft: number;
  illumination: 'Front-lit Ultra LED' | 'Back-lit LED Box' | 'P3.9 Digital LED Video Wall' | 'High-Power Solar LED' | 'Dual-Sided Backlit';
  dailyImpressions: string; // e.g. "450,000+ daily vehicles"
  facing: string; // e.g., "Traffic from Electronic City towards Silk Board"
  status: 'Available Immediately' | 'Available Next Month' | 'Reserved';
  imageUrl: string;
  nightImageUrl?: string;
  rateEstimate: string; // e.g., "₹2,80,000 / month"
  coordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  specs: string[];
  bannerImage: string;
  applications: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Unipoles' | 'Digital DOOH' | 'Highway Gantries' | 'Transit & Urban';
  city: string;
  location: string;
  dimensions: string;
  clientSector: string;
  completionYear: string;
  imageUrl: string;
  nightImageUrl?: string;
  description: string;
  highlights: string[];
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  targetCity: string;
  targetDate: string;
  estimatedBudget: string;
  message: string;
  selectedAssetId?: string;
}
