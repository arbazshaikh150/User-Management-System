# User-Management-System

### FrontEnd (React - Vite)
```
    npm create vite@latest
```

### Dependencies
It is a basic react signUp and some backend Integration , i did not use so much dependencies 
```
    npm install react-router-dom axios react-hot-toast 
```

I can use Normal css for styling purpose , but tailwind is fine for me. (So the styling and all css stuff will be in tailwind).

### Tailwind Setup

1) Install tailwindcss
```
        npm install -D tailwindcss postcss autoprefixer
```
2) Create Tailwind config File
```
        npx tailwindcss init
```
3) Add file extensions to tailwind config file in the contents property
```
        "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html",
```
4) Add the tailwind directives at the top of the   `index.css` file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
5) Add the following details in the plugin property of tainwind config
```
        [require("daisyui"), require("@tailwindcss/line-clamp")]
```


### Thunks
For Connecting the Backend With the FrontEnd , Learn More about it

### Axios
Here I used Axios for fetching and all that stuff , I have to learn about thunks and all.

I got error while making the profile page , means how to get the user information

### Steps
1) Generate the JWT token ( In userSchema i created a method in which i generate the jwt token based on email , id and username) (JWT.sign({} , secret , {expires}));

2) Make the middleware (For adding all the details we got from our jwt token in req.user) , yaha par error aa rha tha q ki maine token generate kiya hi nhi phle walo ka..

3) Do the rest of the stuff easily means request mai abb tumhe sab kuch mil jayega..
