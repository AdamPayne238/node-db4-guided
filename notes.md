# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## A good data model

- captures ALL the information the system needs
- captures ONLY the information the system needs
- reflect reality (from point of view of the system). 
- Stay realistic and current
- is flexible and can evolve with the system
- guarantees data integrity, without sacrificing too much performance
- is driven by the way we access data. (made for clients to easily access data)

## Components (of a data model)

- entities (resources) (zoo, animal, species) --> map to tables
- properties --> columns or fields
- relationships --> Foreign keys (FK)

## Workflow

- identify entities ** zoos animals species zoo_animals
- identify relationships ** zoos & animals, animals & species
- identify properties ** name, address, etc..

## Relationships
-one to one
-one to many ** most common relationship
-many to many

_there are many animals in one species_
_there can be more than one animal in a zoo_
_an animal can live in more than one zoo (over course of life)_

## Mantras

- every table must have a ** primary key **
- work on ** two or three ** entities at a time
- **one to many** relationships are modeled using a foreign key
- the **foreign key** always goes in the many side
- the **foreign Key column** must be the same type as the **primary key** it references
- **Many to Many** relationships are modeled using a third table
- **third table** could include other columns (fromzoo and tozoo)



