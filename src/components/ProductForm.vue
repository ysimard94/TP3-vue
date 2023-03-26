<template>
  <div>
    <h1>{{ msg }}</h1>
    <p class="error" v-if="this.error === true">Please fill all the fields</p>
    <p class="success" v-if="this.success === true">The product has been added</p>
    <form @submit.prevent="newProduct">
      <label>Product name</label>
      <input type="text" v-model="product.name" placeholder="Enter product name">
      <label>Description</label>
      <input type="text" v-model="product.description" placeholder="Enter the product description">
      <label>Price</label>
      <input type="text" v-model="product.price" placeholder="Enter product price">
      <label>Category</label>
      <input type="text" v-model="product.category" placeholder="Enter product category">
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  props: {
    msg: String,
    addTo: Function
  },
  data () {
    return {
      product: {
        name: '',
        description: '',
        price: '',
        category: ''
      },
      error: false,
      success: false
    }
  },
  methods: {
    newProduct () {
      if (this.product.name === '' || this.product.description === '' || this.product.price === '' || this.product.category === '') {
        this.error = true
        return
      }
      this.error = false
      this.success = true
      this.$emit('addTo', this.product)
      this.product = {}
      setTimeout(() => {
        this.success = false
      }, 5000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
form {
  position: relative;
  display: flex;
  flex-direction: column;
}

form input {
  padding: 10px;
  border: 1px solid rgba(128, 128, 128, 0.459);
  border-radius: 5px;
}

form button {
  background-color: #A19B92;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  transition: background-color 200ms ease-in-out;
}

form button:hover {
  background-color: #b6b0a7;
}

form>* {
  margin-top: 16px;
}
</style>
