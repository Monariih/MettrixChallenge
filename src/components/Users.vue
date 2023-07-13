<template>
  <v-container>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Buscar"
      variant="underlined"
      density="compact"
      single-line
      hide-details
    ></v-text-field>
  </v-container>

  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="users"
    :search="search"
    item-value="name"
    theme="dark"
  >

  </v-data-table>
</template>
<script>
import { VDataTable } from 'vuetify/labs/VDataTable'

export default {
  components:{
    VDataTable
  },
  data:() => ({
    search: '',
    users: [],
    itemsPerPage: 10,
    headers: [
      {
        title: 'Nomes',
        align: 'start',
        sortable: false,
        key: 'firstName',
      },
      { title: 'Idade', align: 'end', key: 'age' },
      { title: 'Nascimento', align: 'end', key: 'birthDate' },
      { title: 'Altura (cm)', align: 'end', key: 'height' },
    ],
  }),
  async mounted(){
    const response = await fetch('https://dummyjson.com/users')
      .then(response => response.json())
    this.users = response.users
  }
}

</script>
