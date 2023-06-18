import { Metadata } from "next";
import Collections from "@components/Collections";

export const metadata: Metadata = {
  title: "Колекції",
};

const CollectionsPage: React.FC = () => {
  return <Collections />;
};

export default CollectionsPage;
