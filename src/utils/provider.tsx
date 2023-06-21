"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default Providers;
