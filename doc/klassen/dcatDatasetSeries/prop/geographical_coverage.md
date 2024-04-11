Het geografische gebied dat wordt gedekt door de dataset serie. De ruimtelijke dekking van een dataset serie kan worden gecodeerd als een dcterms:Location, of kan kan worden aangegeven met behulp van een URI-referentie (link) naar een bron die een locatie beschrijft.

Met dcterms:Location kunnen de eigenschappen bounding box, centroide of geometry worden beschreven. De coördinaten dienen te worden weergegeven volgens referentiesysteem WGS 84.
"Voor de Bbox zijn de coördinaten zijn de meest westelijke, oostelijke, noordelijke en zuidelijke coördinaat uit de horizontale dekking van de dataset serie weergegeven in latitude en longitude in decimale graden (noord en oost als positieve waarden)."


Voor de invulling van deze eigenschap met een gebiedsnaam, moet als mogelijk een waarde uit <a href='http://publications.europa.eu/resource/authority/continent/' target='_blank'>EU Vocabularies Continents Named Authority List</a>, <a href='http://publications.europa.eu/resource/authority/country' target='_blank'>EU Vocabularies Countries Named Authority List</a>, <a href='http://publications.europa.eu/resource/authority/place/' target='_blank'>EU Vocabularies Places Named Authority List</a> worden gebruikt. Als de waarde daarin niet aanwezig is moet een URI uit <a href='http://www.geonames.org/' target='_blank'>Geonames</a> worden gebruikt. 

Voor specifiekere aanduidingen, zoals wijken en buurten kan aanvullend gebruik worden gemaakt van  <a href='https://vocabs.cbs.nl/nl/' target='_blank'>https://vocabs.cbs.nl/nl/</a> 
<br/>
<br/>
Als de spatial coverage een dimensie is in de dataset series, dan moet de spatial coverage van elke dataset in de verzameling deel uitmaken van de dataset serie. In dat geval wordt een open waarde aanbevolen, bv. EU of een brede bounding box die de verwachte waarden omvat.
