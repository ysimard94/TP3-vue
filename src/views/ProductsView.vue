<template>
    <div class="products">
        <h1>Product list</h1>
        <table class='product-list' v-if="products.length != 0">
            <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
            </tr>
            <tr v-for="product in products" :key="product.name">
                <td>{{product.name}}</td>
                <td>{{product.description}}</td>
                <td>{{product.price}}</td>
                <td>{{product.category}}</td>
                <td>
                    <router-link :to="{ name: 'edit', params: { id: product.id }}">Edit</router-link>
                </td>
                <td><button class='btn-delete' @click="deleteProduct(product)">Delete</button></td>
            </tr>
        </table>
        <p v-else>There are no products</p>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'ProductsView',
    components: {},
    props: {
        msg: String,
        products: Array
    },
    methods: {
        deleteProduct (product) {
            this.$emit('deleteProduct', product)
        }
    }
}
</script>

<style>
.product-list {
  margin-block: 22px;
  border-spacing: 0;
  width: 100%;
}

.product-list th {
  text-align: start;
}

.product-list td, .product-list th {
  padding: 0.5rem 1rem;
}

.btn-delete {
  background-color: #c05656;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  transition: background-color 200ms ease-in-out;
}

th {
  color: #91897c;
}

td {
  word-wrap: break-word;
  max-width: 20ch;
  border-top: 1px solid #A19B92;
}
</style>
