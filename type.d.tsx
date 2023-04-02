export type Data = {
  type: string;
  id: string;
  title: string;
  titleShort: string;
  titleSocial: string;
  titleSEO: string;
  authors: Author[];
  products: Product[];
  extra: SEODataExtra;
};

export interface SEOData {
  type: string;
  id: string;
  remoteId: null;
  status: boolean;
  title: string;
  titleShort: string;
  titleSocial: string;
  titleSEO: string;
  lead: string;
  path: string;
  articleTypes: ArticleType[];
  viafoura: Viafoura;
  hierarchy: SectionElement[];
  workflow: string;
  sections: SectionElement[];
  hero: OgImage[];
  photoArticle: boolean;
  sponsorPrefix: null;
  sponsorName: null;
  sponsorURL: null;
  sponsorImage: null;
  sponsorLogo: null;
  sponsorMoreFrom: any[];
  premium: boolean;
  sensitive: boolean;
  productStats: ProductStats;
  authors: Author[];
  updated: number;
  changed: number;
  publish: number;
  firstCreated: number;
  firstPublished: number;
  overrideDate: number;
  isBreakingNews: string;
  isLiveBlog: boolean;
  wordCount: number;
  imageCount: number;
  contentSource: ContentSource[];
  tags: null;
  chain: null;
  topics: ArticleType[];
  people: null;
  teams: null;
  events: null;
  publications: Publication[];
  sidebar: Sidebar;
  adConfig: number;
  commenting: boolean;
  priority: string;
  OGImages: OgImage[];
  body: Body[];
  products: Product[];
  extra: SEODataExtra;
  notes: any[];
  containsAffiliateLinks: boolean;
  grapeshot: string[];
  mantis: Mantis;
}

export interface OgImage {
  type: OGImageType;
  data: OGImageData;
}

export interface OGImageData {
  title: string;
  description: string;
  caption: null | string;
  copyright: string;
  credit: null;
  alt: null;
  doNotReuse: boolean;
  url: string;
  id: null;
  bundle: Bundle;
  mid: number;
  changed: string;
  created: string;
  uid: number;
  workflow: ContentSource;
  extra: PurpleExtra;
}

export enum Bundle {
  RemoteImage = "remote_image",
}

export interface PurpleExtra {
  imageSize: ImageSize;
}

export interface ImageSize {
  width: number;
  height: number;
}

export interface ContentSource {
  name: Name;
  id: number;
  uuid: string;
  firstLetter: FirstLetter;
}

export enum FirstLetter {
  I = "i",
  P = "p",
}

export enum Name {
  Internal = "Internal",
  Published = "Published",
}

export enum OGImageType {
  Image = "image",
}

export interface ArticleType {
  name: string;
  path: string;
  id: number;
  uuid: string;
  changed: string;
  firstLetter: string;
}

export interface Author {
  name: string;
  id: number;
  remoteId: null;
  email: string;
  firstName: null;
  lastName: null;
  jobTitle: string;
  imageUrl: string;
  twitter: string;
  facebook: null;
  location: string;
  path: string;
  description: string;
  firstLetter: string;
  extra: AuthorExtra;
}

export interface AuthorExtra {
  instagram: null;
  snapchat: null;
  linkedin: null;
  tiktok: null;
  headerImageUrl: null;
}

export interface Body {
  type: string;
  data: PurpleData;
}

export interface PurpleData {
  markup?: string;
  links?: Link[];
  align?: string;
  title?: string;
  location?: string;
  snippet?: string;
  amount?: string;
  vouchers?: Voucher[];
}

export interface Link {
  id: string;
  title: string;
  sponsored: boolean;
  href: string;
  image: string;
  media_type: string;
}

export interface Voucher {
  id: number;
  anchor_text: string;
  best_offer_id: number;
  best_offer_savings: string;
  best_offer_text: string;
  category: string;
  image: null | string;
  logo: string;
  name: string;
  url: string;
}

export interface SEODataExtra {
  featureTitle: string;
  isBreakingNews: string;
  authorInfo: string;
  isHideNewsletterSignUp: boolean;
  isDisableAutoGallery: string;
  isDisableAffiliate: string;
  isDisableImportUpdate: string;
  isDisableAllAds: string;
  isHideDisplayAds: string;
  isHideHardCodedAds: string;
  isHidePreRollAds: string;
  urlRedirect: string;
  seoDescription: string;
  canonicalUrl: string;
  starRating: string;
  isHideFromFIA: string;
  isHideFromAMP: string;
  isHideFromAppleNews: string;
  isShowSponsoredCapsule: string;
  displayDatePreference: string;
  liveblog: string;
  liveblogKeypoints: string;
  liveblogKeypointsTitle: string;
  verdict: Verdict[];
  silentUpdate: boolean;
  heroImageLocalCaption: string;
  heroImageLocalCopyright: string;
  products: Product[];
}

