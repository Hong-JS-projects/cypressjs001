# cypressjs001

```
npx cypress open
```

```
```

To input values into multiple input fields using Cypress, you can utilize various methods depending on the input fields' attributes or their position in the DOM hierarchy. Here are some common approaches:

1. **Using `cy.get()` and array indexing:** If the input fields have the same class or attribute, you can use `cy.get()` to retrieve an array of input elements and then iterate over them using array indexing to enter values:

```javascript
cy.get('input[type="text"]').each(($el, index) => {
  cy.wrap($el).type(`Value ${index + 1}`);
});
```

2. **Using `cy.queryBy*` and attribute selectors:** If the input fields have unique IDs or data-attributes, you can use `cy.queryBy*` commands to locate each input field individually and enter the corresponding values:

```javascript
cy.queryByLabel('Username').type('username1');
cy.queryByLabel('Email').type('email1@example.com');
cy.queryByLabel('Password').type('password1');
```

3. **Using `cy.within()` and descendant selectors:** If the input fields are nested within a common parent element, you can use `cy.within()` to restrict the search scope and then use descendant selectors to locate the input fields:

```javascript
cy.get('div.form-container').within(() => {
  cy.get('input[type="text"]').type('name@example.com');
  cy.get('input[type="password"]').type('password123');
});
```

4. **Using custom commands or page objects:** For more complex scenarios or reusable code, you can create custom commands or page objects to encapsulate the logic for interacting with multiple input fields.

```javascript
// Custom command to fill out a form
Cypress.Commands.add('fillForm', (formData) => {
  formData.forEach(({ label, value }) => {
    cy.queryByLabel(label).type(value);
  });
});

// Page object representing the login form
class LoginForm {
  constructor() {
    this.usernameInput = cy.queryByLabel('Username');
    this.passwordInput = cy.queryByLabel('Password');
    this.submitButton = cy.get('button[type="submit"]');
  }

  fillCredentials(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
  }

  submit() {
    this.submitButton.click();
  }
}
```

These approaches enable you to effectively input values into multiple input fields using Cypress, allowing you to automate form filling and data entry tasks in your tests.