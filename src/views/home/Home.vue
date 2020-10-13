<template>
  <div class="home">
    123
  </div>
</template>

<script>
// @ is an alias to /src
import books from "@/api/books";

export default {
  name: "Home",
  created() {
    this.hello();
  },
  methods: {
    hello() {
      console.log();
      books.getBooks({
        list_page: 4,
        list_limit: 10
      });
    }
  }
};
</script>
