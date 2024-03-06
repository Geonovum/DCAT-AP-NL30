## DCAT als universeel vocabulaire {#09DBB0B1}
Het toepassingsprofiel in dit document is gebaseerd op de specificatie van de Data Catalog Vocabulary (DCAT), ontwikkeld onder verantwoordelijkheid van de Government Linked Data Working Group bij W3C. DCAT is een RDF-vocabulaire dat is ontworpen om interoperabiliteit tussen gegevenscatalogi gepubliceerd op het web te vergemakkelijken. Waar nodig worden aanvullende klassen en eigenschappen uit andere bekende vocabulaires hergebruikt.
<br/>
<br/>
Het DCAT vocabulaire bestaat uit klassen en eigenschappen.
<br/>
<br/>
<b>Klassen zijn dingen op het internet</b>: Ze hebben niet allemaal een URI, maar het wordt aanbevolen om ze van een URI te voorzien. Het zijn complexe dingen zoals een persoon, een organisatie, een dataset, een website of een downloadbaar databestand.
<b>Klassen hebben eigenschappen</b>: De eigenschappen zijn de attributen die deze dingen beschrijven. Sommige eigenschappen komen in meer dan één klasse voor, een titel bijvoorbeeld is een veel voorkomend attribuut. Andere eigenschappen zijn zeer gespecialiseerd, zoals een bestandsformaat dat alleen zinvol is voor een gegevensbestand.
<b>Eigenschappen kunnen eenvoudig of complex zijn</b>: sommige eigenschappen zijn klassen. Een organisatie kan bijvoorbeeld een website hebben. Of een dataset kan een data-uitgever hebben. Over het algemeen kan een klasse herkend worden aan de schrijfwijze: De naam van een eigenschap begint met een kleine letter zoals <code>dcat:dataset</code> &lt;M], terwijl de naam van een klasse begint met een hoofdletter zoals <code>dcat:Dataset</code>.
<br/>
<br/>
Klassen en eigenschappen worden gebruikt om de metadata op een gestructureerde manier aan te leveren.
