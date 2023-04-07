<template>
    <div class="products">
        <h1>Product list</h1>
        <div class='product-list' v-if="products.length != 0">
            <!-- Va boucler dans le tableau de produits pour tous les afficher -->
            <div v-for="product in products" :key="product.name" class="product">
                <img :src="`${product.image}`" alt="image category">
                <p>Name: {{ product.name }}</p>
                <p>Description: {{ product.description }}</p>
                <p>Price: {{ product.price }}</p>
                <p>Category: {{ product.category }}</p>
                <div>
                    <!-- Lien pour aller sur la page de modification d'un produit spécifique -->
                    <router-link :to="{ name: 'edit', params: { id: product.id } }">Edit</router-link>
                    <!-- Bouton qui va supprimer un produit spécifique -->
                    <button class='btn-delete' @click="deleteProduct(product)">Delete</button>
                </div>
            </div>
        </div>
        <p v-else>There are no products</p>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'ProductsView',
    props: {
        products: Array
    },
    methods: {
        // Méthode qui va emit l'événement à deleteProduct avec la donnée reçue en paramètre pour la suppression du produit
        deleteProduct (product) {
            this.$emit('deleteProduct', product)
        }
    }
}
</script>

<style>
.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin-block: 22px;
    border-spacing: 0;
    grid-gap: 10px;
    width: 100%;
}

.product-list p {
    text-align: start;
}

.product-list p,
.product-list div {
    padding: 0.5rem 0;
    margin: 0;
}

.product div {
    display: flex;
    align-items: center;
    gap: 10px;
}

.product {
    display: flex;
    flex-direction: column;
    width: 250px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.308);
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

p {
    word-wrap: break-word;
    max-width: 20ch;
}

img {
    width: 250px;
    height: 200px;
    object-fit: cover;
}
</style>
