# Eleventy Netlify Boilerplate with Pico.css

[![Netlify Status](https://api.netlify.com/api/v1/badges/6095e530-e554-4142-bd15-31481fed44a3/deploy-status)](https://app.netlify.com/sites/loving-allen-0da441/deploys)

## What is it?

A simple template for building a fast, pre-generated HTML website using the [Eleventy](https://www.11ty.io/) static site generator. With [Netlify CMS](https://www.netlifycms.org/) baked-in, ready to deploy to [Netlify](https://www.netlify.com) in a couple of clicks.

Use it as a starter for your own JAMstack projects, or as an easy way to get started building websites with Eleventy.

Based on the [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog) repo (see there for additional info on Eleventy usage).

## Features

All of [these awesome features](https://github.com/danurbanowicz/eleventy-netlify-boilerplate#features) (thanks [@danurbanowicz](https://github.com/danurbanowicz)), plus:

- [picocss](https://picocss.com/docs/classless.html) (the class-less version)
- a simple [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file)
- configured [renovate bot](https://docs.renovatebot.com)

## [Demo Site](https://eleventy-netlify-boilerplate-with-picocss.netlify.app/)

## Want to try it out now?

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/szilvesztercsab/eleventy-netlify-boilerplate&stack=cms)

Clicking the button above will deploy a copy of the demo website to your Netlify
account (you can create an account during this process if you don't have one)
and everything needed for running the CMS:

- A new repository in your GitHub account with the code
- Full Continuous Deployment to Netlify's global CDN network
- Control users and access with Netlify Identity
- Manage content with Netlify CMS
- Process form data with Netlify Forms

### Setup authentication

After deploying this project, Netlify Identity will add you as a CMS user and
will email you an invite. It is not necessary to accept this invite if you wish
to use an
[OAuth provider](https://www.netlify.com/docs/identity/#external-provider-login)
(e.g. Github) to manage authentication for your CMS.
It is recommended to use this method of authentication as it removes the need
for an email & password to log in to the CMS and is generally more secure. You
will need to add an OAuth provider in your Netlify app settings under
"Settings" > "Identity" > "External providers".

Once you've added an OAuth provider, navigate to `/admin` on your site, select your provider from the
list, and you should then be logged into your CMS. Cool huh?

Now you're all set, and you can start editing content!

## Gotchas

If you change the repo that was created at deploy time from public to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".

If you need any help with setting up Netlify CMS, you can reach out to the Netlify team in the [Netlify CMS Gitter](https://gitter.im/netlify/netlifycms).

## Local development

### 1. Clone this repository

```console
git clone https://github.com/szilvesztercsab/eleventy-netlify-boilerplate.git my-blog-name
```

### 2. Navigate to the directory

```console
cd my-blog-name
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies locally

```console
npm install @11ty/eleventy
```

### 4. Edit \_data/metadata.json

This file contains your site title and author details, and can be used to store any other commonly used site data.

### 5. Run Eleventy (builds the site)

```console
npx @11ty/eleventy
```

Or build automatically when a template changes:

```console
npx @11ty/eleventy --watch
```

Or build and host locally for local development:

```console
npx @11ty/eleventy --serve
```

Or in debug mode:

```console
DEBUG=* npx @11ty/eleventy
```

## Bug reports, feature requests, etc

This is an ongoing project and I welcome contributions and suggestions! Feel free to submit a PR. :heart:
