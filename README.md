# dcat3-ap-nl
De werkversie van de hstandaard kan benaderd worden via: [https://geonovum.github.io/DCAT-AP-NL30/](https://geonovum.github.io/DCAT-AP-NL30/)

De officiele publicatie kan benaderd worden via: [dcat3-ap-nl](https://docs.geostandaarden.nl/dcat/dcat-ap-nl30/)


## Tooling

Het applicatieprofiel is gecodeerd in SHACL files. De documentatie van de klassen en eigenschappen van het applicatieprofiel (hoofdstukken 4 en 5) wordt gegenereerd uit de SHACL files en opgenomen in de respec documentatie. Op deze wijze weten we zeker dat de documentatie overeenkomt met de SHACL files.

Het genereren van deze documentatie gebeurd met de tool '[rdf-template
](https://github.com/skemu/rdf-template)'. 

Meer informatie over de configuratie en de werking van de tool is te vinden in de [/config](/config/readme.md) folder.

De tool is aan te roepen als docker container. Om de docker container lokaal uit te kunnen voeren moet Docker geïnstaleerd zijn op het lokale systeem en de repository lokaal beschikbaar zijn, vervolgens is de tool aan te roepen met het volgende commando:

```shell
docker run --rm \
           --pull=always \
            -v /$(pwd)/config:/config \
            -v /$(pwd)/shapes:/shapes \
            -v /$(pwd)/doc/gen/:/doc/gen ghcr.io/skemu/rdf-template:latest
```

(N.B.) Op het moment is dit alleen op MacOs/Linux getest.


$(pwd)/config:/config koppelt de /config folder uit deze repository aan de docker container

$(pwd)/shapes:/shapes koppelt de /shapes folder uit deze repository aan de docker container

$(pwd)/doc/gen/:/doc/gen koppelt de/doc/gen output folder aan de docker container. Deze output folderlocatie wordt vervolgens weer gebruikt in de index.html file om de gegeneerde documentatie op te nemen in de respec publicatie.