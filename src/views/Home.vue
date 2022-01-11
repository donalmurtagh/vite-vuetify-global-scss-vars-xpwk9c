<template>
  <div>
    <h2>Home</h2>
    <pre>$date-picker-table-height: 500px;</pre>
    <v-container>
      <v-row justify="center">
        <v-date-picker v-model="picker"></v-date-picker>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
    }
  },
}
</script>

<style lang="scss">
h2 {
  color: $my-custom-color;
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  h2 {
    color: yellow !important;
  }
}
</style>


<!--
<style lang="sass">
h2
  color: $my-custom-color

@media #{map-get($display-breakpoints, 'md-and-down')}
  h2
    color: yellow
</style>
-->
