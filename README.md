# PharmaPartners - Team G

## Teammembers

- Youri van der Sande (2113748)
- Max Bogaers (2153494)
- Jules Mons (2159738)
- Maarten Donkersloot (2152857)
- Thomas Terlaak (2151768)
- Leander Oudakker (2149661)
- Dion Rodie (2079864)
- Zias Luijkx (2149785)

## Project description

This project was created by students of Avans Hogeschool Breda in The Netherlands.
For this project we created an Angular App and a ASP.NET REST-API for a company named PharmaPartners.
This app will be used by general practitioners to document their visits to their patients.

## URLs of deployed applications

Angular App: 
https://pharma-partners-web.azurewebsites.net/

ASP.NET REST-API
https://pharma-partners2.azurewebsites.net/


# PharmaPartners Angular App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

In order to run this app you should first run `npm install` in the console to install any dependencies that the app uses.
Make sure that the connection string to the API in `environment.ts` is correct.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# PharmaPartners ASP.NET REST-API

This project was generated with ASP.NET version 5.0.
This API uses Entity Framwork to create and make changes to the database.

In order to create the database you should check the connection string in the `appsettings.json` to fit the right database connection.
After checking the connection string you are able to migrate the database to the database server with Entity Framework.

Execute the following commands in the console:
 - `dotnet ef migrations add InitialCreate`
 - `dotnet ef database update --startup-project ../WebApi --context SecurityDbContext`
 - `--startup-project ../WebApi --context ApplicationDbContext`

Now you should be able to run the `WebApi` project.
