# Klassen

In dit hoofdstuk worden de belangrijkste klassen van het <u>applicatieprofiel</u> benoemd en beschreven. Deze klassen vormen de kern van het applicatieprofiel. De eigenschappen en de bijbehorende beperkingen die van toepassing zijn in de context van dit profiel worden in tabelvorm weergegeven. Elke rij komt overeen met één eigenschap. De eigenschappen worden in sub paragrafen verder toegelicht.
<br/>
<br/>
De niet beschreven klassen en eigenschappen behoren conform [[DCAT-AP-3.0]] toegepast te worden.

## Dataset - dcat:Dataset
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/dcatDataset.md"></p>

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
        <td><a href="#dataset-access-rights">access rights</a></td>
        <td><a href="http://purl.org/dc/terms/accessRights">dct:accessRights</a></td>
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-applicable-legislation">applicable legislation</a></td>
        <td><a href="http://data.europa.eu/r5r/applicableLegislation">dcatap:applicableLegislation</a></td>
        <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a></td>
        <td>0..n</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-conforms-to">conforms to</a></td>
        <td><a href="http://purl.org/dc/terms/conformsTo">dct:conformsTo</a></td>
        <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-contact-point">contact point</a></td>
        <td><a href="http://www.w3.org/ns/dcat#contactPoint">dcat:contactPoint</a></td>
        <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-creator">creator</a></td>
        <td><a href="http://purl.org/dc/terms/creator">dct:creator</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-dataset-distribution">dataset distribution</a></td>
        <td><a href="http://www.w3.org/ns/dcat#distribution">dcat:distribution</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Distribution">dcat:Distribution</a></td>
        <td>0..n</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-description">description</a></td>
        <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-documentation">documentation</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/page">foaf:page</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-frequency">frequency</a></td>
        <td><a href="http://purl.org/dc/terms/accrualPeriodicity">dct:accrualPeriodicity</a></td>
        <td><a href="http://purl.org/dc/terms/Frequency">dct:Frequency</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-geographical-coverage">geographical coverage</a></td>
        <td><a href="http://purl.org/dc/terms/spatial">dct:spatial</a></td>
        <td><a href="http://purl.org/dc/terms/Location">dct:Location</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-has-version">has version</a></td>
        <td><a href="http://www.w3.org/ns/dcat#hasVersion">dcat:hasVersion</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-hvd-category">HVD Category</a></td>
        <td><a href="http://data.europa.eu/r5r/hvdCategory">dcatap:hvdCategory</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..n</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-identifier">identifier</a></td>
        <td><a href="http://purl.org/dc/terms/identifier">dct:identifier</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-in-series">in series</a></td>
        <td><a href="http://www.w3.org/ns/dcat#inSeries">dcat:inSeries</a></td>
        <td><a href="http://www.w3.org/ns/dcat#DatasetSeries">dcat:DatasetSeries</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-is-referenced-by">is referenced by</a></td>
        <td><a href="http://purl.org/dc/terms/isReferencedBy">dct:isReferencedBy</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-is-version-of">is version of</a></td>
        <td><a href="http://www.w3.org/ns/dcat#isVersionOf">dcat:isVersionOf</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-keyword">keyword</a></td>
        <td><a href="http://www.w3.org/ns/dcat#keyword">dcat:keyword</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-landing-page">landing page</a></td>
        <td><a href="http://www.w3.org/ns/dcat#landingPage">dcat:landingPage</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-language">language</a></td>
        <td><a href="http://purl.org/dc/terms/language">dct:language</a></td>
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-modification-date">modification date</a></td>
        <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-next">next</a></td>
        <td><a href="http://www.w3.org/ns/dcat#next">dcat:next</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
        <td></td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-other-identifier">other identifier</a></td>
        <td><a href="http://www.w3.org/ns/adms#identifier">adms:identifier</a></td>
        <td><a href="http://www.w3.org/ns/adms#Identifier">adms:Identifier</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-previous">previous</a></td>
        <td><a href="http://www.w3.org/ns/dcat#prev">dcat:prev</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
        <td></td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-provenance">provenance</a></td>
        <td><a href="http://purl.org/dc/terms/provenance">dct:provenance</a></td>
        <td><a href="http://purl.org/dc/terms/ProvenanceStatement">dct:ProvenanceStatement</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-publisher">publisher</a></td>
        <td><a href="http://purl.org/dc/terms/publisher">dct:publisher</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-qualified-attribution">qualified attribution</a></td>
        <td><a href="http://www.w3.org/ns/prov#qualifiedAttribution">prov:qualifiedAttribution</a></td>
        <td><a href="http://www.w3.org/ns/prov#Attribution">prov:Attribution</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-qualified-relation">qualified relation</a></td>
        <td><a href="http://www.w3.org/ns/dcat#qualifiedRelation">dcat:qualifiedRelation</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Relationship">dcat:Relationship</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-related-resource">related resource</a></td>
        <td><a href="http://purl.org/dc/terms/relation">dct:relation</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-release-date">release date</a></td>
        <td><a href="http://purl.org/dc/terms/issued">dct:issued</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-sample">sample</a></td>
        <td><a href="http://www.w3.org/ns/adms#sample">adms:sample</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Distribution">dcat:Distribution</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-source">source</a></td>
        <td><a href="http://purl.org/dc/terms/source">dct:source</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-spatial-resolution">spatial resolution</a></td>
        <td><a href="http://www.w3.org/ns/dcat#spatialResolutionInMeters">dcat:spatialResolutionInMeters</a></td>
        <td><a href="http://www.w3.org/2001/XMLSchema#decimal">xsd:decimal</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-status">status</a></td>
        <td><a href="http://www.w3.org/ns/adms#status">adms:status</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-temporal-coverage">temporal coverage</a></td>
        <td><a href="http://purl.org/dc/terms/temporal">dct:temporal</a></td>
        <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-temporal-resolution">temporal resolution</a></td>
        <td><a href="http://www.w3.org/ns/dcat#temporalResolution">dcat:temporalResolution</a></td>
        <td><a href="http://www.w3.org/2001/XMLSchema#duration">xsd:duration</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-theme">theme</a></td>
        <td><a href="http://www.w3.org/ns/dcat#theme">dcat:theme</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-title">title</a></td>
        <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-type">type</a></td>
        <td><a href="http://purl.org/dc/terms/type">dct:type</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-version">version</a></td>
        <td><a href="http://www.w3.org/ns/dcat#version">dcat:version</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataset-version-notes">version notes</a></td>
        <td><a href="http://www.w3.org/ns/adms#versionNotes">adms:versionNotes</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataset-was-generated-by">was generated by</a></td>
        <td><a href="http://www.w3.org/ns/prov#wasGeneratedBy">prov:wasGeneratedBy</a></td>
        <td><a href="http://www.w3.org/ns/prov#Activity">prov:Activity</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
