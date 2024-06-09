import type { Schema, Attribute } from '@strapi/strapi';

export interface CarouselItemsMovies extends Schema.Component {
  collectionName: 'components_carousel_items_movies';
  info: {
    displayName: 'Movies';
  };
  attributes: {
    movies: Attribute.Relation<
      'carousel-items.movies',
      'oneToMany',
      'api::movie.movie'
    >;
  };
}

export interface CarouselItemsTvSeries extends Schema.Component {
  collectionName: 'components_carousel_items_tv_series';
  info: {
    displayName: 'TVSeries';
  };
  attributes: {};
}

export interface CurationCuration extends Schema.Component {
  collectionName: 'components_curation_curations';
  info: {
    displayName: 'curation';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    route: Attribute.String & Attribute.Required;
    theme: Attribute.Enumeration<['light', 'dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'dark'>;
  };
}

export interface MetaSeo extends Schema.Component {
  collectionName: 'components_meta_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
    description: '';
  };
  attributes: {
    apiVersion: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'1.0.0'>;
    runtimeEnv: Attribute.Enumeration<['development', 'production']> &
      Attribute.Required &
      Attribute.DefaultTo<'development'>;
  };
}

export interface PageComponentsFaq extends Schema.Component {
  collectionName: 'components_page_components_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    itemType: Attribute.Enumeration<['static']> &
      Attribute.Required &
      Attribute.DefaultTo<'static'>;
    packageType: Attribute.Enumeration<['FAQ']> &
      Attribute.Required &
      Attribute.DefaultTo<'FAQ'>;
    contents: Attribute.Relation<
      'page-components.faq',
      'oneToMany',
      'api::faq.faq'
    >;
  };
}

export interface PageComponentsHero extends Schema.Component {
  collectionName: 'components_page_components_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    packageType: Attribute.Enumeration<['Hero']> &
      Attribute.Required &
      Attribute.DefaultTo<'Hero'>;
    title: Attribute.String;
    description: Attribute.Text;
    contents: Attribute.Relation<
      'page-components.hero',
      'oneToMany',
      'api::hero.hero'
    >;
  };
}

export interface PageComponentsRails extends Schema.Component {
  collectionName: 'components_page_components_rails';
  info: {
    displayName: 'Rails';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    cta: Attribute.String;
    packageType: Attribute.Enumeration<['Rails']> &
      Attribute.Required &
      Attribute.DefaultTo<'Rails'>;
    contents: Attribute.Relation<
      'page-components.rails',
      'oneToMany',
      'api::movie.movie'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carousel-items.movies': CarouselItemsMovies;
      'carousel-items.tv-series': CarouselItemsTvSeries;
      'curation.curation': CurationCuration;
      'meta.seo': MetaSeo;
      'page-components.faq': PageComponentsFaq;
      'page-components.hero': PageComponentsHero;
      'page-components.rails': PageComponentsRails;
    }
  }
}
