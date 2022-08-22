# personnel-blog
Personnel blog where users can add, view, modify and delete articles.

## Getting Started

```In your bash:
[sudo] docker-compose up
```

## Important !!!
Update config.env file in /backend/Src/Config/config.env for MONGO_URI

Register in account/author section => Gmail: email@example.com => (I can explain.)

## Frontend
```
Design: Component based or functional

Api calls to the backend: Axios

Created app: create-react-app

Routing: React router (BrowserRouter, Routes, Router, Switch, Link, useNavigation)

Routes: {Dashboard: '/', MyBlogs: '/my-blogs', CreateNew: 'create-new-blog', Account: '/my-account'}

States: React hooks (useState, useEffect, useLayoutEffect)
``` 

## Backend
```
@route GET /
@desc Fetch all the records and responds JSON data.

@route POST /create-user
@desc Register user or create user profile

@desc Save the blog details (thumbnail => image; title => text; abstract => text)
@route POST /upload-post

@desc Update the blog with changed creds.
@route POST /edit-post

@desc Delete blog post based on the provided blog id and email address.
@route POST /delete-post
```

```
Database:

    Schemas: ( UserSchema, BlogSchema )

```

## Areas of Improvement
```
    Extensive use of hooks can be reduced with react redux.
    User authentication.
```

## Remaining Implementations
What I have not implemented?
```
Testing [Unit, Inegration, Database, UI]
Validation
Input sanitization
```

Backend Server runs on port 4000.