export type ProductEntity<T = unknown> = {
  type: string;
  data: T;
};

export interface Product {
  type: ProductType;
  data: ProductData;
}

export interface ProductData {
  title: string;
  id: number;
  uuid: string;
  stats: Stats;
  remoteID: null;
  vendorName: VendorName;
  price: string;
  vendorLink: string;
  priceComparison: string;
  image: OgImage;
  body: Verdict[];
  extra: FluffyExtra;
  created: string;
  changed: string;
  brand: string;
  model: string;
  bestFor: string;
  productId?: string;
  productIdType?: ProductIDType;
  rating: string;
  priceComparisonProvider: PriceComparisonProvider;
  information: Information;
}

export interface Verdict {
  type: VerdictType;
  data: VerdictData;
}

export interface VerdictData {
  markup: string;
}

export enum VerdictType {
  H2 = "H2",
  Markup = "markup",
}

export interface FluffyExtra {
  brand: string;
  model: string;
  bestFor: string;
  productId?: string;
  productIdType?: ProductIDType;
  rating: string;
  priceComparisonProvider: PriceComparisonProvider;
  information: Information;
}

export interface Information {
  productSpec: ProductSpec[];
  pros: Pros;
  cons: Cons;
}

export interface Cons {
  cons: string[];
  title?: string;
}

export interface ProductSpec {
  value: string;
  key: Key;
}

export enum Key {
  CameraRear = "Camera (rear)",
  CameraSelfie = "Camera (selfie)",
  RAM = "RAM",
  Screen = "Screen",
  Size = "Size",
  Storage = "Storage",
  The5G = "5G",
  Weight = "Weight",
}

export interface Pros {
  pros: string[];
}

export enum PriceComparisonProvider {
  Monetizer = "monetizer",
}

export enum ProductIDType {
  Asin = "ASIN",
}

export interface Stats {
  publication_id: number;
  affiliate_match: number;
  link_http_code: number;
  out_of_stock: number;
  timestamp: number;
  date: Date;
}

export enum VendorName {
  AOCOM = "AO.com",
  AmazonCoUk = "Amazon.co.uk",
  CurrysCoUk = "Currys.co.uk",
  Nokia = "Nokia",
}

export enum ProductType {
  Product = "product",
}

export interface SectionElement {
  name: string;
  path: string;
  id: number;
  uuid: string;
  sourceId: string;
  sourceName: string;
  sourcePath: string;
  changed: string;
  firstLetter: string;
  hierarchy: HierarchyHierarchy[];
  hierarchicalName: string;
  extra?: HierarchyExtra;
}

export interface HierarchyExtra {
  isHideCommenting: boolean;
  isHideNewsletterSignUp: boolean;
  isCommercial: boolean;
  isDisableAllSlots: boolean;
  isDisableSponsoredCapsule: boolean;
  field_disable_affiliates: boolean;
  takeover: boolean;
  commercialCampaign: boolean;
}

export interface HierarchyHierarchy {
  name: string;
  id: string;
}

export interface Mantis {
  lastModified: Date;
  ratings: RatingElement[];
  categories: Categories;
  sentiment: string;
  emotion: Emotion;
}

export interface Categories {
  iab: Iab[];
  watson: Manti[];
  mantis: Manti[];
}

export interface Iab {
  id: number;
  score: number;
}

export interface Manti {
  label: string;
  score: number;
}

export interface Emotion {
  anger: Anger;
  disgust: Anger;
  fear: Anger;
  joy: Anger;
  sadness: Anger;
}

export interface Anger {
  value: number;
  level: string;
}

export interface RatingElement {
  customer: string;
  rating: RatingEnum;
}

export enum RatingEnum {
  Amber = "AMBER",
  Green = "GREEN",
  Red = "RED",
}

export interface ProductStats {
  products: number;
  matched: number;
  unmatched: number;
  outOfStock: number;
  httpErrors: number;
}

export interface Publication {
  name: string;
  url: string;
  domain: string;
}

export interface Sidebar {
  type: string;
  data: SidebarData;
  layoutSettings: LayoutSetting[];
}

export interface SidebarData {
  name: string;
  id: number;
  updated: number;
  section: SectionElement;
}

export interface LayoutSetting {
  type: string;
  updated: null;
  adSource: string;
}

export interface Viafoura {
  count: number;
  ids: any[];
}
