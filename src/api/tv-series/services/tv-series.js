'use strict';

/**
 * tv-series service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tv-series.tv-series');
