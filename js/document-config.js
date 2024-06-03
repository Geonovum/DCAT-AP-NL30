async function loadTurtle() {
  //this is the function you call in 'preProcess', to load the highlighter
  const worker = await new Promise(resolve => {
    require(["core/worker"], ({ worker }) => resolve(worker));
  });
  const action = "highlight-load-lang";
  const langURL =
    "https://cdn.jsdelivr.net/gh/redmer/highlightjs-turtle/src/languages/turtle.js";
  const propName = "hljsDefineTurtle"; // This funtion is defined in the highlighter being loaded
  const lang = "turtle"; // this is the class you use to identify the language
  worker.postMessage({ action, langURL, propName, lang });
  return new Promise(resolve => {
    worker.addEventListener("message", function listener({ data }) {
      const { action: responseAction, lang: responseLang } = data;
      if (responseAction === action && responseLang === lang) {
        worker.removeEventListener("message", listener);
        resolve();
      }
    });
  });
}

var documentConfig =
{
  title: "DCAT-AP-NL 3.0",
  shortName: "DCAT-AP-NL30",
  pubDomain: "dcat",
  specStatus: "wv",
  specType: "st",
  license: "cc-by-nd",
  latestVersion: [
    "https://docs.geostandaarden.nl/dcat/dcat-ap-nl30/"
  ],
  /*publishDate: "2024-04-16",
  previousPublishDate: "2024-03-05",
  previousMaturity: "cv",*/
  edDraftURI: "https://geonovum.github.io/DCAT-AP-NL30/",
  issueBase: "https://github.com/Geonovum/DCAT-AP-NL30/issues",
  authors: [
    {
      name: "Ine de Visser",
      name: "Jan Skornsek",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    },
    {
      name: "Ine de Visser",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    }
  ],
  editors: [
    {
      name: "Ine de Visser",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    }
  ],
  localBiblio: {
    "DONL": {
      title: "data.overheid.nl",
      href: "https://data.overheid.nl/",
      authors: "",
      publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties",
      editors: "",
      date: "",
      status: ""
    },
    "DATA_EU": {
      title: "data.europa.eu",
      href: "https://data.europa.eu/en",
      authors: "",
      publisher: "The Publications Office of the European Union",
      editors: "",
      date: "",
      status: ""
    },
    "DCAT-2.0": {
      title: "DCAT-2.0",
      href: "https://www.w3.org/TR/vocab-dcat-2",
      authors: [
        "Riccardo Albertoni; David Browning; Simon Cox; Alejandra Gonzalez Beltran; Andrea Perego; Peter Winstanley"
      ],
      publisher: "W3C",
      editors: "",
      date: "2020-02-04",
      status: "Recommendation"
    },
    "DCAT-AP-2.1.1": {
      title: "DCAT-AP 2.1.1",
      href: "https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/210",
      authors: "",
      publisher: "The Publications Office of the European Union",
      editors: "",
      date: "",
      status: ""
    },
    "DCATAPDONL_11": {
      title: "DCAT-AP-DONL 1.1",
      href: "https://dcat-ap-donl.readthedocs.io/en/latest/",
      authors: "",
      publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties",
      editors: "",
      date: "",
      status: ""
    },
    "GEONAMES": {
      title: "GeoNames.org",
      href: "https://www.geonames.org/",
      authors: "",
      publisher: "",
      editors: "",
      date: "",
      status: ""
    },
    "ISO8601": {
      title: "ISO-8601",
      href: "https://www.iso.org/iso-8601-date-and-time-format.html",
      authors: "",
      publisher: "International Organization for Standardization",
      editors: "",
      date: "",
      status: ""
    },
    "ISO19115_ROLECODE": {
      title: "ISO-19115 RoleCode",
      href: "https://standards.iso.org/iso/19115/resources/Codelists/gml/CI_RoleCode.xml",
      authors: "",
      publisher: "International Organization for Standardization",
      editors: "",
      date: "",
      status: ""
    },
    "OWMS_TAXONOMIEBELEIDSAGENDA": {
      title: "overheid:TaxonomieBeleidsagenda (standaarden.overheid.nl)",
      href: "https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.taxonomiebeleidsagenda",
      authors: "",
      publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties",
      editors: "",
      date: "",
      status: ""
    },
    "TOOI": {
      title: "TOOI - Thesaurus en Ontologie Overheidsinformatie",
      href: "https://tardis.overheid.nl",
      authors: "",
      publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties",
      editors: "",
      date: "",
      status: ""
    },
    "DCAT-3.0": {
      title: "DCAT-3.0",
      href: "https://www.w3.org/TR/vocab-dcat-3/",
      authors: "",
      publisher: "W3C",
      editors: "",
      date: "",
      status: "Candidate Recommendation"
    },
    "DCAT-AP-3.0": {
      title: "DCAT-AP-3.0",
      href: "https://semiceu.github.io/DCAT-AP/releases/3.0.0/",
      authors: "",
      publisher: "SEMIC",
      editors: "",
      date: "2024-02-12",
      status: "Candidate Recommendation"
    },
    "DCAT-AP-HVD": {
      title: "DCAT-AP for High-Value Datasets",
      href: "https://semiceu.github.io/uri.semic.eu-generated/DCAT-AP/releases/2.2.0-hvd/",
      authors: "",
      publisher: "SEMIC",
      editors: "",
      date: "",
      status: ""
    },
    "ODRL": {
      title: "ODLR",
      href: "https://www.w3.org/ns/odrl/2/",
      authors: "",
      publisher: "W3C",
      editors: "",
      date: "",
      status: ""
    },
    "DCAT-AP-DONL-2.0": {
      title: "DCAT-AP-DONL-2.0",
      href: "https://dataoverheid.github.io/dcat-ap-donl/",
      authors: [
        "Jan Meijer",
        "Huub van Oers",
        "Kees Trautwein"
      ],
      publisher: "data.overheid.nl",
      editors: [
        "Casper le Gras",
        "Willem ter Berg",
        ""
      ],
      date: "2022-11-24",
      status: ""
    },
    "RFC2119": {
      title: "rfc2119",
      href: "https://www.rfc-editor.org/rfc/rfc2119",
      authors: [
        "S. Bradner"
      ],
      publisher: "IETF",
      editors: "",
      date: "1997-03-01",
      status: ""
    },
    "RFC8174": {
      title: "rfc8174",
      href: "https://www.rfc-editor.org/rfc/rfc5646",
      authors: [
        "B. Leiba"
      ],
      publisher: "IETF",
      editors: "",
      date: "2009-09-01",
      status: ""
    },
    "ISO-19115": {
      title: "ISO-19115",
      href: "https://www.iso.org/standard/53798.html",
      authors: "",
      publisher: "",
      editors: "",
      date: "2014-04-01",
      status: "International Standard confirmed"
    },
    "OpenAPI": {
      title: "OpenAPI",
      href: "https://www.openapis.org/",
      authors: [
        "Darrell Miller; Jeremy Whitlock; Marsh Gardiner; Mike Ralphson; Ron Ratovsky; Uri Sarid; Tony Tam; Jason Harmon"
      ],
      publisher: "",
      editors: "",
      date: "",
      status: ""
    },
    "WFS": {
      title: "WFS",
      href: "http://www.opengeospatial.org/standards/wfs",
      authors: "",
      publisher: "OGC",
      editors: "",
      date: "2014-07-10",
      status: ""
    },
    "WMS": {
      title: "WMS",
      href: "http://www.opengeospatial.org/standards/wms",
      authors: "",
      publisher: "OGC",
      editors: "",
      date: "2006-03-15",
      status: "OpenGIS Implementation Standard"
    },
    "ISO-19128": {
      title: "ISO-19128",
      href: "https://www.iso.org/standard/32546.html",
      authors: "",
      publisher: "ISO/TC 211. ISO",
      editors: "",
      date: "",
      status: "International Standard"
    },
    "ISO-19142": {
      title: "ISO-19142",
      href: "https://www.iso.org/standard/42136.html",
      authors: "",
      publisher: "ISO/TC 211",
      editors: "",
      date: "",
      status: "International Standard"
    },
    "SPARQL11-SERVICE-DESCRIPTION": {
      title: "SPARQL Service Description",
      href: "https://www.w3.org/TR/sparql11-service-description/",
      authors: "",
      publisher: "W3C",
      editors: "",
      date: "2013-03-21",
      status: ""
    },
    "OpenSearch": {
      title: "OpenSearch",
      href: "https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md",
      authors: "",
      publisher: "OpenSearch",
      editors: "",
      date: "2018-04-17",
      status: ""
    }
  },
  preProcess: [loadTurtle],
}
