This repo is archived in favour of [sdk-link](https://github.com/codatio/sdk-link/tree/main), which includes examples for various JavaScript toolings.

# sample-project-link-sdk

This is a sample project adding a rudimentry implementation of [@codat/link-sdk](https://www.npmjs.com/package/@codat/link-sdk) to a default [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) project.

[Docs](https://docs.codat.io/docs/authorize-embedded-link) | [npm](https://www.npmjs.com/package/@codat/link-sdk) | [@codatdata](https://github.com/codatio) | [Codat](https://www.codat.io/)

## Using the project

Clone, install dependencies, and run the project.

```
npm install
npm run start
```

Go to the Portal and [create a new company](https://docs.codat.io/docs/portal-managing-companies#add-a-new-company), and copy the ID. Paste this ID into the text box and click `Start connecting`

For simplicity, this project doesn't implement the creation of a company via Codat's API. In a real application you would [do this programmatically](https://docs.codat.io/reference/createcompany) via `POST /companies`.
