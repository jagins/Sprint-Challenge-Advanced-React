- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class componets allows us to use life cycle methods and allows us to have state as an object instead of having to useState hook for every piece of state
    we want to have.

- [ ] Name three lifecycle methods and their purposes.

    Constructor, Render, ComponentDidMount.

- [ ] What is the purpose of a custom hook?
    The advantage of using a custom hook is that it allows us as devs to reuse component logic and make it more resusable by making it more dry
    to handle whatever you want it to handle. So if we have a component that has some logic that's going to take forever to recreate we can put that into a hook and reuse it and only have to write it out once.

- [ ] Why is it important to test our apps?

    Testing our apps is important to know where the bugs are in our code. Also it's a good way to document your code, so if someone new is on your team they can look at your tests and understand how your codebase will work. Testing also allows us to know what we're getting back is correct like 2+2=4. If the test is coming back as 2+2=5 then we can go back into the code and fix that logic so the statement of 2+2=4 will be true.