</table>

### access rights {#dataset-access-rights}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/access_rights.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>access rights</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>Information that indicates whether the Dataset is open data, has access restrictions or is not public.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
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

### applicable legislation {#dataset-applicable-legislation}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/applicable_legislation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>applicable legislation</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### conforms to {#dataset-conforms-to}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/conforms_to.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>conforms to</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>An implementing rule or other specification.@en</td>
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

### contact point {#dataset-contact-point}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/contact_point.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>contact point</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>Contact information that can be used for sending comments about the Dataset.@en</td>
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

### creator {#dataset-creator}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/creator.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>creator</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>Ae entity responsible for producing the dataset.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
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

### dataset distribution {#dataset-dataset-distribution}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/dataset_distribution.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>dataset distribution</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>An available Distribution for the Dataset.@en</td>
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

### description {#dataset-description}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/description.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A free-text account of the Dataset.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### documentation {#dataset-documentation}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/documentation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>documentation</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A page or document about this Dataset.@en</td>
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

### frequency {#dataset-frequency}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/frequency.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>frequency</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The frequency at which the Dataset is updated.@en</td>
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

### geographical coverage {#dataset-geographical-coverage}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/geographical_coverage.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>geographical coverage</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A geographic region that is covered by the Dataset.@en</td>
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

### has version {#dataset-has-version}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/has_version.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>has version</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A related Dataset that is a version, edition, or adaptation of the described Dataset.@en</td>
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

### HVD Category {#dataset-hvd-category}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/HVD_Category.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>HVD Category</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The HVD category to which this Dataset belongs.@en</td>
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

### identifier {#dataset-identifier}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/identifier.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>identifier</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The main identifier for the Dataset, e.g. the URI or other unique identifier in the context of the Catalogue.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### in series {#dataset-in-series}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/in_series.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>in series</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A dataset series of which the dataset is part.@en</td>
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

### is referenced by {#dataset-is-referenced-by}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/is_referenced_by.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>is referenced by</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A related resource, such as a publication, that references, cites, or otherwise points to the dataset.@en</td>
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

### is version of {#dataset-is-version-of}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/is_version_of.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>is version of</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A related Dataset of which the described Dataset is a version, edition, or adaptation.@en</td>
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

### keyword {#dataset-keyword}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/keyword.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>keyword</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A keyword or tag describing the Dataset.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### landing page {#dataset-landing-page}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/landing_page.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>landing page</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A web page that provides access to the Dataset, its Distributions and/or additional information.@en</td>
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

### language {#dataset-language}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/language.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>language</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A language of the Dataset.@en</td>
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

### modification date {#dataset-modification-date}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/modification_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The most recent date on which the Dataset was changed or modified.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### next {#dataset-next}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/next.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>next</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The following resource (after the current one) in an ordered collection or series of resources.@en</td>
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

### other identifier {#dataset-other-identifier}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/other_identifier.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>other identifier</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A secondary identifier of the Dataset, such as MAST/ADS17, DataCite18, DOI19, EZID20 or W3ID21.@en</td>
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

