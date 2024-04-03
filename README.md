# dcat3-ap-nl
dcat3-ap-nl https://geonovum.github.io/DCAT-AP-NL30/

## Run templating locally

To run templating locally you must have docker installed on your system.

```shell
docker run --rm \
           --pull=always \
            -v /$(pwd)/config:/config \
            -v /$(pwd)/shapes:/shapes \
            -v /$(pwd)/doc/gen/:/doc/gen ghcr.io/skemu/rdf-template:latest
```
