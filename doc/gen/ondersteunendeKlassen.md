# Ondersteunende Klassen

## Location - dct:Location
<table>
    <colgroup>
        <col style="width:21%">
        <col style="width:21%">
        <col style="width:21%">
    </colgroup>
    <tr>
        <th>Eigenschap</th>
        <th>URI</th>
        <th>Bereik</th>
        <th>Kardinaliteit</th>
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
    <td><em>Eigenschap</em></td>
    <td>bbox</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#bbox">dcat:bbox</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>A</td>
</tr>
</table>

### centroid
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>centroid</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#centroid">dcat:centroid</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>A</td>
</tr>
</table>

### geometry
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>geometry</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/locn#geometry">locn:geometry</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/ns/locn#Geometry">locn:Geometry</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>O</td>
</tr>
</table>

## PeriodOfTime - dct:PeriodOfTime
<table>
    <colgroup>
        <col style="width:21%">
        <col style="width:21%">
        <col style="width:21%">
    </colgroup>
    <tr>
        <th>Eigenschap</th>
        <th>URI</th>
        <th>Bereik</th>
        <th>Kardinaliteit</th>
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
    <td><em>Eigenschap</em></td>
    <td>beginning</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/2006/time#hasBeginning">time:hasBeginning</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2006/time#Instant">time:Instant</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>O</td>
</tr>
</table>

### end
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>end</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/2006/time#hasEnd">time:hasEnd</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2006/time#Instant">time:Instant</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>O</td>
</tr>
</table>

### end date
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>end date</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#endDate">dcat:endDate</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>A</td>
</tr>
</table>

### start date
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>start date</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#startDate">dcat:startDate</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>A</td>
</tr>
</table>

## Agent - foaf:Agent
<table>
    <colgroup>
        <col style="width:21%">
        <col style="width:21%">
        <col style="width:21%">
    </colgroup>
    <tr>
        <th>Eigenschap</th>
        <th>URI</th>
        <th>Bereik</th>
        <th>Kardinaliteit</th>
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
    <td><em>Eigenschap</em></td>
    <td>name</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/name">foaf:name</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>V</td>
</tr>
</table>

### type
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>type</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/type">dct:type</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>A</td>
</tr>
</table>

## Identifier - adms:Identifier
<table>
    <colgroup>
        <col style="width:21%">
        <col style="width:21%">
        <col style="width:21%">
    </colgroup>
    <tr>
        <th>Eigenschap</th>
        <th>URI</th>
        <th>Bereik</th>
        <th>Kardinaliteit</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#identifier-notation">notation</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#notation">skos:notation</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>AP</td>
    </tr>
</table>

### notation
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>notation</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#notation">skos:notation</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>V</td>
</tr>
</table>

## Relationship - dcat:Relationship
<table>
    <colgroup>
        <col style="width:21%">
        <col style="width:21%">
        <col style="width:21%">
    </colgroup>
    <tr>
        <th>Eigenschap</th>
        <th>URI</th>
        <th>Bereik</th>
        <th>Kardinaliteit</th>
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
    <td><em>Eigenschap</em></td>
    <td>had role</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#hadRole">dcat:hadRole</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Role">dcat:Role</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>V</td>
</tr>
</table>

### relation
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>relation</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/relation">dct:relation</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>V</td>
</tr>
</table>

## ConceptScheme - skos:ConceptScheme
<table>
    <colgroup>
        <col style="width:21%">
        <col style="width:21%">
        <col style="width:21%">
    </colgroup>
    <tr>
        <th>Eigenschap</th>
        <th>URI</th>
        <th>Bereik</th>
        <th>Kardinaliteit</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#conceptscheme-title">title</a></td>
        <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
</table>

### title
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>title</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>V</td>
</tr>
</table>

