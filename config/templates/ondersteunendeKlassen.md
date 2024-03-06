# Ondersteunende Klassen

{% set classOrder = [
  "http://www.w3.org/ns/dcat#Dataset",
  "http://www.w3.org/ns/dcat#Distribution",
  "http://www.w3.org/ns/dcat#DataService",
  "http://www.w3.org/ns/dcat#Catalog",
  "http://www.w3.org/ns/dcat#CatalogRecord",
  "http://www.w3.org/ns/dcat#DatasetSeries"
] %}
{# Process all other classes not specified in classOrder #}
{% for nodeShapeEntry in nodeShapes %}
{% if not(classOrder contains nodeShapeEntry.key) %}
{% set nodeShape = nodeShapeEntry.value %}
{% include "./ondersteunendeKlasse.md" %}
{% endif %}
{% endfor %}
