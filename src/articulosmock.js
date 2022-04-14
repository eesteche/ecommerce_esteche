const products = [
 {id: 1, title: 'Cama', description: 'Cama super cómoda, ¡comprala!',price: 500, category: 'muebles',stock: 5 ,pictureUrl: '.../../img/cama.png'}
,{id: 2, title: 'Heladera', description: 'Heladera super confiable, ¡comprala! ',price: 500, category: 'electro',stock: 5 ,pictureUrl: '../../img/fridge.png'}
,{id: 12, title: 'Notebook Lenovo', description: 'Notebook barata y buena, ¡comprala!',price: 1750, category: 'tecnologia',stock: 5 ,pictureUrl: '../../img/notebook_lenovo.png'}
,{id: 3, title: 'Sofa', description: 'Sofa super cómodo, ¡compralo!',price: 250, category: 'muebles',stock: 5 ,pictureUrl: '../../img/sofa.png'}
,{id: 4, title: 'Cocina', description: 'Cocina super increíble, ¡comprala!',price: 250, category: 'electro',stock: 5 ,pictureUrl: '../../img/stove.png'}
,{id: 14, title: 'Notebook Asus', description: 'Notebook baratita y sensacional, ¡comprala!',price: 1999, category: 'tecnologia',stock: 5 ,pictureUrl: '../../img/notebook_asus.png'}
,{id: 5, title: 'Television', description: 'Television con imagen sensacional, ¡comprala!',price: 250, category: 'electro',stock: 5 ,pictureUrl: '../../img/tv.png'}
,{id: 6, title: 'Cama', description: 'Cama super cómoda, ¡comprala!',price: 500, category: 'muebles',stock: 5 ,pictureUrl: '.../../img/cama.png'}
,{id: 13, title: 'Notebook Lenovo', description: 'Notebook barata y buena, ¡comprala!',price: 1750, category: 'tecnologia',stock: 5 ,pictureUrl: '../../img/notebook_lenovo.png'}
,{id: 7, title: 'Heladera', description: 'Heladera super confiable, ¡comprala! ',price: 500, category: 'electro',stock: 5 ,pictureUrl: '../../img/fridge.png'}
,{id: 8, title: 'Sofa', description: 'Sofa super cómodo, ¡compralo!',price: 250, category: 'muebles',stock: 5 ,pictureUrl: '../../img/sofa.png'}
,{id: 9, title: 'Cocina', description: 'Cocina super increíble, ¡comprala!',price: 250, category: 'electro',stock: 5 ,pictureUrl: '../../img/stove.png'}
,{id: 10, title: 'Television', description: 'Television con imagen sensacional, ¡comprala!',price: 250, category: 'electro',stock: 5 ,pictureUrl: '../../img/tv.png'}
,{id: 11, title: 'Notebook Asus', description: 'Notebook baratita y sensacional, ¡comprala!',price: 1999, category: 'tecnologia',stock: 5 ,pictureUrl: '../../img/notebook_asus.png'}
,{id: 15, title: 'Belakor - Coherence', description: 'El mejor album del 2022 ¡compralo!',price: 60, category: 'musica',stock: 5 ,pictureUrl: '../../img/belakor_coherence.png'}
,{id: 16, title: 'Belakor - Of Breath And Bone', description: 'El mejor disco de la historia, ¡compralo!',price: 60, category: 'musica',stock: 5 ,pictureUrl: '../../img/belakor_ofbab.png'}
]

export const getProducts = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        },1000)
    })
}

export const getProductsByCategory = (categoryId) => {   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 1000)
    })
}