import React from "react";
import { useState } from "react";
import { useConfigContext } from "../Context";

export function useHotTags() {
  const [tags, setTags] = useState<Array<string>>([]);

  const { apiKey, period, count } = useConfigContext();

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);

    const fecthImages = async () => {
      try {
        const respone = await fetch(
          `https://www.flickr.com/services/rest/?method=flickr.tags.getHotList&api_key=${apiKey}&period=${period}&count=${count}&format=json&nojsoncallback=1`
        );

        const responseJson = await respone.json();

        const arrayTags = responseJson.hottags.tag.map((tags: any) => {
          return tags._content;
        });

        setTags(arrayTags);
      } finally {
        setLoading(false);
      }
    };

    fecthImages();
  }, [apiKey, period, count]);

  return { tags, loading };
}
