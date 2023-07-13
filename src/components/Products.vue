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
  <v-col>

    <ProductsCategoryFilter
      :selectedCategory="selectedCategory"
      @categoryUpdate="categoryUpdate"
    />

  </v-col>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="products"
    :search="search"
    item-value="name"
    theme="dark"
  >
  </v-data-table>
</template>
<script>
import { VDataTable } from 'vuetify/labs/VDataTable'
import ProductsCategoryFilter from "@/components/ProductsCategoryFilter.vue";

export default {
  components:{
    ProductsCategoryFilter,
    VDataTable
  },
  data:() => ({
    search: '',
    selectedCategory: '',
    products: [],
    itemsPerPage: 10,
    headers: [
      {
        title: 'Nomes',
        align: 'start',
        sortable: false,
        key: 'title',
      },
      { title: 'Preço', align: 'end', key: 'price' },
      { title: 'Fabricante', align: 'end', key: 'brand' },
      { title: 'Nota', align: 'end', key: 'rating' },
      { title: 'Quantidade', align: 'end', key: 'stock'}
    ],
  }),
  methods:{
    async categoryUpdate(selectedCategory){
      this.selectedCategory = selectedCategory
      const response = await fetch(`https://dummyjson.com/products/category/${this.selectedCategory}`)
        .then(response => response.json())

      if (selectedCategory === undefined){
        const response = await fetch(`https://dummyjson.com/products`)
          .then(response => response.json())
        return this.products = response.products
      }
      this.products = response.products
    }
  },
  watch:{
    selectedCategory(newValue){
      this.categoryUpdate(newValue)
    }
  },
  async mounted(){
    const response = await fetch(`https://dummyjson.com/products`)
      .then(response => response.json())
    this.products = response.products
  },
}
</script>
