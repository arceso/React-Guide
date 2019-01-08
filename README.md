## Cómo construir una aplicación desde cero con React:

#1. Crear el proyecto:
Vamos a instalar el software minimo para poder crear un proyecto:

1. Instalar [nodejs|https://nodejs.org/es/].

2. Abrir la consola:
        1. En Windows: 
                1. Pulsar la combinación de teclas: `❖Win + R`
                2. Escribir: `cmd`

        2. En Mac: 
                1. `⌘ + Espacio`
                2. `terminal`

2. Navegar hasta la ruta donde se quiera desplegar el proyecto:
        `cd + <Ruta/absoluta/hasta/la/carpeta>`

3. Ejecutar el CLI de React:
        `npx create-react-app <nombre-de-tu-app>`

4. Arrancar el proyecto:
        `cd <nombre-de-tu-app>`
        `npm start`

#2. Crear un componente:
Ahora que tenemos creado y arrancado el proyecto, vamosa añadir un componente:

1. Abrir el proyecto con el editor de texto de preferencia (Recomendaciones personales: VSCode o Atom).

2. Navega hasta componentes `src/components`, si no existe la carpeta `components`, creala.

3. Crea un nuevo componente
        1. Crea una carpeta con el nombre del componente: `MenuItem`.
        2. Crea un fichero llamado `MenuItem.js` dentro de `MenuItem`.

4. Introduce en `MenuItem.js` el siguiente código y guárdalo:
        ```jsx
        import React from "react";

        export const MenuItem = props => (
                <nav className={"c-menu-item" + (props.active ? " c-menu-item" : null)}>
                        <span>{props.children || "Soy un menú."}</span>
                </nav>
        );

        ```
5. Importa e incluye el componente creado previamente:
        1. Navega hasta `src/App.js`.
        2. Añade como primera línea `import { MenuItem } from 'components/MenuItem/MenuItem';`.
        3. Añade como hijo del elemento `<div className="App">` el componente que acabamos de importar: `<MenuItem />`.

6. Observa como se puede ver el componente en la aplicacion. *FUNSIONA! EHTÁ BIBO!*

Notas extra:
El componente que acabamos de crear es un *componente tonto*:
        * No entiende el flujo de la aplicación.
        * Puede realizar operaciones en js.

¿En qué se diferencia de un *componente listo*?
        * El listo tiene estados.
        * El listo tiene ciclo de vida.

Vamos a crear un *componente listo* para entender las diferencias.

#3. Crear un componente Listo:
1. Crea un nuevo componente llamado `Menu` (Mira el paso 2-3 si no recueras como se hacía) y copia el siguiente código:
```jsx
import React, { Component } from "react";
import { MenuItem } from "../MenuItem/MenuItem";

export class Menu extends Component {
        componentDidMount() {
                /*
                        Se llama cuando se ha incluido el componente en el DOM.
                */
        }

        componentDidUpdate() {
                /*
                        Se llama cuando se reciven nuevas props*.
                */
        }

        componentWillUnmount() {
                /*
                        Este método se llamará justo antes de que se desmonte el componente.
                        Esto pasa cuando el componente que le hacía referencia deja de hacerlo.
                */
        }

        render() {
                // Se llama cada vez que hay un cambio en el estado*.
                return (
                        <div className="c-menu">
                                <MenuItem> Home </MenuItem>
                                <MenuItem active={true}> Not Home </MenuItem>
                                <MenuItem />
                        </div>
                );
        }
}

/*
 *                         * El "Estado" y las "Props" serán explicadas más adelante.
 */
```

2. Este componente, al ser listo puede usar el ciclo de vida de React:
        * `componentDidMount, componentDidUpdate, componentWillUnmount, render` Son momentos que recorre un componente de React, para una lista exhaustiva, visitar la [Guia|https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class] de estados de React.
        * De especial importancia es `Render()`, que es la que dicta el marcado base del componente. Este retornará un segmento HTML, que ha de tener un ÚNICO elemento        raiz HTML (Ha de estar englobado todo por un unico tag).

3. Al ser listo, tambien es capaz de tener estados:
        * Los estados realmente tan solo son variables que contienen información sobre el componente.
        * Al haber un cambio en el estado, fuerza una llamada a render.

4. Si te fijas, el segundo MenuItem, tiene un `active={true}` esto es que le está mandando una propiedad al hijo. También se manda como propiedad el contenido entre tags.
        1. Si vas al hijo `MenuItem`, podrás ver que llama a props.active para determinar un modificador de clase.
        2. También podrás ver que hace referencia a props.child, pero no le estámos padando ningun `child={algo}`, es porque el .child es el prop que va entre los tags. Este puede ser lo que sea, desde numeros, cadenas de texto, hasta uno o varios componentes.

#3. El estado de un componente
Veamos como usar el estado.

1. Abre el componente Menu y realiza los siguientes cambios:
        1. Añade el siguiente constructor de clase:
        ```jsx
                constructor(props) {
                        super(props);
                        this.state = {
                                colorOriginal: true
                        };
                }
        ```

        2. Añade el siguiente método: 
        ```jsx
                onClick() {
                        this.setState({ colorOriginal: !this.state.colorOriginal });
                }
        ```

        3. Cambia el método `render()` por este:
        ```jsx
                render() {
                        const backgroundColor = {
                                backgroundColor: this.state.colorOriginal ? "red" : "green"
                        };

                        return (
                                <div
                                        className="c-menu"
                                        style={backgroundColor}
                                        onClick={this.onClick.bind(this)}
                                >
                                        <MenuItem> Home </MenuItem>
                                        <MenuItem active={true}> Not Home </MenuItem>
                                        <MenuItem />
                                </div>
                        );
                }
        ```
2. Una vez realizados estos cambios, haz click en el componente, verás que cambia de color cada vez que haces click. Veamos que hemos hecho para provocar esto:
        1. En el constructor hemos definido el estado, que tan solo es una variable Booleana (verdader o falso), que controlará el color a pintar: 
        ```jsx
                this.state = {
                        colorOriginal: true
                };
        ```

        2. También hemos creado una funcion que cada vez que la llamas, invierte el valor del estado `colorOriginal`:
        ```jsx
                changeColor() {
                        this.setState({ colorOriginal: !this.state.colorOriginal });
                }
        ```
        3. Finalmente, en el render hemos hecho un par de cosas:
                1. Una constante que dependiendo del estado (si es verdadero o falso) me guarda el color del background (en un objeto con notacion compatible con stilos de js de css):
                 ```jsx
                                const backgroundColor = {
                                        backgroundColor: this.state.colorOriginal ? "red" : "green"
                                };
                        ```
                2. Hemos asignado la constante que almacenaba los estilos (el background-color) a los estilos en línea y asignado el método changeColor al evento onClick. (el bind(this) es importante que se ponga al vincular métodos a eventos, porque pierde el scope de this (No sé como explicar esto de manera sencilla sin una pizarrita y muchos colorinchis 🤔 )).
                ```jsx
                        <div
                                className="c-menu"
                                style={backgroundColor}
                                onClick={this.changeColor.bind(this)}
                        >
                ```