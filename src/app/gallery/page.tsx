"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  RenderImageContext,
  RenderImageProps,
  MasonryPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/masonry.css";

import photos from "@/data/gallery.json";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

function GalleryPage() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="mx-8 lg:px-12">
        <MasonryPhotoAlbum
          photos={photos}
          render={{ image: renderNextImage }}
          defaultContainerWidth={1200}
          onClick={({ index }) => setIndex(index)}
          sizes={{
            size: "1168px",
            sizes: [
              { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
            ],
          }}
        />
      </div>
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails]}
      />
    </>
  );
}

export default GalleryPage;
