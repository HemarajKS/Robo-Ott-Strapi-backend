"use strict";

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    const { skip, limit } = ctx.query;

    // @ts-ignore
    const skipValue = skip ? JSON.parse(skip) : 0;
    // @ts-ignore
    const limitValue = limit ? JSON.parse(limit) : null;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::page.page", query);

    // @ts-ignore
    const allItems = post[0]?.packages;

    // @ts-ignore
    delete post[0].packages;

    let paginatedItems;

    if (limitValue !== null) {
      paginatedItems = allItems.slice(skipValue, skipValue + limitValue);
    } else {
      paginatedItems = allItems;
    }

    // @ts-ignore
    post[0].curation.packages = paginatedItems;

    if (limitValue !== null) {
      // @ts-ignore
      post[0].pagination = {
        // @ts-ignore
        limit: limitValue !== null ? limitValue : post[0].packages.length,
        skip: skipValue,
        totalItems: allItems.length,
      };
    }

    return this.transformResponse(post);
  },
}));
