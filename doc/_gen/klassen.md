# Klassen

<<<<<<< HEAD
In dit hoofdstuk worden de belangrijkste klassen van het <u>applicatieprofiel</u> benoemd en beschreven. Deze klassen vormen de kern van het applicatieprofiel. De eigenschappen en de bijbehorende beperkingen die van toepassing zijn in de context van dit profiel worden in tabelvorm weergegeven. Elke rij komt overeen met één eigenschap. De eigenschappen worden in sub paragrafen verder toegelicht.
<br/>
<br/>
De niet beschreven klassen en eigenschappen behoren conform [[DCAT-AP-3.0]] toegepast te worden.

## Dataset - dcat:Dataset
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/dcatDataset.md"></p>

=======
## Dataset - dcat:Dataset
>>>>>>> dd87257 (fix doc)
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
<<<<<<< HEAD
        <th>Optionaliteit</th>
=======
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/accessRights">access rights</a></td>
        <td>http://purl.org/dc/terms/accessRights</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a> </td>
        <td>1..1</td>
        <td>V</td>
    </tr>
    <tr>
        <td><a href="http://data.europa.eu/r5r/applicableLegislation">applicable legislation</a></td>
        <td>http://data.europa.eu/r5r/applicableLegislation</td>
        <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a> </td>
        <td>0..n</td>
        <td>C</td>
=======
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/conformsTo">conforms to</a></td>
        <td>http://purl.org/dc/terms/conformsTo</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a> </td>
        <td>0..n</td>
        <td>A</td>
=======
        <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#contactPoint">contact point</a></td>
        <td>http://www.w3.org/ns/dcat#contactPoint</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a> </td>
        <td>1..1</td>
        <td>V</td>
=======
        <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/creator">creator</a></td>
        <td>http://purl.org/dc/terms/creator</td>
<<<<<<< HEAD
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a> </td>
        <td>1..1</td>
        <td>V</td>
=======
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#distribution">dataset distribution</a></td>
        <td>http://www.w3.org/ns/dcat#distribution</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Distribution">dcat:Distribution</a> </td>
        <td>0..n</td>
        <td>C</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Distribution">dcat:Distribution</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/description">description</a></td>
        <td>http://purl.org/dc/terms/description</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td>V</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>1..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://xmlns.com/foaf/0.1/page">documentation</a></td>
        <td>http://xmlns.com/foaf/0.1/page</td>
<<<<<<< HEAD
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a> </td>
        <td>0..n</td>
        <td>A</td>
=======
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/accrualPeriodicity">frequency</a></td>
        <td>http://purl.org/dc/terms/accrualPeriodicity</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/Frequency">dct:Frequency</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/Frequency">dct:Frequency</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/spatial">geographical coverage</a></td>
        <td>http://purl.org/dc/terms/spatial</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/Location">dct:Location</a> </td>
        <td>0..n</td>
        <td>A</td>
=======
        <td><a href="http://purl.org/dc/terms/Location">dct:Location</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#hasVersion">has version</a></td>
        <td>http://www.w3.org/ns/dcat#hasVersion</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a> </td>
        <td>0..n</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://data.europa.eu/r5r/hvdCategory">HVD Category</a></td>
        <td>http://data.europa.eu/r5r/hvdCategory</td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a> </td>
        <td>0..n</td>
        <td>C</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/identifier">identifier</a></td>
        <td>http://purl.org/dc/terms/identifier</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..n</td>
        <td>V</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#inSeries">in series</a></td>
        <td>http://www.w3.org/ns/dcat#inSeries</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#DatasetSeries">dcat:DatasetSeries</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#DatasetSeries">dcat:DatasetSeries</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/isReferencedBy">is referenced by</a></td>
        <td>http://purl.org/dc/terms/isReferencedBy</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#isVersionOf">is version of</a></td>
        <td>http://www.w3.org/ns/dcat#isVersionOf</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#keyword">keyword</a></td>
        <td>http://www.w3.org/ns/dcat#keyword</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..n</td>
        <td>A</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#landingPage">landing page</a></td>
        <td>http://www.w3.org/ns/dcat#landingPage</td>
<<<<<<< HEAD
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a> </td>
        <td>0..n</td>
        <td>A</td>
=======
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/language">language</a></td>
        <td>http://purl.org/dc/terms/language</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a> </td>
        <td>1..n</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/modified">modification date</a></td>
        <td>http://purl.org/dc/terms/modified</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#next">next</a></td>
        <td>http://www.w3.org/ns/dcat#next</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a> </td>
        <td>0..n</td>
        <td></td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/adms#identifier">other identifier</a></td>
        <td>http://www.w3.org/ns/adms#identifier</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/adms#Identifier">adms:Identifier</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/adms#Identifier">adms:Identifier</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#prev">previous</a></td>
        <td>http://www.w3.org/ns/dcat#prev</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a> </td>
        <td>0..n</td>
        <td></td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/provenance">provenance</a></td>
        <td>http://purl.org/dc/terms/provenance</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/ProvenanceStatement">dct:ProvenanceStatement</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/ProvenanceStatement">dct:ProvenanceStatement</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/publisher">publisher</a></td>
        <td>http://purl.org/dc/terms/publisher</td>
<<<<<<< HEAD
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a> </td>
        <td>1..1</td>
        <td>V</td>
=======
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/prov#qualifiedAttribution">qualified attribution</a></td>
        <td>http://www.w3.org/ns/prov#qualifiedAttribution</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/prov#Attribution">prov:Attribution</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/prov#Attribution">prov:Attribution</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#qualifiedRelation">qualified relation</a></td>
        <td>http://www.w3.org/ns/dcat#qualifiedRelation</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Relationship">dcat:Relationship</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Relationship">dcat:Relationship</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/relation">related resource</a></td>
        <td>http://purl.org/dc/terms/relation</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/issued">release date</a></td>
        <td>http://purl.org/dc/terms/issued</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/adms#sample">sample</a></td>
        <td>http://www.w3.org/ns/adms#sample</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Distribution">dcat:Distribution</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Distribution">dcat:Distribution</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/source">source</a></td>
        <td>http://purl.org/dc/terms/source</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#spatialResolutionInMeters">spatial resolution</a></td>
        <td>http://www.w3.org/ns/dcat#spatialResolutionInMeters</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2001/XMLSchema#decimal">xsd:decimal</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/2001/XMLSchema#decimal">xsd:decimal</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/temporal">temporal coverage</a></td>
        <td>http://purl.org/dc/terms/temporal</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a> </td>
        <td>0..n</td>
        <td>A</td>
=======
        <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#temporalResolution">temporal resolution</a></td>
        <td>http://www.w3.org/ns/dcat#temporalResolution</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2001/XMLSchema#duration">xsd:duration</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/2001/XMLSchema#duration">xsd:duration</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#theme">theme</a></td>
        <td>http://www.w3.org/ns/dcat#theme</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a> </td>
        <td>1..n</td>
        <td>V</td>
