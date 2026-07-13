---
layout: post
title: License key registration in Angular application | Syncfusion
description: Learn how to register a Syncfusion license key in an Angular application using Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: License key registration
documentation: ug
domainurl: ##DomainURL##
---

# Register Syncfusion® License Key in an Angular Application

A Syncfusion<sup style="font-size:70%">&reg;</sup> license key must be registered when your project references Syncfusion EJ2-Angular packages. The generated license key is a string that should be registered after adding any [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular reference](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli#create-a-new-application).

> **Note:** Starting with the 2022 Vol 1 release (v20.1.0.47), license key registration is required for Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 products.
>
> **Note:** Syncfusion<sup style="font-size:70%">&reg;</sup> license validation occurs offline during application execution and does not require internet access. However, the initial activation step using the `npx` command requires internet access. Applications registered with a Syncfusion<sup style="font-size:70%">&reg;</sup> license key can be deployed on systems without internet connectivity.

**Prerequisites:**

* Node.js 14.0 or later installed on your machine.
* A Syncfusion<sup style="font-size:70%">&reg;</sup> account and a generated license key. See [Generate Syncfusion license key for Angular](./license-key-generation).
* An Angular project that references at least one `@syncfusion/ej2-angular-*` package.

Generate the [Syncfusion<sup style="font-size:70%">&reg;</sup> license key](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-generation) and register it in one of the following ways,

* [Register the license key in the project](#register-syncfusion-license-key-in-the-project)
* [Register the license key using the npx command](#register-syncfusion-license-key-using-the-npx-command)

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> License Key in the Project

Register the license key in the `main.ts` file of the Angular project. Place the registration call before bootstrapping the application so the license is available during runtime.

```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base'; // Requires @syncfusion/ej2-base v20.1.0.47 or later.

// Registering Syncfusion license key
registerLicense('Replace your generated license key here');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> License Key using the npx Command

Register the Syncfusion<sup style="font-size:70%">&reg;</sup> license key through the `npx` command in one of the following ways:

* [Register the license key with the license file](#register-the-license-key-with-the-license-file)
* [Register the license key with the environment variable](#register-the-license-key-with-the-environment-variable)

> **Note:** If both the license text file and the environment variable are used for license registration, priority is given to the `syncfusion-license.txt` file. If you want to use the environment variable for license registration, remove the license text file from the application.

### Register the License Key with the License File

The following steps show how to register the Syncfusion<sup style="font-size:70%">&reg;</sup> license key with the license text file.

1. Ensure the `@syncfusion/ej2-angular-*` packages are installed in the project:

   ```sh
   npm install
   ```

2. Create the `syncfusion-license.txt` file in the application root directory and paste the license key into it.

3. Open the command prompt in the application root directory and activate the license key by using the following command:

   ```sh
   npx syncfusion-license activate
   ```

4. Once the Syncfusion<sup style="font-size:70%">&reg;</sup> license key is activated, the following console message will appear:

   **License message:** <br /> (INFO) Syncfusion<sup style="font-size:70%">&reg;</sup> License imported successfully.

5. Remove the `.cache` folder from `node_modules` in the application:

   ```

6. Run the application. If you face a license validation error, refer to this [link](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-errors) to resolve it. For frequently asked questions about license registration using the `npx` command, see this [link](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-troubleshoot).

> If you don't want to use the license text file in the application, refer to this [link](#register-the-license-key-with-the-environment-variable) to use an environment variable and register the Syncfusion<sup style="font-size:70%">&reg;</sup> license key. Also, see common licensing FAQs when registering the license key using the `npx` command from this [link](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-troubleshoot#Reactivating-license-once-after-updating-the-package-version-while-using-npx).

### Register the License Key with the Environment Variable

You can set the environment variable as `SYNCFUSION_LICENSE` in the system and paste the license key as a value. It can then be used by all applications on your machine.

The following steps show how to set the environment variable in different operating systems and register the Syncfusion<sup style="font-size:70%">&reg;</sup> license key.

#### Windows

* Open the Command Prompt and use the [setx](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/setx) command to add a new user-level environment variable:

  ```sh
  setx SYNCFUSION_LICENSE "your license key"
  ```
#### Mac

* Open the terminal and use the `env | grep SYNCFUSION_LICENSE` command to view whether the variable is already set.

* Set the environment variable by appending the export line to your shell profile:

  ```sh
  echo 'export SYNCFUSION_LICENSE="your license key"' >> ~/.bash_profile
  ```

  If you use `zsh` as the default shell on newer macOS releases, use `~/.zshrc` instead.

* To modify the environment variable, open the profile in an editor:

  ```sh
  nano ~/.bash_profile
  ```

* After editing, press `Ctrl+X`, then `Y`, then `Enter` to save the file.

* Reload the profile so the change takes effect in the current session:

  ```sh
  source ~/.bash_profile
  ```

* Close and reopen the terminal, then verify the variable with `env | grep SYNCFUSION_LICENSE`.

#### Linux

* Open the terminal and use the `env | grep SYNCFUSION_LICENSE` command to view whether the variable is already set.

* You can set or modify the [environment variable](https://help.ubuntu.com/community/EnvironmentVariables) by using the following command. For a session-only change:

  ```sh
  export SYNCFUSION_LICENSE='your license key'
  ```

* Once the `SYNCFUSION_LICENSE` environment variable is set, restart the IDE or application terminal before using the license activation command.

* Open the command prompt in the application root directory and activate the license key by using the following command:

  ```sh
  npx syncfusion-license activate
  ```

* Once the Syncfusion<sup style="font-size:70%">&reg;</sup> license key is activated, the following console message will appear:

  **License message:** <br /> (INFO) Syncfusion<sup style="font-size:70%">&reg;</sup> License imported successfully.

* Remove the `.cache` folder from `node_modules` in the application:

  ```sh
  rm -rf node_modules/.cache
  ```

* Run the application. If you face a license validation error, refer to this [link](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-errors) to resolve it. For frequently asked questions, see this [link](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-troubleshoot).

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> License Key in CI Services

The following sections show how to use an environment variable in CI services.

#### GitHub Actions

* Create a [new Repository Secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-encrypted-secrets-for-a-repository) or an [Organization Secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-encrypted-secrets-for-an-organization). Set the name of the secret to `SYNCFUSION_LICENSE` and use the license key as a value.

* Add the Syncfusion<sup style="font-size:70%">&reg;</sup> license activation command after running npm install or yarn like below,

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

* Create a new [User-defined Variable](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch) named `SYNCFUSION_LICENSE`. Use the license key as a value.

* Add the Syncfusion<sup style="font-size:70%">&reg;</sup> license activation command after running `npm install` or `yarn` as shown below.

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

* Create a new [User-defined Variable](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch) named `SYNCFUSION_LICENSE`. Use the license key as a value. Make sure the **Allow access to all pipelines** option is enabled for the variable.

* Add the Syncfusion<sup style="font-size:70%">&reg;</sup> license activation command after running `npm install` or `yarn` using a Bash task. Map the variable to the task environment so `npx` can read it:

```bash
# Activate the license
npx syncfusion-license activate
```
![Bash task](images/bash-script.png)

## Register Multiple License Keys

If you need to register multiple Syncfusion<sup style="font-size:70%">&reg;</sup> license keys in your application, you can do so by separating each key with a semicolon. This is useful when your application uses multiple Syncfusion<sup style="font-size:70%">&reg;</sup> products or editions.

**Format:** `key1;key2;key3`

**Example:**
```ts
registerLicense('license-key-1-here;license-key-2-here');
```

> When registering multiple keys, ensure there are no spaces before or after the semicolon separator.

This approach only applies to the `registerLicense` API in `main.ts`. When using the `npx` command with an environment variable, only a single license key can be supplied; for multiple keys, switch to the `syncfusion-license.txt` file and concatenate the keys with semicolons.


## See Also

* [Generate Syncfusion license key for Angular](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-generation)
* [Syncfusion Licensing Overview](https://ej2.syncfusion.com/angular/documentation/licensing/overview)
* [Licensing FAQ](https://ej2.syncfusion.com/angular/documentation/licensing/licensing-troubleshoot)
* [Register Multiple License Keys](#register-multiple-license-keys)
