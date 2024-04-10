{% if nodeShape.propertyShapes is not empty %}
{% set targetClassLocalName = nodeShape.targetClass | split(':') | last %}
## {{ targetClassLocalName }} - {{ nodeShape.targetClass }}

<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
    </tr>
{% for propEntry in nodeShape.propertyShapes %}
{% set prop = propEntry.value %}
    <tr>
        <td><a href="#{{ targetClassLocalName | lower | replace({' ' : '-'}) }}-{{ prop.propertyName | lower | replace({' ' : '-'}) }}">{{ prop.propertyName }}</a></td>
        <td>{{ prop.property }}</td>
        <td>{% if prop.class != null %}<a href="{{ prop.class }}">{{ prop.classPrefixed }}</a>{% elseif prop.datatype != null %}<a href="{{ prop.datatype }}">{{ prop.datatypePrefixed }}</a>{% elseif prop.nodeShapeName != null %}<a href="{{ prop.nodeShapeSeeAlso }}">{{ prop.nodeShapeName }}</a>{% elseif prop.nodeKind != null %}<a href="{{ prop.nodeKind | replace({'http://www.w3.org/ns/shacl#Literal' : 'http://www.w3.org/2000/01/rdf-schema#Literal' }) }}">{{ prop.nodeKindPrefixed | replace({'sh:Literal' : 'rdfs:Literal'}) }}</a>{% endif %}</td>
        <td>{{ prop.minCount | default("0") }}..{{ prop.maxCount | default("n") }}</td>
        <td>{% if prop.optionaliteit contains "V"%}V{% elseif prop.optionaliteit contains "C"%}C{% elseif prop.optionaliteit contains "A"%}A{% elseif prop.optionaliteit contains "O"%}O{% endif %}</td>
        <td>{% if prop.shape contains 'https://TODO.com/DCAT-AP-NL/' %}NL{% else %}AP{% endif %}</td>
    </tr>
{% endfor %}
</table>

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
    <td>{% if prop.class != null %}<a href="{{ prop.class }}">{{ prop.classPrefixed }}</a>{% elseif prop.datatype != null %}<a href="{{ prop.datatype }}">{{ prop.datatypePrefixed }}</a>{% elseif prop.nodeShapeName != null %}<a href="{{ prop.nodeShapeSeeAlso }}">{{ prop.nodeShapeName }}</a>{% elseif prop.nodeKind != null %}<a href="{{ prop.nodeKind | replace({'http://www.w3.org/ns/shacl#Literal' : 'http://www.w3.org/2000/01/rdf-schema#Literal' }) }}">{{ prop.nodeKindPrefixed | replace({'sh:Literal' : 'rdfs:Literal'}) }}</a>{% endif %}</td>
</tr>
</table>

{% endfor %}
{% endif %}
