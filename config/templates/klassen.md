# Klassen

In dit hoofdstuk worden de belangrijkste klassen van het <u>applicatieprofiel</u> benoemd en beschreven. Deze klassen vormen de kern van het applicatieprofiel. De eigenschappen en de bijbehorende beperkingen die van toepassing zijn in de context van dit profiel worden in tabelvorm weergegeven. Elke rij komt overeen met één eigenschap. De eigenschappen worden in sub paragrafen verder toegelicht.
<br/>
<br/>
De niet beschreven klassen en eigenschappen behoren conform [[DCAT-AP-3.0]] toegepast te worden.

{% set classOrder = [
  "http://www.w3.org/ns/dcat#Dataset",
  "http://www.w3.org/ns/dcat#Distribution",
  "http://www.w3.org/ns/dcat#DataService",
  "http://www.w3.org/ns/dcat#Catalog",
  "http://www.w3.org/ns/dcat#CatalogRecord",
  "http://www.w3.org/ns/dcat#DatasetSeries"
] %}
{# Process classes in classOrder #}
{% for class in classOrder %}
{% set nodeShape = nodeShapes[[class]] %}
{% if nodeShape is not empty %}
{% include "./klasse.md" %}
{% endif %}
{% endfor %}
