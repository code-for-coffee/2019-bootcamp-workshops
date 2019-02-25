---
title: Introduction to React.js
type: lesson
duration: "1:30"
creator:
    name: James Traver
    city: CHI
competencies: Programming, Front-end Frameworks, React, JSX
---

# Introduction to React.js

### Objectives
*After this lesson, students will be able to:*

- Understand what problem React.js solves
- Use JSX to create a React component
- Render basic React components using the ReactDOM

### Preparation
*Before this lesson, students should already be able to:*

- Manipulate the DOM with vanilla Javascript
- Create individual views for design elements
- Identify the moving parts of an MVC framework

## Introduction to React (10 mins)

The modern web is becoming **compartmentalized**. [*Prompt*]: What does this mean to you?

There are a variety of front-end frameworks to choose from. From Backbone.js to Angular.js, we have frameworks that are great at binding your data to models. This week we are going to look into React.js - a modern front-end framework that was designed by three engineers at Facebook.

The goal of React was to create components based on views; views as in the *view* of model-view-control. Imagine breaking a webpage up into multiple elements - you already do that, right? React was designed to solve the problem of breaking front-end design elements into self-contained components. [*Prompt*]: What sort of design elements have you worked with that could be self-contained?

If you have a website and want to have encapsulated components for your front end, look no further. And, because React only creates components that act as *views*, we can use it alongside other frameworks as the *view* if we want to!

#### Basic React Example

Before moving forward, let's take a look at what a React.js component looks like:

```html
var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

ReactDOM.render(
	<Hello name="World" />,
    document.getElementById('container')
);
```

This will render out to be:

```html
<section id='container'>
  Hello world
</section>
```

Now that you've seen this component, [**turn and talk**] with the person next to you and identify new abilities and attribute that you see.


## Understand what problem React.js solves (20 mins)

React was designed to solve the problem of breaking front-end design elements into self-contained components. Let's take a look at what this means to us as developers. Before we can begin solving a problem, we need to see that problem first hand.

[*Groupwork*] Break into groups of 3-4 and make use of your graph paper! We're going to wireframe a simple 'coming soon' website.

#### Coming Soon: React

* In a group of 3-4, wireframe a *coming soon* website for an upcoming product, film, or an event.
* Create two to three key elements on a coming soon page. One of this will likely be a signup form. What else could there be?
* Once you design your wireframe, split the webpage into individual design components (also known as views).
* Each team member should work to describe each component's attributes and abilities.


## Use JSX to create a React component - Codealong (25 mins)

#### Creating a Component with JSX

React uses a template language called **JSX**. It is very XML-like in structure. It is designed to abstract away complex HTML design templates into a nice, easy to use tag/attribute style syntax. For those that may be familiar with Angular directives (and how attributes are declared on a tag) this may look familiar. Let's take a look at a few JSX examples:

*Example #1:*

```JSX
<div>Would you like to buy {this.props.quantity} apples?</div>
```

*Example #2:*

```JSX
<article><h1>{this.props.headline}</h1>
<p>{this.props.content}</p>
</article>
```

That's JSX syntax. Now, let's use that syntax to build a component! To build a component, we need to declare a React class. This looks like:

```javascript
var component = React.createClass({});
```

Each component will have a `render()` function that `return`s a JSX template. Let's take a look at how that is structured in our next example.

*Example #3:*

```JSX
var Item = React.createClass({
    render: function () {
        return <article>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        </article>;
    }
});
```

[*Prompt*] Are there any questions about the structure of this example?

[*Prompt*] Out of all of these JSX examples, what common themes do you see?

[*Answer*] You should notice the re-use of `this.props.keyValueName`. You should also notice that the render function directly creates an XML/HTML like syntax that uses those variables to fill in values.

## Render basic React components using the ReactDOM (20 minutes)

We've created a few React components using JSX together and assigned them to variables. Now, we need to use the **ReactDOM** to render elements on our page.

This may be a bit confusing, so before we start understand that you write components in React. You will Render the React Components to client side code using the ReactDOM. The ReactDOM then places the final component on your webpage's DOM.

Now, let's take a look at an overview of how to render with the **ReactDOM**:

```Javascript
ReactComponent render(
  ReactElement element,
  DOMElement container,
  [function callback]
)
```

* The *ReactElement* argument is our component (which we defined above). This is the variable name we gave our component when we declared one using `React.createClass({});`
* The *DOMElement* container is a Javascript selector for the HTML container to place our component inside. Example: `document.getElementById('id-to-place-this')`
* The *Callback* is a function that can be hooked in to call once the render function has been completed.
* Do not ever, ever render to the `body` tag. It is not best practice.
Let's work through the examples we created earlier and render them.

*Example #1:*

```javascript
ReactDOM.render(
	<Message name="World" />,
    document.getElementById('message-container')
);
```

*Example #2:*

```javascript
ReactDOM.render(
	<Article headline='zomg news' description='Some news is here...' />,
	document.getElementById('item-container')
);
```

*Example #3:*

```javascript
ReactDOM.render(
	<Item title='Star Wars Ticket' description='A long time ago, in a galaxy far, far away...' />,
	document.getElementById('item-container')
);
```

## Independent Practice (10 minutes)

> ***Note:*** _This can be a pair programming activity or done independently._

* Browse to https://jsfiddle.net/codeforcoffee/Lst86r0e/
* Create your own React component that describes you! Name it after yourself.
* Use three different `props` in your component.
* Verify that it renders! Congrats.

## Conclusion (5 mins)
- What problems does React.js allow you to solve?
- What React method allows us to declare a component?
- What is the purpose of JSX?
- What React construct allows us to render content?