### previous {#dataset-previous}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/previous.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>previous</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The previous resource (before the current one) in an ordered collection or series of resources.@en</td>
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

### provenance {#dataset-provenance}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/provenance.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>provenance</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A statement about the lineage of a Dataset.@en</td>
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

### publisher {#dataset-publisher}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/publisher.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>publisher</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>An entity (organisation) responsible for making the Dataset available.@en</td>
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

### qualified attribution {#dataset-qualified-attribution}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/qualified_attribution.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>qualified attribution</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>An Agent having some form of responsibility for the resource.@en</td>
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

### qualified relation {#dataset-qualified-relation}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/qualified_relation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>qualified relation</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A description of a relationship with another resource.@en</td>
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

### related resource {#dataset-related-resource}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/related_resource.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>related resource</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A related resource.@en</td>
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

### release date {#dataset-release-date}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/release_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>release date</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The date of formal issuance (e.g., publication) of the Dataset.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### sample {#dataset-sample}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/sample.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>sample</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A sample distribution of the dataset.@en</td>
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

### source {#dataset-source}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/source.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>source</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A related Dataset from which the described Dataset is derived.@en</td>
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

### spatial resolution {#dataset-spatial-resolution}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/spatial_resolution.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>spatial resolution</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The minimum spatial separation resolvable in a dataset, measured in meters.@en</td>
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

### status {#dataset-status}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/status.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>status</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The status of the dataset in the context of editorial flow of the dataset and data service descriptions.@en</td>
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

### temporal coverage {#dataset-temporal-coverage}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/temporal_coverage.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>temporal coverage</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A temporal period that the Dataset covers.@en</td>
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

### temporal resolution {#dataset-temporal-resolution}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/temporal_resolution.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>temporal resolution</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The minimum time period resolvable in the dataset.@en</td>
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

### theme {#dataset-theme}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/theme.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>theme</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A category of the Dataset.@en</td>
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

### title {#dataset-title}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/title.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>title</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A name given to the Dataset.@en</td>
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

### type {#dataset-type}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/type.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>type</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A type of the Dataset.@en</td>
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

### version {#dataset-version}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/version.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>version</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The version indicator (name or identifier) of a resource.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://www.w3.org/ns/dcat#version">dcat:version</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### version notes {#dataset-version-notes}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/version_notes.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>version notes</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A description of the differences between this version and a previous version of the Dataset.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### was generated by {#dataset-was-generated-by}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/prop/was_generated_by.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>was generated by</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>An activity that generated, or provides the business context for, the creation of the dataset.@en</td>
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



### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatDataset/Voorbeelden.md"></p>

## Distribution - dcat:Distribution
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/dcatDistribution.md"></p>

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
        <td><a href="#distribution-access-service">access service</a></td>
        <td><a href="http://www.w3.org/ns/dcat#accessService">dcat:accessService</a></td>
        <td><a href="http://www.w3.org/ns/dcat#DataService">dcat:DataService</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-access-url">access URL</a></td>
        <td><a href="http://www.w3.org/ns/dcat#accessURL">dcat:accessURL</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-applicable-legislation">applicable legislation</a></td>
        <td><a href="http://data.europa.eu/r5r/applicableLegislation">dcatap:applicableLegislation</a></td>
        <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a></td>
        <td>0..n</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-availability">availability</a></td>
        <td><a href="http://data.europa.eu/r5r/availability">dcatap:availability</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#distribution-byte-size">byte size</a></td>
        <td><a href="http://www.w3.org/ns/dcat#byteSize">dcat:byteSize</a></td>
        <td><a href="http://www.w3.org/2001/XMLSchema#nonNegativeInteger">xsd:nonNegativeInteger</a></td>
        <td>0..1</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-checksum">checksum</a></td>
        <td><a href="http://spdx.org/rdf/terms#checksum">spdx:checksum</a></td>
        <td><a href="http://spdx.org/rdf/terms#Checksum">spdx:Checksum</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#distribution-compression-format">compression format</a></td>
        <td><a href="http://www.w3.org/ns/dcat#compressFormat">dcat:compressFormat</a></td>
        <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#distribution-description">description</a></td>
        <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#distribution-documentation">documentation</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/page">foaf:page</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#distribution-download-url">download URL</a></td>
        <td><a href="http://www.w3.org/ns/dcat#downloadURL">dcat:downloadURL</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-format">format</a></td>
        <td><a href="http://purl.org/dc/terms/format">dct:format</a></td>
        <td><a href="http://purl.org/dc/terms/MediaTypeOrExtent">dct:MediaTypeOrExtent</a></td>
        <td>0..1</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-has-policy">has policy</a></td>
        <td><a href="http://www.w3.org/ns/odrl/2/hasPolicy">odrl:hasPolicy</a></td>
        <td><a href="http://www.w3.org/ns/odrl/2/Policy">odrl:Policy</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#distribution-language">language</a></td>
        <td><a href="http://purl.org/dc/terms/language">dct:language</a></td>
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-licence">licence</a></td>
        <td><a href="http://purl.org/dc/terms/license">dct:license</a></td>
        <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-linked-schemas">linked schemas</a></td>
        <td><a href="http://purl.org/dc/terms/conformsTo">dct:conformsTo</a></td>
        <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-media-type">media type</a></td>
        <td><a href="http://www.w3.org/ns/dcat#mediaType">dcat:mediaType</a></td>
        <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a></td>
        <td>0..1</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-modification-date">modification date</a></td>
        <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#distribution-packaging-format">packaging format</a></td>
        <td><a href="http://www.w3.org/ns/dcat#packageFormat">dcat:packageFormat</a></td>
        <td><a href="http://purl.org/dc/terms/MediaType">dct:MediaType</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#distribution-release-date">release date</a></td>
        <td><a href="http://purl.org/dc/terms/issued">dct:issued</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#distribution-rights">rights</a></td>
        <td><a href="http://purl.org/dc/terms/rights">dct:rights</a></td>
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
        <td>0..1</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-spatial-resolution">spatial resolution</a></td>
        <td><a href="http://www.w3.org/ns/dcat#spatialResolutionInMeters">dcat:spatialResolutionInMeters</a></td>
        <td><a href="http://www.w3.org/2001/XMLSchema#decimal">xsd:decimal</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-status">status</a></td>
        <td><a href="http://www.w3.org/ns/adms#status">adms:status</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#distribution-temporal-resolution">temporal resolution</a></td>
        <td><a href="http://www.w3.org/ns/dcat#temporalResolution">dcat:temporalResolution</a></td>
        <td><a href="http://www.w3.org/2001/XMLSchema#duration">xsd:duration</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#distribution-title">title</a></td>
        <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
