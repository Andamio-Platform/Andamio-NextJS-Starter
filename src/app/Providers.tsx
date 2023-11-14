"use client";

import { MeshProvider } from "@meshsdk/react";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <MeshProvider>
    <div>{children}</div>
  </MeshProvider>
);

export default Providers;
