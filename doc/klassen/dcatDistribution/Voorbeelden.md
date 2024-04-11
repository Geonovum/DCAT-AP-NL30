### Voorbeelden {#dcat-distribution-voorbeelden}

#### Minimale set van eigenschappen {#dcat-distribution-voorbeelden-minimale-set-van-eigenschappen}
Onderstaand voorbeeld beschrijft een <code>dcat:Distribution </code>met enkel de verplichte eigenschappen. Dit is de meest minimale representatie van een <code>dcat:Distribution</code>.

<aside class='example'>

```turtle
<ScoreLeefbaarometerBuurt2020> a dcat:Distribution ;
  dcat:accessURL <https:∕∕data.overheid.nl∕sites∕default∕files∕dataset∕f37c3649-cc52-4e48-a864-870ae42807a2∕resources∕Leefbaarometer%203.0%20-%20meting%202020%20-%20scores%20buurt.csv> ;
  dct:license <http:∕∕creativecommons.org∕publicdomain∕zero∕1.0∕deed.nl>;
.
```

</aside>

Onderstaand voorbeeld beschrijft een <code>dcat:Distribution </code>met de verplichte en aanbevolen en enkele conditionele eigenschappen. Dit is een verdere uitwerking van het voorbeeld bij <code>dcat:Dataset </code>

<aside class='example'>

```turtle
exampleMS:1T2p3o4B-dist-SHP a dcat:Distribution;
   dcat:accessURL <https://orgea.exampleMS.gov/files/1T2p3o4B.shp> ;
   dcatap:applicableLegislation <http://data.europa.eu/eli/reg_impl/2023/138/oj>;
   dcat:downloadURL <https://orgea.exampleMS.gov/files/1T2p3o4B.shp> ;
   dct:language <http://publications.europa.eu/resource/authority/language/NLD> ;
   dct:license <http://creativecommons.org/publicdomain/zero/1.0/deed.nl> ;
   dct:conformsTo <http://inspire.ec.europa.eu/schemas/hy/4.0/HydroBase.xsd> ;
   dcat:mediaType <https://www.iana.org/assignments/media-types/application/vnd.shp>
   .
```

</aside>

Onderstaand voorbeeld beschrijft een <code>dcat:Distribution </code>met die een dataservice ontsluit. Dit is een verdere uitwerking van het voorbeeld bij <code>dcat:Dataset </code>

<aside class='example'>

```turtle
exampleMS:1T2p3o4B-dist-WMS a dcat:Distribution;
   dcat:accessService exampleMS:1T2p3o4B-dataservice-WMS;
   dcat:accessURL <https://organisatie.geovoorziening.nl/wms?&request=GetCapabilities&service=WMS> ;
   dct:license <http://creativecommons.org/publicdomain/zero/1.0/deed.nl> ;
   .
```

</aside>
