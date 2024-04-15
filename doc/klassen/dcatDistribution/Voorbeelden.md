### Voorbeelden {#dcat-distribution-voorbeelden}


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

Onderstaand voorbeeld beschrijft een <code>dcat:Distribution </code> die een dataservice ontsluit. Dit is een verdere uitwerking van het voorbeeld bij <code>dcat:Dataset </code>

<aside class='example'>

```turtle
exampleMS:1T2p3o4B-dist-WMS a dcat:Distribution;
   dcat:accessService exampleMS:1T2p3o4B-dataservice-WMS;
   dcat:accessURL <https://orgea.exampleMS.gov/services/wms?&request=GetCapabilities&service=WMS> ;
   dct:license <http://creativecommons.org/publicdomain/zero/1.0/deed.nl> ;
   .
exampleMS:1T2p3o4B-dataservice-WMS a dcat:DataService;
# wordt verder uitgewerkt bij DataService
```

</aside>