=======
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/title">title</a></td>
        <td>http://purl.org/dc/terms/title</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td>V</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>1..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/type">type</a></td>
        <td>http://purl.org/dc/terms/type</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#version">version</a></td>
        <td>http://www.w3.org/ns/dcat#version</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/adms#versionNotes">version notes</a></td>
        <td>http://www.w3.org/ns/adms#versionNotes</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/prov#wasGeneratedBy">was generated by</a></td>
        <td>http://www.w3.org/ns/prov#wasGeneratedBy</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/prov#Activity">prov:Activity</a> </td>
        <td>0..n</td>
        <td>O</td>
    </tr>
</table>

### access rights
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/access_rights.md"></p>

=======
        <td><a href="http://www.w3.org/ns/prov#Activity">prov:Activity</a></td>
        <td>0..n</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dcat:Dataset/prop/.md"></p> -->
### access rights
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>access rights</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..1</td>
=======
    <td>0..1</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/accessRights">dct:accessRights</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
</tr>
</table>

<<<<<<< HEAD
### applicable legislation
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/applicable_legislation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>applicable legislation</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://data.europa.eu/r5r/applicableLegislation">dcatap:applicableLegislation</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a></td>
</tr>
</table>

### conforms to
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/conforms_to.md"></p>

=======
### conforms to
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>conforms to</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/conformsTo">dct:conformsTo</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a></td>
</tr>
</table>

### contact point
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/contact_point.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>contact point</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..1</td>
=======
    <td>0..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#contactPoint">dcat:contactPoint</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a></td>
</tr>
</table>

### creator
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/creator.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>creator</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..1</td>
=======
    <td>0..1</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/creator">dct:creator</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
</tr>
</table>

### dataset distribution
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/dataset_distribution.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>dataset distribution</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#distribution">dcat:distribution</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Distribution">dcat:Distribution</a></td>
</tr>
</table>

### description
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/description.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### documentation
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/documentation.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>documentation</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/page">foaf:page</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
</tr>
</table>

### frequency
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/frequency.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>frequency</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/accrualPeriodicity">dct:accrualPeriodicity</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/Frequency">dct:Frequency</a></td>
</tr>
</table>

### geographical coverage
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/geographical_coverage.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>geographical coverage</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/spatial">dct:spatial</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/Location">dct:Location</a></td>
</tr>
</table>

### has version
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/has_version.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>has version</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#hasVersion">dcat:hasVersion</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

<<<<<<< HEAD
### HVD Category
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/HVD_Category.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>HVD Category</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://data.europa.eu/r5r/hvdCategory">dcatap:hvdCategory</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
</table>

### identifier
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/identifier.md"></p>

=======
### identifier
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>identifier</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/identifier">dct:identifier</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### in series
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/in_series.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>in series</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#inSeries">dcat:inSeries</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#DatasetSeries">dcat:DatasetSeries</a></td>
</tr>
</table>

### is referenced by
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/is_referenced_by.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>is referenced by</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/isReferencedBy">dct:isReferencedBy</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
</tr>
</table>

### is version of
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/is_version_of.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>is version of</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#isVersionOf">dcat:isVersionOf</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

### keyword
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/keyword.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>keyword</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#keyword">dcat:keyword</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### landing page
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/landing_page.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>landing page</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#landingPage">dcat:landingPage</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
</tr>
</table>

### language
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/language.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>language</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..n</td>
=======
    <td>0..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/language">dct:language</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
</tr>
</table>

### modification date
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/modification_date.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### next
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/next.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>next</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#next">dcat:next</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

### other identifier
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/other_identifier.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>other identifier</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/adms#identifier">adms:identifier</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/adms#Identifier">adms:Identifier</a></td>
</tr>
</table>

### previous
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/previous.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>previous</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#prev">dcat:prev</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

### provenance
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/provenance.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>provenance</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/provenance">dct:provenance</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/ProvenanceStatement">dct:ProvenanceStatement</a></td>
</tr>
</table>

### publisher
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/publisher.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>publisher</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..1</td>
=======
    <td>0..1</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/publisher">dct:publisher</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
</tr>
</table>

### qualified attribution
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/qualified_attribution.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>qualified attribution</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/prov#qualifiedAttribution">prov:qualifiedAttribution</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/prov#Attribution">prov:Attribution</a></td>
</tr>
</table>

### qualified relation
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/qualified_relation.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>qualified relation</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#qualifiedRelation">dcat:qualifiedRelation</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Relationship">dcat:Relationship</a></td>
</tr>
</table>

### related resource
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/related_resource.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>related resource</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
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

### release date
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/release_date.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>release date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/issued">dct:issued</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### sample
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/sample.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>sample</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/adms#sample">adms:sample</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Distribution">dcat:Distribution</a></td>
</tr>
</table>

### source
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/source.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>source</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/source">dct:source</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

### spatial resolution
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/spatial_resolution.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>spatial resolution</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#spatialResolutionInMeters">dcat:spatialResolutionInMeters</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2001/XMLSchema#decimal">xsd:decimal</a></td>
</tr>
</table>

### temporal coverage
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/temporal_coverage.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>temporal coverage</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/temporal">dct:temporal</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a></td>
</tr>
</table>

### temporal resolution
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/temporal_resolution.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>temporal resolution</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#temporalResolution">dcat:temporalResolution</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2001/XMLSchema#duration">xsd:duration</a></td>
</tr>
</table>

### theme
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/theme.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>theme</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..n</td>
=======
    <td>0..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#theme">dcat:theme</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
</table>

### title
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/title.md"></p>

=======
>>>>>>> dd87257 (fix doc)
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
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### type
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/type.md"></p>

=======
>>>>>>> dd87257 (fix doc)
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

### version
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/version.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>version</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>0..1</td>
=======
    <td>0..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#version">dcat:version</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### version notes
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/version_notes.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>version notes</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/adms#versionNotes">adms:versionNotes</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### was generated by
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/was_generated_by.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>was generated by</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/prov#wasGeneratedBy">prov:wasGeneratedBy</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/prov#Activity">prov:Activity</a></td>
</tr>
</table>


<<<<<<< HEAD
### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/Voorbeelden.md"></p>

## Distribution - dcat:Distribution
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/dcatDistribution.md"></p>

=======
<!-- property tabel -->
## Distribution - dcat:Distribution
>>>>>>> dd87257 (fix doc)
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
<<<<<<< HEAD
        <th>Optionaliteit</th>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#accessService">access service</a></td>
        <td>http://www.w3.org/ns/dcat#accessService</td>
        <td><a href="http://www.w3.org/ns/dcat#DataService">dcat:DataService</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#accessURL">access URL</a></td>
        <td>http://www.w3.org/ns/dcat#accessURL</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a> </td>
        <td>1..1</td>
        <td>V</td>
    </tr>
    <tr>
        <td><a href="http://data.europa.eu/r5r/applicableLegislation">applicable legislation</a></td>
        <td>http://data.europa.eu/r5r/applicableLegislation</td>
        <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a> </td>
        <td>0..n</td>
        <td></td>
=======
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>1..n</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#accessService">access service</a></td>
        <td>http://www.w3.org/ns/dcat#accessService</td>
        <td><a href="http://www.w3.org/ns/dcat#DataService">dcat:DataService</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://data.europa.eu/r5r/availability">availability</a></td>
        <td>http://data.europa.eu/r5r/availability</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#byteSize">byte size</a></td>
        <td>http://www.w3.org/ns/dcat#byteSize</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2001/XMLSchema#nonNegativeInteger">xsd:nonNegativeInteger</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/2001/XMLSchema#nonNegativeInteger">xsd:nonNegativeInteger</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://spdx.org/rdf/terms#checksum">checksum</a></td>
        <td>http://spdx.org/rdf/terms#checksum</td>
