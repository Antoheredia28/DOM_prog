/*console.log("************** Elementos del documento **************")
console.log(window.document)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.characterSet)
console.log(document.title)
console.log(document.links)
console.log(document.images)*/

console.log(document.getElementsByTagName ('img'))

console.log(document.getElementsByClassName('card'))

console.log(document.getElementsByName('nombre'))
console.log(document.getElementById('menu'))
console.log(document.querySelector('#menu'))
console.log(document.querySelectorAll('a'))

console.log(document.querySelectorAll('a'))
document.querySelectorAll('a').forEach((el) => console.log (el))

console.log(document.querySelectorAll('.card'))
console.log(document.querySelectorAll('.card')[2])

//Podemos obtener datos de tributos
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute('lang'))
console.log(document.querySelector('.link-dom').href)
console.log(document.querySelector('.link-dom').getAttribute('href'))

//Con este codigo cambiamos los valors de los atributos.
document.documentElement.lang = "es-ARG"

//Usamos constants para guardar elementos en el DOM.
//Es buen práctica que su nombre comience con el signo $.
const $enlaceDelDOM = document.querySelector('.link-dom')
$enlaceDelDOM.setAttribute('target' , '_blank')

//Luego de agregar un atributo ...
$enlaceDelDOM.setAttribute('rel' ,'noopener')
console.log($enlaceDelDOM.hasAttribute('rel'))

//Podemos quitarlo.
$enlaceDelDOM.removeAttribute('rel')
console.log($enlaceDelDOM.hasAttribute('rel'))

//Data-attributes

console.log($enlaceDelDOM.getAttribute('data-description'))
console.log($enlaceDelDOM.dataset)
console.log($enlaceDelDOM.dataset.description)
$enlaceDelDOM.setAttribute('data-description','Modelo de Objeto de Documento')
console.log($enlaceDelDOM.dataset.description)
$enlaceDelDOM.dataset.description = "Los alumnos practican mucho"
console.log($enlaceDelDOM.dataset.description)

const $enlaceDelDOM2 = document.querySelector('link-dom')
console.log($enlaceDelDOM2.style)
console.log($enlaceDelDOM2.getAttribute('style'))
console.log($enlaceDelDOM2.style.backgroundColor)
console.log($enlaceDelDOM2.style.color)
console.log(getComputedStyle($enlaceDelDOM2).getPropertyValue('color'))

$enlaceDelDOM.style.setProperty('text-decoration', 'none')
$enlaceDelDOM.style.setProperty('display', 'block')
$enlaceDelDOM.style.width = '50%'
$enlaceDelDOM.style.textAlign = 'center'
$enlaceDelDOM.style.marginLeft = 'auto'
$enlaceDelDOM.style.marginRight = 'auto'
$enlaceDelDOM.style.padding = '1rem'
$enlaceDelDOM.style.borderRadius = '.5rem'

//Modifico el valor de una variable
$enHtml.style.setProperty('--dark-color', 'purple')
varDarkColor =getComputedStyle($enHtml).getPropertyValue('--dark-color')
$enBody.style.setProperty('background-color', varDarkColor)

//Vuelvo acambiar el valor de la variable "dark-color".
$enHtml.style.setProperty('--dark-color', 'grey')

//Accedemos a las clases.
const $card = document.querySelector('.card')
console.log($card)
console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains('rotate-45'))
$card.classList.add('rotate-45')
console.log($card.classList.contains('rotate-45'))
console.log($card.className)
console.log($card.classList)

$card.classList.remove('rotate-45')
console.log($card.classList.contains('rotate-45'))
$card.classList.toggle('rotate-45')
console.log($card.classList.contains('rotate-45'))
$card.classList.toggle('rotate-45')
console.log($card.classList.contains('rotate-45'))
$card.classList.toggle('rotate-45')
$card.classList.replace('rotate-45', 'rotate-135')
$card.classList.add('opacity-80' ,'sepia')
$card.classList.remove('opacity-80','sepia')
$card.classList.add('opacity-80','sepia')
$card.classList.remove('rotate-135','opacity-80')
$card.classList.toggle('opacity-80','sepia')

//Texto y HTML

const $explicacionDOM = document.getElementById('que-es')
let text = '
<p> 
    El modelo de objetos de documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML. 
</p> 
<p> 
    Este provee una representación estructural del documento,permitiendo modificar su contenido y presentación visual mediante código JS. 
</p> 
<p> 
    <mark>El DOM no es parte de la especificación de JavaScript,es una API para los navegadores.</mark> 
</p> 
'
$explicacionDOM.innerText = text
$explicacionDOM.textContent = text
$explicacionDOM.innerHTML = text
$explicacionDOM.outerHTML = text
$explicacionDOM.innerHTML = text

const $cards = document.querySelector('.cards')
console.log($cards)
console.log($cards.children)
console.log($cards.children[2])
console.log($cards.parentElement)
console.log($cards.parentNode)
console.log($cards.firstElementChild)
console.log($cards.lastElementChild)
console.log($cards.previousElementSibling)
console.log($cards.nextElementSibling)

//Creamos una nueva imagen (figure)

const $figure = document.createElement('figure'),
      $img = document.createElement('img'),
      $figcaption = document.createElement('figcaption'),
      $figcaptionText = document.createTextNode('Tecnologia 6'),
      $cardsPadre = document.querySelector('.cards')

// Dinamicamente estan credas las etiquetas pero no estan agragdas al arbol del DOM.

$img.setAttribute('src', 'IMG/imagen7.sve') 
$img.setAttribute('alt', 'Sexta imagen de Tecnologia') 
$img.setAttribute('width', '3980px') 
$figure.classList.add('card') 

$figcaption.appendChild($figcaptionText) 
$figure.appendChild($img) 
$figure .appendChild($figcaption) 
$cardsPadre .appendChild($figure) 

$figure2 = document.createElement('figure') 
$figure2.innerHTML = ' 
<img src="IMG/imagen8.jpe" alt="Aqui se debe mostrar una imagen” width="300px"> 
<figcaption>Tecnologia 7</figcaption> 
'

$figure2.classList.add('card') 
$cardsPadre.appendChild($figure2) 