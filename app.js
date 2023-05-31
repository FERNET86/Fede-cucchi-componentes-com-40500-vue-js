Vue.component('equipos', {
    props: {
      data: {
        type: Array,
        required: true
      },
      color: {
        type: String,
        default: 'black'
      }
    },
    template: `
    <table :style="{ color: color, background: 'lightgrey' }">
      <tr v-for="item in data" :key="item.id">
        <td>
          <img :src="item.imagen" :alt="item.name" width="100" height="100">
        </td>
        <td>{{ item.nombre }}</td>
        <td>{{ item.numero }}</td>
      </tr>
    </table>
    `
  });
  
  new Vue({
    el: '#app',
    data: {
      river_plate: [
        { id: 1, imagen: "https://upload.wikimedia.org/wikipedia/commons/3/39/River_Plate_logo.svg"},        
        { id: 2, nombre: 'Enzo Perez', numero: 24 },
        { id: 3, nombre: 'Lucas Beltran', numero: 18 },
        { id: 4, nombre: 'Rodrigo Aliendro', numero: 29 }
      ],
      racing_club: [
        { id: 5, imagen: "https://upload.wikimedia.org/wikipedia/commons/5/56/Escudo_de_Racing_Club_%282014%29.svg"},      
        { id: 6, nombre: 'Gabriel Hauche', numero: 7 },
        { id: 7, nombre: ' Iván Pillud', numero: 4 },
        { id: 8, nombre: 'Aníbal Moreno', numero: 29 }
      ],
      independiente: [
        { id: 9, imagen: "https://upload.wikimedia.org/wikipedia/commons/d/db/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg"},      
        { id: 10, nombre: 'Martín Cauteruccio', numero: 9 },
        { id: 11, nombre: 'Rodrigo Rey', numero: 33 },
        { id: 12, nombre: 'Nicolas Vallejo ', numero: 21 }
      ],
      san_lorenzo: [
        { id: 13, imagen: "https://upload.wikimedia.org/wikipedia/commons/6/62/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.png"},      
        { id: 14, nombre: 'Agustín Martegani', numero: 20 },
        { id: 15, nombre: 'Adam Bareiro ', numero: 11 },
        { id: 16, nombre: 'Andrés Vombergar', numero: 18 }
      ],
      boca_juniors: [
        { id: 17, imagen: "https://upload.wikimedia.org/wikipedia/commons/8/83/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors.svg"},      
        { id: 18, nombre: 'Luis Advíncula', numero: 17 },
        { id: 19, nombre: 'Paul Fernandez', numero: 8 },
        { id: 20, nombre: 'Luca Langoni', numero: 41 }
      ]
    }
  });
  
