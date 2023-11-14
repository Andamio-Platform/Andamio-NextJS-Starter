---
{
    "title": "Assignment 201",
    "slt": ["201.1", "201.2", "201.3"],
    "type": "Assignment",
    "description": "Build a course.json file",
    "videoURL": "https://www.youtube.com/watch?v=fZEDEWyiuZA",
    "lastEdited": "2023-09-19",
    "author": "Andamio Team"
}
---

Now that you have written and organized a set of learning targets, let's build a `course.json` file. The result will look like this:

```json
{
    "courseTitle": "Andamio PBL",
    "authors": ["Andamio Team"],
    "modules": [
      {
        "id": "201",
        "title": "Write a PBL Course Outline",
        "slts": [
          {
            "id": "201.1",
            "slt": "I can write a Student Learning Target."
          },
          {
            "id": "201.2",
            "slt": "I can use prospeective Projects to write supporting SLTs."
          },
          {
            "id": "201.3",
            "slt": "I can organize Student Learning Targets into Course Modules."
          },
          {
            "id": "201.4",
            "slt": "I can write and publish a Course Outline."
          }
        ]
      },
      {
        "id": "102",
        "title": "Creating PBL Content in Andamio",
        "slts": [
          {
            "id": "102.1",
            "slt": "I can connect a Lesson to a Student Learning Target."
          },
          {
            "id": "102.2",
            "slt": "I can write a Lesson in Markdown."
          },
          {
            "id": "102.3",
            "slt": "I can connect a Project to multiple Student Learning Targets. (we come full circle)"
          }
        ]
      },
      {
        "id": "201",
        "title": "Get Ready to Build Your Own Andamio Instance",
        "slts": [
          {
            "id": "201.1",
            "slt": "I can make a merge request to a project on GitLab."
          },
          {
            "id": "201.2",
            "slt": "I can fork this Andamio template and use NodeJS to run it on my computer."
          },
          {
            "id": "201.3",
            "slt": "I can show my Course Outline in my instance of Andamio."
          }
        ]
      },
      {
        "id": "202",
        "title": "Connect to the Andamio Network",
        "slts": [
          {
            "id": "202.1",
            "slt": "I understand how SLTs are used in the Andamio Network."
          }
        ]
      }
    ]
}
```