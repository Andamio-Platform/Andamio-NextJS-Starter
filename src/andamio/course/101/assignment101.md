---
{
  "title": "Build an App Component",
  "slt": ["101.1", "101.2", "101.3", "101.4"],
  "type": "Assignment",
  "description": "Submit a Git Pull Request",
  "videoURL": "",
  "lastEdited": "2024-01-26",
  "author": ""
}
---

## Assignment Overview
In this Assignment, you will build your own UI component and add it to the [Mesh PBL Student Library]().

## Introduction to Course Assignments
### In Mesh PBL, each Module ends with an Assignment. 
Here are a few things you should know:
1. Each Assignment has one or more Projects.
2. Projects are descriptions of things you can try to build with Mesh. 
3. Projects have two purposes. One is to give you hands-on experience with the learning targets. The other is to give you a chance to demonstrate what you have learned.
4. Projects are Categorized as "Important Stuff", "Neat Stuff" and "Tough Stuff".

### Important Stuff, Neat Stuff and Tough Stuff
- **Important Stuff is required.** Think of this as minimum proof that you completed the Module.
- **Neat Stuff is optional.** We recommend trying these projects so that you can learn more.
- **Tough Stuff is a challenge.** We'll be impressed if you can do this project -- and excited to collaborate with you!

## Submitting Evidence:
Evidence of your progress will be posted on both GitHub and the Cardano blockchain.
- At the end of this Assignment, you will submit a pull request to the [Mesh PBL Student Library](). It is a repository on GitHub. You will need a GitHub account in order to complete this course.
- After you submit a Pull Request, you will submit on-chain evidence that you've completed the Assignment.

## Let's Jump In!

### Important Stuff: Viewing Assets
Build a React component that displays a list of assets in the connected wallet. You can use any styling library you want, or pure CSS. In the documentation below, there is a guide to help you get started on this project.

### Neat Stuff: Conditional Rendering
Build a React component that displays different content if the connected wallet holds a certain asset. You can change how a page renders based on whether or not specific assets are held in the connected wallet. For hints on how to do this, review the examples in [Lesson 101.4](/course/module/101/1014)

### Tough Stuff: Wallet Connect
Build your own `<CardanoWallet />` component. (Note: Tough Stuff is less helpful.)

## Assignment Details: Step-by-Step

In this module, you learned how to start a project with Mesh, you created an unstyled React component, and you learned about Mesh Wallet Hooks. However, you have not yet built a helpful user interface. Now your assignment is to create a component that displays information in a helpful and informative way.

### Step 1: View the Assets Page
In the `/src/pages` directory, find the file named `assets.tsx`.

### Step 2: Make a New Directory
In the `/src/components/contributions` directory, make a new directory with the name of your Mesh PBL Learner Token.

### Step 2: Import Your AssetList
Copy the following code into `assets.tsx`:
```typescript
import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import AssetList from "../components/contributions/example/AssetList"; // Change this line

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

### Step 3: Remove Built-In Styles
In this template, we are using a stylesheet provided by Mesh:
```html
<link href="https://meshjs.dev/css/template.css" rel="stylesheet" key="mesh-demo" />
```

Delete this line of code. What happens?

### Step 4: Add Your Own Styles
- Tailwind CSS is built into the [Mesh PBL Student Library]().
- You can use your own custom CSS.
- If you'd prefer to use a different styling framework, [let us know]()!