<<<<<<< HEAD
        <td><a href="http://spdx.org/rdf/terms#Checksum">spdx:Checksum</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://spdx.org/rdf/terms#Checksum">spdx:Checksum</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#compressFormat">compression format</a></td>
        <td>http://www.w3.org/ns/dcat#compressFormat</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/description">description</a></td>
        <td>http://purl.org/dc/terms/description</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://xmlns.com/foaf/0.1/page">documentation</a></td>
        <td>http://xmlns.com/foaf/0.1/page</td>
<<<<<<< HEAD
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#downloadURL">download URL</a></td>
        <td>http://www.w3.org/ns/dcat#downloadURL</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/format">format</a></td>
        <td>http://purl.org/dc/terms/format</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/MediaTypeOrExtent">dct:MediaTypeOrExtent</a> </td>
        <td>0..1</td>
        <td>A</td>
=======
        <td><a href="http://purl.org/dc/terms/MediaTypeOrExtent">dct:MediaTypeOrExtent</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/odrl/2/hasPolicy">has policy</a></td>
        <td>http://www.w3.org/ns/odrl/2/hasPolicy</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/odrl/2/Policy">odrl:Policy</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/odrl/2/Policy">odrl:Policy</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/language">language</a></td>
        <td>http://purl.org/dc/terms/language</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/license">licence</a></td>
        <td>http://purl.org/dc/terms/license</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a> </td>
        <td>1..1</td>
        <td>A</td>
=======
        <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/conformsTo">linked schemas</a></td>
        <td>http://purl.org/dc/terms/conformsTo</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#mediaType">media type</a></td>
        <td>http://www.w3.org/ns/dcat#mediaType</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/modified">modification date</a></td>
        <td>http://purl.org/dc/terms/modified</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#packageFormat">packaging format</a></td>
        <td>http://www.w3.org/ns/dcat#packageFormat</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/issued">release date</a></td>
        <td>http://purl.org/dc/terms/issued</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/rights">rights</a></td>
        <td>http://purl.org/dc/terms/rights</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#spatialResolutionInMeters">spatial resolution</a></td>
        <td>http://www.w3.org/ns/dcat#spatialResolutionInMeters</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2001/XMLSchema#decimal">xsd:decimal</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/2001/XMLSchema#decimal">xsd:decimal</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/adms#status">status</a></td>
        <td>http://www.w3.org/ns/adms#status</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#temporalResolution">temporal resolution</a></td>
        <td>http://www.w3.org/ns/dcat#temporalResolution</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2001/XMLSchema#duration">xsd:duration</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/2001/XMLSchema#duration">xsd:duration</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/title">title</a></td>
        <td>http://purl.org/dc/terms/title</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..n</td>
        <td>O</td>
    </tr>
</table>

### access service
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/access_service.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>access service</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#accessService">dcat:accessService</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#DataService">dcat:DataService</a></td>
</tr>
</table>

### access URL
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/access_URL.md"></p>

=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..n</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dcat:Distribution/prop/.md"></p> -->
### access URL
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>access URL</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..1</td>
=======
    <td>1..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#accessURL">dcat:accessURL</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
</tr>
</table>

<<<<<<< HEAD
### applicable legislation
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/applicable_legislation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>applicable legislation</td>
=======
### access service
<table>
<tr>
    <td><em>Property</em></td>
    <td>access service</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
<<<<<<< HEAD
    <td><a href="http://data.europa.eu/r5r/applicableLegislation">dcatap:applicableLegislation</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a></td>
=======
    <td><a href="http://www.w3.org/ns/dcat#accessService">dcat:accessService</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#DataService">dcat:DataService</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### availability
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/availability.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>availability</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
<<<<<<< HEAD
    <td><a href="http://data.europa.eu/r5r/availability">dcatap:availability</a></td>
=======
    <td><a href="http://data.europa.eu/r5r/availability">r5r:availability</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
</table>

### byte size
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/byte_size.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>byte size</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#byteSize">dcat:byteSize</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2001/XMLSchema#nonNegativeInteger">xsd:nonNegativeInteger</a></td>
</tr>
</table>

### checksum
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/checksum.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>checksum</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://spdx.org/rdf/terms#checksum">spdx:checksum</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://spdx.org/rdf/terms#Checksum">spdx:Checksum</a></td>
</tr>
</table>

### compression format
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/compression_format.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>compression format</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#compressFormat">dcat:compressFormat</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a></td>
</tr>
</table>

### description
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/description.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### documentation
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/documentation.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>documentation</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/page">foaf:page</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
</tr>
</table>

### download URL
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/download_URL.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>download URL</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>0..1</td>
=======
    <td>0..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#downloadURL">dcat:downloadURL</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
</tr>
</table>

### format
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/format.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>format</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/format">dct:format</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/MediaTypeOrExtent">dct:MediaTypeOrExtent</a></td>
</tr>
</table>

### has policy
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/has_policy.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>has policy</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/odrl/2/hasPolicy">odrl:hasPolicy</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/odrl/2/Policy">odrl:Policy</a></td>
</tr>
</table>

### language
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/language.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>language</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>0..1</td>
=======
    <td>0..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/language">dct:language</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
</tr>
</table>

### licence
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/licence.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>licence</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..1</td>
=======
    <td>0..1</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/license">dct:license</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a></td>
</tr>
</table>

### linked schemas
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/linked_schemas.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>linked schemas</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/conformsTo">dct:conformsTo</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a></td>
</tr>
</table>

### media type
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/media_type.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>media type</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#mediaType">dcat:mediaType</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a></td>
</tr>
</table>

### modification date
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/modification_date.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### packaging format
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/packaging_format.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>packaging format</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#packageFormat">dcat:packageFormat</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a></td>
</tr>
</table>

### release date
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/release_date.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>release date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/issued">dct:issued</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### rights
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/rights.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>rights</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/rights">dct:rights</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
</tr>
</table>

### spatial resolution
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/spatial_resolution.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>spatial resolution</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>0..1</td>
=======
    <td>0..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#spatialResolutionInMeters">dcat:spatialResolutionInMeters</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2001/XMLSchema#decimal">xsd:decimal</a></td>
</tr>
</table>

### status
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/status.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>status</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/adms#status">adms:status</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
</table>

### temporal resolution
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/temporal_resolution.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>temporal resolution</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>0..1</td>
=======
    <td>0..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#temporalResolution">dcat:temporalResolution</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2001/XMLSchema#duration">xsd:duration</a></td>
</tr>
</table>

### title
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/title.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>title</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>


<<<<<<< HEAD
### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/Voorbeelden.md"></p>

## DataService - dcat:DataService
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/dcatDataService.md"></p>

=======
<!-- property tabel -->
## DataService - dcat:DataService
>>>>>>> dd87257 (fix doc)
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
<<<<<<< HEAD
        <th>Optionaliteit</th>
