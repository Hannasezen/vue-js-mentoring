<template>
  <div class="holder" v-if="title" @mouseleave="closeMenu">
    <div class="card">
      <router-link to="/details">
        <img v-if="image" :src="image" :alt="title" class="cover" />
        <div class="header">
          <h3 class="title">
            {{ title }}
          </h3>
          <div class="date">{{ releaseDate }}</div>
        </div>
        <p class="description">{{ description }}</p>
      </router-link>
    </div>
    <div class="menu" @click="toggleContextMenu">
      <button>
        <svg
          width="4"
          height="19"
          viewBox="0 0 4 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="2" r="2" fill="white" />
          <circle cx="2" cy="9.5" r="2" fill="white" />
          <circle cx="2" cy="17" r="2" fill="white" />
        </svg>
      </button>
    </div>
    <div class="context-menu" v-show="isContextMenuOpen">
      <button @click="toggleContextMenu" class="close-button">
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.09677 1.59464L10.9029 11.6236"
            stroke="white"
            stroke-linecap="round"
          />
          <path
            d="M10.9032 1.59464L1.0971 11.6236"
            stroke="white"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <button class="option-button" @click="openEditFilmForm">Edit</button>
      <button class="option-button" @click="deleteFilm">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilmCard",
  data() {
    return {
      isContextMenuOpen: false,
    };
  },
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
  methods: {
    toggleContextMenu() {
      this.isContextMenuOpen = !this.isContextMenuOpen;
    },
    closeMenu() {
      this.isContextMenuOpen = false;
    },
    openEditFilmForm() {
      console.log(`edit ${this.title}`);
    },
    deleteFilm() {
      console.log(`delete ${this.title}`);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.holder {
  position: relative;
  display: inline-block;

  button {
    @include button();
  }
}

.card {
  display: block;
  text-align: left;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    max-width: 323px;
  }
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
  align-self: start;
  min-width: 66px;
  padding: 2px 7px 5px;
  border: 1px solid $shadow-grey;
  box-sizing: border-box;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  opacity: 0.5;
}

.menu {
  display: none;
  position: absolute;
  top: 16px;
  right: 14px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: $bg-color;
  cursor: pointer;
}

.context-menu {
  position: absolute;
  top: 12px;
  right: 14px;
  padding: 8px 0 12px;
  background: $bg-color;

  .option-button {
    width: 100%;
    padding: 11px 24px;
    font-family: inherit;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    color: inherit;

    &:hover {
      background: $button-hover-bg-color-secondary;
    }
  }

  .close-button {
    display: block;
    margin: 0 6px 6px auto;
  }
}

.holder:hover .menu {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
