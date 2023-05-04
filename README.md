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

> For simplicity, this project doesn't implement the creation of a company via Codat's API. In a real application you would [do this programmatically](https://docs.codat.io/reference/createcompany) via `POST /companies`.

Follow the flow. The integrations available will depend on your settings - your Codat client should have sandbox integrations by default.

---

# Context

## What is Link?

Link is a pre-built, conversion-optimized, and white-labelled authorization journey. Your customers can connect their financial accounts in minutes using Link.

Codat offers you the opportunity to integrate the Hosted Link authorization flow into your existing app, or use our Embedded Link component in your front-end code.

## Embedded Link

> Note that Embedded Link is in the beta phase. If you want to use the Embedded Link solution, please [get in touch](mailto:embedded-link@codat.io). 
> You can also [request features and suggest improvements] (https://portal.productboard.com/codat/7-product-roadmap/c/485-embed-a-pre-built-auth-flow-in-your-website-or-app) to the component.

Use the Embedded Link solution to benefit from a pre-built code component that melds best practices together with our extensive experience in building authorization flows, while seamlessly embedding it into your webpage or front-end application. 

Codat's Embedded Link is a React component that neatly sits in your front-end code, can be deployed in a matter of minutes. 

We built Embedded Link to be flexible so that you can integrate and initialize it in any way you want, and provide the user with a native feel of your authorization journey. 

## Features

1. An authorization flow UI built with our expertise and best practices in mind
2. Tailored to be flexible and support your custom onboarding and connection journey flows
3. Fast and easy implementation with a pre-built code component
4. Authentication in line with oAuth 2.0 standards 
5. UI that can be [customized](doc:set-up-link) and reflects your [company branding](doc:set-up-your-company-branding)

## Prerequisites

You should use React 18 when embedding the Link component into your webpage or application.

## Getting started with Embedded Link

Codat's Embedded Link component is published to <a class="external" href="https://www.npmjs.com/package/@codat/link-sdk" target="_blank">npm</a> as a React library. 

You can install this library using npm:
```
npm i @codat/link-sdk
```
After installing the library, instantiate it in your own project:
```
import { CodatLink } from '@codat/link-sdk';
import '../node_modules/@codat/link-sdk/index.css';
```
## Embedding the Link application

The component requires a `companyId` parameter to open Link for a specific company. To obtain the `companyId`, first [create a Codat company](https://docs.codat.io/docs/managing-companies) for your customer. We recommend doing that at the same time as your SMB customer signs up within your app. 

From the response to company creation, retain the `companyId` parameter. Then, initialize the Codat Link component in your app:
```
<CodatLink
    companyId="a00a0a00-0a0a-a0aa-0000a00aa00a"
    onConnection={(id) => alert('Success: Connection ' + id + ' established')}
    onFinish={(id) => alert('Finished')}
    onClose={() => alert('Closed')}
    onError={(err) => alert('Error: ' + err)}
/>
```
## Getting help

To report issues with this library, please [get in touch](mailto:embedded-link@codat.io) with us.

## Pitfalls

- Disable React.StrictMode
- We build for React 18
- The Embedded Link component is not optimized for use on mobile devices.