=======
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/accessRights">access rights</a></td>
        <td>http://purl.org/dc/terms/accessRights</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a> </td>
        <td>1..1</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://data.europa.eu/r5r/applicableLegislation">applicable legislation</a></td>
        <td>http://data.europa.eu/r5r/applicableLegislation</td>
        <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a> </td>
        <td>0..n</td>
        <td></td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#contactPoint">contact point</a></td>
        <td>http://www.w3.org/ns/dcat#contactPoint</td>
        <td> </td>
        <td>1..1</td>
        <td>A</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/creator">creator</a></td>
        <td>http://purl.org/dc/terms/creator</td>
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a> </td>
        <td>0..1</td>
        <td></td>
=======
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/description">description</a></td>
        <td>http://purl.org/dc/terms/description</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://xmlns.com/foaf/0.1/page">documentation</a></td>
        <td>http://xmlns.com/foaf/0.1/page</td>
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a> </td>
        <td>1..n</td>
        <td></td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#endpointDescription">endpoint description</a></td>
        <td>http://www.w3.org/ns/dcat#endpointDescription</td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a> </td>
        <td>1..1</td>
        <td>A</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#endpointURL">endpoint URL</a></td>
        <td>http://www.w3.org/ns/dcat#endpointURL</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a> </td>
        <td>1..1</td>
        <td>V</td>
=======
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>1..n</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#endpointDescription">endpoint description</a></td>
        <td>http://www.w3.org/ns/dcat#endpointDescription</td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/format">format</a></td>
        <td>http://purl.org/dc/terms/format</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/MediaTypeOrExtent">dct:MediaTypeOrExtent</a> </td>
        <td>0..n</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://data.europa.eu/r5r/hvdCategory">HVD Category</a></td>
        <td>http://data.europa.eu/r5r/hvdCategory</td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a> </td>
        <td>0..n</td>
        <td></td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/identifier">identifier</a></td>
        <td>http://purl.org/dc/terms/identifier</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..1</td>
        <td></td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/language">language</a></td>
        <td>http://purl.org/dc/terms/language</td>
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a> </td>
        <td>0..n</td>
        <td></td>
=======
        <td><a href="http://purl.org/dc/terms/MediaTypeOrExtent">dct:MediaTypeOrExtent</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/license">licence</a></td>
        <td>http://purl.org/dc/terms/license</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a> </td>
        <td>1..1</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/modified">modification date</a></td>
        <td>http://purl.org/dc/terms/modified</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td></td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/adms#identifier">other identifier</a></td>
        <td>http://www.w3.org/ns/adms#identifier</td>
        <td><a href="http://www.w3.org/ns/shacl#BlankNodeOrIRI">sh:BlankNodeOrIRI</a> </td>
        <td>0..n</td>
        <td></td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/publisher">publisher</a></td>
        <td>http://purl.org/dc/terms/publisher</td>
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a> </td>
        <td>1..1</td>
        <td></td>
=======
        <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#servesDataset">serves dataset</a></td>
        <td>http://www.w3.org/ns/dcat#servesDataset</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a> </td>
        <td>0..n</td>
        <td>A</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#theme">theme</a></td>
        <td>http://www.w3.org/ns/dcat#theme</td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a> </td>
        <td>1..n</td>
        <td></td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/title">title</a></td>
        <td>http://purl.org/dc/terms/title</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td>V</td>
    </tr>
</table>

### access rights
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/access_rights.md"></p>

=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>1..n</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dcat:DataService/prop/.md"></p> -->
### access rights
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>access rights</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..1</td>
=======
    <td>0..1</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/accessRights">dct:accessRights</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
</tr>
</table>

<<<<<<< HEAD
### applicable legislation
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/applicable_legislation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>applicable legislation</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://data.europa.eu/r5r/applicableLegislation">dcatap:applicableLegislation</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a></td>
</tr>
</table>

### contact point
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/contact_point.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>contact point</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#contactPoint">dcat:contactPoint</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td></td>
</tr>
</table>

### creator
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/creator.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>creator</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/creator">dct:creator</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
</tr>
</table>

### description
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/description.md"></p>

=======
### description
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..n</td>
=======
    <td>0..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
</tr>
</table>

### documentation
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/documentation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>documentation</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/page">foaf:page</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
</tr>
</table>

### endpoint description
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/endpoint_description.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>endpoint description</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#endpointDescription">dcat:endpointDescription</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### endpoint URL
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/endpoint_URL.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>endpoint URL</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..1</td>
=======
    <td>1..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#endpointURL">dcat:endpointURL</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
</tr>
</table>

<<<<<<< HEAD
### format
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/format.md"></p>

=======
### endpoint description
<table>
<tr>
    <td><em>Property</em></td>
    <td>endpoint description</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#endpointDescription">dcat:endpointDescription</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
</tr>
</table>

### format
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>format</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/format">dct:format</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/MediaTypeOrExtent">dct:MediaTypeOrExtent</a></td>
</tr>
</table>

<<<<<<< HEAD
### HVD Category
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/HVD_Category.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>HVD Category</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://data.europa.eu/r5r/hvdCategory">dcatap:hvdCategory</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
</table>

### identifier
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/identifier.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>identifier</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/identifier">dct:identifier</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
</tr>
</table>

### language
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/language.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>language</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/language">dct:language</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
</tr>
</table>

### licence
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/licence.md"></p>

=======
### licence
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>licence</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..1</td>
=======
    <td>0..1</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/license">dct:license</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a></td>
</tr>
</table>

<<<<<<< HEAD
### modification date
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/modification_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
</tr>
</table>

### other identifier
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/other_identifier.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>other identifier</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/adms#identifier">adms:identifier</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/shacl#BlankNodeOrIRI">sh:BlankNodeOrIRI</a></td>
</tr>
</table>

### publisher
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/publisher.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>publisher</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/publisher">dct:publisher</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
</tr>
</table>

### serves dataset
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/serves_dataset.md"></p>

=======
### serves dataset
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>serves dataset</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#servesDataset">dcat:servesDataset</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

<<<<<<< HEAD
### theme
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/theme.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>theme</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#theme">dcat:theme</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
</table>

### title
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/title.md"></p>

=======
### title
>>>>>>> dd87257 (fix doc)
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
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>


<<<<<<< HEAD
### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/Voorbeelden.md"></p>

## Catalog - dcat:Catalog
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/dcatCatalog.md"></p>

=======
<!-- property tabel -->
## Catalog - dcat:Catalog
>>>>>>> dd87257 (fix doc)
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
<<<<<<< HEAD
        <th>Optionaliteit</th>
=======
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#catalog">catalogue</a></td>
        <td>http://www.w3.org/ns/dcat#catalog</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a> </td>
        <td>0..n</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#contactPoint">contact point</a></td>
        <td>http://www.w3.org/ns/dcat#contactPoint</td>
        <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a> </td>
        <td>1..1</td>
        <td></td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/creator">creator</a></td>
        <td>http://purl.org/dc/terms/creator</td>
<<<<<<< HEAD
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#dataset">dataset</a></td>
        <td>http://www.w3.org/ns/dcat#dataset</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a> </td>
        <td>1..n</td>
        <td>A</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/description">description</a></td>
        <td>http://purl.org/dc/terms/description</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td>V</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>1..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/spatial">geographical coverage</a></td>
        <td>http://purl.org/dc/terms/spatial</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/Location">dct:Location</a> </td>
        <td>0..n</td>
        <td>A</td>
