# Town Planner

Town planner is an enterprise architecture documentation tool designed to create a centralised documentation repository based on data provided by individual product teams

## Concepts

The first thing to look at is a few concepts and terms that will be used later on

- The Domain model
    The domain model defines the overall architecture for an enterprise. It is made up of three key components
        - Enterprise  - the top level container
        - Layer - A collection of domains
        - Domain - A business area or product ( in most microservices architectures these are aligned)
        - Resource - An offering from the domain
    Only one domain model should exist for an enterprise and this is generally owned and maintained by an Enterprise Architecture Team and the would define the layers, domains and resources within the domain model

- Domains
    Domains are generally managed and maintained by a product team. The product team owns a domain and its resources and is responsible for their implementation in accordance with the domain model defined in the domain model. Documentation is maintained for each domain

## What does Town Planner do

Town Planner provides a centrally maintained documentation site based on a domain model with documentation managed and maintained by individual product teams for a given domain. The documentation site uses the [Jekyll](https://jekyllrb.com) static site generator to build out the site and display different document types based on your documentation requirements. The data structure required by town planner allows you to control the permissions for product teams or create automated tools to build the structure from other data sources

## Documentation collections

For each domain you can create document collections. A document collection has a standard folder structure

```
 - <domain>
   - townplan.json - The town plan file provides details about the types of documentation in the collection
   - <collection1> - A collection of documents of the same type
   - <collection2> - Another collection of documents of the same type
```

So if we wanted a document collection of markdown files for our written documentation along with a swaggerUi with multiple swagger specifications we could create a document collection like this

Your townplan.json would look like this:

`townplan.json`
```json
{
    "collections" : [
        {
            "name" : "Documentation",
            "type" : "markdown",
            "directory" : "/docs",
            "navigation" : [
                {
                    "page" : "index.md",
                    "title" : "Home"
                }
            ]
        },
        {
            "name" : "APIs",
            "type" : "swagger",
            "directory" : "/apis"
        }
    ]
}
```

and your folder structure would be

```
 - mydomain
    - townplan.json
    - docs
        - index.md
    - apis
        - index.md
        - swagger.json
```

When town planner processes this document collection you would have a folder on the townplanner menu with your domain and your document collections underneath

## Supported Types

Townplanner currently supports 2 collection types:

- **markdown** - This will generate the documentation using the provided markdown files using the jekyll markdown engine
- **swagger** - This will generate a swagger-ui using the specs in the folder
- **redoc** - Generates API Documentation using [ReDoc](https://github.com/Redocly/redoc)

## Layout and Template

The look and feel of the townplanner site is based on the CloudCannon Template - Edition
https://github.com/CloudCannon/edition-jekyll-template
 