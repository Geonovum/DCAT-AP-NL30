# Klassen

{% set classOrder = [
  "http://www.w3.org/ns/dcat#Dataset",
  "http://www.w3.org/ns/dcat#Distribution",
  "http://www.w3.org/ns/dcat#DataService",
  "http://www.w3.org/ns/dcat#Catalog",
  "http://www.w3.org/ns/dcat#CatalogRecord"
] %}
{# Process classes in classOrder #}
{% for class in classOrder %}
{% set nodeShape = nodeShapes[[class]] %}
{% if nodeShape is not empty %}
{% include "./klasse.md" %}
{% endif %}
{% endfor %}
{# Process all other classes not specified in classOrder #}
{% for nodeShapeEntry in nodeShapes %}
{% if not(classOrder contains nodeShapeEntry.key) %}
{% set nodeShape = nodeShapeEntry.value %}
{% include "./klasse.md" %}
{% endif %}
{% endfor %}
