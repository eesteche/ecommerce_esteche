export const createAdaptedCategory = (doc) => {
    const data = doc.data()

    const formattedCategory = {
        id: doc.id,
        category: data.categoria
    }

    return formattedCategory
}