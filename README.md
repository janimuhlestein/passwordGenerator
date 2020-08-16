# passwordGenerator
Generate a password depending on the user specifications

1. On click, run a writePassword() function that will get user input on the length
of the password desired, and whether they wish to use upper case, lower case, numeric 
and special characters.

2. Verify that they do not enter a non-integer.

4. Verify that they only enter a length between 8 and 128 chars.

5. Verify that they make at least one option choice.

6. Once all options are set, generate password.

7. Display new password in textarea on screen.

8. Decided to add a reset function to reset object so that they can generate many different passwords with different options as desired. As it was, the when you clicked on the button again, it just generated a new password from the same options. Asked the user if they wanted to change optionsl If so, it recurses through the function again.

Methods:

1. Create a settings object to hold all settings.
2. Create strings with appropriate characters.
4. Create an array of options to choose from (i.e., upper, lower, etc.).
5. Use Math.floor() and Math.random() to a) select an option, and b) select a 
random character from the option list.
6. Add the random character to the password.
7. Iterate through a loop to get as many random characters as needed.
8. Use event listener to check for click events.
9. Use getElementById to get the text area and write the new password.

To see original requirements, look at the readme.md in the assets/requirements folder.
