
#### 
Onderstaand voorbeeld beschrijft een <code>dcat:Catalog </code>met de verplichte een aantal aanbevolen eigenschappen. 
<aside class='example'>

```turtle
exampleMS:Datacatalog  a dcat:Catalogue;
  dct:title "De naam van de catalog"@nl;
   dcat:contactPoint [
     a vcard:Kind ;
     vcard:fn "Mijn Organisatie"@nl ;
     vcard:fn "My Organization"@en ;
     vcard:hasEmail <mailto:opendata@mijnorganisatie.nl> ;
     vcard:hasURL "http://mijnorganisatie.org/" ;
     vcard:organization-name "Mijn Organisatie"@nl ;
     vcard:organization-name "My Organization"@en
     ] ; 
  dct:description "beschrijving van de catalog"@nl;
   dct:publisher [
     dct:type <http://purl.org/adms/publishertype/LocalAuthority> ;
     a foaf:Agent ;
     foaf:name "Mijn Organisatie"@nl;
     foaf:name "My Organization"@en
     ] ;
  dcat:dataset exampleMS:1T2p3o4B ;
  dcat:service exampleMS:1T2p3o4B-dataservice-WMS
  .

```
</aside>
