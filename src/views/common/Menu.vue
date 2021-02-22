<template>
  <div class="menu">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header>Quiz options</q-item-label>
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/quizzes">
          <q-item-section avatar>
            <q-icon name="playlist_add_check" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Quizzes</q-item-label>
            <q-item-label caption>Check my quizzes</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/history">
          <q-item-section avatar>
            <q-icon name="history" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Quizzes History</q-item-label>
            <q-item-label caption>Past quizzes</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
  props: {
    leftDrawerOpenProp: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      leftDrawerOpen: this.leftDrawerOpenProp
    };
  },
  watch: {
    leftDrawerOpenProp(value) {
      this.leftDrawerOpen = value;
    }
  }
};
</script>
