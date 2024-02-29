"use client";
import { MessagesProvider } from "@/context/messages";
import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface ProvidersProps {
  children: React.ReactNode;
}
const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MessagesProvider>{children}</MessagesProvider>
    </QueryClientProvider>
  );
};
export default Providers;
