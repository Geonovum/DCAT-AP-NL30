Hieronder een voorbeeld voor de klasse dataset

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

exampleMS:1T2p3o4B a dcat:Dataset;
   dct:title "Naam van de dataset"@nl;
   dct:title "Title of the dataset"@en;
   dct:accessRights <http://publications.europa.eu/resource/authority/access-right/PUBLIC>;
   dcatap:applicableLegislation <http://data.europa.eu/eli/reg_impl/2023/138/oj>;
   dct:conformsTo <http://data.europa.eu/eli/reg/2010/1089>;
   dcat:contactPoint _:Organisatie-contactpoint;
   dct:creator _:Organisatie;
   dct:description "beschrijving van de dataset"@nl;
   dct:description "description of the dataset in english"@en;
   dct:identifier "https://data.exampleMS.gov/id/dataset/1T2p3o4B";
   dct:publisher _:Organisatie;
   dct:spatial <https://www.geonames.org/2750405>;
   dcat:theme <http://publications.europa.eu/resource/authority/data-theme/EDUC>;
   dcat:distribution exampleMS:1T2p3o4B-dist-SHP.

exampleMS:1T2p3o4B-dist-SHP a dcat:Distribution.
# Wordt bij de klasse distributie verder uitgewerkt

_:Organisatie-contactpoint a vcard:Kind;
   vcard:hasURL <https://organisatie/servicedesk> .

_:Organisatie a foaf:Agent;
    foaf:name "Organisatienaam".
```

