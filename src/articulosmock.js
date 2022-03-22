const products = [
 {id: 1, title: 'Cama', description: 'Cama super cómoda, ¡comprala!',price: 500, category: 'Camas y sommiers',stock: 5 ,pictureUrl: '.../../img/bed.png'}
,{id: 2, title: 'Heladera', description: 'Heladera super confiable, ¡comprala! ',price: 500, category: 'Refrigeracion',stock: 5 ,pictureUrl: '../../img/fridge.png'}
,{id: 3, title: 'Sofa', description: 'Sofa super cómodo, ¡compralo!',price: 250, category: 'Muebles',stock: 5 ,pictureUrl: '../../img/sofa.png'}
,{id: 4, title: 'Cocina', description: 'Cocina super increíble, ¡comprala!',price: 250, category: 'Coccion',stock: 5 ,pictureUrl: '../../img/stove.png'}
,{id: 5, title: 'Television', description: 'Television con imagen sensacional, ¡comprala!',price: 250, category: 'Televisores',stock: 5 ,pictureUrl: '../../img/tv.png'}
,{id: 6, title: 'Cama', description: 'Cama super cómoda, ¡comprala!',price: 500, category: 'Camas y sommiers',stock: 5 ,pictureUrl: '.../../img/bed.png'}
,{id: 7, title: 'Heladera', description: 'Heladera super confiable, ¡comprala! ',price: 500, category: 'Refrigeracion',stock: 5 ,pictureUrl: '../../img/fridge.png'}
,{id: 8, title: 'Sofa', description: 'Sofa super cómodo, ¡compralo!',price: 250, category: 'Muebles',stock: 5 ,pictureUrl: '../../img/sofa.png'}
,{id: 9, title: 'Cocina', description: 'Cocina super increíble, ¡comprala!',price: 250, category: 'Coccion',stock: 5 ,pictureUrl: '../../img/stove.png'}
,{id: 10, title: 'Television', description: 'Television con imagen sensacional, ¡comprala!',price: 250, category: 'Televisores',stock: 5 ,pictureUrl: '../../img/tv.png'}
]

export const getProducts = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        },2000)
    })
}