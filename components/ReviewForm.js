


app.component('review-form', {
    template: 
    /*html*/
    `<!--prevent - prevents the default browser refresh-->
    <form class="review-form" @submit.prevent="onSubmit" >
    <h3>Leave a review</h3>

    <label for="name">Name:</label>
    <!--v-model to bind the name of the input with the data-->
    <input id="name" v-model="name">

    <label for="review">Review:</label>  
     <!--v-model to bind the name of the input with the data-->    
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
     <!--v-model.number is typecasting the value as a number-->
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <label for="recommendation">Would your recommend this product?</label>
    <textarea id="recommendation" v-model="recommendation"></textarea>

    <input class="button" type="submit" value="Submit">  

  </form>`,
  data() {
    return {
        name: '',
        review: '',
        rating: null,
        recommendation: ''
    }
  },
  methods: {
    onSubmit() {

        if(this.name === '' || this.review === '' || this.rating === null || this.recommendation === '') {
            alert('Review ist incomplete. Please fill out every field.')
            return
        }

        let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
            recommendation: this.recommendation
        }
        this.$emit('review-submitted', productReview)

        this.name = ''
        this.review = ''
        this.rating = null
        this.recommendation = ''
    }
  }
})