export let test = () => {
  let pNode = document.createElement('p');
  pNode.className = 'test';
  let pText = document.createTextNode('Hello World!');
  pNode.appendChild(pText);
  document.querySelector('#app').appendChild(pNode);
  console.log('Imports are working!');
};
