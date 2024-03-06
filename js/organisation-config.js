var organisationConfig =
{
  nl_organisationName: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties",
  nl_organisationPublishURL: "https://data.overheid.nl/",
  postProcess: [
    window.respecMermaid.createFigures
  ],
  specStatusText: {
    en: {
      geen: "None",
      basis: "Document",
      cv: "Candidate recommendation",
      def: "Recommendation",
      vv: "Proposed recommendation",
      wv: "Editor’s draft"
    },
    nl: {
      geen: "Geen",
      basis: "Document",
      cv: "Consultatieversie",
      def: "Vastgestelde versie",
      vv: "Versie ter vaststelling",
      wv: "Werkversie"
    }
  },
  labelColor: {
    geen: "#000000",
    basis: "#80CC28",
    cv: "#045D9F",
    def: "#045D9F",
    vv: "#045D9F",
    wv: "#FF0000"
  },
  specTypeText: {
    en: {
      geen: "None",
      no: "Norm",
      st: "Standard",
      im: "Information model",
      pr: "Guideline",
      hr: "Guide",
      wa: "Working arrangement",
      al: "General",
      bd: "Governance documentation",
      bp: "Best practice"
    },
    nl: {
      geen: "Geen",
      no: "Norm",
      st: "Standaard",
      im: "Informatiemodel",
      pr: "Praktijkrichtlijn",
      hr: "Handreiking",
      wa: "Werkafspraak",
      al: "Algemeen",
      bd: "Beheerdocumentatie",
      bp: "Best practice"
    }
  },
  licenses: {
    "geen": {
      name: "Geen"
    },
    "cc0": {
      name: "Creative Commons 0 Public Domain Dedication",
      short: "CC0",
      url: "https://creativecommons.org/publicdomain/zero/1.0/",
      image: "https://tools.geostandaarden.nl/publication/organisation/dataoverheid/cc-zero.svg"
    },
    "cc-by": {
      name: "Creative Commons Attribution 4.0 International Public License",
      short: "CC-BY",
      url: "https://creativecommons.org/licenses/by/4.0/legalcode",
      image: "https://tools.geostandaarden.nl/publication/organisation/dataoverheid/cc-by.svg"
    },
    "cc-by-nd": {
      name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
      short: "CC-BY-ND",
      url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
      image: "https://tools.geostandaarden.nl/publication/organisation/dataoverheid/cc-by-nd.svg"
    }
  },
  nl_organisationStylesURL: "https://tools.geostandaarden.nl/publication/domain/dcat/",
  logos: [
    {
      src: "https://tools.geostandaarden.nl/publication/domain/dcat/dcat.svg",
      alt: "Dataregister van de Nederlandse overheid",
      id: "dataoverheid",
      height: "29",
      width: "192",
      url: "https://data.overheid.nl/",
      ico: "https://tools.geostandaarden.nl/publication/domain/dcat/dcat.ico"
    }
  ],
  useLogo: true,
  useLabel: true,
  addSectionLinks: false,
  sotdText: {
    en: {
      sotd: "Status of This Document",
      geen: "None",
      basis: "This document has no official standing.",
      cv: "This is a proposed recommendation approved by TO. Comments regarding this document may be sent to [address].",
      def: "This is the definitive version of this document. Edits resulting from consultations have been applied.",
      vv: "This is the definitive concept of this document. Edits resulting from consultations have been applied.",
      wv: "This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by TO."
    },
    nl: {
      sotd: "Status van dit document",
      geen: "Geen",
      basis: "Dit is een document zonder officiële status.",
      cv: "Dit is een door het TO goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar [adres].",
      def: "Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.",
      vv: "Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.",
      wv: "Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door het TO goedgekeurde consultatieversie."
    }
  }
}
