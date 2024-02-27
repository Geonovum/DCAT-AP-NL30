{% set targetClassLocalName = nodeShape.targetClass | split(':') | last %}
## {{ targetClassLocalName }} - {{ nodeShape.targetClass }}

{% if nodeShape.propertyShapes is not empty %}
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
    </tr>
{% endif %}
{% for propEntry in nodeShape.propertyShapes %}
{% set prop = propEntry.value %}
    <tr>
        <td><a href="{{ prop.property }}">{{ prop.propertyName }}</a></td>
        <td>{{ prop.property }}</td>
        <td>{% if prop.class != null %}<a href="{{ prop.class }}">{{ prop.classPrefixed }}</a>{% elseif prop.datatype != null %}<a href="{{ prop.datatype }}">{{ prop.datatypePrefixed }}</a>{% elseif prop.nodeKind != null %}<a href="{{ prop.nodeKind }}">prop.nodeKindPrefixed</a>{% endif %}</td>
        <td>{{ prop.minCount | default("0") }}..{{ prop.maxCount | default("n") }}</td>
    </tr>
{% endfor %}
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/{{ nodeShape.targetClass }}/prop/{{ prop.property }}.md"></p> -->
{% for propEntry in nodeShape.propertyShapes %}
{% set prop = propEntry.value %}
### {{ prop.propertyName }}

<table>
<tr>
    <td><em>Property</em></td>
    <td>{{ prop.propertyName }}</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>{{ prop.minCount | default("0") }}..{{ prop.maxCount | default("n") }}</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="{{ prop.property }}">{{ prop.propertyPrefixed }}</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td>{% if prop.class != null %}<a href="{{ prop.class }}">{{ prop.classPrefixed }}</a>{% elseif prop.datatype != null %}<a href="{{ prop.datatype }}">{{ prop.datatypePrefixed }}</a>{% elseif prop.nodeKind != null %}<a href="{{ prop.nodeKind }}">prop.nodeKindPrefixed</a>{% endif %}</td>
</tr>
</table>

{% endfor %}

<!-- property tabel -->
