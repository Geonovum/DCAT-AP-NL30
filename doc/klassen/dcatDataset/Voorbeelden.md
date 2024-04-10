Hieronder enkele voorbeelden voor verschillende klassen. De voorbeelden worden nog verplaatst naar de juiste Klasse. 

<aside class='example'>

```turtle
@prefix exampleMS: <https://data.exampleMS.gov/id/dataset/> .
@prefix adms: <http://www.w3.org/ns/adms#> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix dcatap: <http://data.europa.eu/r5r/> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix vcard: <http://www.w3.org/2006/vcard/ns#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
```

```turtle
exampleMS:HVD-reporting-2023 a dcat:Catalogue;
  dct:title "MS HVD Reporting 2023"@en;
  dct:description "All information to provide the HVD conformance assessment for MS"@en;
  dcat:dataset exampleMS:1T2p3o4B ;
  dcat:service exampleMS:EAMS-APIplatform.
```

```turtle
exampleMS:1T2p3o4B a dcat:Dataset;
  dct:title "The population of bees"@en;
  dct:description "This dataset provides the population of bees based on a yearly inquiry held among beekeepers and farmers in spring."@en;
  dcatap:applicableLegislation <http://data.europa.eu/eli/reg_impl/2023/138/oj>, <http://data.europa.eu/eli/dir/2007/2/2019-06-26>;
  dct:publisher _:EA-MS;
  dct:identifier "https://data.exampleMS.gov/id/dataset/1T2p3o4B";
  adms:identifier [
    dct:creator _:EA-MS;
    skos:notation "https://data.exampleMS.gov/id/dataset/1T2p3o4B"
  ],
  [
    dct:creator <https://dataportal.exampleMS.gov>;
    skos:notation "https://dataportal.exampleMS.gov/dataset/Thepopulationofbees";
  ];
  dct:accrualPeriodicity <http://publications.europa.eu/resource/authority/frequency/BIENNIAL>;
  dct:conformsTo <https://orgea.exampleMS.gov/applicationprofile/populationOfInsects>;
  dcat:distribution exampleMS:1T2p3o4B-dist-SHP.
```

```turtle
exampleMS:1T2p3o4B-dist-SHP a dcat:Distribution;
  dcat:accessURL <https://orgea.exampleMS.gov/files/1T2p3o4B.shp>;
  dct:conformsTo <https://orgea.exampleMS.gov/dataset/1T2p3o4B/schema/shp>;
  dcat:spatialResolutionInMeters "25000"^^xsd:decimal;
  dct:format <http://publications.europa.eu/resource/authority/file-type/SHP>;
  dct:license <https://data.exampleMS.gov/resource/FreeAndOpen>;
  dcatap:applicableLegislation <http://data.europa.eu/eli/reg_impl/2023/138/oj>.
```

```turtle
exampleMS:EAMS-APIplatform a dcat:DataService;
  dct:title "EA API platform"@en;
  dct:description "The EA API platform provides a uniform access to the real-time data collected by EA"@en;
  dcat:endpointURL <https://orgea.exampleMS.gov/api/v2/>;
  dcat:endpointDescription <https://orgea.exampleMS.gov/api/openAPI/index.html>;
  foaf:page <https://orgea.exampleMS.gov/api/sla.html>;
  dct:license <https://data.exampleMS.gov/resource/FreeAndOpen>;
  dcatap:applicableLegislation <http://data.europa.eu/eli/reg_impl/2023/138/oj>;
  dcat:contactPoint _:EAMS-APIplatform-contactpoint;
  dcat:servesDataset exampleMS:1T2p3o4B.
```

```turtle
_:EAMS-APIplatform-contactpoint a vcard:Kind;
  vcard:hasURL <https://eams.jira.net/servicedesk>; .
```

```turtle
_:EA-MS a foaf:Agent;
  foaf:name "MS Environmental Agency".
```

```turtle
<https://data.exampleMS.gov/resource/FreeAndOpen> a dct:LicenseDocument;
  skos:exactMatch <http://publications.europa.eu/resource/authority/licence/CC0>.




------nieuw----
@prefix exampleMS: <https://data.exampleMS.gov/id/dataset/>.
@prefix adms: <http://www.w3.org/ns/adms#>.
@prefix dcat: <http://www.w3.org/ns/dcat#>.
@prefix dcatap: <http://data.europa.eu/r5r/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix vcard: <http://www.w3.org/2006/vcard/ns#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

exampleMS:1T2p3o4B a dcat:Dataset;
   dct:title "Naam van de dataset"@nl;
   dct:accessRights <http://publications.europa.eu/resource/authority/access-right/PUBLIC>;
   dcatap:applicableLegislation <http://data.europa.eu/eli/reg_impl/2023/138/oj>;
   dct:conformsTo <http://data.europa.eu/eli/reg/2010/1089>;
   dcat:contactPoint _:Organisatie-contactpoint ;
   dct:creator _:Organisatie;
   dct:description "beschrijving van de dataset"@nl;
   dct:description "description in english"@en;
   dct:identifier "https://data.exampleMS.gov/id/dataset/1T2p3o4B";
   dct:publisher _:Organisatie;

   
   dcat:distribution exampleMS:1T2p3o4B-dist-SHP, exampleMS:1T2p3o4B-dist-RDF;


.

exampleMS:1W2o3p4T a dcat:Dataset;
  dct:title "The population of wasps"@en.

exampleMS:1T2p3o4B-dist-SHP a dcat:Distribution;
   dcatap:applicableLegislation <http://data.europa.eu/eli/reg_impl/2023/138/oj>.

exampleMS:1T2p3o4B-dist-RDF a dcat:Distribution.

exampleMS:EAMS-APIplatform a dcat:DataService;
   dct:title "EA API platform"@en;
   dct:description "The EA API platform provides a uniform access to the real-time data collected by EA"@en;
   dcat:endpointURL <https://orgea.exampleMS.gov/api/v2/> ;
   dcatap:applicableLegislation <http://data.europa.eu/eli/reg_impl/2023/138/oj>;
   dcat:servesDataset exampleMS:1T2p3o4B, exampleMS:1W2o3p4T .


_:Organisatie-contactpoint a vcard:Kind;
   vcard:hasURL <https://organisatie/servicedesk> .

_:Organisatie a foaf:Agent;
    foaf:name "Organisatienaam".
```

</aside>

