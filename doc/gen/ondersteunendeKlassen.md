# Ondersteunende Klassen

## Agent - foaf:Agent
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#agent-name">name</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/name">foaf:name</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#agent-type">type</a></td>
        <td><a href="http://purl.org/dc/terms/type">dct:type</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
</table>

### name
<table>
<tr>
    <td><em>Property</em></td>
    <td>name</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/name">foaf:name</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### type
<table>
<tr>
    <td><em>Property</em></td>
    <td>type</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/type">dct:type</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
</table>

## LicenseDocument - dct:LicenseDocument
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#licensedocument-type">type</a></td>
        <td><a href="http://purl.org/dc/terms/type">dct:type</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>AP</td>
    </tr>
</table>

### type
<table>
<tr>
    <td><em>Property</em></td>
    <td>type</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/type">dct:type</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
</table>

## Location - dct:Location
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#location-bbox">bbox</a></td>
        <td><a href="http://www.w3.org/ns/dcat#bbox">dcat:bbox</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#location-centroid">centroid</a></td>
        <td><a href="http://www.w3.org/ns/dcat#centroid">dcat:centroid</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#location-geometry">geometry</a></td>
        <td><a href="http://www.w3.org/ns/locn#geometry">locn:geometry</a></td>
        <td><a href="http://www.w3.org/ns/locn#Geometry">locn:Geometry</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
</table>

### bbox
<table>
<tr>
    <td><em>Property</em></td>
    <td>bbox</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#bbox">dcat:bbox</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### centroid
<table>
<tr>
    <td><em>Property</em></td>
    <td>centroid</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#centroid">dcat:centroid</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### geometry
<table>
<tr>
    <td><em>Property</em></td>
    <td>geometry</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/locn#geometry">locn:geometry</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/locn#Geometry">locn:Geometry</a></td>
</tr>
</table>

## PeriodOfTime - dct:PeriodOfTime
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#periodoftime-beginning">beginning</a></td>
        <td><a href="http://www.w3.org/2006/time#hasBeginning">time:hasBeginning</a></td>
        <td><a href="http://www.w3.org/2006/time#Instant">time:Instant</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#periodoftime-end">end</a></td>
        <td><a href="http://www.w3.org/2006/time#hasEnd">time:hasEnd</a></td>
        <td><a href="http://www.w3.org/2006/time#Instant">time:Instant</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#periodoftime-end-date">end date</a></td>
        <td><a href="http://www.w3.org/ns/dcat#endDate">dcat:endDate</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#periodoftime-start-date">start date</a></td>
        <td><a href="http://www.w3.org/ns/dcat#startDate">dcat:startDate</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
</table>

### beginning
<table>
<tr>
    <td><em>Property</em></td>
    <td>beginning</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/2006/time#hasBeginning">time:hasBeginning</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2006/time#Instant">time:Instant</a></td>
</tr>
</table>

### end
<table>
<tr>
    <td><em>Property</em></td>
    <td>end</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/2006/time#hasEnd">time:hasEnd</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2006/time#Instant">time:Instant</a></td>
</tr>
</table>

### end date
<table>
<tr>
    <td><em>Property</em></td>
    <td>end date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#endDate">dcat:endDate</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### start date
<table>
<tr>
    <td><em>Property</em></td>
    <td>start date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#startDate">dcat:startDate</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

## Checksum - spdx:Checksum
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#checksum-algorithm">algorithm</a></td>
        <td><a href="http://spdx.org/rdf/terms#algorithm">spdx:algorithm</a></td>
        <td><a href="http://spdx.org/rdf/terms#ChecksumAlgorithm">spdx:ChecksumAlgorithm</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#checksum-checksum-value">checksum value</a></td>
        <td><a href="http://spdx.org/rdf/terms#checksumValue">spdx:checksumValue</a></td>
        <td><a href="http://www.w3.org/2001/XMLSchema#hexBinary">xsd:hexBinary</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>AP</td>
    </tr>
</table>

### algorithm
<table>
<tr>
    <td><em>Property</em></td>
    <td>algorithm</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://spdx.org/rdf/terms#algorithm">spdx:algorithm</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://spdx.org/rdf/terms#ChecksumAlgorithm">spdx:ChecksumAlgorithm</a></td>
</tr>
</table>

### checksum value
<table>
<tr>
    <td><em>Property</em></td>
    <td>checksum value</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://spdx.org/rdf/terms#checksumValue">spdx:checksumValue</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2001/XMLSchema#hexBinary">xsd:hexBinary</a></td>
</tr>
</table>

## Identifier - adms:Identifier
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#identifier-notation">notation</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#notation">skos:notation</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>V</td>
        <td>AP</td>
    </tr>
</table>

### notation
<table>
<tr>
    <td><em>Property</em></td>
    <td>notation</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#notation">skos:notation</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

## Relationship - dcat:Relationship
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#relationship-had-role">had role</a></td>
        <td><a href="http://www.w3.org/ns/dcat#hadRole">dcat:hadRole</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Role">dcat:Role</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#relationship-relation">relation</a></td>
        <td><a href="http://purl.org/dc/terms/relation">dct:relation</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
</table>

### had role
<table>
<tr>
    <td><em>Property</em></td>
    <td>had role</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#hadRole">dcat:hadRole</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Role">dcat:Role</a></td>
</tr>
</table>

### relation
<table>
<tr>
    <td><em>Property</em></td>
    <td>relation</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/relation">dct:relation</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
</tr>
</table>

## Concept - skos:Concept
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#concept-preferred-label">preferred label</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#prefLabel">skos:prefLabel</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td></td>
        <td>AP</td>
    </tr>
</table>

### preferred label
<table>
<tr>
    <td><em>Property</em></td>
    <td>preferred label</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#prefLabel">skos:prefLabel</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

## ConceptScheme - skos:ConceptScheme
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#conceptscheme-title">title</a></td>
        <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td></td>
        <td>AP</td>
    </tr>
</table>

### title
<table>
<tr>
    <td><em>Property</em></td>
    <td>title</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>


## Niet verder gespecificeerde klassen

De volgende ondersteunende klassen worden niet verder gespecificeerd door DCAT-AP-NL:

- [prov:Activity](http://www.w3.org/ns/prov#Activity)

- [prov:Attribution](http://www.w3.org/ns/prov#Attribution)

- [dcat:Resource](http://www.w3.org/ns/dcat#Resource)

- [spdx:ChecksumAlgorithm](http://spdx.org/rdf/terms#ChecksumAlgorithm)

- [foaf:Document](http://xmlns.com/foaf/0.1/Document)

- [dct:Frequency](http://purl.org/dc/terms/Frequency)

- [locn:Geometry](http://www.w3.org/ns/locn#Geometry)

- [vcard:Kind](http://www.w3.org/2006/vcard/ns#Kind)

- [dct:LinguisticSystem](http://purl.org/dc/terms/LinguisticSystem)

- [rdfs:Literal](http://www.w3.org/2000/01/rdf-schema#Literal)

- [dct:MediaType](http://purl.org/dc/terms/MediaType)

- [dct:MediaTypeOrExtent](http://purl.org/dc/terms/MediaTypeOrExtent)

- [odrl:Policy](http://www.w3.org/ns/odrl/2/Policy)

- [dct:ProvenanceStatement](http://purl.org/dc/terms/ProvenanceStatement)

- [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)

- [dct:RightsStatement](http://purl.org/dc/terms/RightsStatement)

- [dcat:Role](http://www.w3.org/ns/dcat#Role)

- [dct:Standard](http://purl.org/dc/terms/Standard)

- [time:Instant](http://www.w3.org/2006/time#Instant)

