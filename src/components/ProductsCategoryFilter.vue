<template>
  <v-slide-group
    v-model="localSelectedCategory"
    selected-class="text-primary"
    show-arrows
  >
    <v-slide-group-item
      v-slot="{ isSelected, toggle, selectedClass }"
      v-for="category in categories"
      :key="category"
      :value="category"
    >
      <v-chip-group>
        <v-chip
          :class="[selectedClass]"
          @click="toggle"
        >
          {{ category }}
        </v-chip>
      </v-chip-group>
    </v-slide-group-item>
  </v-slide-group>
</template>
<script>
export default {
  name: 'ProductsCategoryFilter',

  props: {
    selectedCategory: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      model: null,
      categories: [],
      localSelectedCategory: ''
    }
  },
  async mounted(){
    const response = await fetch('https://dummyjson.com/products/categories')
      .then(response => response.json())

    this.categories = response
  },
  created() {
    this.localSelectedCategory = this.selectedCategory
    console.log(this.selectedCategory)
  },
  watch:{
    localSelectedCategory(newValue){
      this.$emit('categoryUpdate', newValue)
    }
  }
}
</script>
