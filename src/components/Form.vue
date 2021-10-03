<template>
    <form
  id="app"
  @submit.prevent="checkForm"
  method="post"
>

  <p v-if="errors">
    <b>Please correct the following error(s):</b>
    <b>{{errors}}</b>
  </p>
  <p v-if="success">
      <b>Successfully submitted</b>
</p>

  <p>
    <label for="url">Url</label>
    <input
      id="url"
      v-model="url"
      type="text"
      name="url"
    >
  </p>
<p>
    <label for="slug">Slug</label>
    <input
      id="slug"
      v-model="slug"
      type="text"
      name="slug"
    >
  </p>
 

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
</template>
<script>
import axios from "axios";
export default {
  name: "Form",
  data() {
    return {
      url: "",
      slug: "",
      errors: '',
      success: false,
    };
  },
  methods: {
    checkForm() {
        let self= this
      try {
        const api = "/api/url";
        axios
          .post(api, {
            url: this.url,
            slug: this.slug,
          })
          .then((response) => {
              console.log(response)
              self.errors=''
              self.success=true
          })
          .catch((error) => {
            self.success=false
            self.errors = error.response && error.response.data && error.response.data.message;
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>