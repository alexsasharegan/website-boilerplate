export let test = () => {
  let node = document.createElement('h1');
  node.className = 'text-xs-center test';
  let text = document.createTextNode('Hello World!');
  node.appendChild(text);
  document.querySelector('#app').appendChild(node);
  console.log('Imports are working!');
};
