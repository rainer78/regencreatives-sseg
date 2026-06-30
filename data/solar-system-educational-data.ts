/**
 * Local normalized educational data for future Solar System UI content.
 *
 * This file is intentionally NOT imported by the live application yet. It is for
 * future educational UI, facts panels, content cards, body comparisons, and
 * admin-time/build-time content refresh workflows.
 *
 * Do not use this data to drive Three.js object positions, scale, camera
 * behavior, animation, lighting, orbit behavior, tour sequencing, object
 * loading, or VR/WebXR behavior. Rendering data and educational data should
 * remain separate unless a future refactor intentionally merges them with a
 * dedicated scene-design plan.
 */

export type SolarSystemBodyType = "Star" | "Planet" | "Dwarf Planet" | "Moon" | "Asteroid" | "Comet" | "Region" | "Other"

export type SolarSystemSourceProvider = "Solar System OpenData API" | "NASA" | "Manual review" | "Existing app copy"

export type SolarSystemSourceNote = {
  provider: SolarSystemSourceProvider
  /** Optional source URL or documentation URL for later verification. */
  url?: string
  /** Optional endpoint or source path, such as /bodies/terre, when values are imported later. */
  endpoint?: string
  /** When a source response or page was retrieved. Omitted when no external value has been imported. */
  retrievedAt?: string
  /** What the source note currently supports or still needs. */
  note: string
}

export type EducationalFact = {
  label: string
  value: string
  sourceNotes: SolarSystemSourceNote[]
}

export type PhysicalCharacteristics = {
  radius?: EducationalFact | null
  mass?: EducationalFact | null
  density?: EducationalFact | null
  gravity?: EducationalFact | null
  temperature?: EducationalFact | null
  notableFeatures: EducationalFact[]
}

export type OrbitalCharacteristics = {
  parentBodyId?: string | null
  orbitPeriod?: EducationalFact | null
  rotationPeriod?: EducationalFact | null
  averageDistanceFromSun?: EducationalFact | null
  notableOrbitFacts: EducationalFact[]
}

export type DiscoveryDetails = {
  discoveredBy?: string | null
  discoveryDate?: string | null
  notes?: string | null
  sourceNotes: SolarSystemSourceNote[]
}

export type MoonSummary = {
  count?: EducationalFact | null
  notableMoons: string[]
  notes?: string | null
}

export type EducationalSolarSystemBody = {
  id: string
  slug: string
  name: string
  bodyType: SolarSystemBodyType
  isPlanet: boolean
  shortDescription: string
  overview: string
  keyFacts: EducationalFact[]
  physicalCharacteristics: PhysicalCharacteristics
  orbitalCharacteristics: OrbitalCharacteristics
  discovery: DiscoveryDetails
  moons: MoonSummary
  sourceNotes: SolarSystemSourceNote[]
  /** ISO date when this local educational entry was last manually reviewed. */
  lastReviewed: string
}

const existingAppCopySource: SolarSystemSourceNote = {
  provider: "Existing app copy",
  note: "Seeded from conservative educational copy already present in the current scene or tour content; not imported from the Solar System OpenData API.",
}

const manualReviewNeededSource: SolarSystemSourceNote = {
  provider: "Manual review",
  note: "Placeholder for future editorial review and source-backed values before this content is shown in production UI.",
}

const futureOpenDataSource: SolarSystemSourceNote = {
  provider: "Solar System OpenData API",
  url: "https://api.le-systeme-solaire.net/en/",
  note: "Potential future admin-time or build-time source. No API value has been imported for this seed entry.",
}

