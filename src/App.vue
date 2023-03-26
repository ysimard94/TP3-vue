<template>
  <nav>
    <router-link to="/">Add Product</router-link> |
    <router-link to="/products">Product List</router-link>
  </nav>
  <div class="container">
    <router-view @addProduct="addProduct" @deleteProduct="deleteProduct" :products="allProducts" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      allProducts: [],
      id: 0
    }
  },
  methods: {
    addProduct (product) {
      product.id = this.id++
      this.allProducts.push(product)
    },
    deleteProduct (product) {
      this.allProducts = this.allProducts.filter(p => p.id !== product.id)
    }
  }
}
</script>

<style>
body {
  background-color: #313034;
}

#app {
  background-color: #F7F3F1;
  max-width: 800px;
  margin-inline: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 10px;
}

nav {
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  background-color: #A19B92;
  border-radius: 10px 10px 0 0;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 1rem 1rem;
  transition: background-color 200ms ease-in-out;
}

nav a:first-of-type {
  margin-left: auto;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

nav a:last-of-type {
  margin-right: auto;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

nav a:hover {
  background-color: #b6b0a7;
  padding: 1rem;
}

.container {
  padding: 24px;

}

.success {

  background-color: #6aa16a;
  outline: 1px solid #9de29d;
  text-align: center;
  width: calc(100% - 22px);
  color: white;
  margin: 0;
  padding: 10px;
  border-radius: 5px;
  animation: fade-in-out 5000ms ease-in-out;
}

.error {
  background-color: #c05656;
  outline: 1px solid #d88585;
  text-align: center;
  width: calc(100% - 22px);
  color: white;
  margin: 0;
  padding: 10px;
  border-radius: 5px;
  animation: fade-in 500ms ease-in;
}

@keyframes fade-in {
  0% {
    transform: translateY(15px);
    opacity: 0;
  }

  50% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in-out {
  0% {
    transform: translateY(15px);
    opacity: 0;
  }

  5% {
    transform: translateY(0);
    opacity: 1;
  }

  95% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-15px);
    opacity: 0;
  }
}
</style>
