# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Localisation

### Adding a new locale

Add your new locale to `./docusaurus.config.js` by adding a new country code to the `locales` array and adding the locale label to `localeConfigs`.


```
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "es", "pl"],
    localeConfigs: {
      en: {
        label: "English",
      },
      de: {
        label: "Deutsch",
      },      
```

Create a new folder for the locale Markdown files

```bash
mkdir -p i18n/LOCALE_CODE/docusaurus-plugin-content-docs/current
# e.g. mkdir -p i18n/de/docusaurus-plugin-content-docs/current
```

Then copy the current English files to your locale 
```bash
cp -r docs/* i18n/LOCALE_CODE/docusaurus-plugin-content-docs/current
# e.g. cp -r docs/* i18n/de/docusaurus-plugin-content-docs/current
```

### Updating locale content

You can edit the files in `i18n/LOCALE_CODE/docusaurus-plugin-content-docs/current` to update your locale's content.

You can run your locale's site locally by using 

```
$ yarn start -- --locale LOCALE_CODE
```

e.g. to run the German site

```
$ yarn start -- --locale de
```