</table>

### access service {#distribution-access-service}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/access_service.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>access service</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A data service that gives access to the distribution of the dataset.@en</td>
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

### access URL {#distribution-access-url}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/access_URL.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>access URL</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A URL that gives access to a Distribution of the Dataset.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
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

### applicable legislation {#distribution-applicable-legislation}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/applicable_legislation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>applicable legislation</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### availability {#distribution-availability}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/availability.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>availability</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>An indication how long it is planned to keep the Distribution of the Dataset available.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
</tr>
<tr>
    <td><em>URI</em></td>
    <td><a href="http://data.europa.eu/r5r/availability">dcatap:availability</a></td>
</tr>
<tr>
    <td><em>Range</em></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
</tr>
</table>

### byte size {#distribution-byte-size}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/byte_size.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>byte size</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The size of a Distribution in bytes.@en</td>
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

### checksum {#distribution-checksum}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/checksum.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>checksum</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A mechanism that can be used to verify that the contents of a distribution have not changed.@en</td>
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

### compression format {#distribution-compression-format}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/compression_format.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>compression format</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The format of the file in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file.@en</td>
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

### description {#distribution-description}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/description.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A free-text account of the Distribution.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### documentation {#distribution-documentation}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/documentation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>documentation</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A page or document about this Distribution.@en</td>
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

### download URL {#distribution-download-url}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/download_URL.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>download URL</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A URL that is a direct link to a downloadable file in a given format.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
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

### format {#distribution-format}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/format.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>format</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The file format of the Distribution.@en</td>
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

### has policy {#distribution-has-policy}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/has_policy.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>has policy</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The policy expressing the rights associated with the distribution if using the ODRL vocabulary.@en</td>
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

### language {#distribution-language}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/language.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>language</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A language used in the Distribution.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
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

### licence {#distribution-licence}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/licence.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>licence</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A licence under which the Distribution is made available.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
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

### linked schemas {#distribution-linked-schemas}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/linked_schemas.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>linked schemas</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>An established schema to which the described Distribution conforms.@en</td>
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

### media type {#distribution-media-type}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/media_type.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>media type</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The media type of the Distribution as defined in the official register of media types managed by IANA.@en</td>
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

### modification date {#distribution-modification-date}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/modification_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The most recent date on which the Distribution was changed or modified.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### packaging format {#distribution-packaging-format}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/packaging_format.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>packaging format</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The format of the file in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together.@en</td>
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

### release date {#distribution-release-date}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/release_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>release date</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The date of formal issuance (e.g., publication) of the Distribution.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### rights {#distribution-rights}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/rights.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>rights</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A statement that specifies rights associated with the Distribution.@en</td>
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

### spatial resolution {#distribution-spatial-resolution}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/spatial_resolution.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>spatial resolution</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The minimum spatial separation resolvable in a dataset distribution, measured in meters.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
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

### status {#distribution-status}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/status.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>status</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The status of the distribution in the context of maturity lifecycle.@en</td>
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

### temporal resolution {#distribution-temporal-resolution}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/temporal_resolution.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>temporal resolution</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The minimum time period resolvable in the dataset distribution.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..1</td>
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

