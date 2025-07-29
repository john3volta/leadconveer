export const loadSprite = async (): Promise<void> => {
  try {
    const response = await fetch('/src/assets/sprite.svg')
    const svg = await response.text()
    
    const div = document.createElement('div')
    div.innerHTML = svg
    div.style.display = 'none'
    document.body.appendChild(div)
  } catch (error) {
    console.error('Failed to load SVG sprite:', error)
  }
} 