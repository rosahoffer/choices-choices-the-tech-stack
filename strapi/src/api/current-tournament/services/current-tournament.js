'use strict';

/**
 * current-tournament service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::current-tournament.current-tournament');
