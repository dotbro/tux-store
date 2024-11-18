/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s13zswv4k0doagu")

  // remove
  collection.schema.removeField("gcntxa5j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fg6asgdf",
    "name": "email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s13zswv4k0doagu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gcntxa5j",
    "name": "mail",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("fg6asgdf")

  return dao.saveCollection(collection)
})
