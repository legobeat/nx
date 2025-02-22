import { assertTextOnPage } from './helpers';
import { Page, test, expect } from '@playwright/test';

const pages: Array<{ title: string; path: string }> = [
  { title: 'create-nx-workspace', path: '/cli/create-nx-workspace' },
  { title: 'generate', path: '/cli/generate' },
  { title: 'run', path: '/cli/run' },
  { title: 'daemon', path: '/cli/daemon' },
  { title: 'graph', path: '/cli/dep-graph' },
  { title: 'run-many', path: '/cli/run-many' },
  { title: 'affected', path: '/cli/affected' },
  { title: 'affected:graph', path: '/cli/affected-dep-graph' },
  { title: 'print-affected', path: '/cli/print-affected' },
  { title: 'format:check', path: '/cli/format-check' },
  { title: 'format:write', path: '/cli/format-write' },
  { title: 'migrate', path: '/cli/migrate' },
  { title: 'report', path: '/cli/report' },
  { title: 'list', path: '/cli/list' },
  { title: 'workspace-lint', path: '/cli/workspace-lint' },
  { title: 'workspace-generator', path: '/cli/workspace-generator' },
  { title: 'connect', path: '/cli/connect-to-nx-cloud' },
  { title: 'reset', path: '/cli/reset' },
  { title: 'Storybook', path: '/storybook/overview-react' },
  { title: 'Storybook', path: '/storybook/overview-angular' },
  {
    title: 'Nx React Storybook Addon',
    path: '/storybook/migrate-webpack-final-react',
  },
  {
    title: 'Storybook Migration to webpackFinal',
    path: '/storybook/migrate-webpack-final-angular',
  },
  {
    title: 'Upgrading to Storybook 6 (and Nx versions >10.1.x and <14.0.0)',
    path: '/storybook/upgrade-storybook-v6-react',
  },
  {
    title: 'Upgrading to Storybook 6 (and Nx versions >10.1.x and <14.0.0)',
    path: '/storybook/upgrade-storybook-v6-angular',
  },
  {
    title: 'Setting up Storybook Composition with Nx',
    path: '/storybook/storybook-composition-setup',
  },
  {
    title: '@nx/devkit',
    path: '/devkit/index',
  },
  {
    title: '@nx/devkit',
    path: '/devkit/ngcli_adapter',
  },
];

/**
 * Asserting all the additional API references pages are accounted for and accessible.
 * Generation of the pages is manual since we want to make sure the change is intended.
 */
test.describe('nx-dev: Additional API references section', () => {
  pages.forEach((page) => assertTextOnPage(page.path, page.title));
});