## Concept - skos:Concept
<table>
    <colgroup>
        <col style="width:21%">
        <col style="width:21%">
        <col style="width:21%">
    </colgroup>
    <tr>
        <th>Eigenschap</th>
        <th>URI</th>
        <th>Bereik</th>
        <th>Kardinaliteit</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#concept-preferred-label">preferred label</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#prefLabel">skos:prefLabel</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
</table>

### preferred label
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>preferred label</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#prefLabel">skos:prefLabel</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>V</td>
</tr>
</table>

## Checksum - spdx:Checksum
<table>
    <colgroup>
        <col style="width:21%">
        <col style="width:21%">
        <col style="width:21%">
    </colgroup>
    <tr>
        <th>Eigenschap</th>
        <th>URI</th>
        <th>Bereik</th>
        <th>Kardinaliteit</th>
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
    <td><em>Eigenschap</em></td>
    <td>algorithm</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://spdx.org/rdf/terms#algorithm">spdx:algorithm</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://spdx.org/rdf/terms#ChecksumAlgorithm">spdx:ChecksumAlgorithm</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>V</td>
</tr>
</table>

### checksum value
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>checksum value</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://spdx.org/rdf/terms#checksumValue">spdx:checksumValue</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2001/XMLSchema#hexBinary">xsd:hexBinary</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td>V</td>
</tr>
</table>

## LicenseDocument - dct:LicenseDocument
<table>
    <colgroup>
        <col style="width:21%">
        <col style="width:21%">
        <col style="width:21%">
    </colgroup>
    <tr>
        <th>Eigenschap</th>
        <th>URI</th>
        <th>Bereik</th>
        <th>Kardinaliteit</th>
        <th>Optionaliteit</th>
        <th>Herkomst</th>
    </tr>
    <tr>
        <td><a href="#licensedocument-type">type</a></td>
        <td><a href="http://purl.org/dc/terms/type">dct:type</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..n</td>
        <td></td>
        <td>AP</td>
    </tr>
</table>

### type
<table>
<tr>
    <td><em>Eigenschap</em></td>
    <td>type</td>
</tr>
<tr>
    <td><em>Kardinaliteit</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/type">dct:type</a></td>
</tr>
<tr>
    <td><em>Bereik</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
<tr>
    <td><em>Optionaliteit</em></td>
    <td></td>
</tr>
</table>


## Niet verder gespecificeerde klassen

De volgende ondersteunende klassen worden niet verder gespecificeerd door DCAT-AP-NL:

- [spdx:ChecksumAlgorithm](http://spdx.org/rdf/terms#ChecksumAlgorithm)

- [rdfs:Literal](http://www.w3.org/2000/01/rdf-schema#Literal)

- [time:Instant](http://www.w3.org/2006/time#Instant)

- [dcat:Resource](http://www.w3.org/ns/dcat#Resource)

- [dcat:Role](http://www.w3.org/ns/dcat#Role)

- [dct:Frequency](http://purl.org/dc/terms/Frequency)

- [dct:LinguisticSystem](http://purl.org/dc/terms/LinguisticSystem)

- [dct:MediaTypeOrExtent](http://purl.org/dc/terms/MediaTypeOrExtent)

- [dct:MediaType](http://purl.org/dc/terms/MediaType)

- [dct:ProvenanceStatement](http://purl.org/dc/terms/ProvenanceStatement)

- [dct:RightsStatement](http://purl.org/dc/terms/RightsStatement)

- [dct:Standard](http://purl.org/dc/terms/Standard)

- [eli:LegalResource](http://data.europa.eu/eli/ontology#LegalResource)

- [foaf:Document](http://xmlns.com/foaf/0.1/Document)

- [locn:Geometry](http://www.w3.org/ns/locn#Geometry)

- [odrl:Policy](http://www.w3.org/ns/odrl/2/Policy)

- [prov:Activity](http://www.w3.org/ns/prov#Activity)

- [prov:Attribution](http://www.w3.org/ns/prov#Attribution)

- [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)

- [vcard:Kind](http://www.w3.org/2006/vcard/ns#Kind)

