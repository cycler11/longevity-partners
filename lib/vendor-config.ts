import type { Vendor } from "./types"

export const vendorConfig: Record<
  Vendor,
  {
    name: string
    baseUrl?: string
    affiliateParam?: string
  }
> = {
  roka: {
    name: "ROKA",
    baseUrl: "https://www.roka.com",
    affiliateParam: "utm_source=longevitybase",
  },
  mito: {
    name: "Mito Red Light",
    baseUrl: "https://mitoredlight.com",
    affiliateParam: "utm_source=longevitybase",
  },
  dexcom: {
    name: "Dexcom",
    baseUrl: "https://www.dexcom.com",
    affiliateParam: "utm_source=longevitybase",
  },
  trudiagnostic: {
    name: "TruDiagnostic",
    baseUrl: "https://www.trudiagnostic.com",
    affiliateParam: "utm_source=longevitybase",
  },
  elysium: {
    name: "Elysium Health",
    baseUrl: "https://www.elysiumhealth.com",
    affiliateParam: "utm_source=longevitybase",
  },
  glycanage: {
    name: "GlycanAge",
    baseUrl: "https://glycanage.com",
    affiliateParam: "utm_source=longevitybase",
  },
  theragun: {
    name: "Theragun",
    baseUrl: "https://www.therabody.com",
    affiliateParam: "utm_source=longevitybase",
  },
  other: {
    name: "Other",
  },
}

export const trustLogos = [
  { vendor: "roka" as Vendor, name: "ROKA" },
  { vendor: "mito" as Vendor, name: "Mito Red Light" },
  { vendor: "dexcom" as Vendor, name: "Dexcom" },
  { vendor: "trudiagnostic" as Vendor, name: "TruDiagnostic" },
  { vendor: "elysium" as Vendor, name: "Elysium Health" },
  { vendor: "glycanage" as Vendor, name: "GlycanAge" },
  { vendor: "theragun" as Vendor, name: "Theragun" },
]
