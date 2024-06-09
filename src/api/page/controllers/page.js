"use strict";

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    const { skip = 0, limit = null } = ctx.query;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::page.page", query);

    console.log("object", skip, limit);

    // @ts-ignore
    const allItems = post[0]?.packages;

    // @ts-ignore
    delete post[0].packages;

    let paginatedItems;

    if (limit !== null) {
      // @ts-ignore
      paginatedItems = allItems.slice(skip, skip + limit);
    } else {
      paginatedItems = allItems;
    }

    // @ts-ignore
    post[0].packages = paginatedItems;

    return this.transformResponse(post);
  },
}));
