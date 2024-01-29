---
{
  "title": "Browser Wallet Integration",
  "slt": ["101.1", "101.2", "101.3", "101.4"],
  "type": "Assignment",
  "description": "Submit a Git Pull Request",
  "videoURL": "",
  "lastEdited": "2024-01-26",
  "author": ""
}
---

## Assignment Description
In this Assignment, you will build your own UI component and add it the Mesh PBL Student Library.

## Introduction to Course Assignments
- Submission
> About "Important Stuff", "Neat Stuff" and "Tough Stuff".


## Submitting Evidence:
Students will submit a pull request to a Mesh repo.

## Important Stuff: Viewing Assets
- Build and style an Asset List component
- Should we say that we are using Tailwind CSS in this course?
- This example is covered in the docs below.

## Neat Stuff: Conditional Rendering
- Build a component that displays different content if the connected wallet holds a certain asset.
- See Lesson 101.4 for a basic example...

## Tough Stuff: Wallet Connect
- Build your connect wallet component
- No help is provided, but this challenge will allow you to show what you know.


# Assignment Details
> Review with Mesh PBL Team

In this module, you learned how to start a project with Mesh, you created a very basic component, and you learned about Mesh Wallet Hooks. However, you have not yet built a helpful user interface. Now your assignment is to create a component that displays information in a helpful and informative way.

The challenge level of this assignment depends on your background as a developer.


## Step By Step

### Step 1: Create a New Page
In the `/src/pages` directory, make a new file named `assets.tsx`.

### Step 2: Import MyWalletAssetComponent
Copy the following code into `assets.tsx`:
```typescript
import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import AssetList from "../components/contributions/example/AssetList";

export default function AssetPage() {
  return (
    <div className="container">
      <Head>
        <title>Mesh App on Cardano</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
        <link rel="icon" href="https://meshjs.dev/favicon/favicon-32x32.png" />
        <link href="https://meshjs.dev/css/template.css" rel="stylesheet" key="mesh-demo" />
      </Head>

      <main className="main">
        <h1 className="title">
          <a href="https://meshjs.dev/">Mesh</a> PBL
        </h1>

        <div className="demo">
          <CardanoWallet />
        </div>

        <div className="demo">
          <AssetList />
        </div>
      </main>

      <footer className="footer">
        <MeshBadge dark={true} />
      </footer>
    </div>
  );
}
```


### Step 3: Add Styles to MyWalletAssetComponent
In this template, we are using a stylesheet provided by Mesh:
```html
<link href="https://meshjs.dev/css/template.css" rel="stylesheet" key="mesh-demo" />
```

Delete this line of code. What happens?

### Step 4: Add Styles with TailwindCSS
- Team - what do you think? Teach how to install Tailwind here, or simply use a new stylesheet?


## You Will Know You Are Successful If
- Depends on what we decide for Step 4.

## Notes + Next Steps
- In Module 102 we will investigate each of the Mesh React hooks.
- You can create components using these hooks
- In Assignment 101, you will add a component to the Mesh PBL Student Library.