<template>
  <div class="home">
    <!-- Va connecter la méthode addTo dans la composante avec la méthode newProduct pour le partage du produit à créer -->
    <ProductForm @addTo="newProduct" :categories="categories"/>
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
        addProduct: Function,
        products: Array,
        valid: Boolean,
        categories: Array
    },
    methods: {
        // Méthode qui va emit l'événement à addProduct avec la donnée reçue en paramètre pour la création du produit
        newProduct (product) {
            this.$emit('addProduct', product)
        }
    }
}
</script>
