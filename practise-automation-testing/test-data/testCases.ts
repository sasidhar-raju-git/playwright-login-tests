export interface TestCase {
  id: string;
  title: string;
  type: 'positive' | 'negative';
  steps: string[];
  expectedResult: string;
}

export const loginTestCases: TestCase[] = [
  // --- POSITIVE SCENARIOS ---
  {
    id: 'TC001',
    title: 'Valid login with correct credentials shows success page',
    type: 'positive',
    steps: [
      'Navigate to the login page',
      'Enter valid username: student',
      'Enter valid password: Password123',
      'Click the Submit button',
    ],
    expectedResult:
      'User is redirected to the success page with heading "Logged In Successfully"',
  },
  {
    id: 'TC002',
    title: 'Valid login redirects away from login URL',
    type: 'positive',
    steps: [
      'Navigate to the login page',
      'Enter valid username and password',
      'Click submit',
      'Verify the current URL has changed to /logged-in-successfully/',
    ],
    expectedResult: 'URL changes to the success page; login page URL is no longer active',
  },
  {
    id: 'TC003',
    title: 'Login form fields are visible and interactive',
    type: 'positive',
    steps: [
      'Navigate to the login page',
      'Verify username input is visible',
      'Verify password input is visible',
      'Verify Submit button is visible',
      'Type a value in the username field and verify it is accepted',
    ],
    expectedResult: 'All form elements are visible and the username field accepts text input',
  },
  {
    id: 'TC004',
    title: 'Password field masks the entered text',
    type: 'positive',
    steps: [
      'Navigate to the login page',
      'Locate the password input field',
      'Verify the input type attribute is "password"',
    ],
    expectedResult: 'Password field type is "password", ensuring the text is masked',
  },
  {
    id: 'TC005',
    title: 'Login page has a meaningful page title',
    type: 'positive',
    steps: [
      'Navigate to the login page',
      'Retrieve the browser tab title',
      'Assert the title is not empty and contains the word "login" (case-insensitive)',
    ],
    expectedResult: "Page title is non-empty and contains 'login'.",
  },
{
    id: 'TC006',
    title: 'Login with invalid username shows error message',
    type: 'negative',
    steps: [
      'Navigate to the login page',
      'Enter an invalid username: incorrectuser',
      'Enter a valid password: Password123',
      'Click the Submit button',
    ],
    expectedResult:
      '"Your username is invalid!" error message is displayed and user remains on the login page',
  },
  {
    id: 'TC007',
    title: 'Login with invalid password shows error message',
    type: 'negative',
    steps: [
      'Navigate to the login page',
      'Enter a valid username: student',
      'Enter an invalid password: incorrectPassword',
      'Click the Submit button',
    ],
    expectedResult:
      '"Your password is invalid!" error message is displayed and user remains on the login page',
  },
  {
    id: 'TC008',
    title: 'Login with empty username shows error message',
    type: 'negative',
    steps: [
      'Navigate to the login page',
      'Leave the username field empty',
      'Enter a valid password: Password123',
      'Click the Submit button',
    ],
    expectedResult: 'An error message is displayed indicating the username is invalid or missing',
  },
  {
    id: 'TC009',
    title: 'Login with empty password shows error message',
    type: 'negative',
    steps: [
      'Navigate to the login page',
      'Enter a valid username: student',
      'Leave the password field empty',
      'Click the Submit button',
    ],
    expectedResult: 'An error message is displayed indicating the password is invalid or missing',
  },
  {
    id: 'TC010',
    title: 'Login with both fields empty shows error message',
    type: 'negative',
    steps: [
      'Navigate to the login page',
      'Leave both username and password fields empty',
      'Click the Submit button',
    ],
    expectedResult: 'An error message is displayed and user is not redirected',
  },
];

