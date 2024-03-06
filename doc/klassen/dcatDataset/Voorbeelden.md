<aside class='example'><pre class="text">[prefix exampleMS: &lt;https://data.exampleMS.gov/id/dataset/&gt;
prefix adms: &lt;http://www.w3.org/ns/adms#&gt;
prefix dcat: &lt;http://www.w3.org/ns/dcat#&gt;
prefix dcatap: &lt;http://data.europa.eu/r5r/&gt;
prefix dct: &lt;http://purl.org/dc/terms/&gt;
prefix foaf: &lt;http://xmlns.com/foaf/0.1/&gt;
prefix skos: &lt;http://www.w3.org/2004/02/skos/core#&gt;
prefix vcard: &lt;http://www.w3.org/2006/vcard/ns#&gt;
prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt;
</pre>

<pre class="text">exampleMS:HVD-reporting-2023 a dcat:Catalogue;
 dct:title "MS HVD Reporting 2023"@en;
 dct:description "All information to provide the HVD conformance assessment for MS"@en;
 dcat:dataset exampleMS:1T2p3o4B ;
 dcat:service exampleMS:EAMS-APIplatform.
</pre>

<pre class="text">exampleMS:1T2p3o4B a dcat:Dataset;
 dct:title "The population of bees"@en;
 dct:description "This dataset provides the population of bees based on a yearly inquiry held among beekeepers and farmers in spring."@en;
 dcatap:applicableLegislation &lt;http://data.europa.eu/eli/reg_impl/2023/138/oj&gt;, &lt;http://data.europa.eu/eli/dir/2007/2/2019-06-26&gt; ;
 dct:publisher _:EA-MS;
 dct:identifier "https://data.exampleMS.gov/id/dataset/1T2p3o4B";
 adms:identifier [
 dct:creator _:EA-MS;
 skos:notation "https://data.exampleMS.gov/id/dataset/1T2p3o4B"
 ],
 [
 dct:creator &lt;https://dataportal.exampleMS.gov&gt;;
 skos:notation "https://dataportal.exampleMS.gov/dataset/Thepopulationofbees";
 ];
 dct:accrualPeriodicity &lt;http://publications.europa.eu/resource/authority/frequency/BIENNIAL&gt;;
 dct:conformsTo &lt;https://orgea.exampleMS.gov/applicationprofile/populationOfInsects&gt;;
 dcat:distribution exampleMS:1T2p3o4B-dist-SHP.
</pre>

<pre class="text">exampleMS:1T2p3o4B-dist-SHP a dcat:Distribution;
 dcat:accessURL &lt;https://orgea.exampleMS.gov/files/1T2p3o4B.shp&gt; ;
 dct:conformsTo &lt;https://orgea.exampleMS.gov/dataset/1T2p3o4B/schema/shp&gt;;
 dcat:spatialResolutionInMeters "25000"^^xsd:decimal;
 dct:format &lt;http://publications.europa.eu/resource/authority/file-type/SHP&gt; ;
 dct:license &lt;https://data.exampleMS.gov/resource/FreeAndOpen&gt;;
 dcatap:applicableLegislation &lt;http://data.europa.eu/eli/reg_impl/2023/138/oj&gt;.
</pre>

<pre class="text">exampleMS:EAMS-APIplatform a dcat:DataService;
 dct:title "EA API platform"@en;
 dct:description "The EA API platform provides a uniform access to the real-time data collected by EA"@en;
 dcat:endpointURL &lt;https://orgea.exampleMS.gov/api/v2/&gt; ;
 dcat:endpointDescription &lt;https://orgea.exampleMS.gov/api/openAPI/index.html&gt; ;
 foaf:page &lt;https://orgea.exampleMS.gov/api/sla.html&gt; ;
 dct:license &lt; https://data.exampleMS.gov/resource/FreeAndOpen &gt; ;
 dcatap:applicableLegislation &lt;http://data.europa.eu/eli/reg_impl/2023/138/oj&gt; ;
 dcat:contactPoint _:EAMS-APIplatform-contactpoint ;
 dcat:servesDataset exampleMS:1T2p3o4B.
</pre>

<pre class="text">_:EAMS-APIplatform-contactpoint a vcard:Kind;
 vcard:hasURL &lt;https://eams.jira.net/servicedesk&gt; .
</pre>

<pre class="text">_:EA-MS a foaf:Agent;
 foaf:name "MS Environmental Agency".
</pre>

<pre class="text">&lt;https://data.exampleMS.gov/resource/FreeAndOpen&gt; a dct:LicenseDocument ;
 skos:exactMatch &lt;http://publications.europa.eu/resource/authority/licence/CC0&gt;.
</pre>

</aside>

