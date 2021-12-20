<template>
  <div v-if="title" class="holder" @mouseleave="closeMenu">
    <div class="card">
      <router-link :to="{ name: 'Details', params: { title } }">
        <img
          v-if="poster_path"
          v-lazy-load
          :data-url="poster_path"
          :alt="title"
          class="cover"
        />
        <img v-else class="cover" src="/images/covers/coming-soon.jpg" />
        <div class="header">
          <h3 class="title">
            {{ title }}
          </h3>
          <div v-show="release" class="date">{{ release }}</div>
        </div>
        <p class="description">{{ overview }}</p>
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
    <div v-show="isContextMenuOpen" class="context-menu">
      <button class="close-button" @click="toggleContextMenu">
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
    overview: {
      type: String,
    },
    release_date: {
      type: String,
    },
    poster_path: {
      type: String,
    },
  },
  computed: {
    release(): string {
      return this.$props.release_date?.substring(0, 4) || "";
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

  @media screen and (min-width: 1024px) {
    max-width: 323px;
  }
}

.card {
  display: block;
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.cover {
  display: block;
  width: 100%;
  object-fit: cover;
  margin: 0 0 22px;

  aspect-ratio: 323 / 450;
}

.date {
  align-self: start;
  min-width: 66px;
  padding: 2px 7px 5px;
  margin: 0 0 0 12px;
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
