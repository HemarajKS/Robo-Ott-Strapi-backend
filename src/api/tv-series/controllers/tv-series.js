"use strict";

/**
 * tv-series controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::tv-series.tv-series", () => {
  return {
    async find(ctx) {
      ctx.query = { ...ctx.query, locale: "en" };
      const result = await super.find(ctx);
      const sanitizedData = result.data.map((item) => {
        const newData = {
          id: item?.attributes.uniqueId,
          type: item.attributes.contentType,
          image: {
            url: item?.attributes.poster,
            altText: item?.attributes.name,
            format: item?.attributes.format,
          },
          videoUrl: item?.attributes?.videoUrl,
          title: item?.attributes.name,
          description: item?.attributes.description,
          target: {
            path: `tv-shows/${item?.attributes?.uniqueId}`,
          },
        };
        return newData;
      });
      return sanitizedData;
    },
  };
});
