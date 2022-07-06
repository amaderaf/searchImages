import React from "react";
import { useState } from "react";
import useConfigContext from "./use-config-context";

export function useDownloadImages({ tag }: { tag?: string }) {
  const [images, setImages] = useState([]);

  const { apiKey, urlImages, perPage } = useConfigContext();

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);

    const fecthImages = async () => {
      const respone = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=${perPage}&format=json&nojsoncallback=1`
      );

      const responseJson = await respone.json();

      try {
        const { photo: infoImages } = responseJson.photos;

        const images = infoImages.map((infoImage: any) => {
          return {
            url: urlImages
              .replace("{server-id}", infoImage.server)
              .replace("{id}", infoImage.id)
              .replace("{secret}", infoImage.secret)
              .replace("{size-suffix}", "m"),
            title: infoImage.title,
          };
        });

        setImages(images);
      } finally {
        setLoading(false);
      }
    };

    fecthImages();
  }, [tag, apiKey, perPage, urlImages]);

  return { images, loading };
}
