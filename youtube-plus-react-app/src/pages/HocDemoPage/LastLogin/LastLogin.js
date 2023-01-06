// basic version of render props.
// whatever this comp receives as props children will return 
// you can return multiple JSX elements
// Wrapper comp that doesn't return any JSX on its own.

const LastLogin = (props) => props.children;

export default LastLogin;
