# 4Geeks React Star Wars Blog

This React Star Wars blog was designed to make us practice everything we had learned so far in the frontend part of the course: Javascript and code that follows programmatic logic, React (combining components, using hooks, using flux in order to have global state and actions), interacting and calling upon APIs for our website's data, and CSS in order to make the blog page look good. 

The project can be seen below or at the [live version here](https://4-geeks-stars-wars-blog.vercel.app/)

![star_wars_blog](https://github.com/4GeeksAcademy/stars_wars_GDW/assets/105855731/d2f2ce02-05fc-4d80-bba4-07809182e026)



### Notes
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

