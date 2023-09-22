import type { Schema, Attribute } from '@strapi/strapi';

export interface PortfolioAbout extends Schema.Component {
  collectionName: 'components_portfolio_abouts';
  info: {
    displayName: 'about';
    icon: 'information';
    description: '';
  };
  attributes: {
    para: Attribute.String;
    projects: Attribute.Component<'portfolio.projects', true>;
  };
}

export interface PortfolioProjects extends Schema.Component {
  collectionName: 'components_portfolio_projects';
  info: {
    displayName: 'projects';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    github: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'portfolio.about': PortfolioAbout;
      'portfolio.projects': PortfolioProjects;
    }
  }
}
