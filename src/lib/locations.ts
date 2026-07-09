export type FAQ = {
  q: string;
  a: string;
};

export type Location = {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  introParagraphs: string[];
  neighborhoods: string[];
  faq: FAQ[];
};

export const locations: Location[] = [
  {
    slug: "covington",
    name: "Covington",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "St. Tammany Parish",
    metaTitle: "Outdoor Lighting in Covington, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor is based in Covington, Louisiana. We install landscape lighting, holiday displays, and permanent lighting for homes and businesses throughout St. Tammany Parish.",
    heroHeading: "Outdoor Lighting in Covington, Louisiana",
    heroSubheading: "Our home base. Every project here is personal.",
    introParagraphs: [
      "Covington is where we live, work, and raise our family — so when we install lighting here, we take it personally. We know these streets, these neighborhoods, and the character of homes throughout St. Tammany Parish. From the grand oaks lining Lee Road to the newer construction in Bedico Creek and Stonebridge, we understand what makes a Covington property worth showing off after dark.",
      "Our most popular services in Covington are permanent landscape lighting and holiday lighting. Covington homeowners tend to care deeply about curb appeal year-round, and our low-voltage LED systems are built to last in Louisiana's climate — holding up through humid summers, oak pollen season, and everything in between. Same-week availability is almost always possible for Covington projects.",
    ],
    neighborhoods: [
      "Old Covington",
      "Beau Chene",
      "RiverOak",
      "Bedico Creek",
      "Stonebridge",
      "Lee Road Corridor",
      "New River District",
      "River Forest",
    ],
    faq: [
      {
        q: "Do you serve all of Covington, including the rural areas outside of town?",
        a: "Yes. We serve the full St. Tammany Parish area including areas outside Covington's city limits. If you're in the greater Covington area — including communities along Hwy 190, the Lee Road corridor, or rural areas near Folsom Road — we can get to you.",
      },
      {
        q: "How long does a typical landscape lighting installation take in Covington?",
        a: "Most residential landscape lighting jobs in the Covington area are completed in one day. Larger properties or commercial projects may take two days. We'll give you a clear timeline during your free estimate.",
      },
      {
        q: "Can you design lighting around our oak trees?",
        a: "Absolutely — uplighting mature oak trees is one of our specialties and one of the most dramatic effects we create. Covington has some of the most beautiful oaks in Louisiana, and a well-placed uplight can transform a tree into a nighttime focal point. We use fixtures specifically designed to protect root systems and withstand years of outdoor exposure.",
      },
      {
        q: "Do you offer permanent holiday lighting installation in Covington?",
        a: "Yes. Our Permanent Lighting service installs hidden, programmable LED channels along your roofline and architectural features. You control the colors and patterns through an app — so you can go from Christmas red and green to Mardi Gras purple and gold to everyday white without a single ladder or tangled cord.",
      },
    ],
  },
  {
    slug: "mandeville",
    name: "Mandeville",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "St. Tammany Parish",
    metaTitle: "Outdoor Lighting in Mandeville, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor installs landscape lighting, holiday displays, and permanent lighting for homes and businesses in Mandeville, Louisiana. Serving the Northshore since 2015.",
    heroHeading: "Outdoor Lighting in Mandeville, Louisiana",
    heroSubheading: "Lakefront homes. Tree-lined streets. Lighting that fits.",
    introParagraphs: [
      "Mandeville's character is defined by its lakefront setting, mature trees, and a mix of historic cottages and newer luxury homes along the north shore of Lake Pontchartrain. Lighting in Mandeville isn't one-size-fits-all — a home on the lakefront has different needs and opportunities than a neighborhood property in Pelican Crossing or a historic Creole cottage near Old Mandeville. We know the difference, and we design accordingly.",
      "We've completed dozens of projects throughout Mandeville, from subtle path lighting in quiet residential streets to full roofline permanent lighting systems on lakefront properties. Mandeville homeowners are some of our most discerning clients — they know exactly how they want their property to feel after dark, and we're here to make that happen.",
    ],
    neighborhoods: [
      "Old Mandeville",
      "Lakeshore",
      "Pelican Crossing",
      "Lewisburg",
      "The Preserve",
      "Fontainebleau",
      "Lake Harbor",
    ],
    faq: [
      {
        q: "Do you serve lakefront properties on Lake Pontchartrain?",
        a: "Yes, and we love them. Lakefront properties present unique design opportunities — lighting can frame water views, highlight docks and boathouses, and create a dramatic reflection on the water. We use fixtures rated for high-humidity coastal environments.",
      },
      {
        q: "We have a historic cottage in Old Mandeville. Can you do lighting that fits the style?",
        a: "Definitely. Older Creole and cottage-style homes require a more thoughtful approach than modern construction. We design lighting that enhances the architectural character without looking out of place — warm-toned fixtures, subtle placement, and nothing that overwhelms the home's existing charm.",
      },
      {
        q: "What's the most popular service you install in Mandeville?",
        a: "Landscape lighting is the top request — specifically uplighting for trees and architectural features. Holiday lighting is a very close second. Mandeville neighborhoods take their holiday displays seriously, and we see a lot of repeat clients who upgrade each season.",
      },
    ],
  },
  {
    slug: "new-orleans",
    name: "New Orleans",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Orleans Parish",
    metaTitle: "Outdoor Lighting in New Orleans, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves New Orleans with professional landscape lighting, holiday displays, event lighting, and permanent lighting. Serving Uptown, Garden District, Lakeview, and beyond.",
    heroHeading: "Outdoor Lighting in New Orleans, Louisiana",
    heroSubheading: "A city built for celebration. We light it up.",
    introParagraphs: [
      "New Orleans is unlike anywhere else — and outdoor lighting here isn't just about curb appeal. It's about extending the city's spirit after dark. Whether you're in the Garden District, Uptown, Lakeview, or Mid-City, your home deserves lighting that matches the character of its neighborhood. We install landscape lighting, holiday displays, event lighting, and permanent programmable systems for residential and commercial properties throughout Orleans Parish.",
      "We've worked on everything from Victorian doubles in the Marigny to contemporary renovations in Mid-City to commercial storefronts on Magazine Street. New Orleans architecture is some of the most distinctive in the country, and we take the design process seriously — no cookie-cutter installs. We walk the property, understand the architecture, and create lighting that feels like it belongs.",
    ],
    neighborhoods: [
      "Garden District",
      "Uptown",
      "Lakeview",
      "Mid-City",
      "Metairie Ridge",
      "Broadmoor",
      "Gentilly",
      "Lakefront",
      "Bywater",
      "Algiers Point",
    ],
    faq: [
      {
        q: "Do you serve all of New Orleans or only certain neighborhoods?",
        a: "We serve all of Orleans Parish, including Uptown, Garden District, Mid-City, Lakeview, Gentilly, Algiers, and the Westbank. Some neighborhoods may have longer lead times than our Northshore locations, so we recommend booking early for holiday season.",
      },
      {
        q: "Can you do event lighting for weddings and private parties in New Orleans?",
        a: "Absolutely. New Orleans is one of the best event markets in the country, and outdoor event lighting is one of our most requested services here. We work with private homes, wedding venues, courtyards, and commercial properties. String lighting, uplighting, bistro lighting, and custom layouts — we've done it all.",
      },
      {
        q: "What's the best outdoor lighting for a historic New Orleans home?",
        a: "For shotgun houses, Creole cottages, and Victorian doubles, we typically recommend warm-white (2700K–3000K) low-voltage LED fixtures. The goal is to enhance the architectural details — ironwork, shutters, gallery rails, brick facades — not overpower them. We'll walk the property with you and show you before-and-after examples before we install anything.",
      },
      {
        q: "Do you install commercial outdoor lighting in New Orleans?",
        a: "Yes. We work with restaurants, bars, retail storefronts, office buildings, and mixed-use properties throughout New Orleans. Commercial lighting on Magazine Street, Frenchmen Street, or Oak Street can directly impact foot traffic and customer perception — and we understand that.",
      },
      {
        q: "How far in advance should I book for holiday lighting in New Orleans?",
        a: "For the holiday season, we recommend booking by October at the latest. New Orleans is one of our busiest markets in November and December. If you're reading this after October, contact us anyway — we often have cancellations and can work in last-minute bookings.",
      },
    ],
  },
  {
    slug: "metairie",
    name: "Metairie",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Jefferson Parish",
    metaTitle: "Outdoor Lighting in Metairie, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor installs landscape lighting, holiday lighting, and permanent lighting in Metairie, Louisiana. One of our most active service areas in Jefferson Parish.",
    heroHeading: "Outdoor Lighting in Metairie, Louisiana",
    heroSubheading: "One of our most active service areas.",
    introParagraphs: [
      "Metairie is one of the neighborhoods where we work most consistently — and for good reason. The density of residential properties, the pride homeowners take in their lawns and landscaping, and the strong holiday lighting culture in Jefferson Parish all make it one of our busiest markets year-round. From Bucktown to Metairie Ridge to Fat City, we've installed lighting on hundreds of properties throughout the parish.",
      "Metairie homes vary widely — older post-war ranches, classic New Orleans-style doubles, and newer construction all require different approaches. We don't show up with a standard package. We walk the property, understand what you're trying to achieve, and design a system that fits the home and the neighborhood. Most Metairie installations are completed in a single day.",
    ],
    neighborhoods: [
      "Bucktown",
      "Metairie Ridge",
      "Fat City",
      "Old Metairie",
      "Elmwood",
      "Bonnabel",
      "Lakeway",
      "West Esplanade",
    ],
    faq: [
      {
        q: "Do you do holiday lighting in Metairie?",
        a: "Yes — Metairie is one of our busiest areas for holiday lighting. We hang, we maintain, and we take it all down after the season. You don't touch a single bulb. Book early — spots fill up by November.",
      },
      {
        q: "What neighborhoods in Metairie do you serve?",
        a: "All of them. We serve Old Metairie, Metairie Ridge, Bucktown, Fat City, Elmwood, West Esplanade, and every neighborhood in between. We also serve Harahan, River Ridge, and other Jefferson Parish communities.",
      },
      {
        q: "Can you upgrade our existing landscape lighting?",
        a: "Yes. If you have an older low-voltage system that's underperforming — dim bulbs, outdated fixtures, or poor placement — we can assess it and either retrofit it with modern LED fixtures or design a full replacement. We're honest about what needs replacing and what doesn't.",
      },
    ],
  },
  {
    slug: "baton-rouge",
    name: "Baton Rouge",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "East Baton Rouge Parish",
    metaTitle: "Outdoor Lighting in Baton Rouge, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Baton Rouge with landscape lighting, holiday displays, and permanent outdoor lighting. Serving the Capital City and surrounding East Baton Rouge Parish neighborhoods.",
    heroHeading: "Outdoor Lighting in Baton Rouge, Louisiana",
    heroSubheading: "Serving the Capital City and surrounding areas.",
    introParagraphs: [
      "Baton Rouge is a growing market for us and a city where outdoor lighting is becoming an expectation rather than a luxury — especially in neighborhoods like Bocage, Country Club of Louisiana, and the Garden District. Whether you're near the LSU campus, in one of the newer developments off Jefferson Highway, or in an established neighborhood closer to downtown, we bring the same attention to detail we deliver on the Northshore.",
      "We serve all of East Baton Rouge Parish and regularly take on projects in adjacent areas including Zachary, Central, and Baker. Baton Rouge projects typically require a bit more lead time than our core Northshore areas, but we're fully committed to delivering the same quality and service we're known for locally.",
    ],
    neighborhoods: [
      "Bocage",
      "Country Club of Louisiana",
      "Garden District (BR)",
      "Mid City",
      "Broadmoor",
      "University Lakes",
      "Kleinpeter",
      "Shenandoah",
    ],
    faq: [
      {
        q: "How far is Be The Light Decor from Baton Rouge?",
        a: "We're based in Covington, which is roughly an hour from Baton Rouge. We regularly serve Baton Rouge clients and schedule work in the area on specific days each week to keep travel efficient and costs down for our customers.",
      },
      {
        q: "Do you offer the same services in Baton Rouge as on the Northshore?",
        a: "Yes — all five of our services are available in the Baton Rouge area: landscape lighting, holiday lighting, permanent lighting, event lighting, and commercial lighting. The full scope of what we do is available to you.",
      },
      {
        q: "Can you handle a large commercial property in Baton Rouge?",
        a: "Absolutely. We've completed commercial projects across Southeast Louisiana and bring the same professionalism to Baton Rouge. Call us to discuss your project — we can schedule an on-site consultation.",
      },
    ],
  },
  {
    slug: "slidell",
    name: "Slidell",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "St. Tammany Parish",
    metaTitle: "Outdoor Lighting in Slidell, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Slidell, Louisiana with landscape lighting, holiday displays, and permanent outdoor lighting. Covering all of St. Tammany Parish east of the lake.",
    heroHeading: "Outdoor Lighting in Slidell, Louisiana",
    heroSubheading: "East of the lake, fully within our range.",
    introParagraphs: [
      "Slidell sits on the eastern edge of St. Tammany Parish, and it's fully within our service area. We work in Eden Isles, Oak Harbor, Lakeshore Estates, and neighborhoods throughout Slidell on a regular basis. Whether you're on a canal lot with waterfront exposure or a newer subdivision off Gause Boulevard, we design lighting that fits the property and holds up in Louisiana's weather.",
      "Slidell has grown significantly in recent years, with a mix of established older neighborhoods and newer developments where homeowners are increasingly investing in landscaping and outdoor living. Landscape lighting is the top request in this area, followed closely by holiday lighting for the holiday season.",
    ],
    neighborhoods: [
      "Eden Isles",
      "Oak Harbor",
      "Lakeshore Estates",
      "Bayou Liberty",
      "Heritage Park",
      "North Slidell",
      "Fremaux Town Center area",
    ],
    faq: [
      {
        q: "Do you serve all of Slidell, including the outskirts?",
        a: "Yes. We serve all of Slidell and surrounding St. Tammany Parish areas east of the lake, including Pearl River, Lacombe, and communities along Highway 190.",
      },
      {
        q: "Can you install lighting on a canal lot or waterfront property in Slidell?",
        a: "Yes. Waterfront and canal properties are some of our favorite projects — dock lighting, boathouse illumination, and landscape lighting that complements the water view rather than competing with it. We use fixtures rated for high-humidity environments.",
      },
      {
        q: "How quickly can you get to Slidell for an estimate?",
        a: "We typically schedule Slidell estimates within the same week. Give us a call or fill out the contact form and we'll set something up.",
      },
    ],
  },
  {
    slug: "hammond",
    name: "Hammond",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Tangipahoa Parish",
    metaTitle: "Outdoor Lighting in Hammond, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Hammond, Louisiana with landscape lighting, holiday lighting, and permanent outdoor lighting. Covering Tangipahoa Parish and surrounding areas.",
    heroHeading: "Outdoor Lighting in Hammond, Louisiana",
    heroSubheading: "Serving Tangipahoa Parish with full-service outdoor lighting.",
    introParagraphs: [
      "Hammond is the commercial and residential hub of Tangipahoa Parish, and outdoor lighting needs here span everything from university-area homes to suburban neighborhoods to commercial corridors along I-55. We serve Hammond and the surrounding Tangipahoa Parish area, including Ponchatoula, Amite, and communities in between.",
      "As Southeastern Louisiana University continues to grow the Hammond area's residential development, demand for quality outdoor lighting has followed. We bring the same crew, the same fixtures, and the same design process we use on the Northshore — no compromise based on distance.",
    ],
    neighborhoods: [
      "University area",
      "Downtown Hammond",
      "North Hammond",
      "Cate Square area",
      "Southeast Hammond",
    ],
    faq: [
      {
        q: "Does Be The Light Decor serve Ponchatoula and other Tangipahoa Parish communities?",
        a: "Yes. We serve all of Tangipahoa Parish, including Ponchatoula, Amite, Independence, and surrounding areas. Hammond is our home base in the parish, but we cover the full region.",
      },
      {
        q: "Do you do commercial lighting for businesses in Hammond?",
        a: "Yes. We work with retail, restaurant, office, and mixed-use commercial properties. Commercial lighting in Hammond — especially along Thomas Road and US-190 — can make a significant difference in how a business is perceived from the street.",
      },
    ],
  },
  {
    slug: "kenner",
    name: "Kenner",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Jefferson Parish",
    metaTitle: "Outdoor Lighting in Kenner, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Kenner, Louisiana with landscape lighting, holiday displays, and permanent outdoor lighting. Covering Jefferson Parish including Harahan, River Ridge, and surrounding areas.",
    heroHeading: "Outdoor Lighting in Kenner, Louisiana",
    heroSubheading: "Jefferson Parish lighting done right.",
    introParagraphs: [
      "Kenner is one of Jefferson Parish's largest communities, with a mix of established older neighborhoods, newer subdivisions, and commercial corridors near Louis Armstrong New Orleans International Airport. We serve all of Kenner and regularly work in Harahan, River Ridge, and other Jefferson Parish communities to the west of Metairie.",
      "Holiday lighting is particularly active in this area — Kenner neighborhoods are known for their displays during the holiday season, and we help dozens of homeowners each year who want to participate without spending weekends on a ladder.",
    ],
    neighborhoods: [
      "Rivertown",
      "Chateau Estates",
      "Willowdale",
      "West Esplanade (Kenner)",
      "Harahan",
      "River Ridge",
    ],
    faq: [
      {
        q: "Do you serve Harahan and River Ridge in addition to Kenner?",
        a: "Yes. Harahan, River Ridge, and all of western Jefferson Parish are within our service area. We schedule this region alongside our Kenner and Metairie work.",
      },
      {
        q: "What's the most common service you do in Kenner?",
        a: "Holiday lighting is the most requested service in Kenner. We also do landscape lighting installations year-round, and permanent programmable lighting is growing in popularity in newer neighborhoods.",
      },
    ],
  },
  {
    slug: "madisonville",
    name: "Madisonville",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "St. Tammany Parish",
    metaTitle: "Outdoor Lighting in Madisonville, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor installs landscape lighting and holiday lighting in Madisonville, Louisiana. Serving the Tchefuncte River community and surrounding St. Tammany Parish.",
    heroHeading: "Outdoor Lighting in Madisonville, Louisiana",
    heroSubheading: "Small town charm, lit the right way.",
    introParagraphs: [
      "Madisonville sits at the mouth of the Tchefuncte River, just minutes from our Covington headquarters. It's a town with a lot of character — historic waterfront homes, live oaks, and a community feel that's rare in a region growing as fast as the Northshore. Lighting here tends to be more subtle and architectural than in larger cities, which suits us perfectly.",
      "We've worked on waterfront properties, historic homes near downtown Madisonville, and newer construction in the surrounding area. It's one of the closest towns to our base, which means we can often schedule same-day or next-day estimates.",
    ],
    neighborhoods: [
      "Historic Downtown Madisonville",
      "Tchefuncte River waterfront",
      "North Madisonville",
    ],
    faq: [
      {
        q: "Do you light waterfront homes along the Tchefuncte River?",
        a: "Yes, and it's some of our favorite work in the area. Waterfront properties along the Tchefuncte offer beautiful opportunities — dock lighting, boathouse illumination, and landscape lighting that works with the natural setting rather than against it.",
      },
      {
        q: "Can you do lighting for homes near the Madisonville Lighthouse?",
        a: "Absolutely. The historic downtown area has a lot of character, and we design lighting that respects that — warm tones, minimal intrusion, and fixtures that complement older architecture.",
      },
    ],
  },
  {
    slug: "lacombe",
    name: "Lacombe",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "St. Tammany Parish",
    metaTitle: "Outdoor Lighting in Lacombe, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Lacombe, Louisiana with landscape lighting, holiday lighting, and outdoor lighting installation. Serving the Lake Pontchartrain north shore community.",
    heroHeading: "Outdoor Lighting in Lacombe, Louisiana",
    heroSubheading: "Northshore lighting on the lake's edge.",
    introParagraphs: [
      "Lacombe is a peaceful community on the north shore of Lake Pontchartrain, between Mandeville and Slidell. It's an area of large lots, mature trees, and waterfront properties — exactly the kind of setting where thoughtful outdoor lighting can make a dramatic difference. We serve the full Lacombe area and regularly work on properties along Bayou Lacombe and the lakefront.",
      "Because Lacombe is close to our Covington base, we can get to you quickly. Landscape lighting and holiday lighting are the most common requests, though we've also installed permanent roofline lighting on several properties in the area.",
    ],
    neighborhoods: [
      "Bayou Lacombe area",
      "Lake Pontchartrain waterfront",
      "Rural St. Tammany",
    ],
    faq: [
      {
        q: "Do you serve the rural areas of Lacombe with large lots and acreage?",
        a: "Yes. Large-lot rural properties are well within our scope. We've designed lighting for properties with long driveways, multiple outbuildings, and wooded lots where standard suburban approaches don't apply.",
      },
      {
        q: "What kind of lighting works best for waterfront properties in Lacombe?",
        a: "For properties on or near the water, we focus on soft, warm-toned landscape lighting that frames the property without creating glare toward the water. Dock lighting, tree uplighting, and subtle pathway lighting tend to be the most effective combination.",
      },
    ],
  },
  {
    slug: "biloxi",
    name: "Biloxi",
    state: "Mississippi",
    stateAbbr: "MS",
    county: "Harrison County",
    metaTitle: "Outdoor Lighting in Biloxi, MS | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Biloxi, Mississippi with landscape lighting, holiday displays, and permanent outdoor lighting. Serving the Gulf Coast from Louisiana to Mississippi.",
    heroHeading: "Outdoor Lighting in Biloxi, Mississippi",
    heroSubheading: "Gulf Coast lighting from a team that knows the climate.",
    introParagraphs: [
      "The Gulf Coast has its own character — beachfront properties, historic antebellum homes, casino resort corridors, and newer residential developments that have grown significantly since Katrina rebuilding. We serve Biloxi and the broader Harrison County area with the same services and standards we deliver across Southeast Louisiana.",
      "Gulf Coast lighting comes with specific considerations: salt air, high humidity, and UV exposure are harder on fixtures than inland environments. We use products built for coastal conditions, and we stand behind every installation regardless of the weather your property faces.",
    ],
    neighborhoods: [
      "Biloxi beachfront",
      "Point Cadet",
      "D'Iberville",
      "Back Bay",
      "North Biloxi",
    ],
    faq: [
      {
        q: "Do you serve both residential and commercial properties in Biloxi?",
        a: "Yes. We work with residential homeowners, commercial businesses, and resort/hospitality properties along the Gulf Coast. Casino corridor commercial lighting and beachfront residential are both well within our scope.",
      },
      {
        q: "How does the salt air affect outdoor lighting fixtures?",
        a: "Salt air accelerates corrosion on standard fixtures. We use fixtures rated for coastal environments — marine-grade finishes, sealed connections, and materials that won't fail prematurely from salt exposure. We don't cut corners on the Gulf Coast.",
      },
      {
        q: "How far does your team travel to Biloxi?",
        a: "We travel to the Mississippi Gulf Coast regularly. Biloxi is approximately 90 minutes from our Covington base. We batch Gulf Coast work to keep scheduling efficient and costs reasonable.",
      },
    ],
  },
  {
    slug: "gulfport",
    name: "Gulfport",
    state: "Mississippi",
    stateAbbr: "MS",
    county: "Harrison County",
    metaTitle: "Outdoor Lighting in Gulfport, MS | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Gulfport, Mississippi with landscape lighting, holiday displays, and outdoor lighting installation. Gulf Coast service from a team you can trust.",
    heroHeading: "Outdoor Lighting in Gulfport, Mississippi",
    heroSubheading: "Harrison County's outdoor lighting specialists.",
    introParagraphs: [
      "Gulfport is Harrison County's largest city and one of the most diverse lighting markets on the Gulf Coast — from beachfront residential to the Port of Gulfport industrial corridor to suburban neighborhoods like Long Beach and Pass Christian nearby. We serve the full Gulfport area with landscape lighting, holiday displays, and permanent lighting solutions.",
      "Gulfport's residential market has rebounded strongly since Hurricane Katrina, and newer construction throughout the area presents great opportunities for permanent LED landscape lighting that adds both beauty and security value to a property.",
    ],
    neighborhoods: [
      "Downtown Gulfport",
      "Gulf Hills",
      "West Gulfport",
      "Long Beach (nearby)",
      "Pass Christian (nearby)",
    ],
    faq: [
      {
        q: "Do you serve Long Beach and Pass Christian in addition to Gulfport?",
        a: "Yes. Long Beach, Pass Christian, and other Harrison County communities are within our service area. We serve the full stretch of the Gulf Coast from Bay St. Louis east through Gulfport and Biloxi.",
      },
      {
        q: "Can you do commercial lighting for Gulfport businesses?",
        a: "Yes. We work with commercial properties throughout the Gulf Coast, including retail, restaurant, office, and hospitality. Contact us to discuss your project.",
      },
    ],
  },
  {
    slug: "bay-st-louis",
    name: "Bay St. Louis",
    state: "Mississippi",
    stateAbbr: "MS",
    county: "Hancock County",
    metaTitle: "Outdoor Lighting in Bay St. Louis, MS | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Bay St. Louis, Mississippi with landscape lighting, holiday displays, and permanent outdoor lighting. Serving Hancock County and the western Gulf Coast.",
    heroHeading: "Outdoor Lighting in Bay St. Louis, Mississippi",
    heroSubheading: "The artsy, charming heart of the western Gulf Coast.",
    introParagraphs: [
      "Bay St. Louis has earned a reputation as one of the most charming cities on the Gulf Coast — a thriving arts community, a historic Old Town district, a vibrant Beach Boulevard, and a mix of historic homes and weekend getaway cottages that attract buyers from across the region. Outdoor lighting here tends to reflect the city's aesthetic sensibility: thoughtful, character-driven, not overdone.",
      "We've worked on properties throughout Bay St. Louis and Hancock County, from historic beach homes to vacation rentals to permanent residences that deserve year-round lighting. Bay St. Louis clients tend to be especially particular about design — which we genuinely appreciate.",
    ],
    neighborhoods: [
      "Old Town Bay St. Louis",
      "Beach Boulevard area",
      "Waveland",
      "Kiln area",
      "Diamondhead",
    ],
    faq: [
      {
        q: "Do you serve Waveland and Diamondhead in addition to Bay St. Louis?",
        a: "Yes. Waveland, Diamondhead, and other Hancock County communities are within our service area. We schedule the western Gulf Coast alongside our Bay St. Louis work.",
      },
      {
        q: "We have a vacation home in Bay St. Louis. Can you do lighting with remote management?",
        a: "Absolutely. Our permanent lighting systems are app-controlled, which makes them perfect for vacation homes. You can change colors, set schedules, and turn lights on or off from anywhere — no need to be on-site.",
      },
      {
        q: "Do you do holiday lighting for homes in Bay St. Louis?",
        a: "Yes. We install, maintain, and take down holiday lighting. For vacation homes or second properties, we can coordinate key access and handle the full install without the homeowner needing to be present.",
      },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllSlugs(): string[] {
  return locations.map((l) => l.slug);
}
