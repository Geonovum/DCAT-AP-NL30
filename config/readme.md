# Templating configuration

## How it works

This configuration uses multiple sources shape files.

- [/shapes/dcat-ap-SHACL.ttl](../shapes/dcat-ap-SHACL.ttl) (The DCAT-AP-EU shapes taken from https://github.com/SEMICeu/DCAT-AP/tree/master/releases/3.0.0/shacl)
- [/shapes/dcat-ap-OPT.ttl](../shapes/dcat-ap-OPT.ttl) (DCAT-AP-EU optionality information based on https://semiceu.github.io/DCAT-AP/releases/3.0.0/#quick-reference)
- [/shapes/dcat-ap-nl-SHACL.ttl](../shapes/dcat-ap-nl-SHACL.ttl) (The DCAT-AP-NL shapes)
- [/shapes/dcat-ap-nl-OPT.ttl](../shapes/dcat-ap-nl-OPT.ttl) (DCAT-AP-NL optionality information)
- [/shapes/optionaliteit.ttl](../shapes/optionaliteit.ttl) (SKOS concepts representing optionality)

The combined set of the above data is queried using the sparql query configured at [/sparql/nodeShapes.rq](./sparql/nodeShapes.rq).

The result is a normal SPARQL Select response table.

On this reponse table the a result frame is defined in the configuration:

```yaml
dataSources:
  nodeShapes:
    [...]
    resultFrame:
      _key: targetClass
      targetClass:
        _value: targetClass
        _prefix: true
      propertyShapes:
        _key: property
        _orderBy: +propertyName
        propertyName: propertyName
        property: property
        propertyPrefixed:
          _value: property
          _prefix: true
        [...]
```

This result frame defines how the table is framed in to an object-like or map-based result using key value mappings.

This result can then be used in templates using the functionality of https://pebbletemplates.io/.

The templates location and output locations are declared as the value of `templates`.

```yaml
templates:
  - templateLocation: klassen.md          # location of the template 
    outputLocation: /doc/gen/             # location where the templated results should be stored
  - templateLocation: ondersteunendeKlassen.md
    outputLocation: /doc/gen/
```

## Resolving the SPARQL data source

A value can be mapped by simply defining a key value pair where the key is mapped to the specified value. The value is an variable that is returned from the SPARQL select query.

Let's say that a sparql query returns the following result

| targetClass | propertyshape | property | propertyName |
|-------------|---------------|----------|--------------|
| http://ex.org/fooClass | http://ex.org/fooPropShape | http://ex.org/fooProp | foo |
| http://ex.org/barClass | http://ex.org/barPropShape1 | http://ex.org/barProp1 | bar1 |
| http://ex.org/barClass | http://ex.org/barPropShape2 | http://ex.org/fooProp2 | bar2 |   

### Defining a node by key

To be able to frame a result into a map of nodes, we must define a key using the reservered `_key`. The key is a property that determines the identity of the node.
The same key value can be present across multiple rows in the SPARQL result set. That is actually the main use case of this approach.
The key is used to group values accross iterations into node properties to use for templating. 

```yaml
namespacePrefixes:
  ex: http://ex.org/
dataSources:
  nodeShapes:
    resultFrame:
      _key: targetClass

```

The result of resolving this data source, represented here in YAML, will be:


```yaml
"http://ex.org/fooClass": {}

"http://ex.org/barClass": {}
```

It is also possible to specify nested nodes.

```yaml
namespacePrefixes:
  ex: http://ex.org/
dataSources:
  nodeShapes:
    resultFrame:
      _key: targetClass
      propertyShapes:
        _key: property
```

Resulting in:

```yaml
"http://ex.org/fooClass":
  propertyShapes:
    - "http://ex.org/fooProp"

"http://ex.org/barClass":
  propertyShapes:
    - "http://ex.org/barProp1": {}
    - "http://ex.org/barProp2": {}
```

### Specifying a property value

To define the node properties we can declare new key values (making sure not use any [reserved keywords](#reserved-keywords)).

```yaml
namespacePrefixes:
  ex: http://ex.org/
dataSources:
  nodeShapes:
    resultFrame:
      _key: targetClass
      propertyShapes:
        _key: property
        propertyName: propertyName
```

The result of resolving data source, represented here in YAML, will be:

```yaml
"http://ex.org/fooClass":
  propertyShapes:
    - "http://ex.org/fooProp"
        propertyName: foo

"http://ex.org/barClass":
  propertyShapes:
    - "http://ex.org/barProp1":
        propertyName: bar1
    - "http://ex.org/barProp2":
        propertyName: bar2
```

The key value mapping `propertyName: propertyName` is actually shorthand for:

```yaml
propertyName: 
  _value: propertyName
```

This expanded form can be used when we want to specify more details on how to map a value.

### Specifiying the value type

A value type can be specified using the `_type` keyword. The possible values for `_type` are `string` and `set`. If no value is declared for `_type`, then the default value is `string`.

If the value is `string` the result that will be returned will be a string value. If the result value that is being mapped to a string is a collection of values, then by default only the first will be selected.

If the value is `set` the result that will be returned will be a list of unique items.

Let's expand our earlier example result set with a result binding for `optionality`:


| targetClass | propertyshape | property | propertyName | optionality |
|-------------|---------------|----------|--------------|-------------|
| http://ex.org/fooClass | http://ex.org/fooPropShape | http://ex.org/fooProp | foo | V | 
| http://ex.org/barClass | http://ex.org/barPropShape1 | http://ex.org/barProp1 | bar1 | A |
| http://ex.org/barClass | http://ex.org/barPropShape2 | http://ex.org/fooProp2 | bar2 | O |
| http://ex.org/barClass | http://ex.org/barPropShape2 | http://ex.org/fooProp2 | bar2 | C |

If we were now to define the data source as follows:

```yaml
namespacePrefixes:
  ex: http://ex.org/
dataSources:
  nodeShapes:
    resultFrame:
      _key: targetClass
      propertyShapes:
        _key: property
        propertyName: propertyName
        optionality:
          _value: optionality
```

The result would be

```yaml
"http://ex.org/fooClass":
  propertyShapes:
    - "http://ex.org/fooProp"
        propertyName: foo
        optionality: V

"http://ex.org/barClass":
  propertyShapes:
    - "http://ex.org/barProp1":
        propertyName: bar1
        optionality: A
    - "http://ex.org/barProp2":
        propertyName: bar2
        optionality: O
```

> **NOTE** The value of optionality for property "bar2" is determined by the first value in the collection of available values in the result set, since no reuslt type (`_type`) is declared.

If we were to define the data source like this:

```yaml
namespacePrefixes:
  ex: http://ex.org/
dataSources:
  nodeShapes:
    resultFrame:
      _key: targetClass
      propertyShapes:
        _key: property
        propertyName: propertyName
        optionality:
          _value: optionality
          _type: set
```

The result would be:

```yaml
"http://ex.org/fooClass":
  propertyShapes:
    - "http://ex.org/fooProp"
        propertyName: foo
        optionality: 
          - V

"http://ex.org/barClass":
  propertyShapes:
    - "http://ex.org/barProp1":
        propertyName: bar1
        optionality: 
          - A
    - "http://ex.org/barProp2":
        propertyName: bar2
        optionality: 
          - O
          - C
```

### Applying prefixes to values

With RDF data it can be useful to prefix URI values to make them more readable.
To achieve this during the result framing we can define prefixes using `namespacePrefixes`, which is a node containing key value pairs, where the key is the prefix and the value is the namespace that will be replaced with the prefix value.

To apply prefixing to a value we can use the `_prefix` directive. By default the value for `_prefix` is `false`, but if we set it to `true` the result will be a prefixd value if there is a matching prefix defined in `namespacePrefixes`.

```yaml
namespacePrefixes:
  ex: http://ex.org/
dataSources:
  nodeShapes:
    resultFrame:
      _key: targetClass
      propertyShapes:
        _key: property
        propertyName: propertyName
        propertyPrefixed:
          _value: property
          _prefix: true
```

Results in:

```yaml
"http://ex.org/fooClass":
  propertyShapes:
    - "http://ex.org/fooProp"
        propertyName: foo
        propertyPrefixed: ex:fooProp

"http://ex.org/barClass":
  propertyShapes:
    - "http://ex.org/barProp1":
        propertyName: bar1
        propertyPrefixed: ex:barProp1
    - "http://ex.org/barProp2":
        propertyName: bar2
        propertyPrefixed: ex:barProp2
```

### Ordering results

It is possible to influence the order of node and sub node values by using the `_orderBy` directive. The value of `orderBy` must be a property of the node on which the `orderBy` is declared, preceded by a `+` for ascending order, or a `-` for descendeing order.

```yaml
namespacePrefixes:
  ex: http://ex.org/
dataSources:
  nodeShapes:
    resultFrame:
      _key: targetClass
      propertyShapes:
        _key: property
        _orderBy: -propertyName
        propertyName: propertyName
```

Would result in:

```yaml
"http://ex.org/fooClass":
  propertyShapes:
    - "http://ex.org/fooProp"
        propertyName: foo

"http://ex.org/barClass":
  propertyShapes:
    - "http://ex.org/barProp2":
        propertyName: bar2
    - "http://ex.org/barProp1":
        propertyName: bar1
```

### Reserved keywords
- `_key`
- `_value`
- `_type`
- `_prefix`
- `_orderBy`