### title {#distribution-title}
<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/prop/title.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>title</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A name given to the Distribution.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>



### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatDistribution/Voorbeelden.md"></p>

## DataService - dcat:DataService
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/dcatDataService.md"></p>

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
        <td><a href="#dataservice-access-rights">access rights</a></td>
        <td><a href="http://purl.org/dc/terms/accessRights">dct:accessRights</a></td>
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-applicable-legislation">applicable legislation</a></td>
        <td><a href="http://data.europa.eu/r5r/applicableLegislation">dcatap:applicableLegislation</a></td>
        <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a></td>
        <td>0..n</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-application-profile">application profile</a></td>
        <td><a href="http://purl.org/dc/terms/conformsTo">dct:conformsTo</a></td>
        <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a></td>
        <td>0..n</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-contact-point">contact point</a></td>
        <td><a href="http://www.w3.org/ns/dcat#contactPoint">dcat:contactPoint</a></td>
        <td></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-creator">creator</a></td>
        <td><a href="http://purl.org/dc/terms/creator">dct:creator</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-description">description</a></td>
        <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-documentation">documentation</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/page">foaf:page</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
        <td>0..n</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-endpoint-description">endpoint description</a></td>
        <td><a href="http://www.w3.org/ns/dcat#endpointDescription">dcat:endpointDescription</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-endpoint-url">endpoint URL</a></td>
        <td><a href="http://www.w3.org/ns/dcat#endpointURL">dcat:endpointURL</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Resource">rdfs:Resource</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-format">format</a></td>
        <td><a href="http://purl.org/dc/terms/format">dct:format</a></td>
        <td><a href="http://purl.org/dc/terms/MediaTypeOrExtent">dct:MediaTypeOrExtent</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#dataservice-hvd-category">HVD Category</a></td>
        <td><a href="http://data.europa.eu/r5r/hvdCategory">dcatap:hvdCategory</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..n</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-identifier">identifier</a></td>
        <td><a href="http://purl.org/dc/terms/identifier">dct:identifier</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-keyword">keyword</a></td>
        <td><a href="http://www.w3.org/ns/dcat#keyword">dcat:keyword</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-landing-page">landing page</a></td>
        <td><a href="http://www.w3.org/ns/dcat#landingPage">dcat:landingPage</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-language">language</a></td>
        <td><a href="http://purl.org/dc/terms/language">dct:language</a></td>
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-licence">licence</a></td>
        <td><a href="http://purl.org/dc/terms/license">dct:license</a></td>
        <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-modification-date">modification date</a></td>
        <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
        <td><a href="https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral">Temporal Literal</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-other-identifier">other identifier</a></td>
        <td><a href="http://www.w3.org/ns/adms#identifier">adms:identifier</a></td>
        <td><a href="http://www.w3.org/ns/adms#Identifier">adms:Identifier</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-publisher">publisher</a></td>
        <td><a href="http://purl.org/dc/terms/publisher">dct:publisher</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-rights">rights</a></td>
        <td><a href="http://purl.org/dc/terms/rights">dct:rights</a></td>
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-serves-dataset">serves dataset</a></td>
        <td><a href="http://www.w3.org/ns/dcat#servesDataset">dcat:servesDataset</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
        <td>C</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-theme">theme</a></td>
        <td><a href="http://www.w3.org/ns/dcat#theme">dcat:theme</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#dataservice-title">title</a></td>
        <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>NL</td>
    </tr>
</table>

### access rights {#dataservice-access-rights}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/access_rights.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>access rights</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>Information regarding access or restrictions based on privacy, security, or other policies.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
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

### applicable legislation {#dataservice-applicable-legislation}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/applicable_legislation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>applicable legislation</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### application profile {#dataservice-application-profile}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/application_profile.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>application profile</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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
    <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a></td>
</tr>
</table>

### contact point {#dataservice-contact-point}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/contact_point.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>contact point</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### creator {#dataservice-creator}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/creator.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>creator</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### description {#dataservice-description}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/description.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A free-text account of the Data Service.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### documentation {#dataservice-documentation}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/documentation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>documentation</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### endpoint description {#dataservice-endpoint-description}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/endpoint_description.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>endpoint description</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A description of the services available via the end-points, including their operations, parameters etc.@en</td>
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
</tr>
</table>

### endpoint URL {#dataservice-endpoint-url}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/endpoint_URL.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>endpoint URL</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The root location or primary endpoint of the service (an IRI).@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
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

### format {#dataservice-format}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/format.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>format</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The structure that can be returned by querying the endpointURL.@en</td>
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

### HVD Category {#dataservice-hvd-category}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/HVD_Category.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>HVD Category</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The HVD category to which this Data Service belongs.@en</td>
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

