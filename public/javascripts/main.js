let typingTimer
const typingDelay = 500

const inputElement = document.getElementById('quantity')
const container = document.getElementById('items')

const createContent = (value) => {
  const arr = Array.from({ length: value }, (_, i) => i + 1)
  arr.forEach((_, index) => {
    const content = document.createElement('div')
    content.className = 'border border-bg-input rounded px-6 py-3 h-fit'
    content.innerText = index + 1
    container.append(content)
  })
}

const postItem = async (item) => {
  const res = await fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item }),
  })
  const data = await res.json()
  console.log(data)
}
inputElement.addEventListener('input', async function ({ target }) {
  clearTimeout(typingTimer)

  this.value = this.value.replace(/[^0-9]/g, '')
  const value = Number(this.value)
  typingTimer = setTimeout(() => {
    container.innerHTML = ''
    createContent(value)
    postItem(value)
  }, typingDelay)
})
