## Ondersteuning voor meertaligheid {#10B7B8F1}
Alle eigenschappen die voor mensen leesbare tekst bevatten (de range literal met een string waarde hebben) zoals bijvoorbeeld  <code>dct:title</code> , <code>dct:description</code>, en <code>dcat:keyword </code>kunnen waardes in verschillende talen bevatten. Voor elke taal wordt de eigenschap herhaald met de toevoeging van een language tag om aan te geven in welke taal de waarde geschreven is. 
<br/>
Maak bij het gebruik van ondersteunende klassen, zoals bijvoorbeeld voor <code>dcat:contactPoint</code> één object aan en herhaal voor elke taal de eigenschap met de toevoeging van een language tag.
<br/>
Daarvoor wordt een waarde uit de waardelijst voor language toegepast: [ISO 639-1 (two-letter)](https://id.loc.gov/vocabulary/iso639-1.html)

Voorbeeld meertaligheid

<aside class='example'>

```turtle


exampleMS:1T2p3o4B a dcat:Dataset;
   dct:title "Naam van de dataset"@nl;
   dct:title "Title of the dataset"@en;
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
   dcat:keyword "trefwoord 1"@nl;
   dcat:keyword "trefwoord 2"@nl;
   dcat:keyword "keyword 1"@en;
   dcat:keyword "keyword 2"@en; 
   .
```
