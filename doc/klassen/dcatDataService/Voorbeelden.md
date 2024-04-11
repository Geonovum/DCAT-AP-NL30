
#### 
Onderstaand voorbeeld beschrijft een <code>dcat:DataService </code>met de verplichte een aantal conditionele en aanbevolen eigenschappen. 
<aside class='example'>

```turtle

exampleMS:1T2p3o4B-dataservice-WMS a dcat:DataService;
   dct:title "Naam van de dataservice"@nl;
   dct:title "Title of the dataservice"@en;
   dct:accessRights <http://publications.europa.eu/resource/authority/access-right/PUBLIC>;
   dcatap:applicableLegislation <http://data.europa.eu/eli/reg_impl/2023/138/oj>;
   dct:applicationProfile <http://www.opengis.net/def/serviceType/ogc/wms>;
   dcat:contactPoint [
     a vcard:Kind;
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
   dct:description "beschrijving van de dataservice"@nl;
   dct:description "description of the dataservice in english"@en;
   foaf:page <https://orgea.exampleMS.gov/QoS.html> ;
   dcat:endpointDescription <https://orgea.exampleMS.gov/services/wms?&request=GetCapabilities&service=WMS>;
   dcat:endpointURL <https://orgea.exampleMS.gov/services/wms?> ;
   dct:identifier "https://data.exampleMS.gov/id/data/1T2p3o4B-dataservice-WMS";
   dcat:keyword "trefwoord 1"@nl;
   dcat:keyword "trefwoord 2"@nl;
   dcat:keyword "keyword 1"@en;
   dcat:keyword "keyword 2"@en;
   dct:language <http://publications.europa.eu/resource/authority/language/NLD> ;
   dct:license <http://creativecommons.org/publicdomain/zero/1.0/deed.nl> ;
   dct:publisher [
     dct:type <http://purl.org/adms/publishertype/LocalAuthority> ;
     a foaf:Agent ;
     foaf:name "Mijn Organisatie"@nl;
     foaf:name "My Organization"@en
     ] ;
   dcat:theme <http://publications.europa.eu/resource/authority/data-theme/EDUC>;
   dcat:servesDataset exampleMS:1T2p3o4B
.
```
</aside>
