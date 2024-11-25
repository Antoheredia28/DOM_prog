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