### identifier {#dataservice-identifier}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/identifier.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>identifier</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### keyword {#dataservice-keyword}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/keyword.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>keyword</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### landing page {#dataservice-landing-page}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/landing_page.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>landing page</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### language {#dataservice-language}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/language.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>language</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### licence {#dataservice-licence}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/licence.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>licence</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A licence under which the Data service is made available.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..1</td>
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

### modification date {#dataservice-modification-date}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/modification_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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
    <td><a href="https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral">Temporal Literal</a></td>
</tr>
</table>

### other identifier {#dataservice-other-identifier}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/other_identifier.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>other identifier</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### publisher {#dataservice-publisher}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/publisher.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>publisher</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### rights {#dataservice-rights}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/rights.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>rights</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A statement that specifies rights associated with the Data Service.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>0..n</td>
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

### serves dataset {#dataservice-serves-dataset}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/serves_dataset.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>serves dataset</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>This property refers to a collection of data that this data service can distribute.@en</td>
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

### theme {#dataservice-theme}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/theme.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>theme</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A category of the Data Service.@en</td>
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

### title {#dataservice-title}
<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/prop/title.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>title</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A name given to the Data Service.@en</td>
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



### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatDataService/Voorbeelden.md"></p>

## Catalog - dcat:Catalog
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/dcatCatalog.md"></p>

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
        <td><a href="#catalog-applicable-legislation">applicable legislation</a></td>
        <td><a href="http://data.europa.eu/r5r/applicableLegislation">dcatap:applicableLegislation</a></td>
        <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#catalog-catalogue">catalogue</a></td>
        <td><a href="http://www.w3.org/ns/dcat#catalog">dcat:catalog</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-contact-point">contact point</a></td>
        <td><a href="http://www.w3.org/ns/dcat#contactPoint">dcat:contactPoint</a></td>
        <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#catalog-creator">creator</a></td>
        <td><a href="http://purl.org/dc/terms/creator">dct:creator</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#catalog-dataset">dataset</a></td>
        <td><a href="http://www.w3.org/ns/dcat#dataset">dcat:dataset</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>1..n</td>
        <td>A</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#catalog-description">description</a></td>
        <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-geographical-coverage">geographical coverage</a></td>
        <td><a href="http://purl.org/dc/terms/spatial">dct:spatial</a></td>
        <td><a href="http://purl.org/dc/terms/Location">dct:Location</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-has-part">has part</a></td>
        <td><a href="http://purl.org/dc/terms/hasPart">dct:hasPart</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-homepage">homepage</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/homepage">foaf:homepage</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Document">foaf:Document</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-is-part-of">is part of</a></td>
        <td><a href="http://purl.org/dc/terms/isPartOf">dct:isPartOf</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#catalog-language">language</a></td>
        <td><a href="http://purl.org/dc/terms/language">dct:language</a></td>
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-licence">licence</a></td>
        <td><a href="http://purl.org/dc/terms/license">dct:license</a></td>
        <td><a href="http://purl.org/dc/terms/LicenseDocument">dct:LicenseDocument</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-modification-date">modification date</a></td>
        <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-publisher">publisher</a></td>
        <td><a href="http://purl.org/dc/terms/publisher">dct:publisher</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-record">record</a></td>
        <td><a href="http://www.w3.org/ns/dcat#record">dcat:record</a></td>
        <td><a href="http://www.w3.org/ns/dcat#CatalogRecord">dcat:CatalogRecord</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-release-date">release date</a></td>
        <td><a href="http://purl.org/dc/terms/issued">dct:issued</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-rights">rights</a></td>
        <td><a href="http://purl.org/dc/terms/rights">dct:rights</a></td>
        <td><a href="http://purl.org/dc/terms/RightsStatement">dct:RightsStatement</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-service">service</a></td>
        <td><a href="http://www.w3.org/ns/dcat#service">dcat:service</a></td>
        <td><a href="http://www.w3.org/ns/dcat#DataService">dcat:DataService</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-temporal-coverage">temporal coverage</a></td>
        <td><a href="http://purl.org/dc/terms/temporal">dct:temporal</a></td>
        <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-themes">themes</a></td>
        <td><a href="http://www.w3.org/ns/dcat#themeTaxonomy">dcat:themeTaxonomy</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#ConceptScheme">skos:ConceptScheme</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalog-title">title</a></td>
        <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
</table>

### applicable legislation {#catalog-applicable-legislation}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/applicable_legislation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>applicable legislation</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### catalogue {#catalog-catalogue}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/catalogue.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>catalogue</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A catalogue whose contents are of interest in the context of this catalogue.@en</td>
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

### contact point {#catalog-contact-point}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/contact_point.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>contact point</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>Contact information that can be used for sending comments about the Catalogue.@en</td>
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

### creator {#catalog-creator}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/creator.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>creator</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>An entity responsible for the creation of the catalogue.@en</td>
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

### dataset {#catalog-dataset}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/dataset.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>dataset</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A Dataset that is part of the Catalogue.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
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

