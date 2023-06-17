import Gallery from "@components/Gallery";

import { GalleryWrapper } from "@styles/styled/CollectionPage.styled";
import collections from "@data/collections.json";

const Collection: React.FC = () => {
  return (
    <GalleryWrapper>
      <Gallery collections={collections} />
    </GalleryWrapper>
  );
};

export default Collection;
