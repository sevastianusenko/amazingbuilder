// Business facts. Change them here only. Anything marked TODO is waiting on the client.
export const site = {
  name: "Amazing Builders",
  descriptor: "Painting & Remodeling",
  fullName: "Amazing Builders Painting & Remodeling",
  legalName: "Amazing Builders LLC",
  owner: "Dennis Drahni", // TODO: confirm spelling the owner wants (Denys / Dennis)
  url: "https://www.amazingbuilderspa.com",
  phone: "(267) 917-3986",
  phoneHref: "tel:+12679173986",
  phoneE164: "+1-267-917-3986",
  smsHref: "sms:+12679173986",
  email: "info@amazingbuilderspa.com",
  address: {
    street: "3564 S 5th Ave",
    city: "Myerstown",
    state: "PA",
    zip: "17067",
    country: "US",
  },
  // Google Business Profile pin.
  geo: { lat: 40.3002, lng: -76.3115 },
  hoursText: "Monday to Friday, 7:00 am to 5:00 pm",
  openingHours: ["Mo-Fr 07:00-17:00"],
  // PA Home Improvement Contractor registration. null hides every HIC line on the site.
  hic: "T002681" as string | null,
  // Temporary number from the PA Attorney General (letter of May 4, 2026). The OAG registration system was down
  // after a cyber incident; when the permanent number arrives, put it in `hic` and set this to null.
  hicNote: "Temporary registration number issued by the PA Attorney General in May 2026. The permanent number replaces it once the state finishes processing." as string | null,
  hicUrl: "https://hicsearch.attorneygeneral.gov/",
  insurer: null as string | null, // TODO
  google: {
    rating: 5.0,
    count: 30,
    placeId: "ChIJJU-vNVDX5GoRm32T1KMt2o8",
    mapsUrl: "https://maps.google.com/?cid=10365647674015972763",
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJJU-vNVDX5GoRm32T1KMt2o8",
  },
  facebook: null as string | null, // TODO
  counties: ["Lebanon County", "Lancaster County", "Dauphin County"],
  callbackPromise: "Calls and texts are answered during work hours and returned the same day",
  studio: { name: "Seva Web Studio", url: "https://seva-web-studio.com/" },
  copyrightYear: 2026,
} as const;

export type Faq = { q: string; a: string };

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
