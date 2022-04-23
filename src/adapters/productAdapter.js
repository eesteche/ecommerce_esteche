export const createAdaptedProduct = (doc) => {
    const data = doc.data()

    const formattedProduct = {
        id: doc.id,
        title: data.title,
        category: data.category,
        pictureUrl: data.pictureUrl,
        price: data.price,
        stock: data.stock,
        description: data.description
    }

    return formattedProduct
}