=======
        <td><a href="http://purl.org/dc/terms/Location">dct:Location</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/hasPart">has part</a></td>
        <td>http://purl.org/dc/terms/hasPart</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://xmlns.com/foaf/0.1/homepage">homepage</a></td>
        <td>http://xmlns.com/foaf/0.1/homepage</td>
<<<<<<< HEAD
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a> </td>
        <td>0..1</td>
        <td>A</td>
=======
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/isPartOf">is part of</a></td>
        <td>http://purl.org/dc/terms/isPartOf</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a> </td>
        <td>0..1</td>
        <td></td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/language">language</a></td>
        <td>http://purl.org/dc/terms/language</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a> </td>
        <td>0..n</td>
        <td>A</td>
=======
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/license">licence</a></td>
        <td>http://purl.org/dc/terms/license</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a> </td>
        <td>0..1</td>
        <td>A</td>
=======
        <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/modified">modification date</a></td>
        <td>http://purl.org/dc/terms/modified</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>A</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/publisher">publisher</a></td>
        <td>http://purl.org/dc/terms/publisher</td>
<<<<<<< HEAD
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a> </td>
        <td>1..1</td>
        <td>V</td>
=======
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>1..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#record">record</a></td>
        <td>http://www.w3.org/ns/dcat#record</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#CatalogRecord">dcat:CatalogRecord</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#CatalogRecord">dcat:CatalogRecord</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/issued">release date</a></td>
        <td>http://purl.org/dc/terms/issued</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>A</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/rights">rights</a></td>
        <td>http://purl.org/dc/terms/rights</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#service">service</a></td>
        <td>http://www.w3.org/ns/dcat#service</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#DataService">dcat:DataService</a> </td>
        <td>0..n</td>
        <td>A</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#DataService">dcat:DataService</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/temporal">temporal coverage</a></td>
        <td>http://purl.org/dc/terms/temporal</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#themeTaxonomy">themes</a></td>
        <td>http://www.w3.org/ns/dcat#themeTaxonomy</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2004/02/skos/core#ConceptScheme">skos:ConceptScheme</a> </td>
        <td>0..n</td>
        <td>A</td>
=======
        <td><a href="http://www.w3.org/2004/02/skos/core#ConceptScheme">skos:ConceptScheme</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/title">title</a></td>
        <td>http://purl.org/dc/terms/title</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td>V</td>
    </tr>
</table>

### catalogue
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/catalogue.md"></p>

=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>1..n</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dcat:Catalog/prop/.md"></p> -->
### catalogue
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>catalogue</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#catalog">dcat:catalog</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a></td>
</tr>
</table>

<<<<<<< HEAD
### contact point
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/contact_point.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>contact point</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#contactPoint">dcat:contactPoint</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a></td>
</tr>
</table>

### creator
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/creator.md"></p>

=======
### creator
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>creator</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/creator">dct:creator</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
</tr>
</table>

### dataset
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/dataset.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>dataset</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
<<<<<<< HEAD
    <td>1..n</td>
=======
    <td>0..n</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#dataset">dcat:dataset</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

### description
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/description.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### geographical coverage
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/geographical_coverage.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>geographical coverage</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/spatial">dct:spatial</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/Location">dct:Location</a></td>
</tr>
</table>

### has part
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/has_part.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>has part</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/hasPart">dct:hasPart</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a></td>
</tr>
</table>

### homepage
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/homepage.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>homepage</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/homepage">foaf:homepage</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
</tr>
</table>

### is part of
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/is_part_of.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>is part of</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/isPartOf">dct:isPartOf</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a></td>
</tr>
</table>

### language
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/language.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>language</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/language">dct:language</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
</tr>
</table>

### licence
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/licence.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>licence</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/license">dct:license</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a></td>
</tr>
</table>

### modification date
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/modification_date.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### publisher
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/publisher.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>publisher</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/publisher">dct:publisher</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
</tr>
</table>

### record
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/record.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>record</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#record">dcat:record</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#CatalogRecord">dcat:CatalogRecord</a></td>
</tr>
</table>

### release date
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/release_date.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>release date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/issued">dct:issued</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### rights
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/rights.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>rights</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/rights">dct:rights</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
</tr>
</table>

### service
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/service.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>service</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#service">dcat:service</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#DataService">dcat:DataService</a></td>
</tr>
</table>

### temporal coverage
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/temporal_coverage.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>temporal coverage</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/temporal">dct:temporal</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a></td>
</tr>
</table>

### themes
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/themes.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>themes</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#themeTaxonomy">dcat:themeTaxonomy</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#ConceptScheme">skos:ConceptScheme</a></td>
</tr>
</table>

### title
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/title.md"></p>

=======
>>>>>>> dd87257 (fix doc)
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
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>


<<<<<<< HEAD
### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/Voorbeelden.md"></p>

## CatalogRecord - dcat:CatalogRecord
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/dcatCatalogRecord.md"></p>

=======
<!-- property tabel -->
## CatalogRecord - dcat:CatalogRecord
>>>>>>> dd87257 (fix doc)
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
<<<<<<< HEAD
        <th>Optionaliteit</th>
=======
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/conformsTo">application profile</a></td>
        <td>http://purl.org/dc/terms/conformsTo</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a> </td>
        <td>0..1</td>
        <td>A</td>
=======
        <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/adms#status">change type</a></td>
        <td>http://www.w3.org/ns/adms#status</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a> </td>
        <td>0..1</td>
        <td>A</td>
=======
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/description">description</a></td>
        <td>http://purl.org/dc/terms/description</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/language">language</a></td>
        <td>http://purl.org/dc/terms/language</td>
<<<<<<< HEAD
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a> </td>
        <td>0..n</td>
        <td>O</td>
=======
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
        <td>0..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/issued">listing date</a></td>
        <td>http://purl.org/dc/terms/issued</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>A</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/modified">modification date</a></td>
        <td>http://purl.org/dc/terms/modified</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..1</td>
        <td>V</td>
=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>1..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://xmlns.com/foaf/0.1/primaryTopic">primary topic</a></td>
        <td>http://xmlns.com/foaf/0.1/primaryTopic</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Resource">dcat:Resource</a> </td>
        <td>1..1</td>
        <td>V</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Resource">dcat:Resource</a></td>
        <td>1..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/source">source metadata</a></td>
        <td>http://purl.org/dc/terms/source</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#CatalogRecord">dcat:CatalogRecord</a> </td>
        <td>0..1</td>
        <td>O</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#CatalogRecord">dcat:CatalogRecord</a></td>
        <td>0..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/title">title</a></td>
        <td>http://purl.org/dc/terms/title</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..n</td>
        <td>O</td>
    </tr>
</table>

### application profile
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/application_profile.md"></p>

=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..n</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dcat:CatalogRecord/prop/.md"></p> -->
### application profile
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>application profile</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/conformsTo">dct:conformsTo</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a></td>
</tr>
</table>

### change type
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/change_type.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>change type</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/adms#status">adms:status</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
</table>

