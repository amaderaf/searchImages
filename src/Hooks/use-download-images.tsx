import { Images } from "../Types";
import React from "react";
import { useState } from "react";
import { useConfigContext } from "../Context";

export function useDownloadImages({
  tag,
  page = 1,
}: {
  tag?: string;
  page?: number;
}) {
  const [images, setImages] = useState<Array<Images>>([]);

  const { apiKey, urlImages, perPage } = useConfigContext();

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setImages([]);
  }, [tag]);

  React.useEffect(() => {
    setLoading(true);

    const fecthImages = async () => {
      try {
        const respone = await fetch(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`
        );

        const responseJson = await respone.json();

        const { photo: infoImages } = responseJson.photos;

        const imagesApi = infoImages.map((infoImage: any) => {
          return {
            url: urlImages
              .replace("{server-id}", infoImage.server)
              .replace("{id}", infoImage.id)
              .replace("{secret}", infoImage.secret)
              .replace("{size-suffix}", "m"),
            title: infoImage.title,
          };
        });

        setImages((currentImages) => [...currentImages, ...imagesApi]);
      } finally {
        setLoading(false);
      }
    };

    fecthImages();
  }, [tag, apiKey, perPage, urlImages, page]);

  return { images, loading };
}
