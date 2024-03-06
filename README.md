# dcat3-ap-nl
dcat3-ap-nl

## Run templating locally

To run templating locally you must have docker installed on your system.

```shell
docker run --rm \
           --pull=always \
            -v /$(pwd)/config:/config \
            -v /$(pwd)/shapes:/shapes \
            -v /$(pwd)/doc/_gen/:/doc/_gen ghcr.io/skemu/rdf-template:latest
```
