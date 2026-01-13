# Plymouth

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Code Explanation
1) Have created two components 
    1) Card
    2) Payment
2) Card Component
    1) calling the Payment Component inside card component
3) Loading the Card Component through the Navigation
4) Payment Components
    1) Added HTML code
    2) Added Basic Validation
    3) Added A11y code inside it
    4) generating the token from the mix of Card Number and CVC
    5) then we are calling the DummyAPI with the token which we just created above (Step 4)
    6) Then we navigate the Success page or Failure Page on depends on the API response
5) Success Component
    1) Added Success view inside it
6) Failure Component
    1) Added Failure view inside it

7) Created Payment Service
    1) Have call the makePayment with the token
8) run the Npm install then ng serve then the code will run on http://localhost:4200/

