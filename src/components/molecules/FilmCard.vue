<template>
  <div class="card">
    <img :src="image" :alt="title" class="cover" />
    <div class="header">
      <h3 class="title">
        {{ title }}
      </h3>
      <div class="date">{{ releaseDate }}</div>
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilmCard",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    releaseDate: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.card {
  max-width: 323px;
  text-align: left;
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: space-between;
}

.title {
  margin: 0 0 8px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  opacity: 0.7;
}

.description {
  margin: 0;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  opacity: 0.5;
}

.cover {
  display: block;
  width: 100%;
  object-fit: cover;
  margin: 0 0 22px;
}

.date {
  padding: 4px 8px;
  border: 1px solid $shadow-grey;
  border-radius: 4px;
  font-size: 14px;
  line-height: 17px;
  opacity: 0.5;
}
</style>
