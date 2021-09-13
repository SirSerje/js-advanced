// DOM props
document.body.doSome = () => {
  console.log('custom prop');
}

//atributes

elem.hasAttribute(name)
elem.getAttribute(name)
elem.setAttribute(name, val)
elem.removeAttribute(name)
elem.attributes

// DOM proprs has type 
/** <input id="input" type="checkbox" checked> checkbox
<script>
  alert(input.getAttribute('checked')); // значение атрибута: пустая строка
  alert(input.checked); // значение свойства: true
</script>
**/


//TODO: dataset example!