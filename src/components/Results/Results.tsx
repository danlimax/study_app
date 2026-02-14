import { ScrollArea } from "@mantine/core";
import type { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
export function Results({ children }: Props) {
  return (
    <ScrollArea w={{ base: 300, sm: 500, lg: 700 }} h={400}>
      {children}
    </ScrollArea>
  );
}
