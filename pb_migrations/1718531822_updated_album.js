/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1n0ogh0ngm1r8c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xurdhdfh",
    "name": "artist",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "huxgctyt6wkk87n",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1n0ogh0ngm1r8c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xurdhdfh",
    "name": "artist",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "huxgctyt6wkk87n",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
