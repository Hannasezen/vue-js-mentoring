<template>
  <div class="container">
    <header class="header">
      <Logo />
      <Search :stroke="'#F65261'" />
    </header>
    <div class="film-details">
      <div class="image">
        <img src="/images/covers/bohemian.png" alt="film" />
      </div>
      <div class="content">
        <div class="title">
          <div class="name">
            Pulp Fiction
            <span class="score">8.9</span>
          </div>
          <div class="genre">Action &#038; Adventure</div>
        </div>

        <div class="numbers">
          <span class="date">1994</span>
          <span class="duration">154</span>
        </div>
        <div class="description">
          Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta)
          are two hit men who are out to retrieve a suitcase stolen from their
          employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also
          asked Vincent to take his wife Mia (Uma Thurman) out a few days later
          when Wallace himself will be out of town. Butch Coolidge (Bruce
          Willis) is an aging boxer who is paid by Wallace to lose his fight.
          The lives of these seemingly unrelated people are woven together
          comprising of a series of funny, bizarre and uncalled-for
          incidents.—Soumitra
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/atoms/Logo.vue";
import Search from "@/components/icons/SearchIcon.vue";

export default defineComponent({
  name: "Details",
  components: { Logo, Search },
  props: {
    title: {
      type: String,
    },
  },
  mounted() {
    console.log(this);
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.container {
  @include container();
  padding: 38px 20px 30px;
}

.header {
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px;
}

.film-details {
  display: flex;
  justify-content: space-between;
}

.image {
  max-width: 323px;
  margin: 0 60px 0 0;
  flex-shrink: 0;

  img {
    display: block;
    max-width: 100%;
  }
}

.content {
  text-align: left;
}

.title {
  margin: 0 0 30px;
}

.name {
  display: flex;
  align-items: center;
  margin: 0 0 4px;
  font-size: $font-size-xl;
  line-height: $line-height-xl;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.score {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 0 0 0 20px;
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: 20px;
  line-height: 24px;
}

.genre {
  font-size: $font-size-xs;
  line-height: $line-height-xs;
  font-weight: 500;
  opacity: 0.5;
}

.numbers {
  margin: 0 0 30px;
  font-size: $font-size-l;
  line-height: $line-height-l;
  color: $red;
}

.date {
  margin: 0 50px 0 0;
}

.description {
  font-weight: 300;
  font-size: $font-size-m;
  line-height: $line-height-m;
  opacity: 0.5;
}
</style>
