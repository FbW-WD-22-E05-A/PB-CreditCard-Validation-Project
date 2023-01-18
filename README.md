# Credit Card Validation

This task is an extension from Programming basics, please complete the following task using Typescript.

---

You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called  `validateCreditCard`  that returns  `true`  or  `false` messages.

Here are the rules for a valid number:

-   Number must be 16 digits
-   Input must be numbers only
-   Number must consist of at least two different digits (all of the digits cannot be the same one)
-   The final digit must be even
-   The sum of all the digits must be greater than 16

The following credit card numbers are valid and return a message as an `object` as below::

-   `9999777788880000` { valid: true, number: {card number} };
-   `6666666666661666` { valid: true, number: {card number} };

The following credit card numbers are invalid and return a message as an `object` as below:

-   `a92332119c011112`  {valid: false, number: {card number}, error: 'invalid characters'}
-   `4444444444444444`  {valid: false, number: {card number}, error: 'need more than 1 unique digit'}
-   `1111111111111110`  {valid: false, number: {card number}, error: 'sum less than 16'}
-   `6666666666666661`  { valid: false, number:{card number}, error: 'the last digit is odd' }
-   `2234-2311-5544-111`  { valid: false, number: {card number}, error: 'not 16 digits' }


A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are also valid:

-   `9999-7777-8888-0000`
-   `6666-6666-6666-1666`

Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)

----------

**Bonus**  Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the  [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)  for inspiration.
