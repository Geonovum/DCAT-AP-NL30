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
        <td><a href="#location-bbox" target='_blank'>bbox</a></td>
        <td><a href="http://www.w3.org/ns/dcat#bbox" target='_blank'>dcat:bbox</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#location-centroid" target='_blank'>centroid</a></td>
        <td><a href="http://www.w3.org/ns/dcat#centroid" target='_blank'>dcat:centroid</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#location-geometry" target='_blank'>geometry</a></td>
        <td><a href="http://www.w3.org/ns/locn#geometry" target='_blank'>locn:geometry</a></td>
        <td><a href="http://www.w3.org/ns/locn#Geometry" target='_blank'>locn:Geometry</a></td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
    <td><a href="http://www.w3.org/ns/locn#Geometry" target='_blank'>locn:Geometry</a></td>
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
        <td><a href="#periodoftime-beginning" target='_blank'>beginning</a></td>
        <td><a href="http://www.w3.org/2006/time#hasBeginning" target='_blank'>time:hasBeginning</a></td>
        <td><a href="http://www.w3.org/2006/time#Instant" target='_blank'>time:Instant</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#periodoftime-end" target='_blank'>end</a></td>
        <td><a href="http://www.w3.org/2006/time#hasEnd" target='_blank'>time:hasEnd</a></td>
        <td><a href="http://www.w3.org/2006/time#Instant" target='_blank'>time:Instant</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#periodoftime-end-date" target='_blank'>end date</a></td>
        <td><a href="http://www.w3.org/ns/dcat#endDate" target='_blank'>dcat:endDate</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#periodoftime-start-date" target='_blank'>start date</a></td>
        <td><a href="http://www.w3.org/ns/dcat#startDate" target='_blank'>dcat:startDate</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
    <td><a href="http://www.w3.org/2006/time#Instant" target='_blank'>time:Instant</a></td>
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
    <td><a href="http://www.w3.org/2006/time#Instant" target='_blank'>time:Instant</a></td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
        <td><a href="#agent-name" target='_blank'>name</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/name" target='_blank'>foaf:name</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#agent-type" target='_blank'>type</a></td>
        <td><a href="http://purl.org/dc/terms/type" target='_blank'>dct:type</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept" target='_blank'>skos:Concept</a></td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept" target='_blank'>skos:Concept</a></td>
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
        <td><a href="#identifier-notation" target='_blank'>notation</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#notation" target='_blank'>skos:notation</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
        <td><a href="#relationship-had-role" target='_blank'>had role</a></td>
        <td><a href="http://www.w3.org/ns/dcat#hadRole" target='_blank'>dcat:hadRole</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Role" target='_blank'>dcat:Role</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#relationship-relation" target='_blank'>relation</a></td>
        <td><a href="http://purl.org/dc/terms/relation" target='_blank'>dct:relation</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource" target='_blank'>rdfs:Resource</a></td>
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
    <td><a href="http://www.w3.org/ns/dcat#Role" target='_blank'>dcat:Role</a></td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource" target='_blank'>rdfs:Resource</a></td>
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
        <td><a href="#conceptscheme-title" target='_blank'>title</a></td>
        <td><a href="http://purl.org/dc/terms/title" target='_blank'>dct:title</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
        <td><a href="#concept-preferred-label" target='_blank'>preferred label</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#prefLabel" target='_blank'>skos:prefLabel</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal" target='_blank'>rdfs:Literal</a></td>
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
        <td><a href="#checksum-algorithm" target='_blank'>algorithm</a></td>
        <td><a href="http://spdx.org/rdf/terms#algorithm" target='_blank'>spdx:algorithm</a></td>
        <td><a href="http://spdx.org/rdf/terms#ChecksumAlgorithm" target='_blank'>spdx:ChecksumAlgorithm</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#checksum-checksum-value" target='_blank'>checksum value</a></td>
        <td><a href="http://spdx.org/rdf/terms#checksumValue" target='_blank'>spdx:checksumValue</a></td>
        <td><a href="http://www.w3.org/2001/XMLSchema#hexBinary" target='_blank'>xsd:hexBinary</a></td>
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
    <td><a href="http://spdx.org/rdf/terms#ChecksumAlgorithm" target='_blank'>spdx:ChecksumAlgorithm</a></td>
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
    <td><a href="http://www.w3.org/2001/XMLSchema#hexBinary" target='_blank'>xsd:hexBinary</a></td>
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
        <td><a href="#licensedocument-type" target='_blank'>type</a></td>
        <td><a href="http://purl.org/dc/terms/type" target='_blank'>dct:type</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept" target='_blank'>skos:Concept</a></td>
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
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept" target='_blank'>skos:Concept</a></td>
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

