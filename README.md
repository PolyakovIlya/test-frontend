## UI Cases

#### For user

- User can Sign in or Sign up as default user<br>
- User can receive alert notifications after actions<br>
- On the home page:<br>
    * User can logout<br>
    * User can view list of articles included: title, creation date and part of paragraph<br>
    * User can choose article to see detail info
- On the article page:<br>
    * User can go back to the previous page<br>
    * User can see title and all paragraphs<br>
    * User can edit any paragraph and automatically create suggestion<br>
    * User can cancel paragraph editing<br>
    
#### For editor

- User can Sign in or Sign up as editor (set checkbox while signing up)<br>
- Editor can receive alert notifications after actions<br>
- On the home page:<br>
    * Editor can logout<br>
    * Editor can add new article from 'https://www.dagbladet.no'<br>
    * Editor can view list of articles<br>
    * Editor can delete any article with related paragraphs and suggestions<br>
    * Editor can choose article to see detail info
- On the article page:<br>
    * Editor can go back to the previous page<br>
    * Editor can update paragraph and approve current suggestion<br>
    * Editor can cancel paragraph editing<br>
    * Editor can choose paragraph and see list of provided suggestions<br>
    * Editor can approve of decline suggestion<br>
    * Editor can delete suggestion<br>
- On the suggestions page:<br>
    * Editor can view suggestion list<br>
    * Editor can filter suggestion by status<br>
    * Editor can approve of decline suggestion<br>
    * Editor can delete suggestion<br>

## Requirements

node js version: 6-8 <br>

## Installation

### `npm i`

## Build and develop

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!