#### 
Onderstaand voorbeeld laat voor twee datasets de eigenschap zien die aangeeft dat ze onderdeel uitmaken van een DatasetSerie. De <code>dcat:DatasetSeries </code> bevat de verplichte eigenschappen. 
<aside class='example'>

```turtle
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

example-ds:BeePopulation2022 a dcat:Dataset;
  dcat:inSeries example-ser:BeePopulation .

example-ds:BeePopulation2023 a dcat:Dataset;
  dcat:inSeries example-ser:BeePopulation .

example-ser:BeePopulation a dcat:DatasetSeries;
  dct:title "Bee population"@en;
  dct:description "Bee population annual serie"@en;
  .


```
</aside>