### description
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/description.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### language
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/language.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>language</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/language">dct:language</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
</tr>
</table>

### listing date
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/listing_date.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>listing date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/issued">dct:issued</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### modification date
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/modification_date.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>

### primary topic
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/primary_topic.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>primary topic</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/primaryTopic">foaf:primaryTopic</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Resource">dcat:Resource</a></td>
</tr>
</table>

### source metadata
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/source_metadata.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>source metadata</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/source">dct:source</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#CatalogRecord">dcat:CatalogRecord</a></td>
</tr>
</table>

### title
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/title.md"></p>

=======
>>>>>>> dd87257 (fix doc)
<table>
<tr>
    <td><em>Property</em></td>
    <td>title</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>


<<<<<<< HEAD
### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/provActivity/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/provAttribution/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatResource/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/spdxChecksumAlgorithm/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/foafDocument/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dctFrequency/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/locnGeometry/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/vcardKind/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dctLinguisticSystem/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/rdfsLiteral/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dctMediaType/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dctMediaTypeOrExtent/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/odrlPolicy/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dctProvenanceStatement/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/rdfsResource/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dctRightsStatement/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatRole/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dctStandard/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/timeInstant/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/xsddateTime/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/xsddecimal/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/xsdduration/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/xsdhexBinary/Voorbeelden.md"></p>

</table>


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/xsdnonNegativeInteger/Voorbeelden.md"></p>

## Agent - foaf:Agent
<p data-include-format="markdown" data-include="doc/klassen/foafAgent/foafAgent.md"></p>

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
<p data-include-format="markdown" data-include="doc/klassen/foafAgent/prop/name.md"></p>

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
<p data-include-format="markdown" data-include="doc/klassen/foafAgent/prop/type.md"></p>

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


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/foafAgent/Voorbeelden.md"></p>

## DatasetSeries - dcat:DatasetSeries
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/dcatDatasetSeries.md"></p>

<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
        <th>Optionaliteit</th>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#contactPoint">contact point</a></td>
        <td>http://www.w3.org/ns/dcat#contactPoint</td>
        <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a> </td>
        <td>0..n</td>
        <td>A</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/description">description</a></td>
        <td>http://purl.org/dc/terms/description</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#first">first</a></td>
        <td>http://www.w3.org/ns/dcat#first</td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a> </td>
        <td>0..1</td>
        <td></td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/accrualPeriodicity">frequency</a></td>
        <td>http://purl.org/dc/terms/accrualPeriodicity</td>
        <td><a href="http://purl.org/dc/terms/Frequency">dct:Frequency</a> </td>
        <td>0..1</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/spatial">geographical coverage</a></td>
        <td>http://purl.org/dc/terms/spatial</td>
        <td><a href="http://purl.org/dc/terms/Location">dct:Location</a> </td>
        <td>0..n</td>
        <td>A</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#last">last</a></td>
        <td>http://www.w3.org/ns/dcat#last</td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a> </td>
        <td>0..1</td>
        <td></td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/modified">modification date</a></td>
        <td>http://purl.org/dc/terms/modified</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/publisher">publisher</a></td>
        <td>http://purl.org/dc/terms/publisher</td>
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a> </td>
        <td>0..1</td>
        <td>A</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/issued">release date</a></td>
        <td>http://purl.org/dc/terms/issued</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>0..1</td>
        <td>O</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#seriesMember">series member</a></td>
        <td>http://www.w3.org/ns/dcat#seriesMember</td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a> </td>
        <td>0..n</td>
        <td></td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/temporal">temporal coverage</a></td>
        <td>http://purl.org/dc/terms/temporal</td>
        <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a> </td>
        <td>0..n</td>
        <td>A</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/title">title</a></td>
        <td>http://purl.org/dc/terms/title</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td>V</td>
    </tr>
</table>

### contact point
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/contact_point.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>contact point</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#contactPoint">dcat:contactPoint</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a></td>
</tr>
</table>

### description
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/description.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
</tr>
</table>

### first
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/first.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>first</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#first">dcat:first</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

### frequency
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/frequency.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>frequency</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/accrualPeriodicity">dct:accrualPeriodicity</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/Frequency">dct:Frequency</a></td>
</tr>
</table>

### geographical coverage
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/geographical_coverage.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>geographical coverage</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/spatial">dct:spatial</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/Location">dct:Location</a></td>
</tr>
</table>

### last
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/last.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>last</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#last">dcat:last</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

### modification date
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/modification_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
</tr>
</table>

### publisher
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/publisher.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>publisher</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/publisher">dct:publisher</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
</tr>
</table>

### release date
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/release_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>release date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/issued">dct:issued</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
</tr>
</table>

### series member
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/series_member.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>series member</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#seriesMember">dcat:seriesMember</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

### temporal coverage
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/temporal_coverage.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>temporal coverage</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/temporal">dct:temporal</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a></td>
</tr>
</table>

### title
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/title.md"></p>

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


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/Voorbeelden.md"></p>

## LicenseDocument - dct:LicenseDocument
<p data-include-format="markdown" data-include="doc/klassen/dctLicenseDocument/dctLicenseDocument.md"></p>

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
<p data-include-format="markdown" data-include="doc/klassen/dctLicenseDocument/prop/type.md"></p>

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


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dctLicenseDocument/Voorbeelden.md"></p>

## Location - dct:Location
<p data-include-format="markdown" data-include="doc/klassen/dctLocation/dctLocation.md"></p>

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
<p data-include-format="markdown" data-include="doc/klassen/dctLocation/prop/bbox.md"></p>

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
<p data-include-format="markdown" data-include="doc/klassen/dctLocation/prop/centroid.md"></p>

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
<p data-include-format="markdown" data-include="doc/klassen/dctLocation/prop/geometry.md"></p>

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


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dctLocation/Voorbeelden.md"></p>

## PeriodOfTime - dct:PeriodOfTime
<p data-include-format="markdown" data-include="doc/klassen/dctPeriodOfTime/dctPeriodOfTime.md"></p>

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
<p data-include-format="markdown" data-include="doc/klassen/dctPeriodOfTime/prop/beginning.md"></p>

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
<p data-include-format="markdown" data-include="doc/klassen/dctPeriodOfTime/prop/end.md"></p>

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
<p data-include-format="markdown" data-include="doc/klassen/dctPeriodOfTime/prop/end_date.md"></p>

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
<p data-include-format="markdown" data-include="doc/klassen/dctPeriodOfTime/prop/start_date.md"></p>

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


### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dctPeriodOfTime/Voorbeelden.md"></p>

## Checksum - spdx:Checksum
<p data-include-format="markdown" data-include="doc/klassen/spdxChecksum/spdxChecksum.md"></p>

=======
<!-- property tabel -->
## Activity - prov:Activity
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/prov:Activity/prop/.md"></p> -->

<!-- property tabel -->
## Attribution - prov:Attribution
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/prov:Attribution/prop/.md"></p> -->

<!-- property tabel -->
## Resource - dcat:Resource
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dcat:Resource/prop/.md"></p> -->

<!-- property tabel -->
## ChecksumAlgorithm - spdx:ChecksumAlgorithm
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/spdx:ChecksumAlgorithm/prop/.md"></p> -->