### description {#catalog-description}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/description.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A free-text account of the Catalogue.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### geographical coverage {#catalog-geographical-coverage}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/geographical_coverage.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>geographical coverage</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A geographical area covered by the Catalogue.@en</td>
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

### has part {#catalog-has-part}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/has_part.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>has part</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A related Catalogue that is part of the described Catalogue.@en</td>
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

### homepage {#catalog-homepage}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/homepage.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>homepage</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A web page that acts as the main page for the Catalogue.@en</td>
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

### is part of {#catalog-is-part-of}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/is_part_of.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>is part of</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A related Catalogue in which the described Catalogue is physically or logically included.@en</td>
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

### language {#catalog-language}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/language.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>language</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A language used in the textual metadata describing titles, descriptions, etc. of the Datasets in the Catalogue.@en</td>
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

### licence {#catalog-licence}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/licence.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>licence</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A licence under which the Catalogue can be used or reused.@en</td>
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

### modification date {#catalog-modification-date}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/modification_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The most recent date on which the Catalogue was modified.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### publisher {#catalog-publisher}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/publisher.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>publisher</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>An entity (organisation) responsible for making the Catalogue available.@en</td>
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

### record {#catalog-record}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/record.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>record</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A Catalogue Record that is part of the Catalogue.@en</td>
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

### release date {#catalog-release-date}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/release_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>release date</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The date of formal issuance (e.g., publication) of the Catalogue.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### rights {#catalog-rights}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/rights.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>rights</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A statement that specifies rights associated with the Catalogue.@en</td>
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

### service {#catalog-service}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/service.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>service</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A site or end-point (Data Service) that is listed in the Catalogue.@en</td>
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

### temporal coverage {#catalog-temporal-coverage}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/temporal_coverage.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>temporal coverage</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A temporal period that the Catalogue covers.@en</td>
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

### themes {#catalog-themes}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/themes.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>themes</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A knowledge organization system used to classify the Catalogue&#39;s Datasets.@en</td>
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

### title {#catalog-title}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/prop/title.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>title</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A name given to the Catalogue.@en</td>
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



### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatCatalog/Voorbeelden.md"></p>

## CatalogRecord - dcat:CatalogRecord
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/dcatCatalogRecord.md"></p>

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
        <td><a href="#catalogrecord-application-profile">application profile</a></td>
        <td><a href="http://purl.org/dc/terms/conformsTo">dct:conformsTo</a></td>
        <td><a href="http://purl.org/dc/terms/Standard">dct:Standard</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalogrecord-change-type">change type</a></td>
        <td><a href="http://www.w3.org/ns/adms#status">adms:status</a></td>
        <td><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalogrecord-description">description</a></td>
        <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalogrecord-language">language</a></td>
        <td><a href="http://purl.org/dc/terms/language">dct:language</a></td>
        <td><a href="http://purl.org/dc/terms/LinguisticSystem">dct:LinguisticSystem</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#catalogrecord-listing-date">listing date</a></td>
        <td><a href="http://purl.org/dc/terms/issued">dct:issued</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalogrecord-modification-date">modification date</a></td>
        <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalogrecord-primary-topic">primary topic</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/primaryTopic">foaf:primaryTopic</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Resource">dcat:Resource</a></td>
        <td>1..1</td>
        <td>V</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalogrecord-source-metadata">source metadata</a></td>
        <td><a href="http://purl.org/dc/terms/source">dct:source</a></td>
        <td><a href="http://www.w3.org/ns/dcat#CatalogRecord">dcat:CatalogRecord</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#catalogrecord-title">title</a></td>
        <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>AP</td>
    </tr>
</table>

### application profile {#catalogrecord-application-profile}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/application_profile.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>application profile</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>An Application Profile that the Dataset&#39;s metadata conforms to.@en</td>
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

### change type {#catalogrecord-change-type}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/change_type.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>change type</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The status of the catalogue record in the context of editorial flow of the dataset and data service descriptions.@en</td>
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

### description {#catalogrecord-description}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/description.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A free-text account of the record. This property can be repeated for parallel language versions of the description.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### language {#catalogrecord-language}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/language.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>language</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A language used in the textual metadata describing titles, descriptions, etc. of the Dataset.@en</td>
</tr>
<tr>
    <td><em>Cardinality</em></td>
    <td>1..n</td>
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

### listing date {#catalogrecord-listing-date}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/listing_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>listing date</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The date on which the description of the Dataset was included in the Catalogue.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### modification date {#catalogrecord-modification-date}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/modification_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The most recent date on which the Catalogue entry was changed or modified.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### primary topic {#catalogrecord-primary-topic}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/primary_topic.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>primary topic</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A link to the Dataset, Data service or Catalog described in the record.@en</td>
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

### source metadata {#catalogrecord-source-metadata}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/source_metadata.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>source metadata</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The original metadata that was used in creating metadata for the Dataset.@en</td>
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

### title {#catalogrecord-title}
<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/prop/title.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>title</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A name given to the Catalogue Record.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>



### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatCatalogRecord/Voorbeelden.md"></p>

## DatasetSeries - dcat:DatasetSeries
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/dcatDatasetSeries.md"></p>

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
        <td><a href="#datasetseries-applicable-legislation">applicable legislation</a></td>
        <td><a href="http://data.europa.eu/r5r/applicableLegislation">dcatap:applicableLegislation</a></td>
        <td><a href="http://data.europa.eu/eli/ontology#LegalResource">eli:LegalResource</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-contact-point">contact point</a></td>
        <td><a href="http://www.w3.org/ns/dcat#contactPoint">dcat:contactPoint</a></td>
        <td><a href="http://www.w3.org/2006/vcard/ns#Kind">vcard:Kind</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-description">description</a></td>
        <td><a href="http://purl.org/dc/terms/description">dct:description</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-first">first</a></td>
        <td><a href="http://www.w3.org/ns/dcat#first">dcat:first</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-frequency">frequency</a></td>
        <td><a href="http://purl.org/dc/terms/accrualPeriodicity">dct:accrualPeriodicity</a></td>
        <td><a href="http://purl.org/dc/terms/Frequency">dct:Frequency</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-geographical-coverage">geographical coverage</a></td>
        <td><a href="http://purl.org/dc/terms/spatial">dct:spatial</a></td>
        <td><a href="http://purl.org/dc/terms/Location">dct:Location</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-last">last</a></td>
        <td><a href="http://www.w3.org/ns/dcat#last">dcat:last</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-modification-date">modification date</a></td>
        <td><a href="http://purl.org/dc/terms/modified">dct:modified</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-publisher">publisher</a></td>
        <td><a href="http://purl.org/dc/terms/publisher">dct:publisher</a></td>
        <td><a href="http://xmlns.com/foaf/0.1/Agent">foaf:Agent</a></td>
        <td>0..1</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-release-date">release date</a></td>
        <td><a href="http://purl.org/dc/terms/issued">dct:issued</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>0..1</td>
        <td>O</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-series-member">series member</a></td>
        <td><a href="http://www.w3.org/ns/dcat#seriesMember">dcat:seriesMember</a></td>
        <td><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></td>
        <td>0..n</td>
        <td>O</td>
        <td>NL</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-temporal-coverage">temporal coverage</a></td>
        <td><a href="http://purl.org/dc/terms/temporal">dct:temporal</a></td>
        <td><a href="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a></td>
        <td>0..n</td>
        <td>A</td>
        <td>AP</td>
    </tr>
    <tr>
        <td><a href="#datasetseries-title">title</a></td>
        <td><a href="http://purl.org/dc/terms/title">dct:title</a></td>
        <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
        <td>1..n</td>
        <td>V</td>
        <td>AP</td>
    </tr>
</table>

### applicable legislation {#datasetseries-applicable-legislation}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/applicable_legislation.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>applicable legislation</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td></td>
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

### contact point {#datasetseries-contact-point}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/contact_point.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>contact point</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>Contact information that can be used for sending comments about the Dataset Series.@en</td>
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

### description {#datasetseries-description}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/description.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>description</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A free-text account of the Dataset Series.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### first {#datasetseries-first}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/first.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>first</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The first resource in an ordered collection or series of resources, to which the current resource belongs.@en</td>
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

### frequency {#datasetseries-frequency}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/frequency.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>frequency</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The frequency at which the Dataset Series is updated.@en</td>
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

### geographical coverage {#datasetseries-geographical-coverage}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/geographical_coverage.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>geographical coverage</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A geographic region that is covered by the Dataset Series.@en</td>
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

### last {#datasetseries-last}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/last.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>last</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The last resource in an ordered collection or series.@en</td>
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

### modification date {#datasetseries-modification-date}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/modification_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>modification date</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The most recent date on which the Dataset Series was changed or modified.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### publisher {#datasetseries-publisher}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/publisher.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>publisher</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>An entity (organisation) responsible for ensuring the coherency of the Dataset Series @en</td>
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

### release date {#datasetseries-release-date}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/release_date.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>release date</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>The date of formal issuance (e.g., publication) of the Dataset Series.@en</td>
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
    <td><a href="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</a></td>
</tr>
</table>

### series member {#datasetseries-series-member}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/series_member.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>series member</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A member of the Dataset Series. @en</td>
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

### temporal coverage {#datasetseries-temporal-coverage}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/temporal_coverage.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>temporal coverage</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A temporal period that the Dataset Series covers.@en</td>
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

### title {#datasetseries-title}
<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/prop/title.md"></p>

<table>
<tr>
    <td><em>Property</em></td>
    <td>title</td>
</tr>
<tr>
    <td><em>Description</em></td>
    <td>A name given to the Dataset Series.@en</td>
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



### Voorbeelden

<p data-include-format="markdown" data-include="doc/klassen/dcatDatasetSeries/Voorbeelden.md"></p>

