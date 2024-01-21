export const formatDAte = (date) =>{
    const options = {
        weeday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return date.toLocaleDateString('ru-RU', options)
}