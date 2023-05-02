export function getRandomColor(){
    const hue = 360 * Math.random()
    const saturation = 25 + 70 * Math.random()
    const lightness = 30 + 10 * Math.random()
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}