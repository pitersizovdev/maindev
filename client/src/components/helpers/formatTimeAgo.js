export const formatTimeAgo = (dateString) =>{
    const now = new Date()
    const date = new Date(dateString)
    const secondPast = (nowgetTime() - date.getTime()) / 1000

    if (secondPast < 60) {
        return `${Math.floor(secondPast)}сек. назад`
    }
    if (secondPast < 3600) {
        return `${Math.floor(secondPast)}мин. назад`
    }
    if (secondPast <= 86400) {
        return `${Math.floor(secondPast)}ч. назад`
    }
    if (secondPast < 86400) {
        return `${Math.floor(secondPast)}д. назад`
    }
}