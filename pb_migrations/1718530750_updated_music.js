/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rez0651unmdz58a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "71kasnjg",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "knwwhalz",
    "name": "album",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "g1n0ogh0ngm1r8c",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rez0651unmdz58a")

  // remove
  collection.schema.removeField("71kasnjg")

  // remove
  collection.schema.removeField("knwwhalz")

  return dao.saveCollection(collection)
})
