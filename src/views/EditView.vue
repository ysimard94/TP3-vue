<template>
    <div>
        <h1>Edit Product</h1>
        <!-- Va montrer un message d'erreur ou de succès si les conditions sont ou ne sont pas respectées -->
        <p class="error" v-if="this.error === true">Please fill all the fields</p>
        <p class="success" v-if="this.success === true">The product has been added</p>
        <form @submit.prevent="editedProduct">
            <label>Product name</label>
            <input type="text" v-model="product.name" placeholder="Enter product name">
            <label>Description</label>
            <input type="text" v-model="product.description" placeholder="Enter the product description">
            <label>Price</label>
            <input type="text" v-model="product.price" placeholder="Enter product price">
            <small style="color: red;" v-show="error_number">Please only enter numbers</small>
            <label>Category</label>
            <select v-model="product.category">
                <option disabled value="">Please select a category</option>
                <!-- Va cycler à travers le tableau des catégories -->
                <option v-for="category in categories" :value="category.name" :key="category.name">{{ category.name }}</option>
            </select>
            <button type="submit">Edit Product</button>
        </form>
    </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
    name: 'EditView',
    props: {
        products: Array,
        categories: Array
    },
    data () {
        return {
            product: {},
            error: false,
            success: false,
            error_number: false
        }
    },
    methods: {
        // Méthode qui va mettre à jour les valeurs du produit modifié à l'API et rediriger vers la page de produits
        editedProduct () {
            // Vérifie si les champs sont remplis et si le prix est un nombre, sinon affiche un message d'erreur
            if (this.product.name === '' || this.product.description === '' || this.product.price === '' || this.product.category === '') {
                this.error = true
                return
            }
            if (isNaN(this.product.price)) {
                this.error_number = true
                return
            }
            this.product.image = this.categories.find(category => category.name === this.product.category)?.path
            ProductDataService.update(this.$route.params.id, this.product)
            .then(() => {
                this.$router.push('/products')
            })
            .catch(e => {
                console.log(e)
            })
        }
    },
    mounted () {
        // Récupère l'id envoyé en prop et récupère l'objet correspondant dans le tableau de produits pour afficher les valeurs dans le formulaire
        const id = parseInt(this.$route.params.id)
        this.product = this.products.find(
            (product) => product.id === id
        )
    }
}
</script>
