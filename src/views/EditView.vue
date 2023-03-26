<template>
    <div>
        <h1>Edit Product</h1>
        <form @submit.prevent="editedProduct">
            <label>Product name</label>
            <input type="text" v-model="product.name" placeholder="Enter product name">
            <label>Description</label>
            <input type="text" v-model="product.description" placeholder="Enter the product description">
            <label>Price</label>
            <input type="text" v-model="product.price" placeholder="Enter product price">
            <label>Category</label>
            <input type="text" v-model="product.category" placeholder="Enter product category">
            <button type="submit">Edit Product</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'EditView',
    props: {
        products: Array
    },
    data () {
        return {
            product: {}
        }
    },
    methods: {
        editedProduct () {
            this.products.map((product) => {
                if (product.id === this.product.id) {
                    product.name = this.product.name
                    product.description = this.product.description
                    product.price = this.product.price
                    product.category = this.product.category
                }
                return product
            })
        }
    },
    mounted () {
        const id = parseInt(this.$route.params.id)
        this.product = this.products.find(
            (product) => product.id === id
        )
    }
}
</script>
