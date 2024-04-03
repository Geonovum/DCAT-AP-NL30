# dcat3-ap-nl
De werkversie van de handreiking kan benaderd worden via: [dcat3-ap-nl](https://geonovum.github.io/DCAT-AP-NL30/)

De laatste officiele publicatie kan benaderd worden via: [dcat3-ap-nl](https://docs.geostandaarden.nl/dcat/dcat-ap-nl30/)


## Run templating locally

To run templating locally you must have docker installed on your system.

```shell
docker run --rm \
           --pull=always \
            -v /$(pwd)/config:/config \
            -v /$(pwd)/shapes:/shapes \
            -v /$(pwd)/doc/gen/:/doc/gen ghcr.io/skemu/rdf-template:latest
```
