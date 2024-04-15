Voorbeeld voor de klasse dataset

<aside class='example'>

```turtle

## Imports om relevante waardes uit waardelijsten of gegevens uit externe bronnen op te nemen.
##  Dit is in principe alleen nodig voor validatie en als er gebruik gemaakt kan worden van owl:imports bij validatie.
@prefix owl: <http://www.w3.org/2002/07/owl#> .
[] owl:imports 
  <http://publications.europa.eu/resource/authority/access-right/PUBLIC> ,
  <http://data.europa.eu/eli/reg_impl/2023/138/oj> ,
  <http://data.europa.eu/eli/reg/2010/1089> ,
  <http://publications.europa.eu/resource/authority/language/NLD> ,
  <http://www.geonames.org/2750405/about.rdf> ,
  <http://publications.europa.eu/resource/authority/data-theme/EDUC> .
## End Import

@prefix exampleMS: <https://data.exampleMS.gov/id/data/>.
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
   dct:title "Title of the dataset"@en;
   dct:accessRights <http://publications.europa.eu/resource/authority/access-right/PUBLIC>;
   dcatap:applicableLegislation <http://data.europa.eu/eli/reg_impl/2023/138/oj>;
   dct:conformsTo <http://data.europa.eu/eli/reg/2010/1089>;
   dcat:contactPoint [
     a <https://json-ld.org/playground/Organization> ;
     vcard:fn "Mijn Organisatie"@nl ;
     vcard:fn "My Organization"@en ;
     vcard:hasEmail <mailto:opendata@mijnorganisatie.nl> ;
     vcard:hasURL "http://mijnorganisatie.org/" ;
     vcard:organization-name "Mijn Organisatie"@nl ;
     vcard:organization-name "My Organization"@en
     ] ; 
   dct:creator [
     dct:type <http://purl.org/adms/publishertype/LocalAuthority> ;
     a foaf:Agent ;
     foaf:name "Mijn Organisatie"@nl;
     foaf:name "My Organization"@en
     ] ;
   dct:description "beschrijving van de dataset"@nl;
   dct:description "description of the dataset in english"@en;
   dct:identifier "https://data.exampleMS.gov/id/dataset/1T2p3o4B";
   dcat:keyword "trefwoord 1"@nl;
   dcat:keyword "trefwoord 2"@nl;
   dcat:keyword "keyword 1"@en;
   dcat:keyword "keyword 2"@en;
   dct:language <http://publications.europa.eu/resource/authority/language/NLD> ;
   dct:publisher [
     dct:type <http://purl.org/adms/publishertype/LocalAuthority> ;
     a foaf:Agent ;
     foaf:name "Mijn Organisatie"@nl;
     foaf:name "My Organization"@en
     ] ;
   dct:spatial <https://www.geonames.org/2750405>;
   dct:spatial [a dct:Location ;
                  dcat:bbox "POLYGON ((3.053 47.975,7.24 47.975,7.24 53.504,3.053 53.504,3.053 47.975))"^^rdf:wktLiteral;
  ] ;
   dct:temporal [ a dct:PeriodOfTime ;
     dcat:startDate "2016-03-28"^^xsd:date ;
     dcat:endDate   "2018-08-25"^^xsd:date ;
     ] ;
   dcat:theme <http://publications.europa.eu/resource/authority/data-theme/EDUC>;
   dcat:distribution exampleMS:1T2p3o4B-dist-SHP;
   dcat:distribution exampleMS:1T2p3o4B-dist-WMS
   .

exampleMS:1T2p3o4B-dist-SHP a dcat:Distribution;
.
# wordt verder uitgewerkt in voorbeeld Distributie

# Aanvullingen voor EU waardelijsten, die nog niet volledig zijn ontsloten 
# De dct:RightsStatement zit niet in de waardelijst. Dat lijkt een fout in de waardelijst.
<http://publications.europa.eu/resource/authority/access-right/PUBLIC> a dct:RightsStatement .

# De typering dct:LinguisticSystem zit niet in de waardelijst. Dat lijkt een fout in de waardelijst.
<http://publications.europa.eu/resource/authority/language/NLD> a dct:LinguisticSystem .

# Geen RDF van beschikbaar
<http://data.europa.eu/eli/reg_impl/2023/138/oj> a eli:LegalResource .

# Geen RDF van beschikbaar
<http://data.europa.eu/eli/reg/2010/1089> a dct:Standard .

# Geonames is niet gedefinieert als een dct:Location. 
<https://www.geonames.org/2750405> a dct:Location .

# Deze zou je kunnen importeren, maar dan krijg je validatiefouten op ConceptScheme shapes, omdat de adms ConceptSchemes niet voldoen aan de ConceptScheme shape van DCAT-AP.
<http://purl.org/adms/publishertype/LocalAuthority> a skos:Concept ;
 skos:prefLabel"Local Authority"@en .



```