<!-- property tabel -->
## Document - foaf:Document
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/foaf:Document/prop/.md"></p> -->

<!-- property tabel -->
## Frequency - dct:Frequency
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dct:Frequency/prop/.md"></p> -->

<!-- property tabel -->
## Geometry - locn:Geometry
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/locn:Geometry/prop/.md"></p> -->

<!-- property tabel -->
## Kind - vcard:Kind
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/vcard:Kind/prop/.md"></p> -->

<!-- property tabel -->
## LinguisticSystem - dct:LinguisticSystem
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dct:LinguisticSystem/prop/.md"></p> -->

<!-- property tabel -->
## Literal - rdfs:Literal
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/rdfs:Literal/prop/.md"></p> -->

<!-- property tabel -->
## MediaType - dct:MediaType
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dct:MediaType/prop/.md"></p> -->

<!-- property tabel -->
## MediaTypeOrExtent - dct:MediaTypeOrExtent
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dct:MediaTypeOrExtent/prop/.md"></p> -->

<!-- property tabel -->
## Policy - odrl:Policy
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/odrl:Policy/prop/.md"></p> -->

<!-- property tabel -->
## ProvenanceStatement - dct:ProvenanceStatement
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dct:ProvenanceStatement/prop/.md"></p> -->

<!-- property tabel -->
## Resource - rdfs:Resource
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/rdfs:Resource/prop/.md"></p> -->

<!-- property tabel -->
## RightsStatement - dct:RightsStatement
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dct:RightsStatement/prop/.md"></p> -->

<!-- property tabel -->
## Role - dcat:Role
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dcat:Role/prop/.md"></p> -->

<!-- property tabel -->
## Standard - dct:Standard
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dct:Standard/prop/.md"></p> -->

<!-- property tabel -->
## Instant - time:Instant
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/time:Instant/prop/.md"></p> -->

<!-- property tabel -->
## dateTime - xsd:dateTime
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/xsd:dateTime/prop/.md"></p> -->

<!-- property tabel -->
## decimal - xsd:decimal
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/xsd:decimal/prop/.md"></p> -->

<!-- property tabel -->
## duration - xsd:duration
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/xsd:duration/prop/.md"></p> -->

<!-- property tabel -->
## hexBinary - xsd:hexBinary
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/xsd:hexBinary/prop/.md"></p> -->

<!-- property tabel -->
## nonNegativeInteger - xsd:nonNegativeInteger
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/xsd:nonNegativeInteger/prop/.md"></p> -->

<!-- property tabel -->
## Checksum - spdx:Checksum
>>>>>>> dd87257 (fix doc)
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
<<<<<<< HEAD
        <th>Optionaliteit</th>
=======
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://spdx.org/rdf/terms#algorithm">algorithm</a></td>
        <td>http://spdx.org/rdf/terms#algorithm</td>
<<<<<<< HEAD
        <td><a href="http://spdx.org/rdf/terms#ChecksumAlgorithm">spdx:ChecksumAlgorithm</a> </td>
        <td>1..1</td>
        <td>V</td>
=======
        <td><a href="http://spdx.org/rdf/terms#ChecksumAlgorithm">spdx:ChecksumAlgorithm</a></td>
        <td>1..1</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://spdx.org/rdf/terms#checksumValue">checksum value</a></td>
        <td>http://spdx.org/rdf/terms#checksumValue</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2001/XMLSchema#hexBinary">xsd:hexBinary</a> </td>
        <td>1..1</td>
        <td>V</td>
    </tr>
</table>

### algorithm
<p data-include-format="markdown" data-include="doc/klassen/spdxChecksum/prop/algorithm.md"></p>

=======
        <td><a href="http://www.w3.org/2001/XMLSchema#hexBinary">xsd:hexBinary</a></td>
        <td>1..1</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/spdx:Checksum/prop/.md"></p> -->
### algorithm
>>>>>>> dd87257 (fix doc)
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
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/spdxChecksum/prop/checksum_value.md"></p>

=======
>>>>>>> dd87257 (fix doc)
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


<<<<<<< HEAD
### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/spdxChecksum/Voorbeelden.md"></p>

## Identifier - adms:Identifier
<p data-include-format="markdown" data-include="doc/klassen/admsIdentifier/admsIdentifier.md"></p>

=======
<!-- property tabel -->
## Location - dct:Location
>>>>>>> dd87257 (fix doc)
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
<<<<<<< HEAD
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
<p data-include-format="markdown" data-include="doc/klassen/admsIdentifier/prop/notation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>notation</td>
=======
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#bbox">bbox</a></td>
        <td>http://www.w3.org/ns/dcat#bbox</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#centroid">centroid</a></td>
        <td>http://www.w3.org/ns/dcat#centroid</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/locn#geometry">geometry</a></td>
        <td>http://www.w3.org/ns/locn#geometry</td>
        <td><a href="http://www.w3.org/ns/locn#Geometry">locn:Geometry</a></td>
        <td>0..1</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dct:Location/prop/.md"></p> -->
### bbox
<table>
<tr>
    <td><em>Property</em></td>
    <td>bbox</td>
>>>>>>> dd87257 (fix doc)
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
<<<<<<< HEAD
    <td><a href="http://www.w3.org/2004/02/skos/core#notation">skos:notation</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/dcat#bbox">dcat:bbox</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
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
>>>>>>> dd87257 (fix doc)
</tr>
</table>


<<<<<<< HEAD
### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/admsIdentifier/Voorbeelden.md"></p>

## Relationship - dcat:Relationship
<p data-include-format="markdown" data-include="doc/klassen/dcatRelationship/dcatRelationship.md"></p>

=======
<!-- property tabel -->
## PeriodOfTime - dct:PeriodOfTime
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/2006/time#hasBeginning">beginning</a></td>
        <td>http://www.w3.org/2006/time#hasBeginning</td>
        <td><a href="http://www.w3.org/2006/time#Instant">time:Instant</a></td>
        <td>0..1</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/2006/time#hasEnd">end</a></td>
        <td>http://www.w3.org/2006/time#hasEnd</td>
        <td><a href="http://www.w3.org/2006/time#Instant">time:Instant</a></td>
        <td>0..1</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#endDate">end date</a></td>
        <td>http://www.w3.org/ns/dcat#endDate</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#startDate">start date</a></td>
        <td>http://www.w3.org/ns/dcat#startDate</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dct:PeriodOfTime/prop/.md"></p> -->
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
</tr>
</table>


