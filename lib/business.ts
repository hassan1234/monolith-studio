/**
 * Business identity shown on the site.
 *
 * These values are checked by mobile carriers when they review the A2P 10DLC
 * brand/campaign registration: the reviewer compares the legal entity name and
 * postal address published here against the ones on the brand application. If
 * they do not match, the campaign is rejected. Do not change `legalName` or
 * `address` without also updating the registration in the GoHighLevel Trust
 * Center, and vice versa.
 *
 * The address is the registered-agent mailing address, which is what was filed
 * on the brand application — not a public studio location.
 */
export const BUSINESS = {
  /** Trading name / DBA. */
  brand: "Monolith",
  /** Registered entity that owns the brand. */
  legalName: "Luxarq Property Group LLC",
  address: {
    line1: "254 Chapman Rd, Ste 208 #26710",
    city: "Newark",
    state: "DE",
    postalCode: "19702",
    country: "US",
  },
  email: "hello@monolithstudio.co",
  /**
   * The GoHighLevel number, and the one registered under the approved A2P
   * 10DLC brand. Publish this and no other: a client who texts the number on
   * the site must reach the CRM, and carriers expect the number that sends
   * the messages to be the number the business advertises. Changing it means
   * changing it in GoHighLevel too (Settings -> Phone System, and the
   * `phone` custom value).
   *
   * Display form; use `phoneHref` for tel: links.
   */
  phone: "571‑506‑6126",
  phoneHref: "+15715066126",
} as const;

/** "254 Chapman Rd, Ste 208 #26710, Newark, DE 19702" */
export const ADDRESS_ONE_LINE = [
  BUSINESS.address.line1,
  `${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.postalCode}`,
].join(", ");

/** "Monolith is a trade name of Luxarq Property Group LLC" */
export const ENTITY_LINE = `${BUSINESS.brand} is a trade name of ${BUSINESS.legalName}`;
