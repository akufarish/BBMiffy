/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "huxgctyt6wkk87n",
    "created": "2024-06-16 09:38:10.569Z",
    "updated": "2024-06-16 09:38:10.569Z",
    "name": "artist",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fwnybmcn",
        "name": "artist",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ph5sgwqj",
        "name": "cover",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("huxgctyt6wkk87n");

  return dao.deleteCollection(collection);
})
