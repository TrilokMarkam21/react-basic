function customRender(reactElement, container) {
  // Create a DOM element based on the type of the reactElement
  const domElement = document.createElement(reactElement.type);
  domElement.innerhtml = reactElement.children;

  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);

  container.appendChild(domElement);

  // Set attributes and properties
  for (const [key, value] of Object.entries(reactElement.props)) {
    if (key === 'children') {
      domElement.textContent = value;
    } else {
      domElement.setAttribute(key, value);
    }
  }

  // Append the created element to the container
  container.appendChild(domElement);
}





const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
    children: 'Google killer'
  }
};



const mainContainer = Document.getElementById("root")

customRender(reactElement, mainContainer);

