<template>
  <div class="home">
    <ProductForm :msg="msg" @addTo="newProduct"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductForm from '@/components/ProductForm.vue'

export default {
  name: 'HomeView',
  components: {
    ProductForm
  },
  props: {
    msg: String,
    addProduct: Function,
    products: Array,
    valid: Boolean
  },
  methods: {
    newProduct (product) {
      this.$emit('addProduct', product)
    }
  }
}
</script>
