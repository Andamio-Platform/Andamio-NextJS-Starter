---
{
  "title": "Build an App Component",
  "slt": ["101.1", "101.2", "101.3", "101.4"],
  "type": "Assignment",
  "description": "Add a Component to the Mesh PBL Student Library",
  "videoURL": "",
  "lastEdited": "2024-02-06",
  "author": "James",
}
---

## Assignment Overview

In this Assignment, you will build your own UI component and add it to the [Mesh PBL Student Library](https://github.com/MeshJS/mesh-pbl-student-library).

## Introduction to Course Assignments

### In Mesh PBL, each Module ends with an Assignment

**Here are a few things you should know:**

1. Each Assignment has one or more Projects. Some Projects are required, and others are optional.
2. Projects are descriptions of things you can try to build with Mesh.
3. Projects have two purposes. One is to give you hands-on experience with the learning targets. The other is to give you a chance to demonstrate what you have learned.
4. Projects are Categorized as "Important Stuff", "Neat Stuff" and "Tough Stuff".

### Important Stuff, Neat Stuff and Tough Stuff

- **Important Stuff is required.** This is the minimum proof that you completed the Module.
- **Neat Stuff is optional.** We recommend trying these projects so that you can learn more.
- **Tough Stuff is a challenge.** We'll be impressed if you can do this project -- and excited to collaborate with you!

## Submitting Evidence

Evidence of your progress will be posted on both GitHub and the Cardano blockchain.

- At the end of this Assignment, you will submit a pull request to the [Mesh PBL Student Library on GitHub](https://github.com/MeshJS/mesh-pbl-student-library). You will need a GitHub account in order to complete this Assignment.
- After you submit a Pull Request, you will submit on-chain evidence that you've completed the Assignment.

## Assignment 101

### Important Stuff: Viewing Assets

Build a React component that displays a list of assets in the connected wallet. You can use any styling library you want, or pure CSS. In the documentation below, there is a guide to help you get started on this project.

### Neat Stuff: Conditional Rendering

Build a React component that displays different content if the connected wallet holds a certain asset. You can change how a page renders based on whether or not specific assets are held in the connected wallet. For hints on how to do this, review the examples in [Lesson 101.4](/course/module/101/1014)

### Tough Stuff: Wallet Connect

Build your own `<CardanoWallet />` component. (Note: Tough Stuff is less helpful.)

## Viewing Assets: Step-by-Step

In this module, you learned how to start a project with Mesh, you created an unstyled React component, and you learned about Mesh Wallet Hooks. However, you have not yet built a helpful user interface. Now your assignment is to create a component that displays information in a helpful and informative way.

### Step 1: Clone the Mesh PBL Student Library

If you haven't already, please clone the the [Mesh PBL Student Library is on GitHub](https://github.com/MeshJS/mesh-pbl-student-library).

```bash
git clone https://github.com/MeshJS/mesh-pbl-student-library
cd mesh-pbl-student-library
npm install
npm run dev
```

### Step 2: Make a New Directory For Your Projects

In the `/src/components/contributions` directory, make a new directory with the name of your Mesh PBL Learner Token. This is the directory where you will submit your work for any Project in this Assignment.

### Step 3: Copy the `<AssetList />` Component

In your new contributions directory, make a new file called `AssetList.tsx`. In it, copy these contents:

```typescript
import { Asset } from "@meshsdk/core";
import { useAssets } from "@meshsdk/react";

export default function AssetList() {
  const assets = useAssets();

  return (
    <div>
      <h2>Add Your Own Component Title Here</h2>
      {/* <pre>{JSON.stringify(assets, null, 2)}</pre> */}
      {assets &&
        assets.map((asset: Asset) => (
          <div className="bg-white text-black p-5">
            <p>{asset.assetName}</p>
            <p>{asset.quantity}</p>
          </div>
        ))}
    </div>
  );
}
```

Change the text in the `<h2>` tags to anything you want.

### Step 4: Open the Assets Page

In the `/src/pages` directory, open the file named `assets.tsx`.

### Step 5: Import Your AssetList

Change the path of the import statement so that it imports `AssetList` from the file you created in Step 2.

```typescript
import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import AssetList from "../components/contributions/example/AssetList"; // Change this line

...

```

Start the development server with `npm run dev`. In a browser, open [http://localhost:3005/assets](http://localhost:3005/assets). You will know you are successful if you can see your new Asset List component. Connect a wallet to make sure that it works.

### Step 6: Add Your Own Styles

The Mesh PBL Student Library is currently built with [Tailwind CSS](https://tailwindcss.com/). We use Tailwind because it is well-supported and it strikes a balance between flexibility and ease of use.

If you are experienced with UI design and other approaches to styling an application, feel free to use a different approach. If you'd prefer to use a different framework, [let us know](https://discord.gg/PFFRk3m2FE) - we'd be excited to have your help maintaining other versions of the student library!

### Step 7: Submit a Pull Request

When you are ready, submit a pull request to the [Mesh PBL Student Library](https://github.com/MeshJS/mesh-pbl-student-library).

### Step 8: Commit to this Assignment On-Chain

Details coming soon!

## Keep Going

Now that you have completed the Important Stuff, try the Neat Stuff and Tough Stuff Projects described above.
