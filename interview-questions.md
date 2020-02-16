# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What does CRUD stand for?

  Your answer:CRUD stands for: C-> Create R->Read U ->Update D ->Delete. These each are associated with web pages and they refelct what is used between the user and what the developer has created for that webpage. 

  Researched answer: Related to user interface and the users ability to store and retrieve data on a webpage. As a developer, we should be able to create products that at least meet this for the user. 



2. What are the 5 HTTP verbs?

  Your answer: Get retrieves info and displays it. Patch lets you update entries as a user. 

  Researched answer: The 5 HTTP verbs are Get, Head, Post, Put, and Delete. Get requests information. Head returns only the header information. A POST request is a statement by the client that a new “subordinate resource” should be created beneath the given URI. In practice, that means that POST requests should be used for things like adding a new post to a messageboard thread, adding a new post to a blog; or sending a message via a contact form. PUT lets the user update a section of the website. EX: updating a blog post would be done through a PUT request.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to render "Hello World" on the page?

  Your answer:You would need to extend the class from Component. Have a render with no argument and then in the return have a div tag with an <h1> tag containing the "Hello World!" within it. After closing the div brackets and the remaining class brackets. You would have to export the new class. Lastly, you would start a local server on your machine to render the <h1> message through the created React App.

  Researched answer: I think my answer goes over the necessary steps. 



4. What is JSX?

  Your answer: JSX is a combination of Javascript and HTML syntax that is used in React. It allows for our code to be understood by the React framework. 

  Researched answer: JSX is a syntax extension of Javascript. Although not required by React, it is a powerful tool that allows for integration of componenets being on the same page, rather than them being on different pages. It also allows for more accurate error and warning messages.



5. What is the difference between React state and props?

  Your answer: React state is the "brain" of the function that allows for dynamic changes to be rendered to your product. It can be changed dynamically depending on what your code tells it to do. Props stands for properties and are passed onto the children components. This value does not change and is instead just passed onto the child app which will render the values assigned to it. 

  Researched answer:Props --> In React those components need to communicate (send data to each other) and the way to pass data between components is by using props.Can only be passed from partent to child and not the otherway around. Props data is read only and should not be changed in the child element. 



6. STRETCH: What is hoisting in JavaScript?

  Your answer: My guess is that hoisting is going to be the reverse of props and allows for parents to take child component information and use/change it. 

  Researched answer: Hoisting means that the variables, whether local or global scope, get moved to the top of their respected scope, regardless if an actual declaration has been made. If a variable is declared after a function, for example, because of hoisting, the function will be undefined because JS will hoist the variable before the function but not its value. Since that value isnt defined until after the hypothetical function runs, it returns as undefined. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods - methods that autoupdate by themselves. According to some reasearch I did, lifecycle methods are a last resort because of the complexity they add to your apps. Constructor is an example of a lifecyle method that is popular. 
- API - An application program interface (API) is a set of routines, protocols, and tools for building software applications. Basically, an API specifies how software components should interact. Additionally, APIs are used when programming graphical user interface (GUI) components. A good API makes it easier to develop a program by providing all the building blocks. A programmer then puts the blocks together. -- Webopedia 
- event.preventDefault()- prevents the default event from occuring such as refreshing a webpage when inputing sensitive information. 
- DOM events - Document Object Model events are actions that occurs as a result of the user action or as result of state change of the elements of a DOM tree.
