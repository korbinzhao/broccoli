# Broccoli Invite

## Available Scripts

In the project directory, you can run:

### `npm install`
install dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

run unit tests using jest.

### `npm run build`

Builds the app for production to the `dist` folder.

## File structure
```
.
├── README.md
├── __tests__
├── coverage
├── dist
├── jest.config.js
├── package-lock.json
├── package.json
├── public
├── src
│   ├── components
│   │   ├── footer
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   ├── header
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   ├── layout
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   └── modal
│   │       ├── index.less
│   │       └── index.tsx
│   ├── pages
│   │   └── invite
│   │       ├── components
│   │       │   ├── invite-content
│   │       │   │   ├── index.less
│   │       │   │   └── index.tsx
│   │       │   ├── invite-form
│   │       │   │   ├── index.less
│   │       │   │   └── index.tsx
│   │       │   └── success-panel
│   │       │       ├── index.less
│   │       │       └── index.tsx
│   │       ├── index.less
│   │       └── index.tsx
│   ├── services
│   │   ├── apis
│   │   │   └── invite.ts
│   │   └── invite.ts
│   ├── global.less
│   ├── index.html
│   ├── index.tsx
│   └── typings.d.ts
├── tsconfig.json
└── webpack.config.js

```

## Architecture Introduce

### Fromework Tools
React18 + Webpack5 + Typescript + babel7 + less + jest + eslint

### Unit tests
UI and function unit tests using jest.
Cover the following conditions:
* name field do not validate properly
* email field do not validate properly
* confirmEmail field do not equal to email field
* all form fields validate properly
* api response with status 200
* api response with status 400

### Performance optimization
* Webpack externals
* Webpack code splitting
* React.lazy & Suspense


### Type system
* typescript


### Browser compatibility

Cover browsers account for 96.72% of all users globally.
```
"browserslist": [
  "defaults",
  "> 0.05%",
  "cover 99.5%"
]
```

```
browserslist --coverage '> 0.05%, defaults, cover 99.5%'
>> These browsers account for 96.72% of all users globally
```