<!-- property tabel -->
## DatasetSeries - dcat:DatasetSeries
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#contactPoint">contact point</a></td>
        <td>http://www.w3.org/ns/dcat#contactPoint</td>
        <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a></td>
        <td>0..n</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/description">description</a></td>
        <td>http://purl.org/dc/terms/description</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>1..n</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#first">first</a></td>
        <td>http://www.w3.org/ns/dcat#first</td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..1</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/accrualPeriodicity">frequency</a></td>
        <td>http://purl.org/dc/terms/accrualPeriodicity</td>
        <td><a href="http://purl.org/dc/terms/Frequency">dct:Frequency</a></td>
        <td>0..1</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/spatial">geographical coverage</a></td>
        <td>http://purl.org/dc/terms/spatial</td>
        <td><a href="http://purl.org/dc/terms/Location">dct:Location</a></td>
        <td>0..n</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#last">last</a></td>
        <td>http://www.w3.org/ns/dcat#last</td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..1</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/modified">modification date</a></td>
        <td>http://purl.org/dc/terms/modified</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/publisher">publisher</a></td>
        <td>http://purl.org/dc/terms/publisher</td>
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>0..1</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/issued">release date</a></td>
        <td>http://purl.org/dc/terms/issued</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#seriesMember">series member</a></td>
        <td>http://www.w3.org/ns/dcat#seriesMember</td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/temporal">temporal coverage</a></td>
        <td>http://purl.org/dc/terms/temporal</td>
        <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a></td>
        <td>0..n</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/title">title</a></td>
        <td>http://purl.org/dc/terms/title</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>1..n</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dcat:DatasetSeries/prop/.md"></p> -->
### contact point
<table>
<tr>
    <td><em>Property</em></td>
    <td>contact point</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#contactPoint">dcat:contactPoint</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a></td>
</tr>
</table>

### description
<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
</tr>
</table>

### first
<table>
<tr>
    <td><em>Property</em></td>
    <td>first</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#first">dcat:first</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

### frequency
<table>
<tr>
    <td><em>Property</em></td>
    <td>frequency</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/accrualPeriodicity">dct:accrualPeriodicity</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/Frequency">dct:Frequency</a></td>
</tr>
</table>

### geographical coverage
<table>
<tr>
    <td><em>Property</em></td>
    <td>geographical coverage</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/spatial">dct:spatial</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/Location">dct:Location</a></td>
</tr>
</table>

### last
<table>
<tr>
    <td><em>Property</em></td>
    <td>last</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#last">dcat:last</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

### modification date
<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
</tr>
</table>

### publisher
<table>
<tr>
    <td><em>Property</em></td>
    <td>publisher</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/publisher">dct:publisher</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
</tr>
</table>

### release date
<table>
<tr>
    <td><em>Property</em></td>
    <td>release date</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/issued">dct:issued</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
</tr>
</table>

### series member
<table>
<tr>
    <td><em>Property</em></td>
    <td>series member</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#seriesMember">dcat:seriesMember</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
</tr>
</table>

### temporal coverage
<table>
<tr>
    <td><em>Property</em></td>
    <td>temporal coverage</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://purl.org/dc/terms/temporal">dct:temporal</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a></td>
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
</tr>
</table>


<!-- property tabel -->
## Relationship - dcat:Relationship
>>>>>>> dd87257 (fix doc)
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
<<<<<<< HEAD
        <th>Optionaliteit</th>
=======
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/ns/dcat#hadRole">had role</a></td>
        <td>http://www.w3.org/ns/dcat#hadRole</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/dcat#Role">dcat:Role</a> </td>
        <td>1..n</td>
        <td>V</td>
=======
        <td><a href="http://www.w3.org/ns/dcat#Role">dcat:Role</a></td>
        <td>1..n</td>
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/relation">relation</a></td>
        <td>http://purl.org/dc/terms/relation</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a> </td>
        <td>1..n</td>
        <td>V</td>
    </tr>
</table>

### had role
<p data-include-format="markdown" data-include="doc/klassen/dcatRelationship/prop/had_role.md"></p>

=======
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>1..n</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dcat:Relationship/prop/.md"></p> -->
### had role
>>>>>>> dd87257 (fix doc)
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
<<<<<<< HEAD
<p data-include-format="markdown" data-include="doc/klassen/dcatRelationship/prop/relation.md"></p>

=======
>>>>>>> dd87257 (fix doc)
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


<<<<<<< HEAD
### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatRelationship/Voorbeelden.md"></p>

## Concept - skos:Concept
<p data-include-format="markdown" data-include="doc/klassen/skosConcept/skosConcept.md"></p>

=======
<!-- property tabel -->
## Agent - foaf:Agent
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
    </tr>
    <tr>
        <td><a href="http://xmlns.com/foaf/0.1/name">name</a></td>
        <td>http://xmlns.com/foaf/0.1/name</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>1..n</td>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/type">type</a></td>
        <td>http://purl.org/dc/terms/type</td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..1</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/foaf:Agent/prop/.md"></p> -->
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
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


<!-- property tabel -->
## Identifier - adms:Identifier
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
    </tr>
    <tr>
        <td><a href="http://www.w3.org/2004/02/skos/core#notation">notation</a></td>
        <td>http://www.w3.org/2004/02/skos/core#notation</td>
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>0..1</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/adms:Identifier/prop/.md"></p> -->
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
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
</tr>
</table>


<!-- property tabel -->
## Concept - skos:Concept
>>>>>>> dd87257 (fix doc)
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
<<<<<<< HEAD
        <th>Optionaliteit</th>
=======
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://www.w3.org/2004/02/skos/core#prefLabel">preferred label</a></td>
        <td>http://www.w3.org/2004/02/skos/core#prefLabel</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td></td>
    </tr>
</table>

### preferred label
<p data-include-format="markdown" data-include="doc/klassen/skosConcept/prop/preferred_label.md"></p>

=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>1..n</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/skos:Concept/prop/.md"></p> -->
### preferred label
>>>>>>> dd87257 (fix doc)
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
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>


<<<<<<< HEAD
### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/skosConcept/Voorbeelden.md"></p>

## ConceptScheme - skos:ConceptScheme
<p data-include-format="markdown" data-include="doc/klassen/skosConceptScheme/skosConceptScheme.md"></p>

=======
<!-- property tabel -->
## ConceptScheme - skos:ConceptScheme
>>>>>>> dd87257 (fix doc)
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
<<<<<<< HEAD
        <th>Optionaliteit</th>
=======
>>>>>>> dd87257 (fix doc)
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/title">title</a></td>
        <td>http://purl.org/dc/terms/title</td>
<<<<<<< HEAD
        <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a> </td>
        <td>1..n</td>
        <td></td>
    </tr>
</table>

### title
<p data-include-format="markdown" data-include="doc/klassen/skosConceptScheme/prop/title.md"></p>

=======
        <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
        <td>1..n</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/skos:ConceptScheme/prop/.md"></p> -->
### title
>>>>>>> dd87257 (fix doc)
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
<<<<<<< HEAD
    <td><a href="http://www.w3.org/ns/shacl#Literal">sh:Literal</a></td>
=======
    <td><a href="http://www.w3.org/ns/shacl#Literal">prop.nodeKindPrefixed</a></td>
>>>>>>> dd87257 (fix doc)
</tr>
</table>


<<<<<<< HEAD
### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/skosConceptScheme/Voorbeelden.md"></p>

=======
<!-- property tabel -->
## LicenseDocument - dct:LicenseDocument
<table>
    <tr>
        <th>Property</th>
        <th>URI</th>
        <th>Range</th>
        <th>Card</th>
    </tr>
    <tr>
        <td><a href="http://purl.org/dc/terms/type">type</a></td>
        <td>http://purl.org/dc/terms/type</td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..n</td>
    </tr>
</table>


<!-- <p data-include-format="markdown" data-include="/doc/klasse/dct:LicenseDocument/prop/.md"></p> -->
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


<!-- property tabel -->
>>>>>>> dd87257 (fix doc)
