<template>
  <v-app id="inspire">
    <v-main id="bg-color">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              class="bg-grey-darken-4 elevation-2"
            >
              <v-list theme="dark" rounded="lg">
                <v-list-item v-for="(item, i) in items" :key="i" @click="navigate(i)" v-model="selected">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col
            sm="9"
          >
            <v-sheet
              class="bg-grey-darken-4 elevation-2"
              rounded="lg"
            >
              <Users
                v-if="selected === 0"
              />
              <Products
                v-if="selected === 1"
              />
            </v-sheet>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Users from "@/components/Users.vue";
import Products from "@/components/Products.vue";
import ProductsCategoryFilter from "@/components/ProductsCategoryFilter.vue";

export default {
  components: {
    ProductsCategoryFilter,
    Products,
    Users,
  },
  data() {
    return{
      selected: 0,
      slider2: 0,
      items: [
        { title: 'Usuários'},
        { title: 'Produtos'}
      ],
    }
  },
  methods: {
    navigate(index) {
      // Navigate to the selected item.
      this.selected = index
    },

  },

}
</script>

<style>
#bg-color {
  background-color: dimgrey;
}
</style>
