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

  // ── NEW LOUISIANA CITIES ──────────────────────────────────────────────────

  {
    slug: "harahan",
    name: "Harahan",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Jefferson Parish",
    metaTitle: "Outdoor Lighting in Harahan, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor installs landscape lighting, holiday displays, and permanent outdoor lighting in Harahan, Louisiana. Serving Jefferson Parish with full-service outdoor lighting.",
    heroHeading: "Outdoor Lighting in Harahan, Louisiana",
    heroSubheading: "Classic Jefferson Parish neighborhoods, beautifully lit.",
    introParagraphs: [
      "Harahan is a quiet, established Jefferson Parish community tucked between Kenner and River Ridge, known for its tree-lined streets, well-maintained ranch homes, and strong neighborhood pride. It's exactly the kind of place where landscape lighting — done right — transforms a property and makes the whole block look better.",
      "We serve Harahan regularly as part of our Jefferson Parish work, often scheduling it alongside River Ridge and Kenner projects. Whether you're looking for simple path lighting along a manicured lawn or a full holiday display for the holiday season, we bring the same professionalism here that we deliver across the Northshore.",
    ],
    neighborhoods: [
      "Elmwood area",
      "Hickory Park",
      "West Harahan",
      "Harahan waterfront",
    ],
    faq: [
      {
        q: "Do you serve Harahan for holiday lighting?",
        a: "Yes. Holiday lighting is one of the most requested services in Harahan and the surrounding Jefferson Parish communities. We hang, maintain, and take it all down — you never touch a bulb.",
      },
      {
        q: "Can you match the lighting to our existing landscaping in Harahan?",
        a: "Absolutely. We walk every property before designing anything. We look at your existing plants, trees, and architectural features and create a system that feels intentional — not like a generic add-on.",
      },
    ],
  },
  {
    slug: "river-ridge",
    name: "River Ridge",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Jefferson Parish",
    metaTitle: "Outdoor Lighting in River Ridge, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves River Ridge, Louisiana with landscape lighting, holiday displays, and permanent outdoor lighting. Full-service Jefferson Parish lighting.",
    heroHeading: "Outdoor Lighting in River Ridge, Louisiana",
    heroSubheading: "Riverside living, elevated after dark.",
    introParagraphs: [
      "River Ridge sits along the Mississippi River corridor in Jefferson Parish, with a mix of established neighborhoods and newer developments that have seen strong reinvestment over the past decade. Homes here tend to be well-kept, with mature landscaping that rewards thoughtful outdoor lighting — uplighting for live oaks, path lighting through established gardens, and roofline accents that add architectural depth.",
      "We serve River Ridge regularly as part of our Jefferson Parish schedule. Landscape lighting and holiday lighting are our most-requested services in this area. If you're in River Ridge and looking to upgrade your outdoor space after dark, we'd love to walk the property with you.",
    ],
    neighborhoods: [
      "River Ridge proper",
      "Citrus area",
      "Upstream neighborhoods",
      "Mississippi River corridor",
    ],
    faq: [
      {
        q: "How does River Ridge compare to Harahan and Kenner for lighting demand?",
        a: "They're all strong markets for us. River Ridge tends to skew toward landscape lighting and permanent systems, while Kenner and Harahan see more holiday lighting requests. We serve all three regularly.",
      },
      {
        q: "Do you do free estimates in River Ridge?",
        a: "Yes. We offer free on-site estimates across all of Jefferson Parish, including River Ridge. We'll come out, walk the property, and give you a detailed quote — no obligation.",
      },
    ],
  },
  {
    slug: "gretna",
    name: "Gretna",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Jefferson Parish",
    metaTitle: "Outdoor Lighting in Gretna, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Gretna, Louisiana with landscape lighting, holiday lighting, and permanent outdoor lighting. Westbank Jefferson Parish service.",
    heroHeading: "Outdoor Lighting in Gretna, Louisiana",
    heroSubheading: "Westbank Jefferson Parish, fully served.",
    introParagraphs: [
      "Gretna is one of the Westbank's most established communities — a historic downtown, a diverse residential mix, and a growing commercial corridor that benefits from professional exterior lighting. We serve Gretna and the broader Westbank area with landscape lighting, holiday displays, and permanent programmable systems for homes and businesses.",
      "Westbank communities are sometimes underserved by contractors who focus exclusively on the Eastbank. We don't operate that way — if your property is in Gretna, Harvey, Westwego, or Marrero, we'll get to you. Gretna's older homes in particular are excellent candidates for landscape lighting that highlights the character of the architecture.",
    ],
    neighborhoods: [
      "Historic Downtown Gretna",
      "Oakwood area",
      "McDonoughville",
      "Fischer area",
    ],
    faq: [
      {
        q: "Do you serve the Westbank — Gretna, Harvey, and Marrero?",
        a: "Yes. We serve all of the Westbank Jefferson Parish area, including Gretna, Harvey, Westwego, and Marrero. We schedule Westbank projects together to keep our travel efficient.",
      },
      {
        q: "Can you do commercial lighting for businesses along the Westbank Expressway corridor?",
        a: "Yes. Commercial exterior lighting on a high-traffic corridor like the Westbank Expressway can meaningfully impact visibility and brand perception. Contact us to discuss your property.",
      },
    ],
  },
  {
    slug: "westwego",
    name: "Westwego",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Jefferson Parish",
    metaTitle: "Outdoor Lighting in Westwego, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor installs landscape lighting and holiday lighting in Westwego, Louisiana. Serving the Westbank of Jefferson Parish with professional outdoor lighting.",
    heroHeading: "Outdoor Lighting in Westwego, Louisiana",
    heroSubheading: "Where the bayou meets the boulevard — lit beautifully.",
    introParagraphs: [
      "Westwego is a compact, tight-knit Westbank community bordered by bayous and canals, with a strong residential character and steady commercial activity near the Huey P. Long Bridge approach. Homes here range from older cottages with big yards to newer construction near the city's growing residential corridors — all of them candidates for outdoor lighting that improves curb appeal and security.",
      "We serve Westwego as part of our regular Westbank Jefferson Parish schedule. Landscape lighting and holiday lighting are popular here, and we offer free on-site estimates to help homeowners see the possibilities before committing to anything.",
    ],
    neighborhoods: [
      "Downtown Westwego",
      "Bayou Segnette area",
      "Avenue B corridor",
      "West Westwego",
    ],
    faq: [
      {
        q: "Does Be The Light Decor serve Westwego for holiday lighting?",
        a: "Yes. We install full holiday lighting packages in Westwego — we hang everything, check the lights mid-season if needed, and take it all down after the holidays. One call is all it takes.",
      },
      {
        q: "Can you install lighting near bayous and canals in Westwego?",
        a: "Absolutely. Waterfront and bayou-adjacent properties are a specialty — we use weather-resistant fixtures rated for high-moisture environments and design the lighting to complement the water setting.",
      },
    ],
  },
  {
    slug: "abita-springs",
    name: "Abita Springs",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "St. Tammany Parish",
    metaTitle: "Outdoor Lighting in Abita Springs, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Abita Springs, Louisiana with landscape lighting, holiday lighting, and permanent outdoor lighting. Local Northshore service just minutes from Covington.",
    heroHeading: "Outdoor Lighting in Abita Springs, Louisiana",
    heroSubheading: "Northshore personality, naturally lit.",
    introParagraphs: [
      "Abita Springs is one of the Northshore's most distinctive communities — known for its artisan breweries, ecentric local charm, and large wooded lots where mature pine and oak trees define the landscape. Outdoor lighting here is less about showing off and more about coexisting with the natural setting. We design systems that feel intentional, not imposed.",
      "Being just a few miles from our Covington base, Abita Springs is one of our quickest turnarounds for estimates and installations. We've worked on everything from craftsman-style homes in town to larger rural properties on the outskirts, always adapting the design to what the land actually offers.",
    ],
    neighborhoods: [
      "Downtown Abita Springs",
      "Abita River Road area",
      "Abita Heights",
      "Rural North St. Tammany",
    ],
    faq: [
      {
        q: "Can you design lighting that works with our wooded lot in Abita Springs?",
        a: "Yes — wooded lots are some of our favorite projects. We'll design a system that highlights the tree canopy, illuminates key paths, and creates a layered effect that feels natural rather than overdone.",
      },
      {
        q: "Do you serve rural properties on larger acreage outside of Abita Springs proper?",
        a: "Yes. We regularly serve properties on larger rural lots in the Abita Springs area, including homes along state highways and parish roads outside of town. Long driveways, gated entries, and acreage lighting are all part of what we do.",
      },
    ],
  },
  {
    slug: "folsom",
    name: "Folsom",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "St. Tammany Parish",
    metaTitle: "Outdoor Lighting in Folsom, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Folsom, Louisiana with landscape lighting, holiday lighting, and outdoor lighting for rural and residential properties in St. Tammany Parish.",
    heroHeading: "Outdoor Lighting in Folsom, Louisiana",
    heroSubheading: "Rural Northshore properties lit with care.",
    introParagraphs: [
      "Folsom is deep St. Tammany Parish — horse farms, large wooded lots, and a peaceful rural character that sets it apart from the more developed communities closer to I-12. Outdoor lighting on rural acreage requires a different approach than suburban neighborhoods: longer driveway runs, motion-activated security lighting, barn and outbuilding illumination, and landscape lighting that fits a pastoral rather than manicured setting.",
      "We serve Folsom and northern St. Tammany Parish as part of our broader service area. It's a longer drive from Covington, but we schedule these projects regularly and take them just as seriously as any other job. If you have a rural property in the Folsom area and want to talk lighting, give us a call.",
    ],
    neighborhoods: [
      "Folsom town center",
      "Rural north St. Tammany",
      "Seven Oaks area",
      "Hwy 25 corridor",
    ],
    faq: [
      {
        q: "Do you serve farm and acreage properties in Folsom?",
        a: "Yes. We design lighting for working farms, horse properties, and rural estates — including driveway lighting, barn and outbuilding illumination, perimeter security lighting, and landscape accents around the main residence.",
      },
      {
        q: "How far does Be The Light Decor travel to serve Folsom?",
        a: "Folsom is roughly 30 minutes north of Covington. We schedule Folsom projects on days when we're working in northern St. Tammany Parish. Contact us to get on the schedule.",
      },
    ],
  },
  {
    slug: "franklinton",
    name: "Franklinton",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Washington Parish",
    metaTitle: "Outdoor Lighting in Franklinton, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Franklinton, Louisiana with landscape lighting, holiday lighting, and outdoor lighting installation. Serving Washington Parish and surrounding communities.",
    heroHeading: "Outdoor Lighting in Franklinton, Louisiana",
    heroSubheading: "Washington Parish's outdoor lighting team.",
    introParagraphs: [
      "Franklinton is the seat of Washington Parish — a community with a lot of residential character, an active main street, and a surrounding rural landscape of timber-producing woodlands and farmland. Outdoor lighting here serves both aesthetic and practical purposes, and we approach each project with that balance in mind.",
      "We serve Franklinton and the broader Washington Parish area on a scheduled basis. Whether you're in a neighborhood subdivision, a property on the edge of town, or a rural acreage outside the city limits, we can design a lighting solution that fits your property and your budget.",
    ],
    neighborhoods: [
      "Downtown Franklinton",
      "Northeast Franklinton",
      "Franklinton residential neighborhoods",
      "Rural Washington Parish",
    ],
    faq: [
      {
        q: "Does Be The Light Decor serve Washington Parish?",
        a: "Yes. We serve Franklinton and surrounding Washington Parish communities. We schedule this area periodically and can get you on the calendar for a free estimate.",
      },
      {
        q: "What lighting services do you offer in the Franklinton area?",
        a: "All of our services — landscape lighting, holiday lighting, permanent lighting, event lighting, and commercial lighting — are available in the Franklinton area. Distance doesn't change our offering.",
      },
    ],
  },
  {
    slug: "pearl-river",
    name: "Pearl River",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "St. Tammany Parish",
    metaTitle: "Outdoor Lighting in Pearl River, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Pearl River, Louisiana with landscape lighting, holiday lighting, and outdoor lighting installation. Northshore St. Tammany Parish service.",
    heroHeading: "Outdoor Lighting in Pearl River, Louisiana",
    heroSubheading: "Northshore lighting near the Mississippi border.",
    introParagraphs: [
      "Pearl River is a St. Tammany Parish community that straddles the border with Mississippi, connected to Slidell but with its own distinct character — larger lots, wooded properties, and a quieter pace than the more developed parts of the Northshore. It's a great setting for outdoor lighting that feels natural rather than suburban.",
      "We serve Pearl River as part of our eastern St. Tammany Parish work, often scheduling it alongside Slidell and Lacombe. Landscape lighting on larger wooded lots, holiday lighting, and permanent roofline systems are all popular in this area.",
    ],
    neighborhoods: [
      "Pearl River town center",
      "West Pearl River",
      "Hwy 11 corridor",
      "Rural east St. Tammany",
    ],
    faq: [
      {
        q: "Is Pearl River within your regular service area?",
        a: "Yes. Pearl River is within St. Tammany Parish and is a regular stop for our eastern Northshore team. We can typically schedule estimates within the week.",
      },
      {
        q: "What types of outdoor lighting work best in Pearl River's wooded properties?",
        a: "For wooded lots, we recommend layered landscape lighting: uplighting for canopy trees, path lighting along driveways and walkways, and security-oriented accent lighting near structures. We design systems that work with the existing tree cover rather than fighting it.",
      },
    ],
  },
  {
    slug: "bogalusa",
    name: "Bogalusa",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Washington Parish",
    metaTitle: "Outdoor Lighting in Bogalusa, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Bogalusa, Louisiana with landscape lighting, holiday lighting, and outdoor lighting installation. Covering Washington Parish and the north Louisiana border region.",
    heroHeading: "Outdoor Lighting in Bogalusa, Louisiana",
    heroSubheading: "Serving Washington Parish's largest city.",
    introParagraphs: [
      "Bogalusa is Washington Parish's largest city and the commercial hub of the region — a mix of established residential neighborhoods, commercial corridors, and a proud industrial heritage. Outdoor lighting here serves both homeowners who want curb appeal and businesses that benefit from better visibility and professional exterior presentation.",
      "We serve Bogalusa and the surrounding Washington Parish area, scheduling visits periodically to minimize drive time and deliver the same quality we bring to every project. From simple holiday displays to full landscape lighting systems, we handle the full range.",
    ],
    neighborhoods: [
      "Downtown Bogalusa",
      "North Bogalusa",
      "East Bogalusa",
      "Louisiana Avenue corridor",
      "Rural Washington Parish",
    ],
    faq: [
      {
        q: "Do you serve Bogalusa for holiday lighting?",
        a: "Yes. We install, maintain, and remove holiday lighting in Bogalusa. We schedule these projects in advance and appreciate early bookings to ensure availability.",
      },
      {
        q: "Can you do commercial lighting for businesses in Bogalusa?",
        a: "Yes. Commercial outdoor lighting is one of our five core services, and we bring it to every market we serve — including Bogalusa. Storefronts, office buildings, and commercial properties all benefit from professional exterior lighting.",
      },
    ],
  },
  {
    slug: "denham-springs",
    name: "Denham Springs",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Livingston Parish",
    metaTitle: "Outdoor Lighting in Denham Springs, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Denham Springs, Louisiana with landscape lighting, holiday displays, and permanent outdoor lighting. Livingston Parish service near Baton Rouge.",
    heroHeading: "Outdoor Lighting in Denham Springs, Louisiana",
    heroSubheading: "Livingston Parish — where curb appeal is a way of life.",
    introParagraphs: [
      "Denham Springs has experienced explosive residential growth over the past decade, making it one of the fastest-growing communities in Southeast Louisiana. New subdivisions, established neighborhoods, and a busy commercial corridor along I-12 all present strong opportunities for professional outdoor lighting. Homeowners here invest heavily in their properties, and lighting is an increasingly important part of that investment.",
      "We serve Denham Springs and the broader Livingston Parish area on a scheduled basis. Our permanent landscape lighting systems are especially popular here — new construction homes are great candidates for systems installed alongside the initial landscaping, creating a cohesive look from day one.",
    ],
    neighborhoods: [
      "Bass Pro Shops area",
      "Walker nearby",
      "Juban Crossing area",
      "Southeast Denham Springs",
      "Livingston Parish rural areas",
    ],
    faq: [
      {
        q: "Do you serve newly built homes in Denham Springs?",
        a: "Yes — new construction is one of our sweet spots. Installing landscape lighting as part of the initial landscaping phase saves time and produces a cleaner, more intentional result than retrofitting later.",
      },
      {
        q: "How long does it take to get to Denham Springs from your Covington base?",
        a: "Denham Springs is roughly 90 minutes from Covington via I-12. We schedule Livingston Parish work in batches to keep travel costs reasonable. We'll find a time that works.",
      },
    ],
  },
  {
    slug: "gonzales",
    name: "Gonzales",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Ascension Parish",
    metaTitle: "Outdoor Lighting in Gonzales, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Gonzales, Louisiana with landscape lighting, holiday lighting, and permanent outdoor lighting. Serving Ascension Parish with full-service outdoor lighting.",
    heroHeading: "Outdoor Lighting in Gonzales, Louisiana",
    heroSubheading: "Ascension Parish's premier outdoor lighting team.",
    introParagraphs: [
      "Gonzales has grown dramatically as an Ascension Parish hub, with new residential developments, a thriving commercial district, and a homeowner base that takes exterior appearances seriously. The phrase 'Jambalaya Capital of the World' says a lot about the community pride here — and that pride extends to how properties look from the street.",
      "We serve Gonzales and all of Ascension Parish. Landscape lighting, permanent roofline systems, and holiday lighting are all in demand in this market. We offer free on-site estimates and can typically schedule work within two weeks of a signed agreement.",
    ],
    neighborhoods: [
      "Downtown Gonzales",
      "Prairieville area",
      "Cornerview area",
      "Tanger Outlets corridor",
      "Ascension Parish residential",
    ],
    faq: [
      {
        q: "Do you serve both Gonzales and Prairieville?",
        a: "Yes. We serve all of Ascension Parish, including Gonzales, Prairieville, Sorrento, and St. Amant. We schedule these communities together on our Ascension Parish workdays.",
      },
      {
        q: "Is permanent lighting popular in Gonzales?",
        a: "It's growing quickly. Ascension Parish homeowners are increasingly interested in permanent LED roofline systems that can be programmed for any season or occasion — holiday colors, LSU game nights, special events. It's a one-time install with years of versatility.",
      },
    ],
  },
  {
    slug: "laplace",
    name: "LaPlace",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "St. John the Baptist Parish",
    metaTitle: "Outdoor Lighting in LaPlace, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves LaPlace, Louisiana with landscape lighting, holiday lighting, and outdoor lighting installation. Serving St. John the Baptist Parish between New Orleans and Baton Rouge.",
    heroHeading: "Outdoor Lighting in LaPlace, Louisiana",
    heroSubheading: "Between two great cities — served by one great team.",
    introParagraphs: [
      "LaPlace sits at the crossroads of Southeast Louisiana — roughly equidistant from New Orleans and Baton Rouge along I-10, making it one of the most strategically located communities in the region. Residents here have access to major city amenities while living in a quieter, more spacious setting, and the investment in well-maintained homes reflects that balance.",
      "We serve LaPlace and St. John the Baptist Parish with the full range of our services. Holiday lighting and landscape lighting are both popular here, and our permanent roofline systems are a great fit for the newer subdivisions that have grown up around the LaPlace corridor.",
    ],
    neighborhoods: [
      "Woodland Park",
      "Cypress Grove area",
      "Belle Terre",
      "Reserve nearby",
      "Norco area",
    ],
    faq: [
      {
        q: "Is LaPlace within your service area?",
        a: "Yes. We serve LaPlace and all of St. John the Baptist Parish. We typically schedule this area alongside our West Shore and River Parish projects.",
      },
      {
        q: "Do you offer holiday lighting packages in LaPlace?",
        a: "Yes. Full holiday lighting packages — install, maintenance check, and takedown — are available in LaPlace and throughout our service area.",
      },
    ],
  },
  {
    slug: "prairieville",
    name: "Prairieville",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "Ascension Parish",
    metaTitle: "Outdoor Lighting in Prairieville, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Prairieville, Louisiana with landscape lighting, holiday displays, and permanent outdoor lighting. Full-service Ascension Parish outdoor lighting.",
    heroHeading: "Outdoor Lighting in Prairieville, Louisiana",
    heroSubheading: "Fast-growing Ascension Parish — beautifully illuminated.",
    introParagraphs: [
      "Prairieville is one of Louisiana's fastest-growing residential communities — new subdivisions are going up faster than almost anywhere else in the state, and homeowners in these new neighborhoods are looking for ways to stand out from the house next door. Landscape lighting and permanent roofline systems are ideal for new construction where the landscaping is just getting established.",
      "We serve Prairieville as part of our Ascension Parish coverage, often scheduling it alongside Gonzales and the greater Baton Rouge corridor. Our team knows this market well and understands the specific mix of new-build and established neighborhoods that defines Prairieville's residential landscape.",
    ],
    neighborhoods: [
      "Manchac Heights area",
      "Bayou Oaks area",
      "Hwy 73 corridor",
      "East Ascension Parish",
      "New construction subdivisions",
    ],
    faq: [
      {
        q: "Do you install lighting on new construction in Prairieville?",
        a: "Yes, and we highly recommend it. Installing landscape lighting alongside new landscaping gives you a clean, intentional look that's harder to achieve on an established property. We work with homebuilders and homeowners directly.",
      },
      {
        q: "Is permanent roofline lighting popular in Prairieville?",
        a: "Very. Prairieville's newer neighborhoods are a perfect fit for our permanent LED system — hidden channels along the roofline that you control from an app. One install, endless color options. It's especially popular for holiday displays without the hassle.",
      },
    ],
  },
  {
    slug: "zachary",
    name: "Zachary",
    state: "Louisiana",
    stateAbbr: "LA",
    county: "East Baton Rouge Parish",
    metaTitle: "Outdoor Lighting in Zachary, LA | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Zachary, Louisiana with landscape lighting, holiday lighting, and permanent outdoor lighting. East Baton Rouge Parish outdoor lighting service.",
    heroHeading: "Outdoor Lighting in Zachary, Louisiana",
    heroSubheading: "North Baton Rouge's outdoor lighting specialists.",
    introParagraphs: [
      "Zachary has developed into one of the most desirable residential communities north of Baton Rouge — excellent schools, new neighborhoods, and homeowners who take obvious pride in their properties. That pride creates a natural market for landscape lighting that adds curb appeal and a sense of arrival after dark.",
      "We serve Zachary as part of our East Baton Rouge Parish coverage. Permanent landscape lighting and holiday displays are our most common services here, and we offer free on-site estimates so you can see exactly what's possible before committing to anything.",
    ],
    neighborhoods: [
      "Downtown Zachary",
      "Pride area",
      "Antebellum neighborhoods",
      "Hwy 19 corridor",
      "East Zachary residential",
    ],
    faq: [
      {
        q: "Do you serve Zachary for landscape lighting?",
        a: "Yes. Zachary is within our East Baton Rouge Parish service area. We schedule this area alongside our Baton Rouge projects and can typically turn around estimates within two weeks.",
      },
      {
        q: "What's your most popular service in the Zachary area?",
        a: "Landscape lighting and holiday lighting are both popular in Zachary. We're also seeing strong interest in permanent roofline lighting as newer neighborhoods continue to grow in the area.",
      },
    ],
  },

  // ── NEW MISSISSIPPI CITIES ────────────────────────────────────────────────

  {
    slug: "waveland",
    name: "Waveland",
    state: "Mississippi",
    stateAbbr: "MS",
    county: "Hancock County",
    metaTitle: "Outdoor Lighting in Waveland, MS | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Waveland, Mississippi with landscape lighting, holiday lighting, and permanent outdoor lighting. Gulf Coast Hancock County service.",
    heroHeading: "Outdoor Lighting in Waveland, Mississippi",
    heroSubheading: "Mississippi's westernmost Gulf Coast community, beautifully lit.",
    introParagraphs: [
      "Waveland is the westernmost city on the Mississippi Gulf Coast — close to Louisiana, close to the water, and home to a mix of beach cottages, post-Katrina new construction, and vacation properties that attract owners from across the region. The community has rebuilt its character over the past two decades, and outdoor lighting plays a quiet but meaningful role in that renewal.",
      "We serve Waveland alongside Bay St. Louis and other Hancock County communities as part of our Gulf Coast coverage. Because of our Louisiana base, we're actually closer to Waveland than many Mississippi-based contractors, and we bring coastal-rated fixtures and proven installation techniques to every project here.",
    ],
    neighborhoods: [
      "Waveland beachfront",
      "Downtown Waveland",
      "North Waveland",
      "Bay St. Louis border area",
    ],
    faq: [
      {
        q: "Is Waveland within your service area?",
        a: "Yes. Waveland is one of our closest Mississippi Gulf Coast stops — it's actually closer to our Covington base than some of our Louisiana service areas. We schedule it alongside Bay St. Louis.",
      },
      {
        q: "Do you install marine-grade fixtures in Waveland because of the salt environment?",
        a: "Always. On the Gulf Coast, we exclusively use fixtures rated for salt-air environments — sealed connections, corrosion-resistant finishes, and materials designed to hold up through coastal humidity and storm exposure.",
      },
    ],
  },
  {
    slug: "pass-christian",
    name: "Pass Christian",
    state: "Mississippi",
    stateAbbr: "MS",
    county: "Harrison County",
    metaTitle: "Outdoor Lighting in Pass Christian, MS | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Pass Christian, Mississippi with landscape lighting, holiday lighting, and outdoor lighting installation. Harrison County Gulf Coast service.",
    heroHeading: "Outdoor Lighting in Pass Christian, Mississippi",
    heroSubheading: "The Pass — lit with Gulf Coast character.",
    introParagraphs: [
      "Pass Christian is one of the Gulf Coast's most beloved communities — known for its antebellum homes, its striking oak-lined beachfront drives, and a deeply rooted sense of place that survived even Hurricane Katrina. Outdoor lighting here isn't just functional; it's part of how residents honor the character and history of their community.",
      "We serve Pass Christian and the surrounding Harrison County communities with landscape lighting, holiday displays, and permanent systems designed to hold up against Gulf Coast conditions. Antebellum and historic properties receive our most careful design attention — we never overpower architecture that speaks for itself.",
    ],
    neighborhoods: [
      "Pass Christian beachfront",
      "Historic downtown",
      "Long Beach border area",
      "North Pass Christian",
    ],
    faq: [
      {
        q: "Can you design lighting for historic and antebellum homes in Pass Christian?",
        a: "Yes, and it's work we take seriously. Historic homes require restraint — we use warm-toned fixtures, subtle placement, and designs that enhance rather than compete with the existing architecture.",
      },
      {
        q: "Do you do holiday lighting in Pass Christian?",
        a: "Yes. Holiday lighting is a big part of what we do on the Gulf Coast during the season. We install, handle any mid-season maintenance, and take everything down afterward.",
      },
    ],
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    state: "Mississippi",
    stateAbbr: "MS",
    county: "Harrison County",
    metaTitle: "Outdoor Lighting in Long Beach, MS | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Long Beach, Mississippi with landscape lighting, holiday displays, and permanent outdoor lighting. Harrison County Gulf Coast outdoor lighting.",
    heroHeading: "Outdoor Lighting in Long Beach, Mississippi",
    heroSubheading: "Harrison County living, elevated after dark.",
    introParagraphs: [
      "Long Beach is a family-friendly Harrison County community situated between Gulfport and Pass Christian, with a coastal character and a residential base that values quality and community. The city has grown steadily since Katrina recovery and is home to a mix of established neighborhoods and newer developments that benefit from professional outdoor lighting.",
      "We serve Long Beach as part of our Gulf Coast Harrison County schedule. Landscape lighting and holiday lighting are both in demand here, and our permanent roofline LED systems are a great option for newer construction that wants year-round programmable lighting without annual installation hassle.",
    ],
    neighborhoods: [
      "Long Beach beachfront",
      "North Long Beach",
      "East Long Beach",
      "Southern Miss Gulf Coast area",
    ],
    faq: [
      {
        q: "Do you serve Long Beach for both landscape and holiday lighting?",
        a: "Yes. Both services are available in Long Beach. We schedule Gulf Coast Harrison County work together, so your project gets handled efficiently regardless of which service you need.",
      },
      {
        q: "What fixture types do you recommend near the coast in Long Beach?",
        a: "All of our Gulf Coast installations use coastal-rated fixtures — corrosion-resistant materials, sealed connections, and UV-stable finishes designed for the specific challenges of salt-air and high-humidity environments.",
      },
    ],
  },
  {
    slug: "picayune",
    name: "Picayune",
    state: "Mississippi",
    stateAbbr: "MS",
    county: "Pearl River County",
    metaTitle: "Outdoor Lighting in Picayune, MS | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Picayune, Mississippi with landscape lighting, holiday lighting, and outdoor lighting installation. Pearl River County, MS — just across the Louisiana border.",
    heroHeading: "Outdoor Lighting in Picayune, Mississippi",
    heroSubheading: "Pearl River County — close to Louisiana, served like home.",
    introParagraphs: [
      "Picayune sits in Pearl River County just across the Louisiana-Mississippi border, making it one of the most accessible Mississippi markets for our Covington-based team. Many Picayune residents work, shop, and spend time on the Louisiana Northshore — and they deserve the same quality of outdoor lighting service.",
      "We serve Picayune with landscape lighting, holiday displays, and permanent lighting systems for both residential and commercial properties. The piney woods setting and larger lot sizes in the Picayune area are well-suited to the kind of thoughtful, naturalistic lighting design we do best.",
    ],
    neighborhoods: [
      "Downtown Picayune",
      "Highland Park area",
      "Crosby area",
      "Rural Pearl River County",
    ],
    faq: [
      {
        q: "Is Picayune within your regular service area?",
        a: "Yes. Picayune is very close to our base — we're in and out of the Pearl River County area regularly. Estimates are typically available within the week.",
      },
      {
        q: "Do you design lighting for the piney woods setting typical of Picayune properties?",
        a: "Yes. Pine trees and wooded lots require a different approach than coastal or suburban landscapes. We design layered systems that work with the natural topography rather than imposing a suburban template.",
      },
    ],
  },
  {
    slug: "ocean-springs",
    name: "Ocean Springs",
    state: "Mississippi",
    stateAbbr: "MS",
    county: "Jackson County",
    metaTitle: "Outdoor Lighting in Ocean Springs, MS | Be The Light Decor",
    metaDescription:
      "Be The Light Decor serves Ocean Springs, Mississippi with landscape lighting, holiday lighting, and permanent outdoor lighting. Jackson County Gulf Coast outdoor lighting service.",
    heroHeading: "Outdoor Lighting in Ocean Springs, Mississippi",
    heroSubheading: "The Gulf Coast's art town — illuminated beautifully.",
    introParagraphs: [
      "Ocean Springs is one of the jewels of the Mississippi Gulf Coast — an artsy, walkable city with a vibrant downtown, a strong arts scene, and some of the most beautiful residential properties on the Gulf. The natural setting of Back Bay and the moss-draped oaks that line its streets make outdoor lighting here less about showing off and more about honoring what's already there.",
      "We serve Ocean Springs and Jackson County with landscape lighting, holiday displays, event lighting, and permanent systems. The design sensibility here tends to be thoughtful and discerning — which is exactly how we like to work. Ocean Springs clients tend to ask the best questions and push us to do our most interesting work.",
    ],
    neighborhoods: [
      "Downtown Ocean Springs",
      "Back Bay area",
      "Fort Bayou area",
      "North Ocean Springs",
      "Shearwater area",
    ],
    faq: [
      {
        q: "Do you serve Ocean Springs for landscape and event lighting?",
        a: "Yes. Ocean Springs has one of the strongest event markets on the Gulf Coast — weddings, art events, private parties — and outdoor lighting is a meaningful part of those occasions. We design event setups as carefully as permanent installations.",
      },
      {
        q: "How do you handle the live oak canopy in Ocean Springs?",
        a: "The oaks in Ocean Springs are extraordinary. We design uplighting that plays with the canopy, creating dramatic shadow patterns and depth — it's one of the most satisfying effects in outdoor lighting and one of our favorite applications.",
      },
      {
        q: "Is Jackson County within your regular service area?",
        a: "Yes, though it's our easternmost Gulf Coast stop. We schedule Jackson County alongside our other Gulf Coast work. Allow a bit more lead time than our Louisiana locations, and reach out early for the holiday season.",
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
