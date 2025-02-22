import { Tree } from '@nx/devkit';
import { determineProjectNameAndRootOptions } from '@nx/devkit/src/generators/project-name-and-root-utils';
import { Schema } from '../schema';

export interface NormalizedSchema extends Schema {
  name: string;
  fileName: string;
  projectRoot: string;
  routePath: string;
  parsedTags: string[];
  appMain: string;
}

export async function normalizeOptions(
  host: Tree,
  options: Schema
): Promise<NormalizedSchema> {
  const {
    projectName,
    names: projectNames,
    projectRoot,
    importPath,
  } = await determineProjectNameAndRootOptions(host, {
    name: options.name,
    projectType: 'library',
    directory: options.directory,
    importPath: options.importPath,
    projectNameAndRootFormat: options.projectNameAndRootFormat,
    callingGenerator: '@nx/expo:library',
  });

  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];
  const appMain = options.js ? 'src/index.js' : 'src/index.ts';

  const normalized: NormalizedSchema = {
    ...options,
    fileName: projectName,
    routePath: `/${projectNames.projectSimpleName}`,
    name: projectName,
    projectRoot,
    parsedTags,
    importPath,
    appMain,
  };

  return normalized;
}
