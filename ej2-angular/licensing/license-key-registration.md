---
layout: post
title: License key registration in Angular Licensing component | Syncfusion
description: Learn here all about License key registration in Syncfusion Angular Licensing component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: License key registration 
documentation: ug
domainurl: ##DomainURL##
---

# Register Syncfusion License key in EJ2-Angular application

Syncfusion license key should be registered, if your project using Syncfusion EJ2-Angular packages reference. The generated license key is a string that needs to be registered after any [Syncfusion Angular reference](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli/#create-a-new-application).

>Note: Syncfusion license validation is done offline during application execution and does not require internet access. Apps registered with a Syncfusion license key can be deployed on any system that does not have an internet connection.

Generate the [Syncfusion license key](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-generation/) and register it in one of the following ways,

* [Register the license key in the project](#register-syncfusion-license-key-in-the-project)
* [Register the license key using the npx command](#register-syncfusion-license-key-using-the-npx-command)

## Register Syncfusion License key in the project

Register the license key in the `main.ts` file of the Angular project.

```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('License Key');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

>Note: Only from 2022 Vol 1 v20.1.0.47, license key registration required for Essential JavaScript 2 products.

## Register Syncfusion License key using the npx command

Register the Syncfusion license key through npx command in one of the following ways,

* [Register the license key with the license file](#register-the-license-key-with-the-license-file)
* [Register the license key with the environment variable](#register-the-license-key-with-the-environment-variable)

>If both the license text file and the environment variable are used for license registration, priority is set to `syncfusion-license.txt` file. If you want to use the environment variable for license registration, then remove the license text file from the application.

### Register the license key with the license file

The following steps show how to register the Syncfusion license key with the license text file.

* Create the `syncfusion-license.txt` file in the application root directory and paste the license key.

* Open the command prompt in the application root directory and activate the license key by using the below command,

  ```sh
  npx syncfusion-license activate
  ```

* Once the Syncfusion license key is activated, the following console message will appear.

  **License message:** <br /> (INFO) Syncfusion License imported successfully.

* Remove the `.cache` folder from node modules in the application.

* Now run the application. If you are facing a license validation error, refer to this [link](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-errors/) to resolve it. Also, find the most frequent license registration questions from this [`link`](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-troubleshoot/).

>If you don't want to use the license text file in the application, refer to this [link](#register-the-license-key-with-the-environment-variable) to use an environment variable and register the Syncfusion license key.

### Register the license key with the environment variable

You can set the environment variable as `SYNCFUSION_LICENSE` in the system and paste the license key as a value. It can be used in all applications on your machine.

The following steps show how to set environment variable in different operating systems and register the Syncfusion license key.

* Set the environment variable in different operating systems like below,

#### Windows

* Open the command prompt and use [setx](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/setx) command to add the new environment variable.

  ```sh
  setx SYNCFUSION_LICENSE "license key"
  ```

#### Mac

* Open the terminal and use the `env` command to view the variables list.

* You can set the environment variable by using below command,

  ```sh
  echo 'export SYNCFUSION_LICENSE="license key"' >> ~/.bash_profile
  ```

* If you want to modify the environment variable in the bash profile. Use the below command,

  ```sh
  nano .bash_profile
  ```

* Once modified the variable. Press `ctrl+x` to exit then `Y` and `Enter` button to save the changes.

* Close the terminal and open it again to see the environment variables changes using `env` command.

#### Linux

* Open the terminal and use the `env` command to view the variables list.

* You can set or modify the [environment variable](https://help.ubuntu.com/community/EnvironmentVariables) by using below command,

  ```sh
  export SYNCFUSION_LICENSE='license key'
  ```

* Once set the `SYNCFUSION_LICENSE` environment variable, restart the IDE or application terminal before using the license activation command.

* Open the command prompt in the application root directory and activate the license key by using the below command,

  ```sh
  npx syncfusion-license activate
  ```

* Once the Syncfusion license key is activated, the following console message will appear.

  **License message:** <br /> (INFO) Syncfusion License imported successfully.

* Remove the `.cache` folder from node modules in the application.

* Now run the application. If you are facing a license validation error, refer to this [link](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-errors/) to resolve it. Also, find the most frequent license registration questions from this [`link`](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-troubleshoot/).

### Register Syncfusion license key in CI services

The following sections show how to use an environment variable in CI services.

#### GitHub Actions

* Create a [new Repository Secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) or an [Organization Secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization). Set the name of the secret to `SYNCFUSION_LICENSE` and use the license key as a value.

* Add the Syncfusion license activation command after running npm install or yarn like below,

  ```bash
  steps:
  - name: Install node modules
    run: npm install

  - name: Activate Syncfusion License
    run: npx syncfusion-license activate
    env:
      SYNCFUSION_LICENSE: ${{ secrets.SYNCFUSION_LICENSE }}
  ```

#### Azure Pipelines (YAML)

* Create a new [User-defined Variable](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch) named `SYNCFUSION_LICENSE`. Use the license key as a value.

* Add the Syncfusion license activation command after running npm install or yarn like below,

The following example shows the syntax for Windows build agents.

```bash
pool:
  vmImage: 'windows-latest'

steps:
- script: call npm install
  displayName: 'Install node modules'

- script: call npx syncfusion-license activate
  displayName: 'Activate Syncfusion License'
  env:
    SYNCFUSION_LICENSE: $(SYNCFUSION_LICENSE)
```

The following example shows the syntax for Linux build agents.

```bash
pool:
  vmImage: 'ubuntu-latest'

steps:
  - script: npm install
    displayName: 'Install node modules'

  - script: npx syncfusion-license activate
    displayName: 'Activate Syncfusion License'
    env:
      SYNCFUSION_LICENSE: $(SYNCFUSION_LICENSE)
```

#### Azure Pipelines (Classic)

* Create a new [User-defined Variable](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch) named `SYNCFUSION_LICENSE`. Use the license key as a value.

* Add the Syncfusion license activation command after running npm install or yarn using bash task like below,

```bash
# Activate the license
npx syncfusion-license activate
```

![Bash task](images/bash-script.png)

## See Also

* [Licensing FAQ](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-troubleshoot/)