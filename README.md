# Hacker News

A redesigned Hacker News front page, listing top stories from the Hacker News API with updates every 30 seconds. Allows users to bookmark stories which are stored in local storage.

A React single-page application bootstrapped using `create-react-app`, styled using `styled-components`.

## Getting Started

Follow the steps below to get this project running locally.

### Prerequisites

You'll need the following installed on your machine to run this project:

-   Node.js (v10.x.x)
-   npm (v6.x.x)

### Installation

Clone the repository to somewhere on your drive

```
git clone git@github.com:lukebettridge/hacker-news.git
```

Install the dependencies within the root of the project

```
yarn
```

### Running the application

To run the application for local development:

```
yarn run start
```

Which can now be viewed in the browser at `http://localhost:3000/`.

## Testing

Where I had time, unit tests were written for the majority of components.

### Unit tests

The testing framework Jest is used for unit testing, alongside React Testing Library. To run these, execute the following:

```
yarn run test
```

`react-scripts test` expects unit tests to be located within a `__tests__` directory. For convenience, I have instead kept unit tests alongside the component, so this command will not work. I have changed the `package.json` script to run `jest` directly.

## Additional Functionality

As additional functionality, I chose to facilitate bookmarking individual stories, a dark-mode theme, and live updates (where a request is made to the Hacker News API every 30 seconds and updates the UI accordingly).
