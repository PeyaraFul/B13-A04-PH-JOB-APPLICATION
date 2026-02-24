## Answers has been given below after question 

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?



************** ANSWER ***************
1.  getElementById() take a single and unique named element.
    getElementsByClassName() make a array like object. It contains more than once element named same class.
    querySelector() it returns first matching element form DOM. It accept #id, .className and others css selector.
    querySelectorAll() it returns all matching element form DOM. By using css selectors it can be access. 



2.  I create a new element by using "document.createElement()",  ".innerText", ".classList.add()" and by using ".appendChild()" I insert a new element into the DOM .


3. When clicked on a element the event go parent to parent element (bubble up). It called Event Bubbling makes like a tree. 
flowchart:  clicked => currentElement => parentElement => parentElement => body => document


4. In the parent-element by using eventListener instead of child-element we can  handle the event. By using this system code can be shorten and good performance also dynamical element handling can be easy.

5. preventDefault() method stop browser default behavior such as page reloading. stopPropagation() method stop event bubbling. The two method behave almost opposite. 

