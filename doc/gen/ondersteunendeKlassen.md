# Ondersteunende Klassen

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

</table>

## Agent - foaf:Agent
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
    </tr>
    <tr>
        <td><a href="http://xmlns.com/foaf/0.1/name">name</a></td>
        <td>http://xmlns.com/foaf/0.1/name</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td>V</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/type">type</a></td>
        <td>http://purl.org/dc/terms/type</td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a> </td>
        <td>0..1</td>
        <td>A</td>
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
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
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/type">type</a></td>
        <td>http://purl.org/dc/terms/type</td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a> </td>
        <td>0..n</td>
        <td>A</td>
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
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#bbox">bbox</a></td>
        <td>http://www.w3.org/ns/dcat#bbox</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>A</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#centroid">centroid</a></td>
        <td>http://www.w3.org/ns/dcat#centroid</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>A</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/locn#geometry">geometry</a></td>
        <td>http://www.w3.org/ns/locn#geometry</td>
        <td><a href="http://www.w3.org/ns/locn#Geometry">locn:Geometry</a> </td>
        <td>0..1</td>
        <td>O</td>
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
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
    </tr>
    <tr>
        <td><a href="http://www.w3.org/2006/time#hasBeginning">beginning</a></td>
        <td>http://www.w3.org/2006/time#hasBeginning</td>
        <td><a href="http://www.w3.org/2006/time#Instant">time:Instant</a> </td>
        <td>0..1</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/2006/time#hasEnd">end</a></td>
        <td>http://www.w3.org/2006/time#hasEnd</td>
        <td><a href="http://www.w3.org/2006/time#Instant">time:Instant</a> </td>
        <td>0..1</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#endDate">end date</a></td>
        <td>http://www.w3.org/ns/dcat#endDate</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>A</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#startDate">start date</a></td>
        <td>http://www.w3.org/ns/dcat#startDate</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>A</td>
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
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
    </tr>
    <tr>
        <td><a href="http://spdx.org/rdf/terms#algorithm">algorithm</a></td>
        <td>http://spdx.org/rdf/terms#algorithm</td>
        <td><a href="http://spdx.org/rdf/terms#ChecksumAlgorithm">spdx:ChecksumAlgorithm</a> </td>
        <td>1..1</td>
        <td>V</td>
    </tr>
    <tr>
        <td><a href="http://spdx.org/rdf/terms#checksumValue">checksum value</a></td>
        <td>http://spdx.org/rdf/terms#checksumValue</td>
        <td><a href="http://www.w3.org/2001/XMLSchema#hexBinary">xsd:hexBinary</a> </td>
        <td>1..1</td>
        <td>V</td>
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
    </tr>
    <tr>
        <td><a href="http://www.w3.org/2004/02/skos/core#notation">notation</a></td>
        <td>http://www.w3.org/2004/02/skos/core#notation</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>V</td>
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
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
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#hadRole">had role</a></td>
        <td>http://www.w3.org/ns/dcat#hadRole</td>
        <td><a href="http://www.w3.org/ns/dcat#Role">dcat:Role</a> </td>
        <td>1..n</td>
        <td>V</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/relation">relation</a></td>
        <td>http://purl.org/dc/terms/relation</td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a> </td>
        <td>1..n</td>
        <td>V</td>
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
    </tr>
    <tr>
        <td><a href="http://www.w3.org/2004/02/skos/core#prefLabel">preferred label</a></td>
        <td>http://www.w3.org/2004/02/skos/core#prefLabel</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td></td>
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
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
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/title">title</a></td>
        <td>http://purl.org/dc/terms/title</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td></td>
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
</tr>
</table>

