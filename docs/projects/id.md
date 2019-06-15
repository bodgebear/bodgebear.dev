# Get specific project by id

Returns specific project based on an id

**URL** : `/api/projects/:id`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content example**

Returns all of the projects that should be displayed on the page

```json
{
  "project": {
    "id": "nadgorliwy-konduktor",
    "srcUrl": "https://github.com/bodgingbear/nadgorliwy-konduktor",
    "createdAt": "2019-04-07T02:07:40Z",
    "title": "Nadgorliwy konduktor",
    "mainImage": "https://raw.githubusercontent.com/bodgingbear/nadgorliwy-konduktor/master/website/screenshot.png",
    "description": "# Test",
    "playNowUrl": "https://konduktor.bodgingbear.dev"
  }
}
```

## Error Response

**Condition** : Project with specified id doesn't exist

**Code** : `404 NOT FOUND`

**Content example**

```json
{
  "errors": [
    {
      "source": {
        "pointer": "/get/project"
      },
      "title": "Value not found",
      "detail": "Project with name nadgoror was not found"
    }
  ]
}
```

## Notes

* All of the data that is here is retrieved from a `WEBSITE.md` file from repositories in `bodgingbear` organization