export const solarSystemEducationalBodies: EducationalSolarSystemBody[] = [
  {
    id: "sun",
    slug: "sun",
    name: "Sun",
    bodyType: "Star",
    isPlanet: false,
    shortDescription: "The Sun is the star at the center of the Solar System.",
    overview:
      "The Sun provides the light and energy that shape conditions throughout the Solar System. This seed entry keeps the explanation broad until source-backed physical values are reviewed.",
    keyFacts: [
      {
        label: "Classification",
        value: "Star",
        sourceNotes: [existingAppCopySource],
      },
      {
        label: "Role in the scene",
        value: "Central Solar System body used as the reference point for the current tour copy.",
        sourceNotes: [existingAppCopySource],
      },
    ],
    physicalCharacteristics: {
      radius: null,
      mass: null,
      density: null,
      gravity: null,
      temperature: null,
      notableFeatures: [
        {
          label: "Energy source",
          value: "Provides light and heat for the planets.",
          sourceNotes: [manualReviewNeededSource],
        },
      ],
    },
    orbitalCharacteristics: {
      parentBodyId: null,
      orbitPeriod: null,
      rotationPeriod: null,
      averageDistanceFromSun: null,
      notableOrbitFacts: [],
    },
    discovery: {
      discoveredBy: null,
      discoveryDate: null,
      notes: "Known since antiquity; no discovery credit is used for this local seed entry.",
      sourceNotes: [manualReviewNeededSource],
    },
    moons: {
      count: null,
      notableMoons: [],
      notes: "The Sun does not have moons in the same sense as planets in this educational model.",
    },
    sourceNotes: [existingAppCopySource, futureOpenDataSource, manualReviewNeededSource],
    lastReviewed: "2026-06-30",
  },
  {
    id: "earth",
    slug: "earth",
    name: "Earth",
    bodyType: "Planet",
    isPlanet: true,
    shortDescription: "Earth is our home planet and the only planet currently known to harbor life.",
    overview:
      "Earth is presented as a life-supporting planet in the current educational copy. Future cards can expand this entry with reviewed atmosphere, ocean, moon, and comparison facts.",
    keyFacts: [
      {
        label: "Known for",
        value: "Only planet currently known to harbor life.",
        sourceNotes: [existingAppCopySource],
      },
      {
        label: "Natural satellite",
        value: "The Moon is Earth's only natural satellite in the current scene content.",
        sourceNotes: [existingAppCopySource],
      },
    ],
    physicalCharacteristics: {
      radius: null,
      mass: null,
      density: null,
      gravity: null,
      temperature: null,
      notableFeatures: [
        {
          label: "Habitability",
          value: "Supports life as described in the existing scene copy.",
          sourceNotes: [existingAppCopySource],
        },
      ],
    },
    orbitalCharacteristics: {
      parentBodyId: "sun",
      orbitPeriod: null,
      rotationPeriod: null,
      averageDistanceFromSun: null,
      notableOrbitFacts: [],
    },
    discovery: {
      discoveredBy: null,
      discoveryDate: null,
      notes: "Known from human experience rather than a recorded astronomical discovery.",
      sourceNotes: [manualReviewNeededSource],
    },
    moons: {
      count: {
        label: "Curated moon count",
        value: "1 natural satellite shown in the current scene data",
        sourceNotes: [existingAppCopySource],
      },
      notableMoons: ["Moon"],
      notes: "Moon details should be normalized as a separate body entry in a future expansion.",
    },
    sourceNotes: [existingAppCopySource, futureOpenDataSource, manualReviewNeededSource],
    lastReviewed: "2026-06-30",
  },
  {
    id: "mars",
    slug: "mars",
    name: "Mars",
    bodyType: "Planet",
    isPlanet: true,
    shortDescription: "Mars is commonly known as the Red Planet.",
    overview:
      "Mars is included as a major planet in the current scene and tour. This local entry intentionally avoids detailed measurements until they are reviewed and sourced.",
    keyFacts: [
      {
        label: "Nickname",
        value: "The Red Planet",
        sourceNotes: [existingAppCopySource],
      },
      {
        label: "Curated moons in scene",
        value: "Phobos and Deimos are included in the current moon data.",
        sourceNotes: [existingAppCopySource],
      },
    ],
    physicalCharacteristics: {
      radius: null,
      mass: null,
      density: null,
      gravity: null,
      temperature: null,
      notableFeatures: [],
    },
    orbitalCharacteristics: {
      parentBodyId: "sun",
      orbitPeriod: null,
      rotationPeriod: null,
      averageDistanceFromSun: null,
      notableOrbitFacts: [],
    },
    discovery: {
      discoveredBy: null,
      discoveryDate: null,
      notes: "Known since antiquity; detailed source-backed history can be added later.",
      sourceNotes: [manualReviewNeededSource],
    },
    moons: {
      count: null,
      notableMoons: ["Phobos", "Deimos"],
      notes: "The current scene includes a curated pair of Mars moons; no source-backed total has been imported.",
    },
    sourceNotes: [existingAppCopySource, futureOpenDataSource, manualReviewNeededSource],
    lastReviewed: "2026-06-30",
  },
  {
    id: "jupiter",
    slug: "jupiter",
    name: "Jupiter",
    bodyType: "Planet",
    isPlanet: true,
    shortDescription: "Jupiter is the largest planet in the Solar System.",
    overview:
      "Jupiter is represented as a major planet with selected large moons in the current scene. This seed entry focuses on safe, broad educational copy and leaves detailed values for future review.",
    keyFacts: [
      {
        label: "Known for",
        value: "Largest planet in the Solar System.",
        sourceNotes: [existingAppCopySource],
      },
      {
        label: "Curated moons in scene",
        value: "Io, Europa, Ganymede, and Callisto are included in the current moon data.",
        sourceNotes: [existingAppCopySource],
      },
    ],
    physicalCharacteristics: {
      radius: null,
      mass: null,
      density: null,
      gravity: null,
      temperature: null,
      notableFeatures: [],
    },
    orbitalCharacteristics: {
      parentBodyId: "sun",
      orbitPeriod: null,
      rotationPeriod: null,
      averageDistanceFromSun: null,
      notableOrbitFacts: [],
    },
    discovery: {
      discoveredBy: null,
      discoveryDate: null,
      notes: "Known since antiquity; detailed source-backed history can be added later.",
      sourceNotes: [manualReviewNeededSource],
    },
    moons: {
      count: null,
      notableMoons: ["Io", "Europa", "Ganymede", "Callisto"],
      notes: "Only the current scene's curated notable moons are listed; no source-backed total has been imported.",
    },
    sourceNotes: [existingAppCopySource, futureOpenDataSource, manualReviewNeededSource],
    lastReviewed: "2026-06-30",
  },
]
