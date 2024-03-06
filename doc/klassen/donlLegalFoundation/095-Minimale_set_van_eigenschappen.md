#### Minimale set van eigenschappen {#37401F13}
Onderstaand voorbeeld beschrijft een <code>donl:LegalFoundation</code> met enkel de verplichte eigenschappen. Dit is de meest minimale representatie van een <code>donl:LegalFoundation</code>.
<aside class='example'><p id='349D8C11'>Voorbeeld 13: Minimale set van eigenschappen<pre class="text">ex:myLegalFoundation a donl:LegalFoundation;
    dct:title "Wet BAG"@nl ;
    foaf:homepage "https://wetten.overheid.nl/"^^xsd:anyURI ;
    donl:juriconnectCode "jci1.3:c:BWBR0023466&z=2022-05-01&g=2022-05-01" ;
.
</pre>

</aside>

Webapplicaties zouden bovenstaande voorbeeld kunnen vertalen naar:
<pre class="text">&lt;a href="https://wetten.overheid.nl/jci1.3:c:BWBR0023466&z=2022-05-01&g=2022-05-01"&gt;
    Wet BAG
&lt;/a&gt;
</pre>

