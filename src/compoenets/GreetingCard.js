export const  greeting=(login,name) => {
  return (
  login?<h1>Hello, {name}! you are login in </h1>:<h1>Hello, {name}!please login in</h1>
  );
}