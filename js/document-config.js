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
  specStatus: "def",
  specType: "st",
  license: "cc-by-nd",
  latestVersion: [
    "https://docs.geostandaarden.nl/dcat/dcat-ap-nl30/"
  ],
  publishDate: "2024-12-12",
  previousPublishDate: "2024-11-11",
  previousMaturity: "vv",
  github: "https://github.com/Geonovum/DCAT-AP-NL30",
  issueBase: "https://github.com/Geonovum/DCAT-AP-NL30/issues/",
  edDraftURI: "https://geonovum.github.io/DCAT-AP-NL30/",
  authors: [
    {
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
    },
    {
      name: "Niels Hoffmann",
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
      authors: "",
      publisher: "W3C",
      editors: "",
      date: "2020-02-04",
      status: "Recommendation"
    },
    "DCAT-AP-2.1.1": {
      title: "DCAT-AP 2.1.1",
      href: "https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/210",
      authors: "",
      publisher: "SEMIC",
      editors: "",
      date: "05/09/2022",
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
      publisher: "ISO",
      editors: "",
      date: "",
      status: ""
    },
    "ISO19115_ROLECODE": {
      title: "ISO-19115 RoleCode",
      href: "https://standards.iso.org/iso/19115/resources/Codelists/gml/CI_RoleCode.xml",
      authors: "",
      publisher: "ISO",
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
      href: "https://standaarden.overheid.nl/tooi",
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
      date: "22 August 2024",
      status: "Recommendation"
    },
    "DCAT-AP-3.0": {
      title: "DCAT-AP-3.0",
      href: "https://semiceu.github.io/DCAT-AP/releases/3.0.0/",
      authors: "",
      publisher: "SEMIC",
      editors: "",
      date: "14 June 2024",
      status: "Recommendation"
    },
    "DCAT-AP-HVD": {
      title: "DCAT-AP for High-Value Datasets",
      href: "https://semiceu.github.io/uri.semic.eu-generated/DCAT-AP/releases/2.2.0-hvd/",
      authors: "",
      publisher: "SEMIC",
      editors: "",
      date: "14 December 2023",
      status: "Recommendation"
    },
    "ODRL": {
      title: "ODLR",
      href: "https://www.w3.org/ns/odrl/2/",
      authors: "",
      publisher: "W3C",
      editors: "",
      date: "16 September 2017",
      status: ""
    },
    "DCAT-AP-DONL-2.0": {
      title: "DCAT-AP-DONL-2.0",
      href: "https://dataoverheid.github.io/dcat-ap-donl/",
      authors: "",
      publisher: "data.overheid.nl",
      editors: "",
      date: "24 november 2022",
      status: ""
    },
    "RFC2119": {
      title: "rfc2119",
      href: "https://www.rfc-editor.org/rfc/rfc2119",
      authors: "",
      publisher: "IETF",
      editors: "",
      date: "March 1997",
      status: "Best Current Practice"
    },
    "RFC8174": {
      title: "rfc8174",
      href: "https://www.rfc-editor.org/rfc/rfc5646",
      authors: "",
      publisher: "IETF",
      editors: "",
      date: "May 2017",
      status: " Best Current Practice"
    },
    "ISO-19115": {
      title: "ISO-19115",
      href: "https://www.iso.org/standard/53798.html",
      authors: "",
      publisher: "ISO",
      editors: "",
      date: "2014-04-01",
      status: "International Standard confirmed"
    },
    "OpenAPI": {
      title: "OpenAPI",
      href: "https://github.com/OAI/OpenAPI-Specification/",
      authors:"",
      publisher: "OpenAPI initiative",
      editors: "",
      date: "15 February 2021",
      status: ""
    },
    "WFS": {
      title: "WFS",
      href: "http://www.opengeospatial.org/standards/wfs",
      authors: "",
      publisher: "OGC",
      editors: "",
      date: "10 July 2014",
      status: ""
    },
    "WMS": {
      title: "WMS",
      href: "http://www.opengeospatial.org/standards/wms",
      authors: "",
      publisher: "OGC",
      editors: "",
      date: "15 March 2006",
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
      date: "17 April 2018",
      status: ""
    },
      "WSDL": {
      title: "WSDL",
      href: "https://www.w3.org/TR/wsdl20/",
      authors: "",
      publisher: "W3C",
      editors: "",
      date: "26 June 2007",
      status: "Recommendation"
    },
      "HYDRA": {
      title: "HYDRA",
      href: "https://www.hydra-cg.com/spec/latest/core/",
      authors: "",
      publisher: "W3C",
      editors: "",
      date: "15 March 2018",
      status: "Draft"
    }
  },
  preProcess: [loadTurtle],
}
