// @ts-check
import { defineConfig } from 'astro/config';

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isProjectPage = owner && repository && repository !== `${owner}.github.io`;

// https://astro.build/config
export default defineConfig({
  site: owner && repository ? `https://${owner}.github.io/${repository}` : undefined,
  base: isProjectPage ? `/${repository}/` : '/',
});