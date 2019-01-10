## Técnicas de estilado en React

### CSS

Para vincular un fichero css a un componente en (la mayoría de) configuraciones node/react, basta con hacer un import al css.
Preferiblemente esto se hace a nivel de componente:
* Desde el fichero .jsx, hacer: `import 'NombreComponente.css';`.

### SCSS

Para hacer la compilación de un scss, se necesitaria un módulo en node: `node-sass`.
Para instalarlo, ejecutar el siguiente comando en la carpeta donde está desplegado el proyecto: 
    `npm install node-sass --save`

### CSS inline w/ JS

Hay que crear un objeto js de stilos y asignarselo inline al elemento a estilar:
´´´jsx
  const customStyles = {
    width: "100px",
    height: "100px"
  };

  <div style={customStyles}></div>
´´´ 

### Librerías

Hay librerías para facilitar el CSSinJS:
* [Emotion](https://emotion.sh/)
* [Stiled Components](https://www.styled-components.com/) 
* [JSS](https://cssinjs.org) 

### Conclusiones propias

Lo que he visto concluye en que usar librerías añade entre 40ms hasta 100ms de retardo.
Para mi, lo óptimo sería usar una hoja de estilos general que aplique a todo, mientras que, por componente, estilarlos en línea con la utileria de React.
