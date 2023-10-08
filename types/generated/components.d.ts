import type { Schema, Attribute } from '@strapi/strapi';

export interface PortfolioAbout extends Schema.Component {
  collectionName: 'components_portfolio_abouts';
  info: {
    displayName: 'about';
    icon: 'information';
    description: '';
  };
  attributes: {
    para: Attribute.Text;
  };
}

export interface PortfolioEducation extends Schema.Component {
  collectionName: 'components_portfolio_educations';
  info: {
    displayName: 'education';
  };
  attributes: {
    school_name: Attribute.String;
    degree: Attribute.String;
    description: Attribute.Text;
    color: Attribute.String;
    image: Attribute.Media;
    year: Attribute.String;
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

export interface PortfolioSkills extends Schema.Component {
  collectionName: 'components_portfolio_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {
    name: Attribute.String;
    type: Attribute.Enumeration<['languages', 'frameworks', 'tools']>;
    image: Attribute.Media;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'portfolio.about': PortfolioAbout;
      'portfolio.education': PortfolioEducation;
      'portfolio.projects': PortfolioProjects;
      'portfolio.skills': PortfolioSkills;
    }
  }
}
