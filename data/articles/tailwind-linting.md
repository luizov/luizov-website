---
title: "How to get rid of CSS linting errors when using Tailwind"
excerpt: "A quick guide on removing linting errors and adding stylelint support for Tailwind projects that works both for css and scss validation."
coverImage: "/articles/tailwind-linting/cover.jpg"
date: "2021-09-02T05:35:07.322Z"
author:
  name: Dimitar Luizov
  picture: "/logo.svg"
ogImage:
  url: "/articles/tailwind-linting/cover.jpg"
---

If you are using Tailwind in a VS Code project, you're very likely to have gotten linting errors when trying to use the custom Tailwind directives like `@tailwind`, `@apply`, `@layer`, etc in your styles which are flagged as unknown. Similar to these:

```
Unknown at rule @tailwind css(unknownAtRules)
semi-colon expected css(css-semicolonexpected)
```

![Linting error](/articles/tailwind-linting/linting-error.jpg)
_A screenshot of linting errors when using Tailwind directives_

This article serves as a future reference on how to set up Stylelint and Visual Studio Code and how to add support for Tailwind CSS seamlessly.

## 1. Install Stylelint in your project

```shell
npm install --save-dev stylelint stylelint-config-standard
```

## 2. Create a Stylelint config

Place a file named `.stylelintrc` with the following content into the root folder of your project.

```js
// .stylelintrc
{
  "extends": "stylelint-config-standard",
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "layer",
          "apply",
          "variants",
          "responsive",
          "screen",
        ]
      }
    ],
    "block-no-empty": null,
    "unit-allowed-list": ["em", "rem", "s"],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  }
}
```

## 3. Install VS Code extensions

Next up, you need to install two extensions for Visual Studio Code.

1. [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

![Stylelint VS Code Extension](/articles/tailwind-linting/stylelint-extension.jpg)

2. [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

![Tailwind CSS Intellisense Extension](/articles/tailwind-linting/tailwind-intellisense-extension.jpg)

## 4. Disable VS Code's default CSS linting

As you probably know, VS Code provides two different scopes of settings:

1. **User settings (Global)** - Settings that apply globally to any instance of VS Code you open
2. **Workspace settings (Project)** - Settings stored inside your workspace and only apply when the workspace is opened

### 4.1. Disable CSS linting globally

`File -> Preferences -> Settings -> Extensions -> Scroll down and find "Edit in settings.json"`

Inside the `settings.json` file add the following lines:

```json
// settings.json
"css.validate": false,
"less.validate": false,
"scss.validate": false
```

### 4.2. Disable CSS linting on current project only

At the root level of your project, update or create a dir `.vscode` with a file `settings.json`:

Add the following to `.vscode/settings.json`

```json
"css.validate": false,
"less.validate": false,
"scss.validate": false
```

And that's it, easy as that. Now you should be getting no linting errors when using the Tailwind directives, but having working CSS/SCSS validation for your project.

## Bonus: What not to do

A quick solution that instantly removes all above mentioned flags would be to insert the following rules in `settings.json`:

```json
"css.lint.unknownAtRules": "ignore", // for CSS
"scss.lint.unknownAtRules": "ignore", // for SCSS
```

But keep in mind that's not a true fix because it simply turns the warnings off, rather that add support for Tailwind directives specifically.
